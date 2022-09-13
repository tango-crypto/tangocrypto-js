import { AxiosInstance } from "axios";
import { ApiConfiguration } from ".";
import { PoolsApi } from "../api";
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
     * @throws {RequiredError}
     * @memberof PoolsApi
     */
     public stakePoolDelegations(poolId: string) {
        return this.poolsApi.stakePoolDelegations(this.config.appId, this.config.version, poolId);
    }

    /**
     * Retrieve stake pool registration metadata specified by a `pool_id`. 
     * @summary Retrieve stake pool metadata
     * @param {string} poolId Bech32 or hexadecimal pool ID.
     * @throws {RequiredError}
     * @memberof PoolsApi
     */
    public stakePoolMetadata(poolId: string) {
        return this.poolsApi.stakePoolMetadata(this.config.appId, this.config.version, poolId);
    }
}