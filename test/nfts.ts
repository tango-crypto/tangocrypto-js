import * as chai from 'chai';
import * as chaiAsPromised from 'chai-as-promised';

chai.use(chaiAsPromised);
const expect = chai.expect;

import 'mocha';
import * as dotenv from "dotenv";
import { ApiClient } from '../index';
import { NftApi } from '../src/clients/nfts';
import { assert } from 'console';

dotenv.config();
describe('Nfts API endpoints', function () {
    this.timeout(0);
    let api: NftApi;

    before('Initializing API ...', () => {

        api = new ApiClient({
            basePath: process.env.BASE_PATH,
            apiKey: process.env.API_KEY!,
            appId: process.env.APP_ID!,
            version: process.env.VERSION
        }).nft();
    })

    it('should list collections', async () => {
        // arrange
        const size = 5;

        // act
        const response = await api.listNftCollections(size);

        // assert
        expect(response.result.data).lengthOf(5);
    })

    it('should get collections by ids', async () => {
        // arrange
        const ids = ['01g6s9wsjb3mrzgtfsy8btwy3f', '01g6th9kr7ngz2ebrbk8t165eg'];
        const size = 5;

        // act
        const response = await api.listNftCollections(size, undefined, ids);

        // assert
        expect(response.result.data).lengthOf(ids.length);
    })

    it('should get collection', async () => {
        // arrange
        const id  = '01g6s9wsjb3mrzgtfsy8btwy3f';

        // act
        const response = await api.retrieveNftCollection(id);

        // assert
        expect(response.result.id).equal(id);
    })
})