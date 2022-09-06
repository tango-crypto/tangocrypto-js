import {
  Address,
  AssetName,
  Assets,
  BigNum,
  Bip32PrivateKey,
  Bip32PublicKey,
  Ed25519KeyHash,
  Ed25519Signature,
  EnterpriseAddress,
  GeneralTransactionMetadata,
  hash_transaction,
  Int,
  LinearFee,
  make_vkey_witness,
  MetadataList,
  MetadataMap,
  Mint,
  MintAssets,
  min_ada_required,
  min_fee,
  MultiAsset,
  NativeScript,
  NativeScripts,
  NetworkInfo,
  PrivateKey,
  PublicKey,
  ScriptAll,
  ScriptAny,
  ScriptHash,
  ScriptHashNamespace,
  ScriptNOfK,
  ScriptPubkey,
  StakeCredential,
  TimelockExpiry,
  TimelockStart,
  Transaction,
  TransactionBody,
  TransactionBuilder,
  TransactionHash,
  TransactionInput,
  AuxiliaryData,
  TransactionMetadatum,
  TransactionOutput,
  TransactionWitnessSet,
  Value,
  Vkeywitnesses,
  BaseAddress,
  TransactionUnspentOutput,
  TransactionInputs,
  TransactionOutputs,
  hash_auxiliary_data,
  ByronAddress,
  TransactionBuilderConfigBuilder,
} from '@emurgo/cardano-serialization-lib-nodejs';
import { generateMnemonic, mnemonicToEntropy } from 'bip39';
import { Asset } from './models/asset.model';
import { CoinSelection } from './models/coin-selection.model';
import { Mainnet } from './config/network.config';
import {
  JsonScript,
  ScriptTypeEnum,
  scriptTypes,
} from './models/json-script.model';
import { Script } from './models/script.model';
import { Bip32KeyPair } from './models/bip32-keypair.model';
import { createHmac } from 'crypto';
import { Payment } from './models/payment.model';
import { CoinSelectionChange } from './models/coin-selection-change.model';
import { MultisigTransaction } from './models/multisig-transaction';
import * as cbor from 'borc';

const phrasesLengthMap: { [key: number]: number } = {
  12: 128,
  15: 160,
  18: 192,
  21: 224,
  24: 256,
};

enum MetadateTypesEnum {
  Number = 'int',
  String = 'string',
  Bytes = 'bytes',
  List = 'list',
  Map = 'map',
}

export const CARDANO_PURPOSE = 1852;
export const CARDANO_COIN_TYPE = 1815;
export const CARDANO_EXTERNAL = 0; // for receive payments
export const CARDANO_CHANGE = 1; // for inner change on utxo
export const CARDANO_CHIMERIC = 2; // for stake address

export class Seed {
  static generateRecoveryPhrase(size = 15): string {
    const strength = phrasesLengthMap[size] || phrasesLengthMap[15];
    return generateMnemonic(strength).trim();
  }

  // missing entropy from Bip32PrivateKey

  // static getRecoveryPhrase(rootKey: string) {
  //   const key = Bip32PrivateKey.from_bech32(rootKey);
  //   return entropyToMnemonic(Buffer.from(key.to_raw_key().as_bytes()));
  // }

  static toMnemonicList(phrase: string): Array<string> {
    return phrase.trim().split(/\s+/g);
  }

  static deriveRootKey(phrase: string | string[]): Bip32PrivateKey {
    const mnemonic = Array.isArray(phrase) ? phrase.join(' ') : phrase;
    const entropy = mnemonicToEntropy(mnemonic);
    const rootKey = Bip32PrivateKey.from_bip39_entropy(
      Buffer.from(entropy, 'hex'),
      Buffer.from(''),
    );
    return rootKey;
  }

  static deriveAccountKey(key: Bip32PrivateKey, account = 0): Bip32PrivateKey {
    return key
      .derive(Seed.harden(CARDANO_PURPOSE)) // purpose
      .derive(Seed.harden(CARDANO_COIN_TYPE)) // coin type
      .derive(Seed.harden(account)); // account #0
  }

  static deriveKey(key: Bip32PrivateKey, path: string[]): Bip32PrivateKey {
    let result = key;
    path.forEach((p) => {
      result = result.derive(
        p.endsWith('H') || p.endsWith("'")
          ? Seed.harden(Number.parseInt(p.substr(0, p.length - 1)))
          : Number.parseInt(p),
      );
    });

    return result;
  }

  static deriveBaseAddress(
    phrase: string | string[],
    index: number,
    network = 'mainnet',
    account = 0,
  ): Address {
    const rootKey = Seed.deriveRootKey(phrase);
    const accountKey = Seed.deriveAccountKey(rootKey, account); // 1852H/1815H/0H

    const paymentPuKey = accountKey
      .derive(CARDANO_EXTERNAL) // 0
      .derive(index)
      .to_raw_key()
      .to_public();

    const stakePubKey = accountKey
      .derive(CARDANO_CHIMERIC)
      .derive(index)
      .to_raw_key()
      .to_public();

    const baseAddr = BaseAddress.new(
      network == 'testnet'
        ? NetworkInfo.testnet().network_id()
        : NetworkInfo.mainnet().network_id(),
      StakeCredential.from_keyhash(paymentPuKey.hash()),
      StakeCredential.from_keyhash(stakePubKey.hash()),
    ).to_address();
    // .to_bech32();;

    return baseAddr;
  }

  static getStakeCredential(addr: string): StakeCredential {
    const address = BaseAddress.from_address(Address.from_bech32(addr));
    return address.stake_cred();
  }

