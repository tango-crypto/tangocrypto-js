import * as chai from 'chai';
import * as chaiAsPromised from 'chai-as-promised';

chai.use(chaiAsPromised);
const expect = chai.expect;

import 'mocha';
import * as dotenv from "dotenv";
import { Tangocrypto, Network } from '../index';
import { NftApi } from '../src/clients/nfts';

dotenv.config();
describe('Nfts API endpoints', function () {
    this.timeout(0);
    let api: NftApi;

    before('Initializing API ...', () => {

        api = new Tangocrypto({
            network: Network.CARDANO_TESTNET_STAGING,
            apiKey: process.env.API_KEY!,
            appId: process.env.APP_ID!,
            version: process.env.VERSION,
            maxAttempts: 5
        }).nft();
    })

    it('should list collections', async () => {
        // arrange
        const size = 5;

        // act
        const response = await api.listCollections(size);

        // assert
        expect(response.result.data).lengthOf(5);
    })

    it('should get collections by ids', async () => {
        // arrange
        const ids = ['01g6s9wsjb3mrzgtfsy8btwy3f', '01g6th9kr7ngz2ebrbk8t165eg'];
        const size = 5;

        // act
        const response = await api.listCollections(size, undefined, ids);

        // assert
        expect(response.result.data).lengthOf(ids.length);
    })

    it('should get collection', async () => {
        // arrange
        const id  = '01g6s9wsjb3mrzgtfsy8btwy3f';

        // act
        const response = await api.getCollection(id);

        // assert
        expect(response.result.id).equal(id);
    })

    it('should get collection nfts', async () => {
        // arrange
        const id = '01g6s9wsjb3mrzgtfsy8btwy3f';

        // act
        const response = await api.listNfts(id);

        // assert
        expect(response.result.data).instanceOf(Array);
    })

    it('should get collection\'s nft', async () => {
        // arrange
        const collectionId = '01g6s9wsjb3mrzgtfsy8btwy3f';
        const id = '01g7wtgnzy8q4bhjj9g6sj39ky';

        // act
        const response = await api.getNFT(collectionId, id);

        // assert
        expect(response.result.id).equal(id);
    })

    it('should get collection\'s sale', async () => {
        // arrange
        const collectionId = '489b4acd87d841b581206991dd295362';
        const id = '01gb5pmxwmr14sftesdxkzx6qe';

        // act
        const response = await api.getSale(collectionId, id);

        // assert
        expect(response.result.id).equal(id);
    })

    it('should get collection phases', async () => {
        // arrange
        const collectionId = '489b4acd87d841b581206991dd295362';

        // act
        const response = await api.listSalePhases(collectionId);

        // assert
        expect(response.result.data).instanceOf(Array);
    })

    it('should get sale phase', async () => {
        // arrange
        const collectionId = '489b4acd87d841b581206991dd295362';
        const id = '01gh9y4k9cdwhmbhz5hdkttgn6';

        // act
        const response = await api.getSalePhase(collectionId, id);

        // assert
        expect(response.result.id).equal(id);
    })

})