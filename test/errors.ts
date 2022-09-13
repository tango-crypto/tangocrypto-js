import * as chai from 'chai';
import * as chaiAsPromised from 'chai-as-promised';

chai.use(chaiAsPromised);
const expect = chai.expect;

import 'mocha';
import * as dotenv from "dotenv";
import { Tangocrypto, Network } from '../index';
import { BlockApi } from '../src/clients/blocks';
import { TangocryptoError } from '../src/common';

dotenv.config();
describe('Error API endpoints', function () {
    this.timeout(0);
    let api: BlockApi;


    it('should reject with status 404', async () => {
        // arrange
        api = new Tangocrypto({
            network: Network.CARDANO_TESTNET_STAGING,
            apiKey: process.env.API_KEY!,
            appId: process.env.APP_ID!,
            version: process.env.VERSION
        }).block()
        const block_no = -1;

        // act
        const response: any[] = await Promise.allSettled([api.getBlock(block_no)]);

        // assert
        expect(response[0].reason.status_code).equal(404);
    })

    it('should reject with status 403', async () => {
        // arrange
        api = new Tangocrypto({
            network: Network.CARDANO_TESTNET_STAGING,
            apiKey: process.env.API_KEY!,
            appId: process.env.APP_ID!,
            version: 'forbidden'
        }).block()

        // act
        const response: any[] = await Promise.allSettled([api.getLatestBlock()]);

        // assert
        expect(response[0].reason.status_code).equal(403);
    })

    it('should retry', async () => {

        // arrange
        api = new Tangocrypto({
            network: Network.CARDANO_TESTNET_STAGING,
            apiKey: process.env.API_KEY!,
            appId: process.env.APP_ID!,
            version: process.env.VERSION,
            maxAttempts: 5
        }).block();

        const hash = '18483364e53f83d96572d852fe2dbdbd174fa522b99ba9efedb42da0212e99d4';

        // act
        const response = await Promise.all([
            api.getBlockByHash(hash),
            api.getBlockByHash(hash),
            api.getBlockByHash(hash),
            api.getBlockByHash(hash),
            api.getBlockByHash(hash),
            api.getBlockByHash(hash),
        ]);
        const attempts = response.map(r => r.$metadata.attempts).filter(a => a > 1);

        // assert
        expect(attempts.length).greaterThanOrEqual(1);
    })

    it('should reject status 429', async () => {

        // arrange
        api = new Tangocrypto({
            network: Network.CARDANO_TESTNET_STAGING,
            apiKey: process.env.API_KEY!,
            appId: process.env.APP_ID!,
            version: process.env.VERSION,
            maxAttempts: 1
        }).block();

        const hash = '18483364e53f83d96572d852fe2dbdbd174fa522b99ba9efedb42da0212e99d4';
        const member = 429;

        // act
        const response = await Promise.allSettled([
            api.getBlockByHash(hash),
            api.getBlockByHash(hash),
            api.getBlockByHash(hash),
            api.getBlockByHash(hash),
            api.getBlockByHash(hash),
            api.getBlockByHash(hash),
            api.getBlockByHash(hash),
            api.getBlockByHash(hash),
            api.getBlockByHash(hash),
            api.getBlockByHash(hash),
        ]);

        const map = response.map((r:any) => r.reason?.status_code)
        // assert
        expect(map).includes(member);
    })
})