  static buildTransaction(
    coinSelection: CoinSelection,
    ttl: number,
    opts: { [key: string]: any } = {
      changeAddress: '',
      fee: 0,
      metadata: null as any,
      startSlot: 0,
      config: Mainnet,
    },
  ): TransactionBody {
    const config = opts.config || Mainnet;
    const metadata = opts.metadata;
    const startSlot = opts.startSlot || 0;
    let tbConfig = TransactionBuilderConfigBuilder.new()
      // all of these are taken from the mainnet genesis settings
      // linear fee parameters (a*size + b)
      .fee_algo(LinearFee.new(Seed.toBigNum(config.protocols.txFeePerByte), Seed.toBigNum(config.protocols.txFeeFixed)))
      //min-ada-value
      .coins_per_utxo_word(Seed.toBigNum(config.protocols.utxoCostPerWord))
      // pool deposit
      .pool_deposit(Seed.toBigNum(config.protocols.stakePoolDeposit))
      // key deposit
      .key_deposit(Seed.toBigNum(config.protocols.stakeAddressDeposit))
      // max output value size
      .max_value_size(config.protocols.maxValueSize)
      // max tx size
      .max_tx_size(config.protocols.maxTxSize)
      .build();

    const txBuilder = TransactionBuilder.new(tbConfig);

    // add tx inputs
    coinSelection.inputs.forEach((input) => {
      const address = Address.from_bech32(input.address);
      const txInput = TransactionInput.new(
        TransactionHash.from_bytes(Buffer.from(input.id, 'hex')),
        input.index,
      );
      const amount = Value.new(
        BigNum.from_str(input.amount.quantity.toString()),
      );
      txBuilder.add_input(address, txInput, amount);
    });

    // add tx outputs
    coinSelection.outputs.forEach((output) => {
      const address = Address.from_bech32(output.address);
      const amount = Value.new(
        BigNum.from_str(output.amount.quantity.toString()),
      );

      // add tx assets
      if (output.assets && output.assets.length > 0) {
        const multiAsset = Seed.buildMultiAssets(output.assets);
        amount.set_multiasset(multiAsset);
      }

      const txOutput = TransactionOutput.new(address, amount);
      txBuilder.add_output(txOutput);
    });

    // add tx change
    coinSelection.change.forEach((change) => {
      const address = Address.from_bech32(change.address);
      const amount = Value.new(
        BigNum.from_str(change.amount.quantity.toString()),
      );

      // add tx assets
      if (change.assets && change.assets.length > 0) {
        const multiAsset = Seed.buildMultiAssets(change.assets);
        amount.set_multiasset(multiAsset);
      }

      const txOutput = TransactionOutput.new(address, amount);
      txBuilder.add_output(txOutput);
    });

    // add tx metadata
    if (metadata) {
      txBuilder.set_auxiliary_data(metadata);
    }

    // set tx validity start interval
    txBuilder.set_validity_start_interval(startSlot);

    // set tx ttl
    txBuilder.set_ttl(ttl);

    // calculate fee
    if (opts.changeAddress) {
      // don't take the implicit fee
      const address = Address.from_bech32(opts.changeAddress);
      txBuilder.add_change_if_needed(address);
    } else {
      const fee =
        opts.fee ||
        coinSelection.inputs.reduce((acc, c) => c.amount.quantity + acc, 0) +
        (coinSelection.withdrawals?.reduce(
          (acc, c) => c.amount.quantity + acc,
          0,
        ) || 0) -
        coinSelection.outputs.reduce((acc, c) => c.amount.quantity + acc, 0) -
        coinSelection.change.reduce((acc, c) => c.amount.quantity + acc, 0) -
        (coinSelection.deposits?.reduce((acc, c) => c.quantity + acc, 0) ||
          0);
      txBuilder.set_fee(BigNum.from_str(fee.toString()));
    }
    const txBody = txBuilder.build();
    return txBody;
  }

  static buildTransactionWithToken(
    coinSelection: CoinSelection,
    ttl: number,
    tokens: Asset[],
    scripts: NativeScript[],
    signingKeys: PrivateKey[],
    opts: { [key: string]: any } = {
      changeAddress: '',
      data: null as any,
      startSlot: 0,
      config: Mainnet,
    },
  ): TransactionBody {
    let metadata = opts.data ? Seed.buildTransactionMetadata(opts.data) : null;
    opts.config = opts.config || Mainnet;
    let buildOpts = Object.assign({}, { metadata: metadata, ...opts });

    // create mint token data
    const mint = Seed.buildTransactionMint(tokens);

    // set mint into tx
    let txBody = Seed.buildTransaction(coinSelection, ttl, buildOpts);
    txBody.set_mint(mint);

    // tx field fee
    const fieldFee = parseInt(txBody.fee().to_str());

    // sign to calculate the real tx fee;
    const tx = Seed.sign(txBody, signingKeys, metadata, scripts);

    // NOTE: new fee should be equal to txFee after changed since we're only rearranging the tx bytes
    // the marginFee value between the change utxo and the fee field;
    const txFee = parseInt(Seed.getTransactionFee(tx, opts.config).to_str());
    const marginFee = txFee - fieldFee; // if < 0 the current fee is enough, so we won't burn the dust!

    // get the change UTXO from where adjust the quantity
    const index =
      marginFee <= 0
        ? 0
        : coinSelection.change.findIndex((c) => {
          const minAda = Seed.getMinUtxoValueWithAssets(
            c.assets,
            opts.config,
            'hex',
          );
          return c.amount.quantity - marginFee >= minAda;
        });

    if (index < 0) {
      throw new Error('Not enough money for minting :(');
    }
    const quantity = coinSelection.change[index].amount.quantity;
    coinSelection.change[index].amount.quantity = quantity - marginFee;

    // after signing the metadata is cleaned so we need to create it again
    metadata = opts.data ? Seed.buildTransactionMetadata(opts.data) : null;
    buildOpts = Object.assign({}, { metadata: metadata, ...opts });

    txBody = Seed.buildTransaction(coinSelection, ttl, buildOpts);
    txBody.set_mint(mint);

    return txBody;
  }

