import * as chai from 'chai';
import * as chaiAsPromised from 'chai-as-promised';

chai.use(chaiAsPromised);
const expect = chai.expect;

import 'mocha';
import * as dotenv from "dotenv";
import { BuildTxRequest, Tangocrypto, Network } from '../index';
import { TransactionApi } from '../src/clients/transactions';

dotenv.config();
describe('Transactions API endpoints', function () {
    this.timeout(0);
    let api: TransactionApi;

    before('Initializing API ...', () => {

        api = new Tangocrypto({
            network: Network.CARDANO_TESTNET_STAGING,
            apiKey: process.env.API_KEY!,
            appId: process.env.APP_ID!,
            version: process.env.VERSION
        }).transaction();
    })

    it('should build a tx', async () => {
        // arrange
        const request: BuildTxRequest = {
            "inputs": [
                {
                    "address": "addr_test1qpemm54tmynjhuyw0qhzdpnras29c3pc8gxvc4afpsa3uwglmrag6mlare663x64ugkkv8nqhqg3z6u78xa49fq6wmts55h5y9",
                    "hash": "719f14091e80bebafae17e2fcb3b59c8055bbfd35d163e0b0e3a5b1429453044",
                    "index": 1,
                    "value": 1482726,
                    "assets": [
                        {
                            "policy_id": "ef3c47ccb75e6d77e4a4c018a0ec1b8d88c253fd72b4ec29f760756e",
                            "asset_name": "T #023",
                            "quantity": 1
                        },
                        {
                            "policy_id": "ef3c47ccb75e6d77e4a4c018a0ec1b8d88c253fd72b4ec29f760756e",
                            "asset_name": "TTTTTTTTTTTTT #000",
                            "quantity": 1
                        }
                    ]
                },
                {
                    "address": "addr_test1qpemm54tmynjhuyw0qhzdpnras29c3pc8gxvc4afpsa3uwglmrag6mlare663x64ugkkv8nqhqg3z6u78xa49fq6wmts55h5y9",
                    "hash": "719f14091e80bebafae17e2fcb3b59c8055bbfd35d163e0b0e3a5b1429453044",
                    "index": 0,
                    "value": 48183053,
                    "assets": []
                }
            ],
            "recipients": {
                "addr_test1qzy4e509u7jtztnn0p3v6rypup5w48t63pgkhtsup6anumqrejvpmpdfe7zt662gdx98f3d5a0phjrh6hvxyjhecpe3q422hpz": [
                    {
                        "policy_id": "18ed282beda4bec13226c427d4744d2642ba2cef404470b62ae184d8",
                        "asset_name": "BuildTxTest#001",
                        "quantity": 1,
                        "metadata": {
                            "721": {
                                "cdf7a949cca0d57a27f862d525e4d4c734c1d503cbc7f04c1ac2350e": {
                                    "BuildTxTest#001": {
                                        "name": "BuildTxTest #001",
                                        "image": "ipfs://QmbFhLR5C6BmTW7apgDMVmGozLuEUZwoezcgHQeULT59M5",
                                        "description": "Little BuildTxTest description"
                                    }
                                }
                            }
                        }
                    },
                    {
                        "policy_id": "18ed282beda4bec13226c427d4744d2642ba2cef404470b62ae184d8",
                        "asset_name": "BuildTxTest#003",
                        "quantity": 1,
                        "metadata": {
                            "721": {
                                "cdf7a949cca0d57a27f862d525e4d4c734c1d503cbc7f04c1ac2350e": {
                                    "BuildTxTest#003": {
                                        "name": "BuildTxTest #003",
                                        "image": "ipfs://QmbFhLR5C6BmTW7apgDMVmGozLuEUZwoezcgHQeULT59M5",
                                        "description": "Little BuildTxTest description"
                                    }
                                }
                            }
                        }
                    }
                ],
                "addr_test1qp9mj7vnenx4v99hw7ztfq03n7dmmujpgtlyfjhhel9w67nk72usllcew208n60ym94xcptfrgytuy5apwp565x28jgsg0ztq3": [
                    {
                        "policy_id": "18ed282beda4bec13226c427d4744d2642ba2cef404470b62ae184d8",
                        "asset_name": "BuildTxTest#003",
                        "quantity": 1,
                        "metadata": {
                            "721": {
                                "cdf7a949cca0d57a27f862d525e4d4c734c1d503cbc7f04c1ac2350e": {
                                    "BuildTxTest#002": {
                                        "name": "BuildTxTest #003",
                                        "image": "ipfs://QmbFhLR5C6BmTW7apgDMVmGozLuEUZwoezcgHQeULT59M5",
                                        "description": "Little BuildTxTest description 3"
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

        const buildTx = {
            tx_id: "2f657ee1a618f9c684f68834429c5ee9036b8e10144b9c1396460a65a80981d8",
            tx: "84a70082825820719f14091e80bebafae17e2fcb3b59c8055bbfd35d163e0b0e3a5b142945304401825820719f14091e80bebafae17e2fcb3b59c8055bbfd35d163e0b0e3a5b14294530440001858258390073bdd2abd9272bf08e782e268663ec145c44383a0ccc57a90c3b1e391fd8fa8d6ffd1e75a89b55e22d661e60b811116b9e39bb52a41a76d71a0290eb788258390073bdd2abd9272bf08e782e268663ec145c44383a0ccc57a90c3b1e391fd8fa8d6ffd1e75a89b55e22d661e60b811116b9e39bb52a41a76d7821a00169fe6a1581cef3c47ccb75e6d77e4a4c018a0ec1b8d88c253fd72b4ec29f760756ea24654202330323301525454545454545454545454545420233030300182583900895cd1e5e7a4b12e737862cd0c81e068ea9d7a88516bae1c0ebb3e6c03cc981d85a9cf84bd6948698a74c5b4ebc3790efabb0c495f380e62821a00172698a1581c18ed282beda4bec13226c427d4744d2642ba2cef404470b62ae184d8a24f4275696c6454785465737423303031014f4275696c645478546573742330303301825839004bb97993cccd5614b77784b481f19f9bbdf24142fe44caf7cfcaed7a76f2b90fff19729e79e9e4d96a6c05691a08be129d0b834d50ca3c91821a00150bd0a1581c18ed282beda4bec13226c427d4744d2642ba2cef404470b62ae184d8a14f4275696c6454785465737423303033018258390071a80da0d4a4bd672b82dda5d73fd902cc87ba258d80c22d6319548e98eea0fdc74e2cff6f4d6e6dd97364822f2bf9a265f270ca92d20615821a001e8480a1581c581180fd4d301e925c123e3f1fe78cee670369bf4cca4a9ff3e564d7a14a544553545f54414e474f03021a000394ad031a0bb6e965075820b7ad7c2629bc1df95d1ff05804f4373da36cbc1b21a734607ec1834e7ca97499080009a2581c18ed282beda4bec13226c427d4744d2642ba2cef404470b62ae184d8a24f4275696c6454785465737423303031014f4275696c645478546573742330303302581c581180fd4d301e925c123e3f1fe78cee670369bf4cca4a9ff3e564d7a14a544553545f54414e474f03a2008182582098205c493e7853dd7bc69458646abecd97e86c9441cc2a9034ae01d71561ae185840741403d14c947ee7652a72e0926eb8f7b5c9b2c79158aedead2dc1cd777903046337844c0032ed608c5679f9b8e6394cf2e697eed245475bade05cb02ce3c40601828201828200581c1aabe8cdb1153e11c3363270fd11baef2ca758e56d9a0866e73f7dc582051a0bb6e9658201828200581c8e1cabc60001e3dba8cbba922d804282f161caa93019dcf38d785d368200581c10e327f6e5aaf7647dbd0bac71c166238573e7046459d2158798d1cbf5a11902d1a178386364663761393439636361306435376132376638363264353235653464346337333463316435303363626337663034633161633233353065a36f4275696c6454785465737423303031a3646e616d65704275696c64547854657374202330303165696d6167657835697066733a2f2f516d6246684c52354336426d545737617067444d566d476f7a4c7545555a776f657a6367485165554c5435394d356b6465736372697074696f6e781e4c6974746c65204275696c64547854657374206465736372697074696f6e6f4275696c6454785465737423303033a3646e616d65704275696c64547854657374202330303365696d6167657835697066733a2f2f516d6246684c52354336426d545737617067444d566d476f7a4c7545555a776f657a6367485165554c5435394d356b6465736372697074696f6e781e4c6974746c65204275696c64547854657374206465736372697074696f6e6f4275696c6454785465737423303032a3646e616d65704275696c64547854657374202330303365696d6167657835697066733a2f2f516d6246684c52354336426d545737617067444d566d476f7a4c7545555a776f657a6367485165554c5435394d356b6465736372697074696f6e78204c6974746c65204275696c64547854657374206465736372697074696f6e2033"
          }

        // act
        const response = await api.buildTransaction(request);

        // assert
        expect(response.result).deep.equal(buildTx);
    })

    it('should sign a tx', async () => {
        // arrange
        const keys = [
            'xprv1gpn7d2h38j5ukpvmuz4mmrlgaprx6pcp53987ff8lkuqk2ztd4p2fdfpap4ev98hg3uj8kd36wzva3av8r776ke50dhhkm2ktpca83tj46xlscy6d7qga23ql4nn7z2hl9a4r3gqgpt6n7glv57nwkf80ypl5j63',
            'xprv1zpetq5ux75u7gsryanjp7f4l39znck0x45myxrkwqh2qr8cxne9ndrt2g28kaqgc3s0er09haaxflwzljcgytmhklswtas42kd0ajsvz404dkvjje5j6wh3envwd25w728vzwzv46mlf9nzz0683ncju9y04jv8j' // minting script   
        ];
        const cborTx = '84a70082825820719f14091e80bebafae17e2fcb3b59c8055bbfd35d163e0b0e3a5b142945304401825820719f14091e80bebafae17e2fcb3b59c8055bbfd35d163e0b0e3a5b14294530440001858258390073bdd2abd9272bf08e782e268663ec145c44383a0ccc57a90c3b1e391fd8fa8d6ffd1e75a89b55e22d661e60b811116b9e39bb52a41a76d71a0290eb788258390073bdd2abd9272bf08e782e268663ec145c44383a0ccc57a90c3b1e391fd8fa8d6ffd1e75a89b55e22d661e60b811116b9e39bb52a41a76d7821a00169fe6a1581cef3c47ccb75e6d77e4a4c018a0ec1b8d88c253fd72b4ec29f760756ea24654202330323301525454545454545454545454545420233030300182583900895cd1e5e7a4b12e737862cd0c81e068ea9d7a88516bae1c0ebb3e6c03cc981d85a9cf84bd6948698a74c5b4ebc3790efabb0c495f380e62821a00172698a1581c18ed282beda4bec13226c427d4744d2642ba2cef404470b62ae184d8a24f4275696c6454785465737423303031014f4275696c645478546573742330303301825839004bb97993cccd5614b77784b481f19f9bbdf24142fe44caf7cfcaed7a76f2b90fff19729e79e9e4d96a6c05691a08be129d0b834d50ca3c91821a00150bd0a1581c18ed282beda4bec13226c427d4744d2642ba2cef404470b62ae184d8a14f4275696c6454785465737423303033018258390071a80da0d4a4bd672b82dda5d73fd902cc87ba258d80c22d6319548e98eea0fdc74e2cff6f4d6e6dd97364822f2bf9a265f270ca92d20615821a001e8480a1581c581180fd4d301e925c123e3f1fe78cee670369bf4cca4a9ff3e564d7a14a544553545f54414e474f03021a000394ad031a0bb6e965075820b7ad7c2629bc1df95d1ff05804f4373da36cbc1b21a734607ec1834e7ca97499080009a2581c18ed282beda4bec13226c427d4744d2642ba2cef404470b62ae184d8a24f4275696c6454785465737423303031014f4275696c645478546573742330303302581c581180fd4d301e925c123e3f1fe78cee670369bf4cca4a9ff3e564d7a14a544553545f54414e474f03a2008182582098205c493e7853dd7bc69458646abecd97e86c9441cc2a9034ae01d71561ae185840741403d14c947ee7652a72e0926eb8f7b5c9b2c79158aedead2dc1cd777903046337844c0032ed608c5679f9b8e6394cf2e697eed245475bade05cb02ce3c40601828201828200581c1aabe8cdb1153e11c3363270fd11baef2ca758e56d9a0866e73f7dc582051a0bb6e9658201828200581c8e1cabc60001e3dba8cbba922d804282f161caa93019dcf38d785d368200581c10e327f6e5aaf7647dbd0bac71c166238573e7046459d2158798d1cbf5a11902d1a178386364663761393439636361306435376132376638363264353235653464346337333463316435303363626337663034633161633233353065a36f4275696c6454785465737423303031a3646e616d65704275696c64547854657374202330303165696d6167657835697066733a2f2f516d6246684c52354336426d545737617067444d566d476f7a4c7545555a776f657a6367485165554c5435394d356b6465736372697074696f6e781e4c6974746c65204275696c64547854657374206465736372697074696f6e6f4275696c6454785465737423303033a3646e616d65704275696c64547854657374202330303365696d6167657835697066733a2f2f516d6246684c52354336426d545737617067444d566d476f7a4c7545555a776f657a6367485165554c5435394d356b6465736372697074696f6e781e4c6974746c65204275696c64547854657374206465736372697074696f6e6f4275696c6454785465737423303032a3646e616d65704275696c64547854657374202330303365696d6167657835697066733a2f2f516d6246684c52354336426d545737617067444d566d476f7a4c7545555a776f657a6367485165554c5435394d356b6465736372697074696f6e78204c6974746c65204275696c64547854657374206465736372697074696f6e2033';

        const expected = '84a70082825820719f14091e80bebafae17e2fcb3b59c8055bbfd35d163e0b0e3a5b142945304401825820719f14091e80bebafae17e2fcb3b59c8055bbfd35d163e0b0e3a5b14294530440001858258390073bdd2abd9272bf08e782e268663ec145c44383a0ccc57a90c3b1e391fd8fa8d6ffd1e75a89b55e22d661e60b811116b9e39bb52a41a76d71a0290eb788258390073bdd2abd9272bf08e782e268663ec145c44383a0ccc57a90c3b1e391fd8fa8d6ffd1e75a89b55e22d661e60b811116b9e39bb52a41a76d7821a00169fe6a1581cef3c47ccb75e6d77e4a4c018a0ec1b8d88c253fd72b4ec29f760756ea24654202330323301525454545454545454545454545420233030300182583900895cd1e5e7a4b12e737862cd0c81e068ea9d7a88516bae1c0ebb3e6c03cc981d85a9cf84bd6948698a74c5b4ebc3790efabb0c495f380e62821a00172698a1581c18ed282beda4bec13226c427d4744d2642ba2cef404470b62ae184d8a24f4275696c6454785465737423303031014f4275696c645478546573742330303301825839004bb97993cccd5614b77784b481f19f9bbdf24142fe44caf7cfcaed7a76f2b90fff19729e79e9e4d96a6c05691a08be129d0b834d50ca3c91821a00150bd0a1581c18ed282beda4bec13226c427d4744d2642ba2cef404470b62ae184d8a14f4275696c6454785465737423303033018258390071a80da0d4a4bd672b82dda5d73fd902cc87ba258d80c22d6319548e98eea0fdc74e2cff6f4d6e6dd97364822f2bf9a265f270ca92d20615821a001e8480a1581c581180fd4d301e925c123e3f1fe78cee670369bf4cca4a9ff3e564d7a14a544553545f54414e474f03021a000394ad031a0bb6e965075820b7ad7c2629bc1df95d1ff05804f4373da36cbc1b21a734607ec1834e7ca97499080009a2581c18ed282beda4bec13226c427d4744d2642ba2cef404470b62ae184d8a24f4275696c6454785465737423303031014f4275696c645478546573742330303302581c581180fd4d301e925c123e3f1fe78cee670369bf4cca4a9ff3e564d7a14a544553545f54414e474f03a2008382582098205c493e7853dd7bc69458646abecd97e86c9441cc2a9034ae01d71561ae185840741403d14c947ee7652a72e0926eb8f7b5c9b2c79158aedead2dc1cd777903046337844c0032ed608c5679f9b8e6394cf2e697eed245475bade05cb02ce3c406825820e46fdc0ff42bad0b7107bd89ecdd937e0297f13e8d7e68ca5d82b52343110fcd584092a04376b41780a787f52ca793b889aee155cd971214c1ef55f852a314a718cc1cf0904f825c1a0abccfa47d9df89fe5eeeb28e2fc093bd73b9884b3ea186a06825820f0e93930a1ea13247e73b7a332dad3b3048de90ac1147f9c4d5adb61ba46402e5840dc46f23f2f7d85cf8c9b52e2e4fb66985dfea3d596ead5a3950befbbb1e6d849f80fbfe80bda9326fecc35fe0ab48e8644155786641e57ff3d79bc2511a9c00801828201828200581c1aabe8cdb1153e11c3363270fd11baef2ca758e56d9a0866e73f7dc582051a0bb6e9658201828200581c8e1cabc60001e3dba8cbba922d804282f161caa93019dcf38d785d368200581c10e327f6e5aaf7647dbd0bac71c166238573e7046459d2158798d1cbf5a11902d1a178386364663761393439636361306435376132376638363264353235653464346337333463316435303363626337663034633161633233353065a36f4275696c6454785465737423303031a3646e616d65704275696c64547854657374202330303165696d6167657835697066733a2f2f516d6246684c52354336426d545737617067444d566d476f7a4c7545555a776f657a6367485165554c5435394d356b6465736372697074696f6e781e4c6974746c65204275696c64547854657374206465736372697074696f6e6f4275696c6454785465737423303033a3646e616d65704275696c64547854657374202330303365696d6167657835697066733a2f2f516d6246684c52354336426d545737617067444d566d476f7a4c7545555a776f657a6367485165554c5435394d356b6465736372697074696f6e781e4c6974746c65204275696c64547854657374206465736372697074696f6e6f4275696c6454785465737423303032a3646e616d65704275696c64547854657374202330303365696d6167657835697066733a2f2f516d6246684c52354336426d545737617067444d566d476f7a4c7545555a776f657a6367485165554c5435394d356b6465736372697074696f6e78204c6974746c65204275696c64547854657374206465736372697074696f6e2033';

        // act
        const signed = await api.signTransaction({ keys, tx: cborTx });

        // assert
        expect(signed).equal(expected);
    })

    it('should submit tx', async () => {
        // arrange
        const tx = '84a70082825820719f14091e80bebafae17e2fcb3b59c8055bbfd35d163e0b0e3a5b142945304401825820719f14091e80bebafae17e2fcb3b59c8055bbfd35d163e0b0e3a5b14294530440001858258390073bdd2abd9272bf08e782e268663ec145c44383a0ccc57a90c3b1e391fd8fa8d6ffd1e75a89b55e22d661e60b811116b9e39bb52a41a76d71a0290eb788258390073bdd2abd9272bf08e782e268663ec145c44383a0ccc57a90c3b1e391fd8fa8d6ffd1e75a89b55e22d661e60b811116b9e39bb52a41a76d7821a00169fe6a1581cef3c47ccb75e6d77e4a4c018a0ec1b8d88c253fd72b4ec29f760756ea24654202330323301525454545454545454545454545420233030300182583900895cd1e5e7a4b12e737862cd0c81e068ea9d7a88516bae1c0ebb3e6c03cc981d85a9cf84bd6948698a74c5b4ebc3790efabb0c495f380e62821a00172698a1581c18ed282beda4bec13226c427d4744d2642ba2cef404470b62ae184d8a24f4275696c6454785465737423303031014f4275696c645478546573742330303301825839004bb97993cccd5614b77784b481f19f9bbdf24142fe44caf7cfcaed7a76f2b90fff19729e79e9e4d96a6c05691a08be129d0b834d50ca3c91821a00150bd0a1581c18ed282beda4bec13226c427d4744d2642ba2cef404470b62ae184d8a14f4275696c6454785465737423303033018258390071a80da0d4a4bd672b82dda5d73fd902cc87ba258d80c22d6319548e98eea0fdc74e2cff6f4d6e6dd97364822f2bf9a265f270ca92d20615821a001e8480a1581c581180fd4d301e925c123e3f1fe78cee670369bf4cca4a9ff3e564d7a14a544553545f54414e474f03021a000394ad031a0bb6e965075820b7ad7c2629bc1df95d1ff05804f4373da36cbc1b21a734607ec1834e7ca97499080009a2581c18ed282beda4bec13226c427d4744d2642ba2cef404470b62ae184d8a24f4275696c6454785465737423303031014f4275696c645478546573742330303302581c581180fd4d301e925c123e3f1fe78cee670369bf4cca4a9ff3e564d7a14a544553545f54414e474f03a2008382582098205c493e7853dd7bc69458646abecd97e86c9441cc2a9034ae01d71561ae185840741403d14c947ee7652a72e0926eb8f7b5c9b2c79158aedead2dc1cd777903046337844c0032ed608c5679f9b8e6394cf2e697eed245475bade05cb02ce3c406825820e46fdc0ff42bad0b7107bd89ecdd937e0297f13e8d7e68ca5d82b52343110fcd584092a04376b41780a787f52ca793b889aee155cd971214c1ef55f852a314a718cc1cf0904f825c1a0abccfa47d9df89fe5eeeb28e2fc093bd73b9884b3ea186a06825820f0e93930a1ea13247e73b7a332dad3b3048de90ac1147f9c4d5adb61ba46402e5840dc46f23f2f7d85cf8c9b52e2e4fb66985dfea3d596ead5a3950befbbb1e6d849f80fbfe80bda9326fecc35fe0ab48e8644155786641e57ff3d79bc2511a9c00801828201828200581c1aabe8cdb1153e11c3363270fd11baef2ca758e56d9a0866e73f7dc582051a0bb6e9658201828200581c8e1cabc60001e3dba8cbba922d804282f161caa93019dcf38d785d368200581c10e327f6e5aaf7647dbd0bac71c166238573e7046459d2158798d1cbf5a11902d1a178386364663761393439636361306435376132376638363264353235653464346337333463316435303363626337663034633161633233353065a36f4275696c6454785465737423303031a3646e616d65704275696c64547854657374202330303165696d6167657835697066733a2f2f516d6246684c52354336426d545737617067444d566d476f7a4c7545555a776f657a6367485165554c5435394d356b6465736372697074696f6e781e4c6974746c65204275696c64547854657374206465736372697074696f6e6f4275696c6454785465737423303033a3646e616d65704275696c64547854657374202330303365696d6167657835697066733a2f2f516d6246684c52354336426d545737617067444d566d476f7a4c7545555a776f657a6367485165554c5435394d356b6465736372697074696f6e781e4c6974746c65204275696c64547854657374206465736372697074696f6e6f4275696c6454785465737423303032a3646e616d65704275696c64547854657374202330303365696d6167657835697066733a2f2f516d6246684c52354336426d545737617067444d566d476f7a4c7545555a776f657a6367485165554c5435394d356b6465736372697074696f6e78204c6974746c65204275696c64547854657374206465736372697074696f6e2033';

        const expectedTxId = '2f657ee1a618f9c684f68834429c5ee9036b8e10144b9c1396460a65a80981d8';

        // act
        const response = await api.submitTransaction({ tx });

        // assert
        expect(response.result.tx_id).equal(expectedTxId);
    })

    it('should get tx', async () => {
        // arrange
        const hash = 'a440d0f2c09e25f93aadea53dfe511c00b730eef4b6ed0be614f06d48c2fdaeb';
        const tx = {
            "hash": "a440d0f2c09e25f93aadea53dfe511c00b730eef4b6ed0be614f06d48c2fdaeb",
            "block_index": 1,
            "out_sum": 78280429,
            "fee": 216057,
            "deposit": 0,
            "size": 1378,
            "invalid_before": 0,
            "invalid_hereafter": 196536677,
            "valid_contract": true,
            "script_size": 0,
            "utxo_count": 4,
            "withdrawal_count": 0,
            "delegation_count": 0,
            "stake_cert_count": 0,
            "pool_update": false,
            "pool_retire": false,
            "block": {
                "hash": "5748e6e998c2b49248b971f0bb6208bb4681f0dddc46b19607762bad8a6f5b39",
                "epoch_no": 227,
                "slot_no": 68106176,
                "block_no": 3822826
            },
            "assets": [
                {
                    "policy_id": "18ed282beda4bec13226c427d4744d2642ba2cef404470b62ae184d8",
                    "asset_name": "BuildTxTest#001",
                    "fingerprint": "asset1ugyv8dshc5x9cclgamemq7z8dqvkure4knzfvl",
                    "quantity": 1,
                    "mint_or_burn_quantity": 1
                },
                {
                    "policy_id": "18ed282beda4bec13226c427d4744d2642ba2cef404470b62ae184d8",
                    "asset_name": "BuildTxTest#002",
                    "fingerprint": "asset1s3s6n7rs2y35txt09a02nnpd9f6lqcl6s5tral",
                    "quantity": 1,
                    "mint_or_burn_quantity": 1
                },
                {
                    "policy_id": "581180fd4d301e925c123e3f1fe78cee670369bf4cca4a9ff3e564d7",
                    "asset_name": "TEST_TANGO",
                    "fingerprint": "asset13nkuheamggvmq0a6msnvtdgruuxajll5v9xksc",
                    "quantity": 2,
                    "mint_or_burn_quantity": 2
                }
            ]
        }

        // act
        const response = await api.getTransaction(hash);

        // assert
        expect(response.result).deep.equal(tx);
    })

    it('should get tx metadata', async () => {
        // arrange
        const hash = 'f777bd82c752bcb924548fa4a6e30bcbc25424f611a4a63289ee03d00a951e7d';
        const metadata = [
            {
                "label": "721",
                "json": {
                    "cdf7a949cca0d57a27f862d525e4d4c734c1d503cbc7f04c1ac2350e": {
                        "BuildTxTest#001": {
                            "name": "BuildTxTest #001",
                            "image": "ipfs://QmbFhLR5C6BmTW7apgDMVmGozLuEUZwoezcgHQeULT59M5",
                            "description": "Little BuildTxTest description"
                        }
                    }
                }
            }
        ]

        // act
        const response = await api.getTransactionMetadata(hash);

        // assert
        expect(response.result.data).deep.equal(metadata);
    })

    it('should list tx utxos', async () => {
        // arrange
        const hash = '122128d2f72f77ab6bf8fb3f95b13f820b7c08a7ba2cab9c1d4ae5422f97d3fd';
        const utxos = {
            "hash": "122128d2f72f77ab6bf8fb3f95b13f820b7c08a7ba2cab9c1d4ae5422f97d3fd",
            "inputs": [
                {
                    "address": "addr_test1qzmnd26rem246tykw4f7attzr5f6qnf25kp3mdgzany4vegm47veu20yllnu8a0t26ppr6hunpxa03jyvmdhanpym9vq6eqmp0",
                    "hash": "a143357d16db17f2a9d35d0ea0e39806a855e8f06649d2982934aebda30bba84",
                    "index": 4,
                    "value": 2965452,
                    "smart_contract": false,
                    "assets": [
                        {
                            "policy_id": "648823ffdad1610b4162f4dbc87bd47f6f9cf45d772ddef661eff198",
                            "asset_name": "wUSDT",
                            "fingerprint": "asset1majzcngy2svamh5zns70xeetwkg2vx5nxg09nv",
                            "quantity": 899000
                        },
                        {
                            "policy_id": "406c221cad25b6832609bc24f649840763fae659cafa3472f26122ab",
                            "asset_name": "zv�\r�`���P����0�㺦�PL�",
                            "fingerprint": "asset109f4hv4sk8aaw2qeaspquet8hez8jqmczs5uaz",
                            "quantity": 7069067
                        },
                        {
                            "policy_id": "406c221cad25b6832609bc24f649840763fae659cafa3472f26122ab",
                            "asset_name": "�\"��,S^q?��lH��8P�GJ\t�'����s�=",
                            "fingerprint": "asset1y4292t9n698eu3eas2sl07c0a7636uc3n3qfvr",
                            "quantity": 785749
                        },
                        {
                            "policy_id": "406c221cad25b6832609bc24f649840763fae659cafa3472f26122ab",
                            "asset_name": "�!�͞h Vya�ٻ����A+Dy�cΑZ��",
                            "fingerprint": "asset1x2trcynescvqwutmdnta4qc9c2yrea4g3tj7nr",
                            "quantity": 3296181
                        },
                        {
                            "policy_id": "648823ffdad1610b4162f4dbc87bd47f6f9cf45d772ddef661eff198",
                            "asset_name": "wDOGE",
                            "fingerprint": "asset1v5g4zdz9s5ezkvdfd29yyetfpta8gx93ae6nqu",
                            "quantity": 5300000
                        },
                        {
                            "policy_id": "406c221cad25b6832609bc24f649840763fae659cafa3472f26122ab",
                            "asset_name": "��R\"}^z��H;&t'�[�b�)��^���Y�@2",
                            "fingerprint": "asset1jxfj2x02fnklr8lf0gc523epewafgkl9am2wrm",
                            "quantity": 3160119
                        },
                        {
                            "policy_id": "648823ffdad1610b4162f4dbc87bd47f6f9cf45d772ddef661eff198",
                            "asset_name": "wBTC",
                            "fingerprint": "asset173xsaag0t8aeemrujp2lg3t296xqn69ehynq4d",
                            "quantity": 10000
                        },
                        {
                            "policy_id": "648823ffdad1610b4162f4dbc87bd47f6f9cf45d772ddef661eff198",
                            "asset_name": "wDOT",
                            "fingerprint": "asset1r9t3dp2dvp2erfur645atkzq883dr25aaja66v",
                            "quantity": 38610
                        },
                        {
                            "policy_id": "406c221cad25b6832609bc24f649840763fae659cafa3472f26122ab",
                            "asset_name": "{�N����\t�ֳ1 ����7U�\t�\"!��#�",
                            "fingerprint": "asset1acensvu6258pdzqcxjwqh0d3v52kjgjc5tq58x",
                            "quantity": 7069067
                        },
                        {
                            "policy_id": "648823ffdad1610b4162f4dbc87bd47f6f9cf45d772ddef661eff198",
                            "asset_name": "wLUNA",
                            "fingerprint": "asset1v9wx950p65dde73kj6fs0lpd6pzc28crzv0zpe",
                            "quantity": 18000
                        },
                        {
                            "policy_id": "648823ffdad1610b4162f4dbc87bd47f6f9cf45d772ddef661eff198",
                            "asset_name": "wBNB",
                            "fingerprint": "asset1pssjpqkpm8y48x3q68sekrhl2kyxnwpgsn7xe4",
                            "quantity": 88
                        },
                        {
                            "policy_id": "648823ffdad1610b4162f4dbc87bd47f6f9cf45d772ddef661eff198",
                            "asset_name": "wETH",
                            "fingerprint": "asset1yuaxuqd8942yd366flvl0nju22exezfzsp052n",
                            "quantity": 260
                        },
                        {
                            "policy_id": "648823ffdad1610b4162f4dbc87bd47f6f9cf45d772ddef661eff198",
                            "asset_name": "wXRP",
                            "fingerprint": "asset1lurw6489320vegzs73e0tzljnd9jv5lfdqjn74",
                            "quantity": 1796120
                        },
                        {
                            "policy_id": "648823ffdad1610b4162f4dbc87bd47f6f9cf45d772ddef661eff198",
                            "asset_name": "wUSDC",
                            "fingerprint": "asset1n3weea8202dpev06tshdvhe9xd6f9jcqldpc2q",
                            "quantity": 889000
                        }
                    ]
                },
                {
                    "address": "addr_test1qzmnd26rem246tykw4f7attzr5f6qnf25kp3mdgzany4vegm47veu20yllnu8a0t26ppr6hunpxa03jyvmdhanpym9vq6eqmp0",
                    "hash": "a143357d16db17f2a9d35d0ea0e39806a855e8f06649d2982934aebda30bba84",
                    "index": 3,
                    "value": 459949535,
                    "smart_contract": false,
                    "assets": []
                },
                {
                    "address": "addr_test1wrhtrx98lc6dc2zk0uuv0hjjcrffq5fvllq9k7u6cajfvhq0rqywz",
                    "hash": "7a052450386f97a1f208144de3f8ca158f93ad526ddfb1da9cf9d39e5e3aa7ab",
                    "index": 1,
                    "value": 1689618,
                    "smart_contract": true,
                    "assets": [
                        {
                            "policy_id": "406c221cad25b6832609bc24f649840763fae659cafa3472f26122ab",
                            "asset_name": "F",
                            "fingerprint": "asset1r5mrxn5377473gus6jzq3n947j33flenl4qptm",
                            "quantity": 1
                        }
                    ]
                }
            ],
            "outputs": [
                {
                    "address": "addr_test1wpzjtlyp6v4qx6gzjm4zc7lsdufw597507y060qhk84vpjsjd625n",
                    "hash": "122128d2f72f77ab6bf8fb3f95b13f820b7c08a7ba2cab9c1d4ae5422f97d3fd",
                    "index": 2,
                    "value": 13000000,
                    "smart_contract": true,
                    "assets": [
                        {
                            "policy_id": "648823ffdad1610b4162f4dbc87bd47f6f9cf45d772ddef661eff198",
                            "asset_name": "wBNB",
                            "fingerprint": "asset1pssjpqkpm8y48x3q68sekrhl2kyxnwpgsn7xe4",
                            "quantity": 88
                        },
                        {
                            "policy_id": "406c221cad25b6832609bc24f649840763fae659cafa3472f26122ab",
                            "asset_name": "/��`�.k�����D\nE�A��E5���7�",
                            "fingerprint": "asset1s3txp9ah8vpswdn4d9afyefxzq69vfwqd0thgv",
                            "quantity": 9223372036854747000
                        },
                        {
                            "policy_id": "406c221cad25b6832609bc24f649840763fae659cafa3472f26122ab",
                            "asset_name": "L",
                            "fingerprint": "asset1gts3l2zwux060ze7mr6v8vxaal8hkntnkzmrh4",
                            "quantity": 1
                        }
                    ]
                },
                {
                    "address": "addr_test1qzmnd26rem246tykw4f7attzr5f6qnf25kp3mdgzany4vegm47veu20yllnu8a0t26ppr6hunpxa03jyvmdhanpym9vq6eqmp0",
                    "hash": "122128d2f72f77ab6bf8fb3f95b13f820b7c08a7ba2cab9c1d4ae5422f97d3fd",
                    "index": 4,
                    "value": 3103380,
                    "smart_contract": false,
                    "assets": [
                        {
                            "policy_id": "406c221cad25b6832609bc24f649840763fae659cafa3472f26122ab",
                            "asset_name": "zv�\r�`���P����0�㺦�PL�",
                            "fingerprint": "asset109f4hv4sk8aaw2qeaspquet8hez8jqmczs5uaz",
                            "quantity": 7069067
                        },
                        {
                            "policy_id": "406c221cad25b6832609bc24f649840763fae659cafa3472f26122ab",
                            "asset_name": "/��`�.k�����D\nE�A��E5���7�",
                            "fingerprint": "asset1s3txp9ah8vpswdn4d9afyefxzq69vfwqd0thgv",
                            "quantity": 27664
                        },
                        {
                            "policy_id": "648823ffdad1610b4162f4dbc87bd47f6f9cf45d772ddef661eff198",
                            "asset_name": "wETH",
                            "fingerprint": "asset1yuaxuqd8942yd366flvl0nju22exezfzsp052n",
                            "quantity": 260
                        },
                        {
                            "policy_id": "406c221cad25b6832609bc24f649840763fae659cafa3472f26122ab",
                            "asset_name": "�!�͞h Vya�ٻ����A+Dy�cΑZ��",
                            "fingerprint": "asset1x2trcynescvqwutmdnta4qc9c2yrea4g3tj7nr",
                            "quantity": 3296181
                        },
                        {
                            "policy_id": "648823ffdad1610b4162f4dbc87bd47f6f9cf45d772ddef661eff198",
                            "asset_name": "wLUNA",
                            "fingerprint": "asset1v9wx950p65dde73kj6fs0lpd6pzc28crzv0zpe",
                            "quantity": 18000
                        },
                        {
                            "policy_id": "648823ffdad1610b4162f4dbc87bd47f6f9cf45d772ddef661eff198",
                            "asset_name": "wUSDT",
                            "fingerprint": "asset1majzcngy2svamh5zns70xeetwkg2vx5nxg09nv",
                            "quantity": 899000
                        },
                        {
                            "policy_id": "648823ffdad1610b4162f4dbc87bd47f6f9cf45d772ddef661eff198",
                            "asset_name": "wDOT",
                            "fingerprint": "asset1r9t3dp2dvp2erfur645atkzq883dr25aaja66v",
                            "quantity": 38610
                        },
                        {
                            "policy_id": "406c221cad25b6832609bc24f649840763fae659cafa3472f26122ab",
                            "asset_name": "��R\"}^z��H;&t'�[�b�)��^���Y�@2",
                            "fingerprint": "asset1jxfj2x02fnklr8lf0gc523epewafgkl9am2wrm",
                            "quantity": 3160119
                        },
                        {
                            "policy_id": "406c221cad25b6832609bc24f649840763fae659cafa3472f26122ab",
                            "asset_name": "�\"��,S^q?��lH��8P�GJ\t�'����s�=",
                            "fingerprint": "asset1y4292t9n698eu3eas2sl07c0a7636uc3n3qfvr",
                            "quantity": 785749
                        },
                        {
                            "policy_id": "648823ffdad1610b4162f4dbc87bd47f6f9cf45d772ddef661eff198",
                            "asset_name": "wUSDC",
                            "fingerprint": "asset1n3weea8202dpev06tshdvhe9xd6f9jcqldpc2q",
                            "quantity": 889000
                        },
                        {
                            "policy_id": "406c221cad25b6832609bc24f649840763fae659cafa3472f26122ab",
                            "asset_name": "{�N����\t�ֳ1 ����7U�\t�\"!��#�",
                            "fingerprint": "asset1acensvu6258pdzqcxjwqh0d3v52kjgjc5tq58x",
                            "quantity": 7069067
                        },
                        {
                            "policy_id": "648823ffdad1610b4162f4dbc87bd47f6f9cf45d772ddef661eff198",
                            "asset_name": "wBTC",
                            "fingerprint": "asset173xsaag0t8aeemrujp2lg3t296xqn69ehynq4d",
                            "quantity": 10000
                        },
                        {
                            "policy_id": "648823ffdad1610b4162f4dbc87bd47f6f9cf45d772ddef661eff198",
                            "asset_name": "wDOGE",
                            "fingerprint": "asset1v5g4zdz9s5ezkvdfd29yyetfpta8gx93ae6nqu",
                            "quantity": 5300000
                        },
                        {
                            "policy_id": "648823ffdad1610b4162f4dbc87bd47f6f9cf45d772ddef661eff198",
                            "asset_name": "wXRP",
                            "fingerprint": "asset1lurw6489320vegzs73e0tzljnd9jv5lfdqjn74",
                            "quantity": 1796120
                        }
                    ]
                },
                {
                    "address": "addr_test1wrhtrx98lc6dc2zk0uuv0hjjcrffq5fvllq9k7u6cajfvhq0rqywz",
                    "hash": "122128d2f72f77ab6bf8fb3f95b13f820b7c08a7ba2cab9c1d4ae5422f97d3fd",
                    "index": 1,
                    "value": 1689618,
                    "smart_contract": true,
                    "assets": [
                        {
                            "policy_id": "406c221cad25b6832609bc24f649840763fae659cafa3472f26122ab",
                            "asset_name": "F",
                            "fingerprint": "asset1r5mrxn5377473gus6jzq3n947j33flenl4qptm",
                            "quantity": 1
                        }
                    ]
                },
                {
                    "address": "addr_test1qzmnd26rem246tykw4f7attzr5f6qnf25kp3mdgzany4vegm47veu20yllnu8a0t26ppr6hunpxa03jyvmdhanpym9vq6eqmp0",
                    "hash": "122128d2f72f77ab6bf8fb3f95b13f820b7c08a7ba2cab9c1d4ae5422f97d3fd",
                    "index": 3,
                    "value": 443498138,
                    "smart_contract": false,
                    "assets": []
                },
                {
                    "address": "addr_test1wrhtrx98lc6dc2zk0uuv0hjjcrffq5fvllq9k7u6cajfvhq0rqywz",
                    "hash": "122128d2f72f77ab6bf8fb3f95b13f820b7c08a7ba2cab9c1d4ae5422f97d3fd",
                    "index": 0,
                    "value": 1689618,
                    "smart_contract": true,
                    "assets": [
                        {
                            "policy_id": "406c221cad25b6832609bc24f649840763fae659cafa3472f26122ab",
                            "asset_name": "F",
                            "fingerprint": "asset1r5mrxn5377473gus6jzq3n947j33flenl4qptm",
                            "quantity": 1
                        }
                    ]
                }
            ]
        }

        // act
        const response = await api.listTransactionUtxos(hash);

        // assert
        expect(response.result).deep.equal(utxos);
    })
})