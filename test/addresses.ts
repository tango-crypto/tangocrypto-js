import * as chai from 'chai';
import * as chaiAsPromised from 'chai-as-promised';

chai.use(chaiAsPromised);
const expect = chai.expect;

import 'mocha';
import * as dotenv from "dotenv";
import { ApiClient } from '../index';
import { AddressApi } from '../src/clients/address';

dotenv.config();
describe('Address API endpoints', function () {
    this.timeout(0);
    let api: AddressApi;

    before('Initializing API ...', () => {

        api = new ApiClient({
            basePath: process.env.BASE_PATH,
            apiKey: process.env.API_KEY!,
            appId: process.env.APP_ID!,
            version: process.env.VERSION
        }).address();
    })

    it('should get address summary', async () => {
        // arrange
        const address = 'addr_test1qquxc75xmzzy7sy955pyz4tqg0ycgttjcv2u39ay929q2yp59kkfl90wf7f9vlm99fek6e9l5zh65td8jhw63hn9skqq8thxnw';
        const summary = {
            "network": "testnet",
            "address": "addr_test1qquxc75xmzzy7sy955pyz4tqg0ycgttjcv2u39ay929q2yp59kkfl90wf7f9vlm99fek6e9l5zh65td8jhw63hn9skqq8thxnw",
            "stake_address": "stake_test1uq6zmtyljhhylyjk0ajj5umdvjl6pta29knethdgmejctqqr6tflc",
            "balance": 23703680,
            "transactions_count": 33
        }

        // act
        const response = await api.getAddressSummary(address);

        // assert
        expect(response.data).deep.equal(summary);
    })

    it('should list address utxos', async () => {
        // arrange
        const address = 'addr_test1qpemm54tmynjhuyw0qhzdpnras29c3pc8gxvc4afpsa3uwglmrag6mlare663x64ugkkv8nqhqg3z6u78xa49fq6wmts55h5y9';
        const utxos = [
            {
                "address": "addr_test1qpemm54tmynjhuyw0qhzdpnras29c3pc8gxvc4afpsa3uwglmrag6mlare663x64ugkkv8nqhqg3z6u78xa49fq6wmts55h5y9",
                "hash": "a440d0f2c09e25f93aadea53dfe511c00b730eef4b6ed0be614f06d48c2fdaeb",
                "index": 2,
                "value": 74763221,
                "smart_contract": false,
                "assets": []
            },
            {
                "address": "addr_test1qpemm54tmynjhuyw0qhzdpnras29c3pc8gxvc4afpsa3uwglmrag6mlare663x64ugkkv8nqhqg3z6u78xa49fq6wmts55h5y9",
                "hash": "546b99bf07c1861b8c69b80bfac543fe9eb1be044a5051398af0cabe8d424ab5",
                "index": 0,
                "value": 1137906,
                "smart_contract": false,
                "assets": []
            },
            {
                "address": "addr_test1qpemm54tmynjhuyw0qhzdpnras29c3pc8gxvc4afpsa3uwglmrag6mlare663x64ugkkv8nqhqg3z6u78xa49fq6wmts55h5y9",
                "hash": "60268e4eb0d21532500158b5074c3b46ad2b67f45cd10beea3c73db3aa2937b4",
                "index": 1,
                "value": 1482726,
                "smart_contract": false,
                "assets": [
                    {
                        "policy_id": "ef3c47ccb75e6d77e4a4c018a0ec1b8d88c253fd72b4ec29f760756e",
                        "asset_name": "T #023",
                        "fingerprint": "asset14nje838m44gkv85ry62pk7n20v5g2lwtx39yvj",
                        "quantity": 1
                    },
                    {
                        "policy_id": "ef3c47ccb75e6d77e4a4c018a0ec1b8d88c253fd72b4ec29f760756e",
                        "asset_name": "TTTTTTTTTTTTT #000",
                        "fingerprint": "asset1ftdtd3q84ql38uvcqwdm0uv0zxmattw5zm3mt5",
                        "quantity": 1
                    }
                ]
            }
        ];

        // act
        const response = await api.listAddressUtxos(address)

        // assert
        expect(response.data.data).deep.equal(utxos);
    })
    
    it('should list address transactions', async () => {
        // arrange
        const address = 'addr_test1qquxc75xmzzy7sy955pyz4tqg0ycgttjcv2u39ay929q2yp59kkfl90wf7f9vlm99fek6e9l5zh65td8jhw63hn9skqq8thxnw';
        const size = 5;
        const result = {
            "data": [
                {
                    "hash": "0dc88eb6b35a8e93bd6490509f10684a18111de7b5f354034ea985e04199e0c7",
                    "block_index": null,
                    "out_sum": 3005899,
                    "fee": 194101,
                    "deposit": null,
                    "size": null,
                    "script_size": null,
                    "block": {
                        "epoch_no": 153,
                        "slot_no": null,
                        "epoch_slot_no": 359309,
                        "block_no": 2875591,
                        "time": "2021-09-01T00:08:45.000Z"
                    },
                    "inputs": [
                        "addr_test1qq8l3373hjyp59yzluyk4rv4uujj3078v67mg7wlgm4p4ve59kkfl90wf7f9vlm99fek6e9l5zh65td8jhw63hn9skqqqnz3q7",
                        "addr_test1qq8l3373hjyp59yzluyk4rv4uujj3078v67mg7wlgm4p4ve59kkfl90wf7f9vlm99fek6e9l5zh65td8jhw63hn9skqqqnz3q7"
                    ],
                    "outputs": [
                        "addr_test1qquxc75xmzzy7sy955pyz4tqg0ycgttjcv2u39ay929q2yp59kkfl90wf7f9vlm99fek6e9l5zh65td8jhw63hn9skqq8thxnw",
                        "addr_test1qrd6wgfjrfxge23f47hmxe9fr3swevgg2ygxtpnax0s4gp359kkfl90wf7f9vlm99fek6e9l5zh65td8jhw63hn9skqqr26suf"
                    ]
                },
                {
                    "hash": "de880f1499cfaaf5a46a3a20d62333745e7140e9edb14722e6e42a3f5f58e0a6",
                    "block_index": null,
                    "out_sum": 2799607,
                    "fee": 200393,
                    "deposit": null,
                    "size": null,
                    "script_size": null,
                    "block": {
                        "epoch_no": 153,
                        "slot_no": null,
                        "epoch_slot_no": 359034,
                        "block_no": 2875584,
                        "time": "2021-09-01T00:04:10.000Z"
                    },
                    "inputs": [
                        "addr_test1qq8l3373hjyp59yzluyk4rv4uujj3078v67mg7wlgm4p4ve59kkfl90wf7f9vlm99fek6e9l5zh65td8jhw63hn9skqqqnz3q7",
                        "addr_test1qq8l3373hjyp59yzluyk4rv4uujj3078v67mg7wlgm4p4ve59kkfl90wf7f9vlm99fek6e9l5zh65td8jhw63hn9skqqqnz3q7",
                        "addr_test1qq8l3373hjyp59yzluyk4rv4uujj3078v67mg7wlgm4p4ve59kkfl90wf7f9vlm99fek6e9l5zh65td8jhw63hn9skqqqnz3q7"
                    ],
                    "outputs": [
                        "addr_test1qquxc75xmzzy7sy955pyz4tqg0ycgttjcv2u39ay929q2yp59kkfl90wf7f9vlm99fek6e9l5zh65td8jhw63hn9skqq8thxnw",
                        "addr_test1qqj2mlavqe8zhjj24x55xa2z4tlmcjz4sdw6x73g72ux0je59kkfl90wf7f9vlm99fek6e9l5zh65td8jhw63hn9skqqzmaq0h"
                    ]
                },
                {
                    "hash": "a48ae9b80ddc0384f31f1969e04b42e59a2dc617b642b76cbc9918cb077932f9",
                    "block_index": null,
                    "out_sum": 4007059,
                    "fee": 199953,
                    "deposit": null,
                    "size": null,
                    "script_size": null,
                    "block": {
                        "epoch_no": 152,
                        "slot_no": null,
                        "epoch_slot_no": 173336,
                        "block_no": 2857031,
                        "time": "2021-08-24T20:29:12.000Z"
                    },
                    "inputs": [
                        "addr_test1qqwvdnlfuar8hdmk5xapw5a9t8cpzd8mcws9vm29uy8lche59kkfl90wf7f9vlm99fek6e9l5zh65td8jhw63hn9skqqrum9rj",
                        "addr_test1qq8l3373hjyp59yzluyk4rv4uujj3078v67mg7wlgm4p4ve59kkfl90wf7f9vlm99fek6e9l5zh65td8jhw63hn9skqqqnz3q7",
                        "addr_test1qq8l3373hjyp59yzluyk4rv4uujj3078v67mg7wlgm4p4ve59kkfl90wf7f9vlm99fek6e9l5zh65td8jhw63hn9skqqqnz3q7"
                    ],
                    "outputs": [
                        "addr_test1qquxc75xmzzy7sy955pyz4tqg0ycgttjcv2u39ay929q2yp59kkfl90wf7f9vlm99fek6e9l5zh65td8jhw63hn9skqq8thxnw",
                        "addr_test1qps9ef9w52vpc8waex4l0fxrejkepdfq0stt60e8pc76tc359kkfl90wf7f9vlm99fek6e9l5zh65td8jhw63hn9skqq0fcf7f"
                    ]
                },
                {
                    "hash": "0fc088b30dc39f97a52f50b15835bd4c486b0db304c4d7fae6ffd4861657f41c",
                    "block_index": null,
                    "out_sum": 2801455,
                    "fee": 198545,
                    "deposit": null,
                    "size": null,
                    "script_size": null,
                    "block": {
                        "epoch_no": 150,
                        "slot_no": null,
                        "epoch_slot_no": 407082,
                        "block_no": 2839102,
                        "time": "2021-08-17T13:24:58.000Z"
                    },
                    "inputs": [
                        "addr_test1qquxc75xmzzy7sy955pyz4tqg0ycgttjcv2u39ay929q2yp59kkfl90wf7f9vlm99fek6e9l5zh65td8jhw63hn9skqq8thxnw",
                        "addr_test1qq8l3373hjyp59yzluyk4rv4uujj3078v67mg7wlgm4p4ve59kkfl90wf7f9vlm99fek6e9l5zh65td8jhw63hn9skqqqnz3q7",
                        "addr_test1qq8l3373hjyp59yzluyk4rv4uujj3078v67mg7wlgm4p4ve59kkfl90wf7f9vlm99fek6e9l5zh65td8jhw63hn9skqqqnz3q7"
                    ],
                    "outputs": [
                        "addr_test1qquxc75xmzzy7sy955pyz4tqg0ycgttjcv2u39ay929q2yp59kkfl90wf7f9vlm99fek6e9l5zh65td8jhw63hn9skqq8thxnw",
                        "addr_test1qqwvdnlfuar8hdmk5xapw5a9t8cpzd8mcws9vm29uy8lche59kkfl90wf7f9vlm99fek6e9l5zh65td8jhw63hn9skqqrum9rj"
                    ]
                },
                {
                    "hash": "b2ef8406abed4ac2b2e966a6af47b57f2c178d59048e37d133c11db56a4850c4",
                    "block_index": null,
                    "out_sum": 11185160,
                    "fee": 215749,
                    "deposit": null,
                    "size": null,
                    "script_size": null,
                    "block": {
                        "epoch_no": 143,
                        "slot_no": null,
                        "epoch_slot_no": 331830,
                        "block_no": 2748082,
                        "time": "2021-07-12T16:30:46.000Z"
                    },
                    "inputs": [
                        "addr_test1qq8l3373hjyp59yzluyk4rv4uujj3078v67mg7wlgm4p4ve59kkfl90wf7f9vlm99fek6e9l5zh65td8jhw63hn9skqqqnz3q7",
                        "addr_test1qrk57z5yswuacq3ejn3egy3gjy47rxuqwnrduslkvaflr7359kkfl90wf7f9vlm99fek6e9l5zh65td8jhw63hn9skqq0mzz3s",
                        "addr_test1qq8l3373hjyp59yzluyk4rv4uujj3078v67mg7wlgm4p4ve59kkfl90wf7f9vlm99fek6e9l5zh65td8jhw63hn9skqqqnz3q7",
                        "addr_test1qq8l3373hjyp59yzluyk4rv4uujj3078v67mg7wlgm4p4ve59kkfl90wf7f9vlm99fek6e9l5zh65td8jhw63hn9skqqqnz3q7",
                        "addr_test1qqlmwmdsm4gewyzlx42v4m89lyj45vp8tsmpps6cckukzdp59kkfl90wf7f9vlm99fek6e9l5zh65td8jhw63hn9skqqj3qpt8",
                        "addr_test1qqmckl28apex3qd7vhn44f838ehkqu5m8gl22q67qmdu03359kkfl90wf7f9vlm99fek6e9l5zh65td8jhw63hn9skqq4hzakt",
                        "addr_test1qrdlhf9hfr7tr9fc62fdy2uax8k4m75dpyuc0khxg44qyee59kkfl90wf7f9vlm99fek6e9l5zh65td8jhw63hn9skqqr0tl6d",
                        "addr_test1qquxc75xmzzy7sy955pyz4tqg0ycgttjcv2u39ay929q2yp59kkfl90wf7f9vlm99fek6e9l5zh65td8jhw63hn9skqq8thxnw"
                    ],
                    "outputs": [
                        "addr_test1vq2w5q94jn5rktlh85yr2px4f8tkp0zjrtfdakhtwcg66lgzd8ua7",
                        "addr_test1qppx2nzkv29whz8ask8hpyfz4k0cjd0l5062jq0awl2u3xp59kkfl90wf7f9vlm99fek6e9l5zh65td8jhw63hn9skqq66aufl"
                    ]
                }
            ],
            "cursor": "d871e357acda"
        }

        // act
        const response = await api.listAddressTransactions(address, size);

        // assert
        expect(response.data).deep.equal(result);
    })

    it('should list address assets', async () => {
        // arrange
        const address = 'addr_test1qquxc75xmzzy7sy955pyz4tqg0ycgttjcv2u39ay929q2yp59kkfl90wf7f9vlm99fek6e9l5zh65td8jhw63hn9skqq8thxnw';
        const size = 2;
        const result = {
            "data": [
                {
                    "policy_id": "4d4094abf29279e3d5f4d3bfabe439b0916a27afb67e1a736cfe8f6f",
                    "asset_name": "27206f7220313d31202d2d202d",
                    "fingerprint": "asset1yqgz6xrqedspzlxw9y82urs84unl57c6rtvuee",
                    "quantity": 1
                },
                {
                    "policy_id": "57c0d81628dd68f8b3ab3074ce40faf2aba96e96d63dbcf174644f36",
                    "asset_name": "111",
                    "fingerprint": "asset1yceuuzc7utvjgct2epnrzqp290ah4jfvyxc7um",
                    "quantity": 10
                }
            ],
            "cursor": "8d37a507ead22e8e8a0d2a3c4c2dd33f6cd0cb990b2494f7f841aee3bba2303d126a51bcfa5ee52843016551"
        }

        // act
        const response = await api.listAddressAssets(address, size);

        // assert
        expect(response.data).deep.equal(result);
    })

})