  static buildTransactionMultisigRaw(
    utxos: TransactionUnspentOutput[],
    outputs: Payment[],
    change: CoinSelectionChange[],
    ttl: number,
    opts: { [key: string]: any } = {
      changeAddress: '',
      fee: 0,
      metadata: null as any,
      startSlot: 0,
      config: Mainnet,
    },
  ): TransactionBody {
    const config = opts.config || Mainnet;
    const metadata = opts.metadata;
    const startSlot = opts.startSlot || 0;
    let tbConfig = TransactionBuilderConfigBuilder.new()
      // all of these are taken from the mainnet genesis settings
      // linear fee parameters (a*size + b)
      .fee_algo(LinearFee.new(Seed.toBigNum(config.protocols.txFeePerByte), Seed.toBigNum(config.protocols.txFeeFixed)))
      //min-ada-value
      .coins_per_utxo_word(Seed.toBigNum(config.protocols.utxoCostPerWord))
      // pool deposit
      .pool_deposit(Seed.toBigNum(config.protocols.stakePoolDeposit))
      // key deposit
      .key_deposit(Seed.toBigNum(config.protocols.stakeAddressDeposit))
      // max output value size
      .max_value_size(config.protocols.maxValueSize)
      // max tx size
      .max_tx_size(config.protocols.maxTxSize)
      .build();

    const txBuilder = TransactionBuilder.new(tbConfig);

    // add tx inputs
    utxos.forEach((utxo) => {
      const input = utxo.input();
      const output = utxo.output();
      const address = output.address();
      const amount = output.amount();
      txBuilder.add_input(address, input, amount);
    });

    // add tx outputs
    outputs.forEach((output) => {
      const address = Address.from_bech32(output.address);
      const amount = Value.new(
        BigNum.from_str(output.amount.quantity.toString()),
      );

      // add tx assets
      if (output.assets && output.assets.length > 0) {
        const multiAsset = Seed.buildMultiAssets(output.assets);
        amount.set_multiasset(multiAsset);
      }

      const txOutput = TransactionOutput.new(address, amount);
      txBuilder.add_output(txOutput);
    });

    // add tx change
    change.forEach((change) => {
      const address = Address.from_bech32(change.address);
      const amount = Value.new(
        BigNum.from_str(change.amount.quantity.toString()),
      );

      // add tx assets
      if (change.assets && change.assets.length > 0) {
        const multiAsset = Seed.buildMultiAssets(change.assets);
        amount.set_multiasset(multiAsset);
      }

      const txOutput = TransactionOutput.new(address, amount);
      txBuilder.add_output(txOutput);
    });

    // add tx metadata
    if (metadata) {
      txBuilder.set_auxiliary_data(metadata);
    }

    // set tx validity start interval
    txBuilder.set_validity_start_interval(startSlot);

    // set tx ttl
    txBuilder.set_ttl(ttl);

    // calculate fee
    if (opts.changeAddress) {
      // don't take the implicit fee
      const address = Address.from_bech32(opts.changeAddress);
      txBuilder.add_change_if_needed(address);
    } else {
      const fee = opts.fee
      txBuilder.set_fee(BigNum.from_str(fee.toString()));
    }
    const txBody = txBuilder.build();
    return txBody;
  }

  // static buildTransactionMultisigWithTokenRaw(
  //   utxos: TransactionUnspentOutput[],
  //   outputs: Payment[],
  //   change: CoinSelectionChange[],
  //   ttl: number,
  //   tokens: Asset[],
  //   scripts: NativeScript[],
  //   signingKeys: PrivateKey[],
  //   numberOfWitnesses: number,
  //   opts: { [key: string]: any } = {
  //     changeAddress: '',
  //     data: null as any,
  //     startSlot: 0,
  //     config: Mainnet,
  //   },
  //   encoding: BufferEncoding = 'hex'
  // ): MultisigTransaction {
  //   const config = opts.config || Mainnet;
  //   let metadata = opts.data ? Seed.buildTransactionMetadata(opts.data) : null;

  //   const startSlot = opts.startSlot || 0;
  //   // const fee = parseInt(config.protocols.maxTxSize * config.protocols.txFeePerByte + config.protocols.txFeeFixed); // 16384 * 44 + 155381 = 876277
  //   const selectionfee = utxos.reduce((acc, c) => parseInt(c.output().amount().coin().to_str()) + acc, 0)
  //     - outputs.reduce((acc, c) => c.amount.quantity + acc, 0)
  //     - change.reduce((acc, c) => c.amount.quantity + acc, 0);

  //   // tx inputs
  //   const inputs = utxos.map(u => u.input());

  //   // tx outputs
  //   const outs = outputs.map(output => {
  //     let address = Address.from_bech32(output.address);
  //     let amount = Value.new(
  //       BigNum.from_str(output.amount.quantity.toString())
  //     );

  //     // add tx assets
  //     if (output.assets && output.assets.length > 0) {
  //       let multiAsset = Seed.buildMultiAssets(output.assets, encoding);
  //       amount.set_multiasset(multiAsset);
  //     }

  //     return TransactionOutput.new(
  //       address,
  //       amount
  //     );
  //   });

  //   // change
  //   if (change && change.length > 0) {
  //     outs.push(...change.map(change => {
  //       let address = Address.from_bech32(change.address);
  //       let amount = Value.new(
  //         BigNum.from_str(change.amount.quantity.toString())
  //       );

