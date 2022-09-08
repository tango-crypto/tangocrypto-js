import * as chai from 'chai';
import * as chaiAsPromised from 'chai-as-promised';

chai.use(chaiAsPromised);
const expect = chai.expect;

import 'mocha';
import * as dotenv from "dotenv";
import { ApiClient } from '../src';
import { PolicyApi } from '../src/clients/policies';

dotenv.config();
describe('Policy API endpoints', function () {
    this.timeout(0);
    let api: PolicyApi;

    before('Initializing API ...', () => {

        api = new ApiClient({
            basePath: process.env.BASE_PATH,
            apiKey: process.env.API_KEY!,
            appId: process.env.APP_ID!,
            version: process.env.VERSION
        }).policy();
    })

    it('should return policy assets', async () => {
        // arrange
        const policy = '18ed282beda4bec13226c427d4744d2642ba2cef404470b62ae184d8';
        const size = 1;
        const result = {
            "data": [
                {
                    "policy_id": "18ed282beda4bec13226c427d4744d2642ba2cef404470b62ae184d8",
                    "asset_name": "546f6b656e2d3237",
                    "fingerprint": "asset1znh9gcn5k4edhk6v327xktlzlpelpqhdmwxwtr",
                    "quantity": 1,
                    "initial_mint_tx_hash": "277e274c7fa3c0afb4eb56fe3cd980e1437ed328174e3cfc6495204e8b13c824"
                }
            ],
            "cursor": "8d37a507ead22d8387413825412fcd7f7fdec4914960c2b5a14bbfe6a7ea657d166e15a7f44cf1275841644e"
        }

        // act
        const response = await api.getAssetsByPolicy(policy, size);

        // assert
        expect(response.data).deep.equal(result);
    })
})