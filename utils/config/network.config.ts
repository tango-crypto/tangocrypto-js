import * as ByronGenesis from './mainnet-byron-genesis.json';
import * as ShelleyGenesis from './mainnet-shelley-genesis.json';
import * as AlonzoGenesis from './mainnet-alonzo-genesis.json';
import * as Protocols from './mainnet-protocol.json'; // go to mainnet node (e.g. stake pool): cardano-cli query protocol-parameters --mainnet

import * as TestnetByronGenesis from './testnet-byron-genesis.json';
import * as TestnetShelleyGenesis from './testnet-shelley-genesis.json';
import * as TestnetAlonzoGenesis from './testnet-alonzo-genesis.json';
import * as TestnetProtocols from './testnet-protocol.json'; // go to testnet node w/ user cardano (cardano-multinet-1 or submit-api-testnet):  cardano-cli query protocol-parameters --testnet-magic 1097911063

export const Mainnet = {
  byron: ByronGenesis,
  shelley: ShelleyGenesis,
  alonzo: AlonzoGenesis,
  protocols: Protocols,
};

export const Testnet = {
  byron: TestnetByronGenesis,
  shelley: TestnetShelleyGenesis,
  alonzo: TestnetAlonzoGenesis,
  protocols: TestnetProtocols,
};
