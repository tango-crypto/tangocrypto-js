import globalAxios, { AxiosInstance, AxiosRequestConfig } from "axios";
import { BaseAPI, BASE_PATH, PaginateResponse, RequestArgs } from "../base";
import { ApiPromise, assertParamExists, buildPath, DUMMY_BASE_URL, setApiKeyToObject, setSearchParams, toPathString, createRequestFunction } from "../common";
import { Configuration } from "../configuration";
import { AddressSummary } from "../models/address-summary";
import { Asset } from "../models/asset";
import { AddressTransaction } from "../models/address-transaction";
import { Utxo } from "../models/utxo";

/**
 * AddressesApi - axios parameter creator
 * @export
 */
 export const AddressesApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Retrieves summarized information of an address.
         * @summary Retrieve address summary
         * @param {string} appId Tangocrypto &#x60;app_id&#x60;.
         * @param {string} version Tangocrypto version.            
         * @param {string} address Bech32 address.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getAddressSummary: async (appId: string, version: string, address: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'appId' is not null or undefined
            assertParamExists('getAddressSummary', 'appId', appId)
            // verify required parameter 'address' is not null or undefined
            assertParamExists('getAddressSummary', 'address', address)
            const localVarPath = buildPath(appId, version, 'addresses', address);
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication x-api-key required
            await setApiKeyToObject(localVarHeaderParameter, "x-api-key", configuration)



            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers };

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },

        /**
         * Returns a list of assets for a given `address`. The response is paginated. If truncated, the response includes a `cursor` that you use in a subsequent request to retrieve the next set of assets. 
         * @summary List address assets
         * @param {string} appId Tangocrypto &#x60;app_id&#x60;.
         * @param {string} version Tangocrypto version.
         * @param {string} address Bech32 address.
         * @param {number} [size] The number of results displayed on one page.
         * @param {string} [cursor] A &#x60;cursor&#x60; to access the next set of results. You include the cursor in subsequent requests to the endpoint as a URL query parameter of your request. If the cursor is empty in the result it means there are no more items to be retrieved. 
         * @param {'asc' | 'desc'} [order] The ordering of items from the point of view of the blockchain. By default, we return oldest first, newest last. 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listAddressAssets: async (appId: string, version: string, address: string, size?: number, cursor?: string, order?: 'asc' | 'desc', options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'appId' is not null or undefined
            assertParamExists('listAddressAssets', 'appId', appId)
            // verify required parameter 'address' is not null or undefined
            assertParamExists('listAddressAssets', 'address', address)
            const localVarPath = buildPath(appId, version, 'addresses', address, 'assets');
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication x-api-key required
            await setApiKeyToObject(localVarHeaderParameter, "x-api-key", configuration)

            if (size !== undefined) {
                localVarQueryParameter['size'] = size;
            }

            if (cursor !== undefined) {
                localVarQueryParameter['cursor'] = cursor;
            }

            if (order !== undefined) {
                localVarQueryParameter['order'] = order;
            }



            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers };

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },

        /**
         * Returns a list of UTXOs for a given `address`. The response is paginated. If truncated, the response includes a cursor that you use in a subsequent request to retrieve the next set of transactions. 
         * @summary List address transactions
         * @param {string} appId Tangocrypto &#x60;app_id&#x60;.
         * @param {string} version Tangocrypto version.
         * @param {string} address Bech32 address.
         * @param {number} [size] The number of results displayed on one page.
         * @param {string} [cursor] A &#x60;cursor&#x60; to access the next set of results. You include the cursor in subsequent requests to the endpoint as a URL query parameter of your request. If the cursor is empty in the result it means there are no more items to be retrieved. 
         * @param {'asc' | 'desc'} [order] The ordering of items from the point of view of the blockchain. By default, we return oldest first, newest last. 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listAddressTransactions: async (appId: string, version: string, address: string, size?: number, cursor?: string, order?: 'asc' | 'desc', options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'appId' is not null or undefined
            assertParamExists('listAddressTransactions', 'appId', appId)
            // verify required parameter 'address' is not null or undefined
            assertParamExists('listAddressTransactions', 'address', address)
            const localVarPath = buildPath(appId, version, 'addresses', address, 'transactions');
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication x-api-key required
            await setApiKeyToObject(localVarHeaderParameter, "x-api-key", configuration)

            if (size !== undefined) {
                localVarQueryParameter['size'] = size;
            }

            if (cursor !== undefined) {
                localVarQueryParameter['cursor'] = cursor;
            }

            if (order !== undefined) {
                localVarQueryParameter['order'] = order;
            }



            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers };

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },

        /**
         * Returns a list of UTXOs for a given `address`. The response is paginated. If truncated, the response includes a `cursor` that you use in a subsequent request to retrieve the next set of UTXOs. 
         * @summary List address UTXOs
         * @param {string} appId Tangocrypto &#x60;app_id&#x60;.
         * @param {string} version Tangocrypto version.
         * @param {string} address Bech32 address.
         * @param {number} [size] The number of results displayed on one page.
         * @param {string} [cursor] A &#x60;cursor&#x60; to access the next set of results. You include the cursor in subsequent requests to the endpoint as a URL query parameter of your request. If the cursor is empty in the result it means there are no more items to be retrieved. 
         * @param {'asc' | 'desc'} [order] The ordering of items from the point of view of the blockchain. By default, we return oldest first, newest last. 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listAddressUtxos: async (appId: string, version: string, address: string, size?: number, cursor?: string, order?: 'asc' | 'desc', options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'appId' is not null or undefined
            assertParamExists('listAddressUtxos', 'appId', appId)
            // verify required parameter 'address' is not null or undefined
            assertParamExists('listAddressUtxos', 'address', address)
            const localVarPath = buildPath(appId, version, 'addresses', address, 'utxos');
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication x-api-key required
            await setApiKeyToObject(localVarHeaderParameter, "x-api-key", configuration)

            if (size !== undefined) {
                localVarQueryParameter['size'] = size;
            }

            if (cursor !== undefined) {
                localVarQueryParameter['cursor'] = cursor;
            }

            if (order !== undefined) {
                localVarQueryParameter['order'] = order;
            }



            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers };

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * AddressesApi - functional programming interface
 * @export
 */
