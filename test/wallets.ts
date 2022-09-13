import * as chai from 'chai';
import * as chaiAsPromised from 'chai-as-promised';

chai.use(chaiAsPromised);
const expect = chai.expect;

import 'mocha';
import * as dotenv from "dotenv";
import { Tangocrypto, Network } from '../index';
import { WalletApi } from '../src/clients/wallets';

dotenv.config();
describe('Wallets API endpoints', function () {
    this.timeout(0);
    let api: WalletApi;

    before('Initializing API ...', () => {

        api = new Tangocrypto({
            network: Network.CARDANO_TESTNET_STAGING,
            apiKey: process.env.API_KEY!,
            appId: process.env.APP_ID!,
            version: process.env.VERSION
        }).wallet();
    })

    it('should get wallet summary', async () => {
        // arrange
        const stakeAddress = 'stake_test1uzxpncx82vfkl5ml00ws44hzfdh64r22kr93e79jqsumv0q8g8cy0';
        const summary = {
            "pool_id": "pool1rnsw42f2q0u9fc32ttxy9l085n736jxz07lvwutz63wpyef03zh",
            "active": true,
            "active_epoch": 74,
            "controlled_total_stake": 933358105,
            "rewards_sum": 24210172,
            "withdrawals_sum": 3834203,
            "reserves_sum": 0,
            "treasury_sum": 0,
            "withdraw_available": 20375969
        }

        // act
        const response = await api.getWalletSummary(stakeAddress);

        // assert
        expect(response.result).deep.equal(summary);
    })

    it('should get wallet stake address', async () => {
        // arrange
        const stakeAddress = 'stake_test1uzxpncx82vfkl5ml00ws44hzfdh64r22kr93e79jqsumv0q8g8cy0';
        const size = 3;
        const result = {
            "data": [
                {
                    "address": "addr_test1qzynkal2rj6uljp9qmp2k4t27cas4am4ktme8v3wudjxxz5vr8svw5cndlfh777apttwyjm042x54vxtrnutyppekc7q9z5pps"
                },
                {
                    "address": "addr_test1qzwhwranejmvlyvuhtmcjlvenjhtppwatnmcqtahlnt6jmvvr8svw5cndlfh777apttwyjm042x54vxtrnutyppekc7qx9hnxu"
                },
                {
                    "address": "addr_test1qznf43z5heddwhcdwffykdjt5lzldsf0jrugakw6m2nxzdvvr8svw5cndlfh777apttwyjm042x54vxtrnutyppekc7q0tlqay"
                }
            ],
            "cursor": "8d20b210c197329e9b492e3c417c9278608fc49f1b7286eff557a3f4ade96269197650bae644f82346067a4ee57828cd4a722281cc1383f4e83f48cd7ae8d9ac0929474cf22a9c80ef916f9ecc9943e84d17c1c6e073f9c6165f29f2f1c49dde8f3d527234dcfd0d1f91f6bf"
        };

        // act
        const response = await api.listWalletAddresses(stakeAddress, size);

        // assert
        expect(response.result).deep.equal(result);
    })
})