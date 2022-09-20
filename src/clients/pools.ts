import { AxiosInstance } from "axios";
import { ApiConfiguration } from ".";
import { PoolsApi } from "../apis/pools";
import { Configuration } from "../configuration";

export class PoolApi {
    poolsApi: PoolsApi;
    config: ApiConfiguration;

    constructor(config: ApiConfiguration, protected axios: AxiosInstance) {
        this.config = config;
        const configuration = new Configuration({
            apiKey: config.apiKey,
            basePath: config.basePath,
            maxAttempts: config.maxAttempts
        })

        // initialize api
        this.poolsApi = new PoolsApi(configuration, configuration.basePath, axios);
    }

    /**
     * Returns a list of delegations for a given stake pool. The response is paginated. If truncated, the response includes a cursor that you use in a subsequent request to retrieve the next set of delegations. 
     * @summary List stake pool delegations
     * @param {string} poolId Bech32 or hexadecimal pool ID.
     * @param {number} [size] The number of results displayed on one page.
     * @param {string} [cursor] A &#x60;cursor&#x60; to access the next set of results. You include the cursor in subsequent requests to the endpoint as a URL query parameter of your request. If the cursor is empty in the result it means there are no more items to be retrieved. 
     * @param {'asc' | 'desc'} [order] The ordering of items from the point of view of the blockchain. By default, we return oldest first, newest last.     
     * @throws {RequiredError}
     * @memberof PoolsApi
     */
     public listPoolDelegations(poolId: string, size?: number, cursor?: string, order?: 'asc' | 'desc') {
        return this.poolsApi.stakePoolDelegations(this.config.appId, this.config.version, poolId, size, cursor, order);
    }

    /**
     * Retrieve stake pool registration metadata specified by a `pool_id`. 
     * @summary Retrieve stake pool metadata
     * @param {string} poolId Bech32 or hexadecimal pool ID.
     * @throws {RequiredError}
     * @memberof PoolsApi
     */
    public getPoolMetadata(poolId: string) {
        return this.poolsApi.stakePoolMetadata(this.config.appId, this.config.version, poolId);
    }
}