  //       // add tx assets
  //       if (change.assets && change.assets.length > 0) {
  //         let multiAsset = Seed.buildMultiAssets(change.assets, encoding);
  //         amount.set_multiasset(multiAsset);
  //       }

  //       return TransactionOutput.new(
  //         address,
  //         amount
  //       );
  //     }));
  //   }

  //   const txInputs = TransactionInputs.new();
  //   inputs.forEach(txin => txInputs.add(txin));
  //   let txOutputs = TransactionOutputs.new();
  //   outs.forEach(txout => txOutputs.add(txout));
  //   const txBody = TransactionBody.new(txInputs, txOutputs, BigNum.from_str(selectionfee.toString()), ttl);

  //   // add tx metadata
  //   if (metadata) {
  //     const dataHash = hash_auxiliary_data(metadata);
  //     txBody.set_auxiliary_data_hash(dataHash)
  //   }

  //   if (tokens) {
  //     // create mint token data
  //     const mint = Seed.buildTransactionMint(tokens, encoding);
  //     txBody.set_mint(mint);
  //   }

  //   // set tx validity start interval
  //   txBody.set_validity_start_interval(startSlot);
  //   return new MultisigTransaction(utxos, outputs, change, txBody, scripts, signingKeys, numberOfWitnesses, config, encoding, metadata, tokens);
  // }

  static buildTransactionMultisig(coinSelection: CoinSelection, ttl: number, scripts: NativeScript[], tokens: Asset[] = null, signingKeys: PrivateKey[] = null, opts: { [key: string]: any } = { changeAddress: "", data: null, startSlot: 0, config: Mainnet }, encoding: BufferEncoding = 'hex'): MultisigTransaction {
    const config = opts.config || Mainnet;
    let metadata = opts.data ? Seed.buildTransactionMetadata(opts.data) : null;
    const startSlot = opts.startSlot || 0;
    const selectionfee = parseInt(config.protocols.maxTxSize * config.protocols.txFeePerByte + config.protocols.txFeeFixed); // 16384 * 44 + 155381 = 876277
    const currentfee = coinSelection.inputs.reduce((acc, c) => c.amount.quantity + acc, 0)
      + (coinSelection.withdrawals?.reduce((acc, c) => c.amount.quantity + acc, 0) || 0)
      - coinSelection.outputs.reduce((acc, c) => c.amount.quantity + acc, 0)
      - coinSelection.change.reduce((acc, c) => c.amount.quantity + acc, 0)
      - (coinSelection.deposits?.reduce((acc, c) => c.quantity + acc, 0) || 0);

    // add witnesses Ed25519KeyHash from input addresses
    const vkeys: { [key: string]: number } = {};

    // add tx inputs
    const inputs = coinSelection.inputs.map((input, i) => {
      // check if input is vkeywitness
      const addr = Seed.getAddress(input.address);
      const baseAddr = BaseAddress.from_address(addr) || EnterpriseAddress.from_address(addr);
      try {
        const paymentCred = baseAddr.payment_cred();
        const inputHash = paymentCred.to_keyhash();
        if (inputHash) {
          const key = inputHash.to_bech32('vkey_');
          if (!vkeys[key]) {
            vkeys[key] = 1;
          }
        }
      } catch (error) {
        console.log('Error:', error.message);
      }

      return TransactionInput.new(
        TransactionHash.from_bytes(Buffer.from(input.id, 'hex')),
        input.index
      );
    });

    // add tx outputs
    let outputs = coinSelection.outputs.map(output => {
      let address = Seed.getAddress(output.address);
      let amount = Value.new(
        Seed.toBigNum(output.amount.quantity)
      );

      // add tx assets
      if (output.assets && output.assets.length > 0) {
        let multiAsset = Seed.buildMultiAssets(output.assets, encoding);
        amount.set_multiasset(multiAsset);
      }

      return TransactionOutput.new(
        address,
        amount
      );
    });

    // adjust changes to match maximum fee
    if (coinSelection.change && coinSelection.change.length > 0) {
      const feeDiff = selectionfee - currentfee;
      const feeDiffPerChange = Math.abs(Math.ceil(feeDiff / coinSelection.change.length));
      for (let i = 0; i < coinSelection.change.length; i++) {
        const change = coinSelection.change[i];
        change.amount.quantity = feeDiff > 0 ? change.amount.quantity - feeDiffPerChange : change.amount.quantity + feeDiffPerChange;

        let address = Seed.getAddress(change.address);
        let amount = Value.new(
          Seed.toBigNum(change.amount.quantity)
        );

        // add tx assets
        if (change.assets && change.assets.length > 0) {
          let multiAsset = Seed.buildMultiAssets(change.assets, encoding);
          amount.set_multiasset(multiAsset);
        }

        const out = TransactionOutput.new(
          address,
          amount
        );

        outputs.push(out);
      }
    }

    const txInputs = TransactionInputs.new();
    inputs.forEach(txin => txInputs.add(txin));
    let txOutputs = TransactionOutputs.new();
    outputs.forEach(txout => txOutputs.add(txout));
    const txBody = TransactionBody.new(txInputs, txOutputs, Seed.toBigNum(selectionfee), ttl);

    // add tx metadata
    if (metadata) {
      const dataHash = hash_auxiliary_data(metadata);
      txBody.set_auxiliary_data_hash(dataHash)
    }

    if (tokens) {
      // create mint token data
      const mint = Seed.buildTransactionMint(tokens, encoding);
      txBody.set_mint(mint);
    }

    // set tx validity start interval
    txBody.set_validity_start_interval(startSlot);

    // add inputs witnesses
    return MultisigTransaction.new(coinSelection, txBody, scripts, signingKeys, vkeys, config, encoding, metadata, tokens);
  }

