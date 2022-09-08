import { AxiosInstance } from "axios";
import { ClientConfiguration } from ".";
import { BlocksApi } from "../api";
import { Configuration } from "../configuration";

export class BlockApi {
    blocksApi: BlocksApi;
    config: ClientConfiguration;

    constructor(config: ClientConfiguration, protected axios: AxiosInstance) {
        this.config = config;
        const configuration = new Configuration({
            apiKey: config.apiKey,
            basePath: config.basePath
        })

        // initialize api
        this.blocksApi = new BlocksApi(configuration, configuration.basePath, axios);
    }

    /**
     * Retrieves information about a block specified by `block_no`.
     * @summary Retrieve block
     * @param {number} blockNo Block number.
     * @throws {RequiredError}
     * @memberof BlocksApi
     */
    public getBlock(blockNo: number) {
        return this.blocksApi.getBlock(this.config.appId, this.config.version, blockNo).then(response => response.data);
    }

    /**
     * Retrieves information about a block specified by `hash`.
     * @summary Retrieve block
     * @param {string} hash Block hash.
     * @throws {RequiredError}
     * @memberof BlocksApi
     */
    public getBlockByHash(hash: string) {
        return this.blocksApi.getBlockByHash(this.config.appId, this.config.version, hash).then(response => response.data);
    }

    /**
     * Returns a list of transactions for a given block. The response is paginated. If truncated, the response includes a cursor that you use in a subsequent request to retrieve the next set of transactions. 
     * @summary List block transactions
     * @param {number} blockNumber Block number.
     * @param {number} [size] The number of results displayed on one page.
     * @param {string} [cursor] A &#x60;cursor&#x60; to access the next set of results. You include the cursor in subsequent requests to the endpoint as a URL query parameter of your request. If the cursor is empty in the result it means there are no more items to be retrieved. 
     * @param {'asc' | 'desc'} [order] The ordering of the transactions based on block number. By default, we return oldest first, newest last. 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof BlocksApi
     */
    public getBlockTransactions(blockNumber: number, size?: number, cursor?: string, order?: 'asc' | 'desc') {
        return this.blocksApi.getBlockTransactions(this.config.appId, this.config.version, blockNumber, size, cursor, order).then(response => response.data);
    }

    /**
     * Returns a list of transactions for a given block. The response is paginated. If truncated, the response includes a cursor that you use in a subsequent request to retrieve the next set of transactions. 
     * @summary List block transactions
     * @param {string} hash Block hash.
     * @param {number} [size] The number of results displayed on one page.
     * @param {string} [cursor] A &#x60;cursor&#x60; to access the next set of results. You include the cursor in subsequent requests to the endpoint as a URL query parameter of your request. If the cursor is empty in the result it means there are no more items to be retrieved. 
     * @param {'asc' | 'desc'} [order] The ordering of the transactions based on block number. By default, we return oldest first, newest last. 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof BlocksApi
     */
    public getBlockTransactionsByHash(hash: string, size?: number, cursor?: string, order?: 'asc' | 'desc') {
        return this.blocksApi.getBlockTransactionsByHash(this.config.appId, this.config.version, hash, size, cursor, order).then(response => response.data);
    }

    /**
     * Retrieves the latest block available. This is known as the tip of the blockchain.
     * @summary Retrieve latest block
     * @throws {RequiredError}
     * @memberof BlocksApi
     */
    public getLatestBlock() {
        return this.blocksApi.getLatestBlock(this.config.appId, this.config.version).then(response => response.data);
    }
}