export const AddressesApiFp = function (configuration?: Configuration) {
    const localVarAxiosParamCreator = AddressesApiAxiosParamCreator(configuration)
    return {
        /**
         * Retrieves summarized information of an address.
         * @summary Retrieve address summary
         * @param {string} appId Tangocrypto &#x60;app_id&#x60;.
         * @param {string} version Tangocrypto version.         
         * @param {string} address Bech32 address.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getAddressSummary(appId: string, version: string, address: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => ApiPromise<AddressSummary>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getAddressSummary(appId, version, address, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },

        /**
         * Returns a list of assets for a given `address`. The response is paginated. If truncated, the response includes a `cursor` that you use in a subsequent request to retrieve the next set of assets. 
         * @summary List address assets
         * @param {string} appId Tangocrypto &#x60;app_id&#x60;.
         * @param {string} version Tangocrypto version.         
         * @param {string} address Bech32 address.
         * @param {number} [size] The number of results displayed on one page.
         * @param {string} [cursor] A &#x60;cursor&#x60; to access the next set of results. You include the cursor in subsequent requests to the endpoint as a URL query parameter of your request. If the cursor is empty in the result it means there are no more items to be retrieved. 
         * @param {'asc' | 'desc'} [order] The ordering of items from the point of view of the blockchain. By default, we return oldest first, newest last. 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async listAddressAssets(appId: string, version: string, address: string, size?: number, cursor?: string, order?: 'asc' | 'desc', options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => ApiPromise<PaginateResponse<Asset>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.listAddressAssets(appId, version, address, size, cursor, order, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },

        /**
         * Returns a list of UTXOs for a given `address`. The response is paginated. If truncated, the response includes a cursor that you use in a subsequent request to retrieve the next set of transactions. 
         * @summary List address transactions
         * @param {string} appId Tangocrypto &#x60;app_id&#x60;.
         * @param {string} version Tangocrypto version.            
         * @param {string} address Bech32 address.
         * @param {number} [size] The number of results displayed on one page.
         * @param {string} [cursor] A &#x60;cursor&#x60; to access the next set of results. You include the cursor in subsequent requests to the endpoint as a URL query parameter of your request. If the cursor is empty in the result it means there are no more items to be retrieved. 
         * @param {'asc' | 'desc'} [order] The ordering of items from the point of view of the blockchain. By default, we return oldest first, newest last. 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async listAddressTransactions(appId: string, version: string, address: string, size?: number, cursor?: string, order?: 'asc' | 'desc', options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => ApiPromise<PaginateResponse<AddressTransaction>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.listAddressTransactions(appId, version, address, size, cursor, order, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },

        /**
         * Returns a list of UTXOs for a given `address`. The response is paginated. If truncated, the response includes a `cursor` that you use in a subsequent request to retrieve the next set of UTXOs. 
         * @summary List address UTXOs
         * @param {string} appId Tangocrypto &#x60;app_id&#x60;.
         * @param {string} version Tangocrypto version.
         * @param {string} address Bech32 address.
         * @param {number} [size] The number of results displayed on one page.
         * @param {string} [cursor] A &#x60;cursor&#x60; to access the next set of results. You include the cursor in subsequent requests to the endpoint as a URL query parameter of your request. If the cursor is empty in the result it means there are no more items to be retrieved. 
         * @param {'asc' | 'desc'} [order] The ordering of items from the point of view of the blockchain. By default, we return oldest first, newest last. 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async listAddressUtxos(appId: string, version: string, address: string, size?: number, cursor?: string, order?: 'asc' | 'desc', options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => ApiPromise<PaginateResponse<Utxo>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.listAddressUtxos(appId, version, address, size, cursor, order, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * AddressesApi - object-oriented interface
 * @export
 * @class AddressesApi
 * @extends {BaseAPI}
 */
 export class AddressesApi extends BaseAPI {
    /**
     * Retrieves summarized information of an address.
     * @summary Retrieve address summary
     * @param {string} appId Tangocrypto &#x60;app_id&#x60;.
     * @param {string} version Tangocrypto version.
     * @param {string} address Bech32 address.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AddressesApi
     */
    public getAddressSummary(appId: string, version: string, address: string, options?: AxiosRequestConfig) {
        return AddressesApiFp(this.configuration).getAddressSummary(appId, version, address, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns a list of assets for a given `address`. The response is paginated. If truncated, the response includes a `cursor` that you use in a subsequent request to retrieve the next set of assets. 
     * @summary List address assets
     * @param {string} appId Tangocrypto &#x60;app_id&#x60;.
     * @param {string} version Tangocrypto version.     
     * @param {string} address Bech32 address.
     * @param {number} [size] The number of results displayed on one page.
     * @param {string} [cursor] A &#x60;cursor&#x60; to access the next set of results. You include the cursor in subsequent requests to the endpoint as a URL query parameter of your request. If the cursor is empty in the result it means there are no more items to be retrieved. 
     * @param {'asc' | 'desc'} [order] The ordering of items from the point of view of the blockchain. By default, we return oldest first, newest last. 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AddressesApi
     */
    public listAddressAssets(appId: string, version: string, address: string, size?: number, cursor?: string, order?: 'asc' | 'desc', options?: AxiosRequestConfig) {
        return AddressesApiFp(this.configuration).listAddressAssets(appId, version, address, size, cursor, order, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns a list of UTXOs for a given `address`. The response is paginated. If truncated, the response includes a cursor that you use in a subsequent request to retrieve the next set of transactions. 
     * @summary List address transactions
     * @param {string} appId Tangocrypto &#x60;app_id&#x60;.
     * @param {string} version Tangocrypto version.     
     * @param {string} address Bech32 address.
     * @param {number} [size] The number of results displayed on one page.
     * @param {string} [cursor] A &#x60;cursor&#x60; to access the next set of results. You include the cursor in subsequent requests to the endpoint as a URL query parameter of your request. If the cursor is empty in the result it means there are no more items to be retrieved. 
     * @param {'asc' | 'desc'} [order] The ordering of items from the point of view of the blockchain. By default, we return oldest first, newest last. 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AddressesApi
     */
    public listAddressTransactions(appId: string, version: string, address: string, size?: number, cursor?: string, order?: 'asc' | 'desc', options?: AxiosRequestConfig) {
        return AddressesApiFp(this.configuration).listAddressTransactions(appId, version, address, size, cursor, order, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns a list of UTXOs for a given `address`. The response is paginated. If truncated, the response includes a `cursor` that you use in a subsequent request to retrieve the next set of UTXOs. 
     * @summary List address UTXOs
     * @param {string} appId Tangocrypto &#x60;app_id&#x60;.
     * @param {string} version Tangocrypto version.     
     * @param {string} address Bech32 address.
     * @param {number} [size] The number of results displayed on one page.
     * @param {string} [cursor] A &#x60;cursor&#x60; to access the next set of results. You include the cursor in subsequent requests to the endpoint as a URL query parameter of your request. If the cursor is empty in the result it means there are no more items to be retrieved. 
     * @param {'asc' | 'desc'} [order] The ordering of items from the point of view of the blockchain. By default, we return oldest first, newest last. 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AddressesApi
     */
    public listAddressUtxos(appId: string, version: string, address: string, size?: number, cursor?: string, order?: 'asc' | 'desc', options?: AxiosRequestConfig) {
        return AddressesApiFp(this.configuration).listAddressUtxos(appId, version, address, size, cursor, order, options).then((request) => request(this.axios, this.basePath));
    }
}