  static rebuildTransaction(partialTx: Transaction, witnessSet: TransactionWitnessSet): Transaction {
    const txBody = partialTx.body();
    const outputScriptHash = txBody.outputs().get(0).amount().multiasset().keys().get(0);
    const outputAsset = txBody.outputs().get(0).amount().multiasset().get(outputScriptHash);
    const scriptHash = txBody.multiassets().keys().get(0);
    const mintAssets = txBody.multiassets().get(scriptHash);
    console.log('Output Assets name:', Buffer.from(outputAsset.keys().get(0).name()).toString('utf8'));
    console.log('Mint Assets name:', Buffer.from(mintAssets.keys().get(0).name()).toString('utf8'));
    const data = partialTx.auxiliary_data();
    const witnesses = partialTx.witness_set();
    const vkeyWitnesses = Vkeywitnesses.new();
    const keys = witnessSet.vkeys();
    for (let i = 0; i < keys.len(); i++) {
      const key = keys.get(i);
      vkeyWitnesses.add(key);
    }
    const nativeScripts = witnesses.native_scripts();
    const currentkeys = witnesses.vkeys();
    for (let i = 0; i < currentkeys.len(); i++) {
      const key = currentkeys.get(i);
      vkeyWitnesses.add(key);
    }
    witnesses.set_vkeys(vkeyWitnesses);
    witnesses.set_native_scripts(nativeScripts);

    const tx = Transaction.new(txBody, witnesses, data);
    return tx;
  }

  static buildMultiAssets(
    assets: Asset[],
    encoding: BufferEncoding = 'hex',
  ): MultiAsset {
    const multiAsset = MultiAsset.new();
    const groups = assets.reduce(
      (dict: { [key: string]: Asset[] }, asset: Asset) => {
        (dict[asset.policy_id] = dict[asset.policy_id] || []).push(asset);
        return dict;
      },
      {},
    );
    for (const policy_id in groups) {
      const scriptHash = Seed.getScriptHashFromPolicy(policy_id);
      const asset = Assets.new();
      const assetGroups = groups[policy_id].reduce(
        (dict: { [key: string]: number }, asset: Asset) => {
          dict[asset.asset_name] =
            (dict[asset.asset_name] || 0) + +asset.quantity;
          return dict;
        },
        {},
      );
      for (const asset_name in assetGroups) {
        const quantity = assetGroups[asset_name];
        const assetName = AssetName.new(Buffer.from(asset_name, encoding));
        asset.insert(assetName, BigNum.from_str(quantity.toString()));
      }
      multiAsset.insert(scriptHash, asset);
    }
    return multiAsset;
  }

  static buildTransactionMint(
    assets: Asset[],
    encoding: BufferEncoding = 'utf8',
  ): Mint {
    const mint = Mint.new();
    const groups = assets.reduce(
      (dict: { [key: string]: Asset[] }, asset: Asset) => {
        (dict[asset.policy_id] = dict[asset.policy_id] || []).push(asset);
        return dict;
      },
      {},
    );
    for (const policy_id in groups) {
      const scriptHash = Seed.getScriptHashFromPolicy(policy_id);
      const mintAssets = MintAssets.new();
      const assetGroups = groups[policy_id].reduce(
        (dict: { [key: string]: number }, asset: Asset) => {
          dict[asset.asset_name] =
            (dict[asset.asset_name] || 0) + +asset.quantity;
          return dict;
        },
        {},
      );
      for (const asset_name in assetGroups) {
        const quantity = assetGroups[asset_name];
        const assetName = AssetName.new(Buffer.from(asset_name, encoding));
        mintAssets.insert(assetName, Int.new_i32(quantity));
      }
      mint.insert(scriptHash, mintAssets);
    }
    return mint;
  }

  static getTransactionFee(tx: Transaction, config = Mainnet) {
    return min_fee(
      tx,
      LinearFee.new(
        BigNum.from_str(config.protocols.txFeePerByte.toString()),
        BigNum.from_str(config.protocols.txFeeFixed.toString()),
      ),
    );
  }

  static sign(
    txBody: TransactionBody,
    privateKeys: PrivateKey[],
    transactionMetadata?: AuxiliaryData,
    scripts?: NativeScript[],
  ): Transaction {
    const txHash = hash_transaction(txBody);
    const witnesses = TransactionWitnessSet.new();
    const vkeyWitnesses = Vkeywitnesses.new();
    privateKeys.forEach((prvKey) => {
      // add keyhash witnesses
      const vkeyWitness = make_vkey_witness(txHash, prvKey);
      vkeyWitnesses.add(vkeyWitness);
    });
    witnesses.set_vkeys(vkeyWitnesses);
    if (scripts) {
      const nativeScripts = NativeScripts.new();
      scripts.forEach((s) => {
        nativeScripts.add(s);
      });
      witnesses.set_native_scripts(nativeScripts);
    }

    const transaction = Transaction.new(txBody, witnesses, transactionMetadata);

    return transaction;
  }

  static signMessage(key: PrivateKey, message: string): string {
    return key.sign(Buffer.from(message)).to_hex();
  }

  static verifyMessage(
    key: PublicKey,
    message: string,
    signed: string,
  ): boolean {
    return key.verify(Buffer.from(message), Ed25519Signature.from_hex(signed));
  }

  static getTxId(transaction: Transaction): string {
    const txBody = transaction.body();
    const txHash = hash_transaction(txBody);
    const txId = Buffer.from(txHash.to_bytes()).toString('hex');
    return txId;
  }

