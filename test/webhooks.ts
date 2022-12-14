import * as chai from 'chai';
import * as chaiAsPromised from 'chai-as-promised';

chai.use(chaiAsPromised);
const expect = chai.expect;

import 'mocha';
import * as dotenv from "dotenv";
import { Tangocrypto, Network } from '../index';
import { WebhookApi } from '../src/clients/webhooks';
import { TangocryptoError } from '../src/common';

dotenv.config();
describe('Webhooks API endpoints', function () {
    this.timeout(0);
    let api: WebhookApi;

    before('Initializing API ...', () => {

        api = new Tangocrypto({
            network: Network.CARDANO_TESTNET_STAGING,
            apiKey: process.env.API_KEY!,
            appId: process.env.APP_ID!,
            version: process.env.VERSION
        }).webhook();
    })

    it('should list webhooks', async () => {
        // arrange
        const size = 1;

        // act
        const response = await api.listWebhooks(size);

        // assert
        expect(response.result.data).is.instanceOf(Array);
    })

})