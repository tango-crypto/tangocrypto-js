import * as chai from 'chai';
import * as chaiAsPromised from 'chai-as-promised';

chai.use(chaiAsPromised);
const expect = chai.expect;

import 'mocha';
import * as dotenv from "dotenv";
import { Tangocrypto } from '../index';
import { BlockApi } from '../src/clients/blocks';

dotenv.config();
describe('Blocks API endpoints', function () {
    this.timeout(0);
    let api: BlockApi;

    before('Initializing API ...', () => {

        api = new Tangocrypto({
            basePath: process.env.BASE_PATH,
            apiKey: process.env.API_KEY!,
            appId: process.env.APP_ID!,
            version: process.env.VERSION
        }).block();
    })

    it('should get block', async () => {
        // arrange
        const blockNo = 2713488;
        const result = {
            "hash": "1b1d604a7fa80f788e0ed6d39ec371d671bac417d781f1efcaa031e0e8b5f3b7",
            "epoch_no": 141,
            "slot_no": 30600768,
            "epoch_slot_no": 58368,
            "block_no": 2713488,
            "previous_block": 2713487,
            "next_block": 2713489,
            "slot_leader": "pool1m8wyjlnr8sh3cej5vls7675nunu9gxlm40sucvvp37eq77mq7wq",
            "out_sum": 9653657064704,
            "fees": 576715,
            "confirmations": 1111615,
            "size": 1746,
            "time": "2021-06-29T12:33:04.000Z",
            "tx_count": 3,
            "vrf_key": "vrf_vk1srth8zlrd89qep3lxt6uxl73jyvl52gam96x67gzp56ga9efp49qwdssy3",
            "op_cert": "50ae2a905d6a2b7a174f14a168d1c628c2a047a16a537209d821ac7cb041cbab"
        }

        // act
        const response = await api.getBlock(blockNo);

        // assert
        expect(response.result.block_no).deep.equal(result.block_no);

    })

    it('should get block by hash', async () => {
        // arrange
        const hash = '1b1d604a7fa80f788e0ed6d39ec371d671bac417d781f1efcaa031e0e8b5f3b7';
        const result = {
            "hash": "1b1d604a7fa80f788e0ed6d39ec371d671bac417d781f1efcaa031e0e8b5f3b7",
            "epoch_no": 141,
            "slot_no": 30600768,
            "epoch_slot_no": 58368,
            "block_no": 2713488,
            "previous_block": 2713487,
            "next_block": 2713489,
            "slot_leader": "pool1m8wyjlnr8sh3cej5vls7675nunu9gxlm40sucvvp37eq77mq7wq",
            "out_sum": 9653657064704,
            "fees": 576715,
            "confirmations": 1111615,
            "size": 1746,
            "time": "2021-06-29T12:33:04.000Z",
            "tx_count": 3,
            "vrf_key": "vrf_vk1srth8zlrd89qep3lxt6uxl73jyvl52gam96x67gzp56ga9efp49qwdssy3",
            "op_cert": "50ae2a905d6a2b7a174f14a168d1c628c2a047a16a537209d821ac7cb041cbab"
        }

        // act
        const response = await api.getBlockByHash(hash);

        // assert
        expect(response.result.hash).equal(result.hash);

    })

    it('should get block transactions', async () => {
        // arrange
        const blockNo = 3174184;
        const size = 2;
        const result = {
            "data": [
                {
                    "hash": "bbf01aa72dc0597c8ff426be6909f16ef7e5f85de73fc7c35421a52c8892d5bc",
                    "block_index": 13,
                    "out_sum": 656643343,
                    "fee": 188249,
                    "deposit": 0,
                    "size": 646,
                    "valid_contract": true,
                    "script_size": 0
                },
                {
                    "hash": "a1984624724ca8cda463c977d5d8857987e0e3cc2c2fca380915fd0d195a6876",
                    "block_index": 12,
                    "out_sum": 691615090,
                    "fee": 188205,
                    "deposit": 0,
                    "size": 645,
                    "valid_contract": true,
                    "script_size": 0
                }
            ],
            "cursor": "de71e250afd361"
        }

        // act
        const response = await api.getBlockTransactions(blockNo, size);

        // assert
        expect(response.result).deep.equal(result);

    })

    it('should get block transactions by hash', async () => {
        // arrange
        const hash = '18483364e53f83d96572d852fe2dbdbd174fa522b99ba9efedb42da0212e99d4';
        const size = 2;
        const result = {
            "data": [
                {
                    "hash": "bbf01aa72dc0597c8ff426be6909f16ef7e5f85de73fc7c35421a52c8892d5bc",
                    "block_index": 13,
                    "out_sum": 656643343,
                    "fee": 188249,
                    "deposit": 0,
                    "size": 646,
                    "valid_contract": true,
                    "script_size": 0
                },
                {
                    "hash": "a1984624724ca8cda463c977d5d8857987e0e3cc2c2fca380915fd0d195a6876",
                    "block_index": 12,
                    "out_sum": 691615090,
                    "fee": 188205,
                    "deposit": 0,
                    "size": 645,
                    "valid_contract": true,
                    "script_size": 0
                }
            ],
            "cursor": "de71e250afd361"
        }

        // act
        const response = await api.getBlockTransactionsByHash(hash, size);

        // assert
        expect(response.result).deep.equal(result);

    })

    it('should get latest block', async () => {
        // arrange
        const blockNo = 0;

        // act
        const response = await api.getLatestBlock();

        // assert
        expect(response.result.block_no).gt(blockNo);
    })
})