  static harden(num: number): number {
    return 0x80000000 + num;
  }

  static constructMetadata(data: any) {
    const metadata: any = {};

    if (Array.isArray(data)) {
      for (let i = 0; i < data.length; i++) {
        const value = data[i];
        metadata[i] = Seed.getMetadataObject(value);
      }
    } else {
      const keys = Object.keys(data);
      for (let i = 0; i < keys.length; i++) {
        const key = keys[i];
        if (this.isInteger(key)) {
          const index = parseInt(key);
          metadata[index] = Seed.getMetadataObject(data[key]);
        }
      }
    }
    return metadata;
  }

  static getMetadataObject(data: any) {
    const result: any = {};
    const type = typeof data;
    if (type == 'number') {
      result[MetadateTypesEnum.Number] = data;
    } else if (type == 'string' && Buffer.byteLength(data, 'utf-8') <= 64) {
      result[MetadateTypesEnum.String] = data;
    } else if (Buffer.isBuffer(data) && Buffer.byteLength(data, 'hex') <= 64) {
      result[MetadateTypesEnum.Bytes] = data.toString('hex');
    } else if (type == 'boolean') {
      result[MetadateTypesEnum.String] = data.toString();
    } else if (type == 'undefined') {
      result[MetadateTypesEnum.String] = 'undefined';
    } else if (Array.isArray(data)) {
      result[MetadateTypesEnum.List] = data.map((a) =>
        this.getMetadataObject(a),
      );
    } else if (type == 'object') {
      if (data) {
        result[MetadateTypesEnum.Map] = Object.keys(data).map((k) => {
          return {
            k: this.getMetadataObject(k),
            v: this.getMetadataObject(data[k]),
          };
        });
      } else {
        result[MetadateTypesEnum.String] = 'null';
      }
    }
    return result;
  }

  static reverseMetadata(data: any, type = 'object'): any {
    if (!data) {
      return null;
    }
    const metadata: any = type == 'object' ? {} : [];
    const keys = Object.keys(data);
    for (let i = 0; i < keys.length; i++) {
      const key = keys[i];
      const index = parseInt(key);
      metadata[index] = Seed.reverseMetadataObject(data[key]);
    }
    return metadata;
  }

  static reverseMetadataObject(data: any): any {
    const result = [];
    const keys = Object.keys(data);
    for (let i = 0; i < keys.length; i++) {
      const key = keys[i];
      const value = data[key];
      if (key == 'string') {
        result.push(value);
      } else if (key == 'int') {
        result.push(new Number(value));
      } else if (key == 'bytes') {
        result.push(Buffer.from(value, 'hex'));
      } else if (key == 'list') {
        result.push(value.map((d: any) => Seed.reverseMetadataObject(d)));
      } else if (key == 'map') {
        const map = value.reduce((acc: any, obj: any) => {
          const k = Seed.reverseMetadataObject(obj['k']);
          const v = Seed.reverseMetadataObject(obj['v']);
          acc[k] = v;
          return acc;
        }, {});
        result.push(map);
      } else {
        result.push(null);
      }
    }
    return result.length == 1 ? result[0] : result;
  }

  static buildTransactionMetadata(data: any): AuxiliaryData {
    const metadata = Seed.constructMetadata(data);
    const generalMetatada = GeneralTransactionMetadata.new();
    for (const key in metadata) {
      const value = metadata[key];
      generalMetatada.insert(
        BigNum.from_str(key),
        Seed.getTransactionMetadatum(value),
      );
    }
    const auxiliaryData = AuxiliaryData.new();
    auxiliaryData.set_metadata(generalMetatada);
    return auxiliaryData;
  }

  static getTransactionMetadatum(value: any): TransactionMetadatum {
    if (value.hasOwnProperty(MetadateTypesEnum.Number)) {
      return TransactionMetadatum.new_int(
        Int.new_i32(value[MetadateTypesEnum.Number]),
      );
    }
    if (value.hasOwnProperty(MetadateTypesEnum.String)) {
      return TransactionMetadatum.new_text(value[MetadateTypesEnum.String]);
    }
    if (value.hasOwnProperty(MetadateTypesEnum.Bytes)) {
      return TransactionMetadatum.new_bytes(
        Buffer.from(value[MetadateTypesEnum.Bytes], 'hex'),
      );
    }
    if (value.hasOwnProperty(MetadateTypesEnum.List)) {
      const list = value[MetadateTypesEnum.List];
      const metalist = MetadataList.new();
      for (let i = 0; i < list.length; i++) {
        metalist.add(Seed.getTransactionMetadatum(list[i]));
      }
      return TransactionMetadatum.new_list(metalist);
    }
    if (value.hasOwnProperty(MetadateTypesEnum.Map)) {
      const map = value[MetadateTypesEnum.Map];
      const metamap = MetadataMap.new();
      for (let i = 0; i < map.length; i++) {
        const { k, v } = map[i];
        metamap.insert(
          Seed.getTransactionMetadatum(k),
          Seed.getTransactionMetadatum(v),
        );
      }
      return TransactionMetadatum.new_map(metamap);
    }
  }

  static generateKeyPair(): Bip32KeyPair {
    const prvKey = Bip32PrivateKey.generate_ed25519_bip32();
    const pubKey = prvKey.to_public();
    const pair: Bip32KeyPair = {
      privateKey: prvKey,
      publicKey: pubKey,
    };

    return pair;
  }

  static generateBip32PrivateKey(): Bip32PrivateKey {
    return Bip32PrivateKey.generate_ed25519_bip32();
  }

