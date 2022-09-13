import * as chai from 'chai';
import * as chaiAsPromised from 'chai-as-promised';

chai.use(chaiAsPromised);
const expect = chai.expect;

import 'mocha';
import * as dotenv from "dotenv";
import { Tangocrypto } from '../index';
import { WebhookApi } from '../src/clients/webhooks';

dotenv.config();
describe('Webhooks API endpoints', function () {
    this.timeout(0);
    let api: WebhookApi;

    before('Initializing API ...', () => {

        api = new Tangocrypto({
            basePath: process.env.BASE_PATH,
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