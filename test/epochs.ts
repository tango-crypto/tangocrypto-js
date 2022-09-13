import * as chai from 'chai';
import * as chaiAsPromised from 'chai-as-promised';

chai.use(chaiAsPromised);
const expect = chai.expect;

import 'mocha';
import * as dotenv from "dotenv";
import { Tangocrypto, Network } from '../index';
import { EpochApi } from '../src/clients/epochs';

dotenv.config();
describe('Epochs API endpoints', function () {
    this.timeout(0);
    let api: EpochApi;

    before('Initializing API ...', () => {

        api = new Tangocrypto({
            network: Network.CARDANO_TESTNET_STAGING,
            apiKey: process.env.API_KEY!,
            appId: process.env.APP_ID!,
            version: process.env.VERSION
        }).epoch();
    })

    it('should get current epoch', async () => {
        // arrange

        // act
        const response = await api.getCurrentEpoch();

        // assert
        expect(response.result).not.null;
    })

    it('should get epoch parameters', async () => {
        // arrange
        const epoch = 153;

        // act
        const response = await api.getEpochParameters(epoch);

        // assert
        expect(response.result).not.null;

    })
})