  // enterprise address without staking ability, for use by exchanges/etc
  static getEnterpriseAddress(
    pubKey: Bip32PublicKey,
    network = 'mainnet',
  ): Address {
    const networkId =
      network == 'mainnet'
        ? NetworkInfo.mainnet().network_id()
        : NetworkInfo.testnet().network_id();
    return EnterpriseAddress.new(
      networkId,
      StakeCredential.from_keyhash(pubKey.to_raw_key().hash()),
    ).to_address();
  }

  static getKeyHash(key: Bip32PublicKey): Ed25519KeyHash {
    return key.to_raw_key().hash();
  }

  static buildSingleIssuerScript(keyHash: Ed25519KeyHash): NativeScript {
    const scriptPubKey = ScriptPubkey.new(keyHash);
    return NativeScript.new_script_pubkey(scriptPubKey);
  }

  static buildMultiIssuerAllScript(scripts: NativeScript[]): NativeScript {
    const nativeScripts = this.buildNativeScripts(scripts);
    const scriptAll = ScriptAll.new(nativeScripts);
    return NativeScript.new_script_all(scriptAll);
  }

  static buildMultiIssuerAnyScript(scripts: NativeScript[]): NativeScript {
    const nativeScripts = this.buildNativeScripts(scripts);
    const scriptAny = ScriptAny.new(nativeScripts);
    return NativeScript.new_script_any(scriptAny);
  }

  static buildMultiIssuerAtLeastScript(
    n: number,
    scripts: NativeScript[],
  ): NativeScript {
    const nativeScripts = this.buildNativeScripts(scripts);
    const scriptAtLeast = ScriptNOfK.new(n, nativeScripts);
    return NativeScript.new_script_n_of_k(scriptAtLeast);
  }

  // you need to set validity range on transcation builder to check on a deterministic way
  static buildAfterScript(slot: number): NativeScript {
    const scriptAfter = TimelockStart.new(slot);
    return NativeScript.new_timelock_start(scriptAfter);
  }

  // you need to set validity range on transcation builder to check on a deterministic way
  static buildBeforeScript(slot: number): NativeScript {
    const scriptBefore = TimelockExpiry.new(slot);
    return NativeScript.new_timelock_expiry(scriptBefore);
  }

  private static buildNativeScripts(scripts: NativeScript[]): NativeScripts {
    const nativeScripts = NativeScripts.new();
    scripts.forEach((script) => {
      nativeScripts.add(script);
    });
    return nativeScripts;
  }

  static getScriptHash(script: NativeScript): ScriptHash {
    let keyHash = script.hash();
    let scriptHash = ScriptHash.from_bytes(keyHash.to_bytes());
    return scriptHash;
  }

  static getScriptHashFromPolicy(policyId: string): ScriptHash {
    return ScriptHash.from_bytes(Buffer.from(policyId, 'hex'));
  }

  static getMinUtxoValueWithAssets(
    tokenAssets: Asset[],
    config: any = Mainnet,
    encoding: BufferEncoding = 'utf8',
  ): number {
    let assets = Value.new(Seed.toBigNum(1000000));
    let multiAsset = MultiAsset.new();
    const groups = tokenAssets.reduce((dict: { [key: string]: Asset[] }, asset: Asset) => {
      (dict[asset.policy_id] = dict[asset.policy_id] || []).push(asset);
      return dict;
    }, {});
    for (const policy_id in groups) {
      const scriptHash = Seed.getScriptHashFromPolicy(policy_id);
      let asset = Assets.new();
      groups[policy_id].forEach(a => {
        asset.insert(AssetName.new(Buffer.from(a.asset_name, encoding)), Seed.toBigNum(a.quantity));
      });
      multiAsset.insert(scriptHash, asset);
    }
    assets.set_multiasset(multiAsset);
    let min = min_ada_required(assets, false, Seed.toBigNum(config.protocols.utxoCostPerWord));
    return Number.parseInt(min.to_str());
  }

  static buildPolicyJsonScript(
    lock: boolean,
    lockTime: string | number | Date,
  ): JsonScript {
    if (lock) {
      return {
        type: ScriptTypeEnum.All,
        scripts: [
          {
            type: ScriptTypeEnum.Sig,
          },
          {
            type: ScriptTypeEnum.Before,
            lockTime: new Date(lockTime).getTime(),
          },
        ],
      };
    } else {
      return { type: ScriptTypeEnum.Sig };
    }
  }

