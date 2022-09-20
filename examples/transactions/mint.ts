import { BuildTxRequest } from "../../src/models/transaction";
import { Tangocrypto, Network } from "../../src/clients";
import * as dotenv from "dotenv";

dotenv.config();
async function mint() {
    const client = new Tangocrypto({
        apiKey: process.env.API_KEY!,
        appId: process.env.APP_ID!,
        network: Network.CARDANO_TESTNET_STAGING,
        version: process.env.VERSION
    });

    const txClient = client.transaction();
    const addrClient = client.address();

    // get address utxos (take into account any pagination here)
    const inputs = (await addrClient.listAddressUtxos('addr_test1qpemm54tmynjhuyw0qhzdpnras29c3pc8gxvc4afpsa3uwglmrag6mlare663x64ugkkv8nqhqg3z6u78xa49fq6wmts55h5y9')).result.data;

    // build tx
    const request: BuildTxRequest = {
        "inputs": inputs.map(i => ({ 
            address: i.address, 
            index: i.index,
            hash: i.hash, 
            value: i.value, 
            assets: i.assets.map(a => ({ 
                policy_id: a.policy_id, 
                asset_name: a.asset_name, 
                quantity: a.quantity 
            })) 
        })), // use address inputs here as spending utxos
        "recipients": {
            "addr_test1qzy4e509u7jtztnn0p3v6rypup5w48t63pgkhtsup6anumqrejvpmpdfe7zt662gdx98f3d5a0phjrh6hvxyjhecpe3q422hpz": [
                {
                    "policy_id": "18ed282beda4bec13226c427d4744d2642ba2cef404470b62ae184d8",
                    "asset_name": "BuildTxTest#005",
                    "quantity": 1,
                    "metadata": {
                        "721": {
                            "18ed282beda4bec13226c427d4744d2642ba2cef404470b62ae184d8": {
                                "BuildTxTest#005": {
                                    "name": "BuildTxTest #005",
                                    "image": "ipfs://QmbFhLR5C6BmTW7apgDMVmGozLuEUZwoezcgHQeULT59M5",
                                    "description": "Little BuildTxTest description"
                                }
                            }
                        }
                    }
                }
            ]
        },
        "minting_script": {
            "type": "all",
            "scripts": [
                {
                    "type": "sig",
                    "keyHash": "1aabe8cdb1153e11c3363270fd11baef2ca758e56d9a0866e73f7dc5"
                },
                {
                    "type": "before",
                    "slot": 196536677
                }
            ]
        },
        "change_address": "addr_test1qpemm54tmynjhuyw0qhzdpnras29c3pc8gxvc4afpsa3uwglmrag6mlare663x64ugkkv8nqhqg3z6u78xa49fq6wmts55h5y9"
    }


    console.log('request:', JSON.stringify(request, null, 2));


    const response = await txClient.buildTransaction(request);
    const buildTx = response.result;


    // sign tx
    const keys = [
        'xprv1gpn7d2h38j5ukpvmuz4mmrlgaprx6pcp53987ff8lkuqk2ztd4p2fdfpap4ev98hg3uj8kd36wzva3av8r776ke50dhhkm2ktpca83tj46xlscy6d7qga23ql4nn7z2hl9a4r3gqgpt6n7glv57nwkf80ypl5j63', // your spending/input keys
        'xprv1zpetq5ux75u7gsryanjp7f4l39znck0x45myxrkwqh2qr8cxne9ndrt2g28kaqgc3s0er09haaxflwzljcgytmhklswtas42kd0ajsvz404dkvjje5j6wh3envwd25w728vzwzv46mlf9nzz0683ncju9y04jv8j' // minting script keys
    ];
    const signed = await txClient.signTransaction({ keys, tx: buildTx.tx });

    // submit tx
    const txId = (await txClient.submitTransaction({ tx: signed })).result.tx_id;
    return txId;
}

mint().then(txId => console.log('Tx id:', txId));