import * as chai from 'chai';
import * as chaiAsPromised from 'chai-as-promised';

chai.use(chaiAsPromised);
const expect = chai.expect;

import 'mocha';
import * as dotenv from "dotenv";
import { Tangocrypto, Network } from '../index';
import { IPFS_BASE_PATH } from '../src/base';
import { IpfsApi } from '../src/clients/ipfs';
import * as fs from 'fs';

dotenv.config();
describe('Ipfs API endpoints', function () {
    this.timeout(0);
    let api: IpfsApi;

    before('Initializing API ...', () => {

        api = new Tangocrypto({
            apiKey: process.env.API_KEY!,
        }).ipfs();
    })

    it('should list ipfs contents', async () => {
        // arrange

        // act
        const response = await api.listContents();

        // assert
        expect(response.result.data?.length).greaterThanOrEqual(0);
    })


    it('should get ipfs content', async () => {
        // arrange
        const contentId = '01gmdmz3z7dq13xt7x4j6z5rc0';
        const result = {
            "created_at": "2022-12-16T14:21:17.159Z",
            "status": "pinned",
            "account_id": "8120536a5efc478b92809f8f1987a76e",
            "name": "WhenIdream",
            "updated_at": "2022-12-16T14:21:17.159Z",
            "content_cid": "bafybeidiahmxyhctoym5mhcbitgd46runga2xhlhi2zny6mgeu24trkara",
            "id": "01gmdmz3z7dq13xt7x4j6z5rc0",
            "cid": "QmVLekDKBhg4ftdRP6odvYFKGg1nhRnMJxejEeSt1zT7NF",
            "pins": [
                {
                    "status": "Pinned",
                    "location": {
                        "peerId": "12D3KooWCLuHQj5ZyvE3VRBAPazAfmAn2pz3CkK14YdvWrhuyszg",
                        "peerName": "cluster0",
                        "ipfsPeerId": "12D3KooWEfdXu9Ssk8abzxaB5fVPyY9ojFaU3EgSzzjEcEfBfFDe"
                    }
                }
            ],
            "dag_size": 40104513,
            "type": "Car"
        }

        // act
        const response = await api.getContent(contentId);

        // assert
        expect(response.result).deep.equal(result);
    })

    it('should pin ipfs cid', async () => {
        // arrange
        const cid = 'QmYhz3wjTCCF8SVdygCoAgF87KdNkNnYEAoMTtxqP5upUj';
        const name = 'pin-tangocrypto-js';


        // act
        const response = await api.pinCid(cid, name);

        // assert
        expect(response.result.cid).equal(cid);
    })

    // it('should delete ipfs content', async () => {
    //     // arrange
    //     const contentId = '01gmnrrkce3ggjwc11t15e5zb8';

    //     // act
    //     const response = await api.deleteContent(contentId);

    //     // assert
    //     expect(response.result.deleted).equal(true);
    // })

    // it('should add ipfs content', async () => {
    //     // arrange
    //     const name = 'rock-tangocrypto-js';
    //     const file = fs.createReadStream('/path/to/file');
    //     const cid = 'file_content_cid';

    //     // act
    //     const response = await api.createContent(name, file);

    //     // assert
    //     expect(response.result.cid).deep.equal(cid);
        
    // })
})