  static buildPolicyScript(json: JsonScript, currentSlot?: number): Script {
    if (json.type === ScriptTypeEnum.Sig) {
      // Single Issuer
      let keyPair: Bip32KeyPair; // needed to get the signing keys when export (e.g toJSON)
      let keyHash: Ed25519KeyHash;
      if (!json.keyHash) {
        keyPair = Seed.generateKeyPair();
        keyHash = Seed.getKeyHash(keyPair.publicKey);
      } else {
        keyHash = Ed25519KeyHash.from_bytes(Buffer.from(json.keyHash, 'hex'));
      }
      return {
        root: Seed.buildSingleIssuerScript(keyHash),
        keyHash: Buffer.from(keyHash.to_bytes()).toString('hex'),
        keyPair: keyPair,
        scripts: [],
      };
    }
    if (json.type === ScriptTypeEnum.All) {
      // Multiple Issuer All
      const scripts = json.scripts.map((s) =>
        Seed.buildPolicyScript(s, currentSlot),
      );
      return {
        root: Seed.buildMultiIssuerAllScript(scripts.map((s) => s.root)),
        scripts: scripts,
      };
    }
    if (json.type === ScriptTypeEnum.Any) {
      // Multiple Issuer Any
      const scripts = json.scripts.map((s) =>
        Seed.buildPolicyScript(s, currentSlot),
      );
      return {
        root: Seed.buildMultiIssuerAnyScript(scripts.map((s) => s.root)),
        scripts: scripts,
      };
    }
    if (json.type === ScriptTypeEnum.AtLeast) {
      // Multiple Issuer At least
      const scripts = json.scripts.map((s) =>
        Seed.buildPolicyScript(s, currentSlot),
      );
      const n = json.require;
      return {
        root: Seed.buildMultiIssuerAtLeastScript(
          n,
          scripts.map((s) => s.root),
        ),
        scripts: scripts,
      };
    }
    if (json.type === ScriptTypeEnum.After) {
      // After
      let slot = 0;
      if (!json.slot) {
        slot = currentSlot; // after now
        const lockTime = json.lockTime;
        if (lockTime != 'now') {
          const now = Date.now();
          const datetime = new Date(lockTime).getTime();
          slot = currentSlot + Math.floor((datetime - now) / 1000);
        }
      } else {
        slot = json.slot;
      }
      return { root: Seed.buildAfterScript(slot), slot: slot, scripts: json.scripts ? json.scripts.map(s => Seed.buildPolicyScript(s, currentSlot)) : [] };
    }
    if (json.type === ScriptTypeEnum.Before) {
      // Before
      let slot = 0;
      if (!json.slot) {
        slot = currentSlot; // before now
        const lockTime = json.lockTime;
        if (lockTime != 'now') {
          const now = Date.now();
          const datetime = new Date(lockTime).getTime();
          slot = currentSlot + Math.floor((datetime - now) / 1000);
        }
      } else {
        slot = json.slot;
      }
      return { root: Seed.buildBeforeScript(slot), slot: slot, scripts: json.scripts ? json.scripts.map(s => Seed.buildPolicyScript(s, currentSlot)) : [] };
    }
  }

  static policyScriptToJson(script: Script): any {
    const result: any = {};
    result.type = scriptTypes[script.root.kind()];
    if (script.keyHash) {
      result.keyHash = script.keyHash;
    }
    if (result.type === 'atLeast') {
      // Multiple Issuer At least)
      result.require = script.root.as_script_n_of_k().n();
    }
    if (result.type === 'after' || result.type === 'before') {
      result.slot = script.slot;
    }
    if (script.scripts && script.scripts.length > 0) {
      result.scripts = script.scripts.map((s) => Seed.policyScriptToJson(s));
    }
    return result;
  }

  static getScriptAddress(script: Script, network = 'mainnet'): Address {
    let networkId = network == 'mainnet' ? NetworkInfo.mainnet().network_id() : NetworkInfo.testnet().network_id();
    const scriptHash = this.getScriptHash(script.root);
    const credential = StakeCredential.from_scripthash(scriptHash);
    return BaseAddress.new(networkId, credential, credential).to_address();
  }

  static getScriptKeys(script: Script): Bip32PrivateKey[] {
    const result: Bip32PrivateKey[] = [];
    if (script.keyPair) {
      // let prvKey = Bip32PrivateKey.from_bech32(script.signingKey);
      // let pubKey = prvKey.to_public();
      // result.push({ publicKey: pubKey, privateKey: prvKey});
      result.push(script.keyPair.privateKey);
    }
    script.scripts.forEach((s) => {
      result.push(...Seed.getScriptKeys(s));
    });
    return result;
  }

  static getPolicyId(script: Script): string {
    const scriptHash = Seed.getScriptHash(script.root);
    return Buffer.from(scriptHash.to_bytes()).toString('hex');
  }

  static findSlots(script: Script): { start?: number; end?: number } {
    const result = { start: null, end: null };
    const type = script.root.kind();
    if (type === 4) {
      //after
      result.start = script.slot;
    } else if (type === 5) {
      //before
      result.end = script.slot;
    } else {
      const slots = script.scripts.map((s) => Seed.findSlots(s));
      result.start = slots.reduce(
        (max, act) => (!act.start && !max ? max : Math.max(act.start, max)),
        result.start,
      );
      result.end = slots.reduce(
        (min, act) =>
          !act.end ? min : !min ? act.end : Math.min(act.end, min),
        result.end,
      );
    }
    return result;
  }

  static isValidSignature(token: string, signature: string, body: any) {
    const hmac = createHmac('sha256', token); // Create a HMAC SHA256 hash using the auth token
    hmac.update(JSON.stringify(body), 'utf8'); // Update the token hash with the request body using utf8
    const digest = hmac.digest('hex');
    return signature === digest; // If signature equals your computed hash, return true
  }

  static getAddress(address: string): Address {
    return ByronAddress.is_valid(address) ? ByronAddress.from_base58(address).to_address() : Address.from_bech32(address);
  }

  static getPrivateKey(key: string): PrivateKey {
    if (key.startsWith('xprv1')) {
      return Bip32PrivateKey.from_bech32(key).to_raw_key();
    } else {
      const unhex = Buffer.from(key, 'hex');
      const decode = cbor.decode(unhex);
      try {
        return PrivateKey.from_normal_bytes(decode);
      } catch (err) {
        return PrivateKey.from_extended_bytes(decode);
      }
    }
  }

  static findScriptExpireSlot(script: JsonScript): number {
    if (script.type == ScriptTypeEnum.Before) {
      return script.slot;
    } else if (script.scripts && script.scripts.length > 0) {
      const before = script.scripts.filter(s => s.type == ScriptTypeEnum.Before && !!s.slot).sort((a, b) => b.slot - a.slot)[0];
      return before?.slot;
    }
    return null;
  }

  private static isInteger(value: any) {
    return Number.isInteger(Number(value));
  }

  private static toBigNum(quantity: number): BigNum {
    return BigNum.from_str(quantity.toString());
  }
}
