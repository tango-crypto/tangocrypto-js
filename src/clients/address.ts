import { AxiosInstance } from "axios";
import { ApiConfiguration } from ".";
import { AddressesApi } from "../apis/addresses";
import { Configuration } from "../configuration";

export class AddressApi {
    addressesApi: AddressesApi;
    config: ApiConfiguration;

    constructor(config: ApiConfiguration, protected axios: AxiosInstance) {
        this.config = config;
        const configuration = new Configuration({
            apiKey: config.apiKey,
            basePath: config.basePath,
            maxAttempts: config.maxAttempts
        })

        // initialize api
        this.addressesApi = new AddressesApi(configuration, configuration.basePath, axios);
    }

     /**
     * Retrieves summarized information of an address.
     * @summary Retrieve address summary
     * @param {string} address Bech32 address.
     * @throws {RequiredError}
     * @memberof AddressesApi
     */
    public getAddressSummary(address: string) {
        return this.addressesApi.getAddressSummary(this.config.appId, this.config.version, address);
    }

    /**
     * Returns a list of assets for a given `address`. The response is paginated. If truncated, the response includes a `cursor` that you use in a subsequent request to retrieve the next set of assets. 
     * @summary List address assets
     * @param {string} address Bech32 address.
     * @param {number} [size] The number of results displayed on one page.
     * @param {string} [cursor] A &#x60;cursor&#x60; to access the next set of results. You include the cursor in subsequent requests to the endpoint as a URL query parameter of your request. If the cursor is empty in the result it means there are no more items to be retrieved. 
     * @param {'asc' | 'desc'} [order] The ordering of items from the point of view of the blockchain. By default, we return oldest first, newest last. 
     * @throws {RequiredError}
     * @memberof AddressesApi
     */
    public listAddressAssets(address: string, size?: number, cursor?: string, order?: 'asc' | 'desc') {
        return this.addressesApi.listAddressAssets(this.config.appId, this.config.version, address, size, cursor, order);
    }

    /**
     * Returns a list of asset utxos for a given `address`. The response is paginated. If truncated, the response includes a `cursor` that you use in a subsequent request to retrieve the next set of assets. 
     * @summary List asset utxos
     * @param {string} address Bech32 address.
     * @param {string} asset Asset `fingerprint` or concatenation of `policy_id` and `asset_name`.
     * @param {number} [size] The number of results displayed on one page.
     * @param {string} [cursor] A &#x60;cursor&#x60; to access the next set of results. You include the cursor in subsequent requests to the endpoint as a URL query parameter of your request. If the cursor is empty in the result it means there are no more items to be retrieved. 
     * @param {'asc' | 'desc'} [order] The ordering of items from the point of view of the blockchain. By default, we return oldest first, newest last. 
     * @throws {RequiredError}
     * @memberof AddressesApi
     */
    public listAddressAssetUtxos(address: string, asset: string, size?: number, cursor?: string, order?: 'asc' | 'desc') {
        return this.addressesApi.listAddressAssetUtxos(this.config.appId, this.config.version, address, asset, size, cursor, order);
    }

    /**
     * Returns a list of UTXOs for a given `address`. The response is paginated. If truncated, the response includes a cursor that you use in a subsequent request to retrieve the next set of transactions. 
     * @summary List address transactions
     * @param {string} address Bech32 address.
     * @param {number} [size] The number of results displayed on one page.
     * @param {string} [cursor] A &#x60;cursor&#x60; to access the next set of results. You include the cursor in subsequent requests to the endpoint as a URL query parameter of your request. If the cursor is empty in the result it means there are no more items to be retrieved. 
     * @param {'asc' | 'desc'} [order] The ordering of items from the point of view of the blockchain. By default, we return oldest first, newest last. 
     * @throws {RequiredError}
     * @memberof AddressesApi
     */
    public listAddressTransactions(address: string, size?: number, cursor?: string, order?: 'asc' | 'desc') {
        return this.addressesApi.listAddressTransactions(this.config.appId, this.config.version, address, size, cursor, order);
    }

    /**
     * Returns a list of UTXOs for a given `address`. The response is paginated. If truncated, the response includes a `cursor` that you use in a subsequent request to retrieve the next set of UTXOs. 
     * @summary List address UTXOs
     * @param {string} address Bech32 address.
     * @param {number} [size] The number of results displayed on one page.
     * @param {string} [cursor] A &#x60;cursor&#x60; to access the next set of results. You include the cursor in subsequent requests to the endpoint as a URL query parameter of your request. If the cursor is empty in the result it means there are no more items to be retrieved. 
     * @param {'asc' | 'desc'} [order] The ordering of items from the point of view of the blockchain. By default, we return oldest first, newest last. 
     * @throws {RequiredError}
     * @memberof AddressesApi
     */
    public listAddressUtxos(address: string, size?: number, cursor?: string, order?: 'asc' | 'desc') {
        return this.addressesApi.listAddressUtxos(this.config.appId, this.config.version, address, size, cursor, order);
    }
}