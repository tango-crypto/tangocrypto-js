import { AxiosInstance } from "axios";
import { ClientConfiguration } from ".";
import { WalletsApi } from "../api";
import { Configuration } from "../configuration";

export class WalletApi {
    walletsApi: WalletsApi;
    config: ClientConfiguration;

    constructor(config: ClientConfiguration, protected axios: AxiosInstance) {
        this.config = config;
        const configuration = new Configuration({
            apiKey: config.apiKey,
            basePath: config.basePath
        })

        // initialize api
        this.walletsApi = new WalletsApi(configuration, configuration.basePath, axios);
    }

     /**
     * Retrieve wallet summary specified by `stake_address`.
     * @summary Retrieve wallet summary
     * @param {string} stakeAddress The Bech32 encoded version of the stake address.
     * @throws {RequiredError}
     * @memberof WalletsApi
     */
      public getWalletsStake(stakeAddress: string) {
        return this.walletsApi.getWalletsStake(this.config.appId, this.config.version, stakeAddress).then(response => response.data);
    }

    /**
     * Returns a list of addreses for a given wallet `stake_address`. The response is paginated. If truncated, the response includes a cursor that you use in a subsequent request to retrieve the next set of addresses. 
     * @summary List wallet addresses
     * @param {string} stakeAddress 
     * @param {number} [size] The number of results displayed on one page.
     * @param {string} [cursor] A &#x60;cursor&#x60; to access the next set of results. You include the cursor in subsequent requests to the endpoint as a URL query parameter of your request. If the cursor is empty in the result it means there are no more items to be retrieved. 
     * @param {'asc' | 'desc'} [order] The ordering of items from the point of view of the blockchain. By default, we return oldest first, newest last. 
     * @throws {RequiredError}
     * @memberof WalletsApi
     */
    public listStakeAddressAddresses(stakeAddress: string, size?: number, cursor?: string, order?: 'asc' | 'desc') {
        return this.walletsApi.listStakeAddressAddresses(this.config.appId, this.config.version, stakeAddress, size, cursor, order).then(response => response.data);
    }
}