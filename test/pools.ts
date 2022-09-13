import * as chai from 'chai';
import * as chaiAsPromised from 'chai-as-promised';

chai.use(chaiAsPromised);
const expect = chai.expect;

import 'mocha';
import * as dotenv from "dotenv";
import { Tangocrypto, Network } from '../index';
import { PoolApi } from '../src/clients/pools';

dotenv.config();
describe('Pools API endpoints', function () {
    this.timeout(0);
    let api: PoolApi;

    before('Initializing API ...', () => {

        api = new Tangocrypto({
            network: Network.CARDANO_TESTNET_STAGING,
            apiKey: process.env.API_KEY!,
            appId: process.env.APP_ID!,
            version: process.env.VERSION
        }).pool();
    })

    it('should get pool', async () => {
        // arrange
        const poolId = 'pool1cr8vpy3ta3smcxjq8hfu8n2chxhtc78ukfruqjhfgarf5azypen';
        const result = {
            "id": "c0cec0922bec61bc1a403dd3c3cd58b9aebc78fcb247c04ae947469a",
            "pool_id": "pool1cr8vpy3ta3smcxjq8hfu8n2chxhtc78ukfruqjhfgarf5azypen",
            "pledge": 60000000000000,
            "margin": 0.01,
            "fixed_cost": 340000000,
            "active_epoch_no": 208,
            "url": "https://raw.githubusercontent.com/lead-pool/l/master/t.json",
            "hash": "badd55bd91ba5293228b5ff45cc4a85b1f8d08f228080a92d86b056ca5a7c989",
            "ticker": "LEAD",
            "name": "LEAD Stake Pool",
            "description": "LEAD your Computer Science and Fintech Specialist - LEADing the way to a decentralisied future.",
            "homepage": "https://www.leadstakepool.com"
        }

        // act
        const response = await api.getPoolMetadata(poolId);

        // assert
        expect(response.result).deep.equal(result);
    })

    it('should get pool delegations', async () => {
        // arrange
        const poolId = 'pool1cr8vpy3ta3smcxjq8hfu8n2chxhtc78ukfruqjhfgarf5azypen';
        const result = {
            "data": [
                {
                    "stake_address": "stake_test1urya8jsmsxavfxr0855c8dzenrf39q02z5z709gcr4rnu0gaf4eue",
                    "available_rewards": 138231955,
                    "stake": 16336612957
                },
                {
                    "stake_address": "stake_test1uzfatty4lj5m7kjjgdzlfd9fv8xf5u8q4xjfkda45zgqacgdy2m5l",
                    "available_rewards": 94472022153,
                    "stake": 24288152771664
                },
                {
                    "stake_address": "stake_test1uqv8nr2pfjaq8lrasss3v9nt94ce52hl2hu2dzwvcyjasaqqwweze",
                    "available_rewards": 963952,
                    "stake": 76032810
                },
                {
                    "stake_address": "stake_test1upe4hf2s4ytna9q05p969qk5klphk2xkdaegqc2t4wm8jucury8rq",
                    "available_rewards": 478730,
                    "stake": 2303241
                },
                {
                    "stake_address": "stake_test1uqh4jcdkd4px0hhtjfay6ywkpnywlsdmdxrl8znwqwfc4zq6u263s",
                    "available_rewards": 98126913780,
                    "stake": 5098124738643
                },
                {
                    "stake_address": "stake_test1urme9y7sa8pgnm4vuzvwntsek9c25s8r6ggvsydsafr6tyct2zl4f",
                    "available_rewards": 11627008134,
                    "stake": 1015521909143
                },
                {
                    "stake_address": "stake_test1uzs9g44wl6zhs97d9ysv79c3mn2nrt3v4t8wdqn7a9qqcaq5nmmt3",
                    "available_rewards": 21175920,
                    "stake": 1018827142
                },
                {
                    "stake_address": "stake_test1urfddcchd5gtmdlevta7a3p8u0f7qnjxddzzuaadf6sur3cz8yfln",
                    "available_rewards": 491829,
                    "stake": 55413838
                },
                {
                    "stake_address": "stake_test1uqugcj5qnk7e5v5w3g2g2t90njcdyg88fyeg3f7qa5227rsp6c5nd",
                    "available_rewards": 117322651934,
                    "stake": 14937933225284
                },
                {
                    "stake_address": "stake_test1uz7wapqxnrkkhm4h4pmqd6grg0pjrksvzfqkxah37jdq5cszy2m6j",
                    "available_rewards": 129779803644,
                    "stake": 61554596443927
                }
            ],
            "cursor": null
        }
        const size = 2;

        // act
        const response = await api.listPoolDelegations(poolId, size);

        // assert
        expect(response.result.data).lengthOf(2);
    })
})