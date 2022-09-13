import * as chai from 'chai';
import * as chaiAsPromised from 'chai-as-promised';

chai.use(chaiAsPromised);
const expect = chai.expect;

import 'mocha';
import * as dotenv from "dotenv";
import { Tangocrypto } from '../index';
import { AssetApi } from '../src/clients/assets';

dotenv.config();
describe('Assets API endpoints', function () {
    this.timeout(0);
    let api: AssetApi;

    before('Initializing API ...', () => {

        api = new Tangocrypto({
            basePath: process.env.BASE_PATH,
            apiKey: process.env.API_KEY!,
            appId: process.env.APP_ID!,
            version: process.env.VERSION
        }).asset();
    })

    it('should get asset', async () => {
        // arrange
        const asset = '45fb072eb2d45b8be940c13d1f235fa5a8263fc8ebe8c1af5194ea9c5365636f6e6454657374746f6b656e';
        const result = {
            "policy_id": "45fb072eb2d45b8be940c13d1f235fa5a8263fc8ebe8c1af5194ea9c",
            "asset_name": "5365636f6e6454657374746f6b656e",
            "fingerprint": "asset1dz7d9v3xs8sf9sljw82ux0sh6x4qfq37nu7kdw",
            "quantity": 9995000,
            "mint_quantity": 10000000,
            "burn_quantity": -5000,
            "initial_mint_tx_hash": "d82e82776b3588c1a2c75245a20a9703f971145d1ca9fba4ad11f50803a43190"
        }

        // act
        const response = await api.getAsset(asset);

        // assert
        expect(response.result).deep.equal(result);
    })

    it('should get asset by fingerprint', async () => {
        // arrange
        const fingerprint = 'asset1dz7d9v3xs8sf9sljw82ux0sh6x4qfq37nu7kdw';
        const result = {
            "policy_id": "45fb072eb2d45b8be940c13d1f235fa5a8263fc8ebe8c1af5194ea9c",
            "asset_name": "5365636f6e6454657374746f6b656e",
            "fingerprint": "asset1dz7d9v3xs8sf9sljw82ux0sh6x4qfq37nu7kdw",
            "quantity": 9995000,
            "mint_quantity": 10000000,
            "burn_quantity": -5000,
            "initial_mint_tx_hash": "d82e82776b3588c1a2c75245a20a9703f971145d1ca9fba4ad11f50803a43190"
        }

        // act
        const response = await api.getAssetByFingerprint(fingerprint);

        // assert
        expect(response.result).deep.equal(result);
    })

    it('should get asset addresses', async () => {
        // arrange
        const asset = '45fb072eb2d45b8be940c13d1f235fa5a8263fc8ebe8c1af5194ea9c5365636f6e6454657374746f6b656e';
        const result = {
            "data": [
                {
                    "address": "addr_test1vqdeuvlf9fhuhtnmuw9tjkk67ld9qxg2hqt2r97pth7p3lsnvztau",
                    "quantity": 9995000,
                    "share": 100
                }
            ],
            "cursor": null
        }

        // act
        const response = await api.listAssetAddresses(asset);

        // assert
        expect(response.result).deep.equal(result);
    })

    it('should get asset addresses by fingerprint', async () => {
        // arrange
        const fingerprint = 'asset1dz7d9v3xs8sf9sljw82ux0sh6x4qfq37nu7kdw';
        const result = {
            "data": [
                {
                    "address": "addr_test1vqdeuvlf9fhuhtnmuw9tjkk67ld9qxg2hqt2r97pth7p3lsnvztau",
                    "quantity": 9995000,
                    "share": 100
                }
            ],
            "cursor": null
        }

        // act
        const response = await api.listAssetAddressesFingerprint(fingerprint);

        // assert
        expect(response.result).deep.equal(result);
    })
})