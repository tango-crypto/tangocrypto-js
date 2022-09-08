import * as chai from 'chai';
import * as chaiAsPromised from 'chai-as-promised';

chai.use(chaiAsPromised);
const expect = chai.expect;

import 'mocha';
import * as dotenv from "dotenv";
import { ApiClient } from '../index';
import { EpochApi } from '../src/clients/epochs';

dotenv.config();
describe('Epochs API endpoints', function () {
    this.timeout(0);
    let api: EpochApi;

    before('Initializing API ...', () => {

        api = new ApiClient({
            basePath: process.env.BASE_PATH,
            apiKey: process.env.API_KEY!,
            appId: process.env.APP_ID!,
            version: process.env.VERSION
        }).epoch();
    })

    it('should get current epoch', async () => {
        // arrange

        // act
        const response = await api.retrieveCurrentEpoch();

        // assert
        expect(response.data).not.null;
    })

    it('should get epoch parameters', async () => {
        // arrange
        const epoch = 153;

        // act
        const response = await api.retrieveEpochParameters(epoch);

        // assert
        expect(response.data).not.null;

    })
})