import globalAxios, { AxiosInstance, AxiosRequestConfig } from "axios";
import { BaseAPI, BASE_PATH, PaginateResponse, RequestArgs } from "../base";
import { ApiPromise, assertParamExists, buildPath, DUMMY_BASE_URL, setApiKeyToObject, setSearchParams, toPathString, createRequestFunction } from "../common";
import { Configuration } from "../configuration";
import { Block, BlockTransaction } from "../models/block";

/**
 * BlocksApi - axios parameter creator
 * @export
 */
export const BlocksApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Retrieves information about a block specified by `hash` or `block_no`.
         * @summary Retrieve block
         * @param {string} appId Tangocrypto &#x60;app_id&#x60;.
         * @param {string} version Tangocrypto version.         
         * @param {number} blockNo Block number.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getBlock: async (appId: string, version: string, blockNo: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'appId' is not null or undefined
            assertParamExists('getBlock', 'appId', appId)
            // verify required parameter 'blockNo' is not null or undefined
            assertParamExists('getBlock', 'blockNo', blockNo)
            const localVarPath = buildPath(appId, version, 'blocks', blockNo.toString());
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
         * Retrieves information about a block specified by `hash` or `block_no`.
         * @summary Retrieve block
         * @param {string} appId Tangocrypto &#x60;app_id&#x60;.
         * @param {string} version Tangocrypto version.
         * @param {string} hash Block hash.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getBlockByHash: async (appId: string, version: string, hash: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'appId' is not null or undefined
            assertParamExists('getBlock', 'appId', appId)
            // verify required parameter 'hash' is not null or undefined
            assertParamExists('getBlock', 'hash', hash)
            const localVarPath = buildPath(appId, version, 'blocks', 'hash', hash);
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
         * Returns a list of transactions for a given block. The response is paginated. If truncated, the response includes a cursor that you use in a subsequent request to retrieve the next set of transactions. 
         * @summary List block transactions
         * @param {string} appId Tangocrypto &#x60;app_id&#x60;.
         * @param {string} version Tangocrypto version.
         * @param {number} blockNumber Block number.
         * @param {number} [size] The number of results displayed on one page.
         * @param {string} [cursor] A &#x60;cursor&#x60; to access the next set of results. You include the cursor in subsequent requests to the endpoint as a URL query parameter of your request. If the cursor is empty in the result it means there are no more items to be retrieved. 
         * @param {'asc' | 'desc'} [order] The ordering of the transactions based on block number. By default, we return oldest first, newest last. 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getBlockTransactions: async (appId: string, version: string, blockNumber: number, size?: number, cursor?: string, order?: 'asc' | 'desc', options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'appId' is not null or undefined
            assertParamExists('getBlockTransactions', 'appId', appId)
            // verify required parameter 'blockNumber' is not null or undefined
            assertParamExists('getBlockTransactions', 'blockNumber', blockNumber)
            const localVarPath = buildPath(appId, version, 'blocks', blockNumber.toString(), 'transactions');
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
         * Returns a list of transactions for a given block. The response is paginated. If truncated, the response includes a cursor that you use in a subsequent request to retrieve the next set of transactions. 
         * @summary List block transactions
         * @param {string} appId Tangocrypto &#x60;app_id&#x60;.
         * @param {string} version Tangocrypto version.
         * @param {string} hash Block hash.
         * @param {number} [size] The number of results displayed on one page.
         * @param {string} [cursor] A &#x60;cursor&#x60; to access the next set of results. You include the cursor in subsequent requests to the endpoint as a URL query parameter of your request. If the cursor is empty in the result it means there are no more items to be retrieved. 
         * @param {'asc' | 'desc'} [order] The ordering of the transactions based on block number. By default, we return oldest first, newest last. 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getBlockTransactionsByHash: async (appId: string, version: string, hash: string, size?: number, cursor?: string, order?: 'asc' | 'desc', options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'appId' is not null or undefined
            assertParamExists('getBlockTransactions', 'appId', appId)
            // verify required parameter 'hash' is not null or undefined
            assertParamExists('getBlockTransactions', 'hash', hash)
            const localVarPath = buildPath(appId, version, 'blocks', 'hash', hash, 'transactions');
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
         * Retrieves the latest block available. This is known as the tip of the blockchain.
         * @summary Retrieve latest block
         * @param {string} appId Tangocrypto &#x60;app_id&#x60;.
         * @param {string} version Tangocrypto version.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getLatestBlock: async (appId: string, version: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'appId' is not null or undefined
            assertParamExists('getLatestBlock', 'appId', appId)
            const localVarPath = buildPath(appId, version, 'blocks', 'latest');
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
    }
};

/**
 * BlocksApi - functional programming interface
 * @export
 */
export const BlocksApiFp = function (configuration?: Configuration) {
    const localVarAxiosParamCreator = BlocksApiAxiosParamCreator(configuration)
    return {
        /**
         * Retrieves information about a block specified by `hash` or `block_no`.
         * @summary Retrieve block
         * @param {string} appId Tangocrypto &#x60;app_id&#x60;.
         * @param {string} version Tangocrypto version.
         * @param {number} blockNo Block number.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getBlock(appId: string, version: string, blockNo: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => ApiPromise<Block>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getBlock(appId, version, blockNo, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },

        /**
         * Retrieves information about a block specified by `hash` or `block_no`.
         * @summary Retrieve block
         * @param {string} appId Tangocrypto &#x60;app_id&#x60;.
         * @param {string} version Tangocrypto version.
         * @param {string} hash Block hash.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getBlockByHash(appId: string, version: string, hash: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => ApiPromise<Block>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getBlockByHash(appId, version, hash, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },

        /**
         * Returns a list of transactions for a given block. The response is paginated. If truncated, the response includes a cursor that you use in a subsequent request to retrieve the next set of transactions. 
         * @summary List block transactions
         * @param {string} appId Tangocrypto &#x60;app_id&#x60;.
         * @param {string} version Tangocrypto version.
         * @param {number} blockNumber Block number.
         * @param {number} [size] The number of results displayed on one page.
         * @param {string} [cursor] A &#x60;cursor&#x60; to access the next set of results. You include the cursor in subsequent requests to the endpoint as a URL query parameter of your request. If the cursor is empty in the result it means there are no more items to be retrieved. 
         * @param {'asc' | 'desc'} [order] The ordering of the transactions based on block number. By default, we return oldest first, newest last. 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getBlockTransactions(appId: string, version: string, blockNumber: number, size?: number, cursor?: string, order?: 'asc' | 'desc', options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => ApiPromise<PaginateResponse<BlockTransaction>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getBlockTransactions(appId, version, blockNumber, size, cursor, order, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },

        /**
         * Returns a list of transactions for a given block. The response is paginated. If truncated, the response includes a cursor that you use in a subsequent request to retrieve the next set of transactions. 
         * @summary List block transactions
         * @param {string} appId Tangocrypto &#x60;app_id&#x60;.
         * @param {string} version Tangocrypto version.
         * @param {string} hash Block hash.
         * @param {number} [size] The number of results displayed on one page.
         * @param {string} [cursor] A &#x60;cursor&#x60; to access the next set of results. You include the cursor in subsequent requests to the endpoint as a URL query parameter of your request. If the cursor is empty in the result it means there are no more items to be retrieved. 
         * @param {'asc' | 'desc'} [order] The ordering of the transactions based on block number. By default, we return oldest first, newest last. 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getBlockTransactionsByHash(appId: string, version: string, hash: string, size?: number, cursor?: string, order?: 'asc' | 'desc', options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => ApiPromise<PaginateResponse<BlockTransaction>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getBlockTransactionsByHash(appId, version, hash, size, cursor, order, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },

        /**
         * Retrieves the latest block available. This is known as the tip of the blockchain.
         * @summary Retrieve latest block
         * @param {string} appId Tangocrypto &#x60;app_id&#x60;.
         * @param {string} version Tangocrypto version.         
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getLatestBlock(appId: string, version: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => ApiPromise<Block>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getLatestBlock(appId, version, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * BlocksApi - object-oriented interface
 * @export
 * @class BlocksApi
 * @extends {BaseAPI}
 */
 export class BlocksApi extends BaseAPI {
    /**
     * Retrieves information about a block specified by `hash` or `block_no`.
     * @summary Retrieve block
     * @param {string} appId Tangocrypto &#x60;app_id&#x60;.
     * @param {string} version Tangocrypto version.
     * @param {number} blockNo Block number.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof BlocksApi
     */
    public getBlock(appId: string, version: string, blockNo: number, options?: AxiosRequestConfig) {
        return BlocksApiFp(this.configuration).getBlock(appId, version, blockNo, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Retrieves information about a block specified by `hash` or `block_no`.
     * @summary Retrieve block
     * @param {string} appId Tangocrypto &#x60;app_id&#x60;.
     * @param {string} version Tangocrypto version.
     * @param {string} hash Block hash.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof BlocksApi
     */
    public getBlockByHash(appId: string, version: string, hash: string, options?: AxiosRequestConfig) {
        return BlocksApiFp(this.configuration).getBlockByHash(appId, version, hash, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns a list of transactions for a given block. The response is paginated. If truncated, the response includes a cursor that you use in a subsequent request to retrieve the next set of transactions. 
     * @summary List block transactions
     * @param {string} appId Tangocrypto &#x60;app_id&#x60;.
     * @param {string} version Tangocrypto version.
     * @param {number} blockNumber Block number.
     * @param {number} [size] The number of results displayed on one page.
     * @param {string} [cursor] A &#x60;cursor&#x60; to access the next set of results. You include the cursor in subsequent requests to the endpoint as a URL query parameter of your request. If the cursor is empty in the result it means there are no more items to be retrieved. 
     * @param {'asc' | 'desc'} [order] The ordering of the transactions based on block number. By default, we return oldest first, newest last. 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof BlocksApi
     */
    public getBlockTransactions(appId: string, version: string, blockNumber: number, size?: number, cursor?: string, order?: 'asc' | 'desc', options?: AxiosRequestConfig) {
        return BlocksApiFp(this.configuration).getBlockTransactions(appId, version, blockNumber, size, cursor, order, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns a list of transactions for a given block. The response is paginated. If truncated, the response includes a cursor that you use in a subsequent request to retrieve the next set of transactions. 
     * @summary List block transactions
     * @param {string} appId Tangocrypto &#x60;app_id&#x60;.
     * @param {string} version Tangocrypto version.
     * @param {string} hash Block hash.
     * @param {number} [size] The number of results displayed on one page.
     * @param {string} [cursor] A &#x60;cursor&#x60; to access the next set of results. You include the cursor in subsequent requests to the endpoint as a URL query parameter of your request. If the cursor is empty in the result it means there are no more items to be retrieved. 
     * @param {'asc' | 'desc'} [order] The ordering of the transactions based on block number. By default, we return oldest first, newest last. 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof BlocksApi
     */
    public getBlockTransactionsByHash(appId: string, version: string, hash: string, size?: number, cursor?: string, order?: 'asc' | 'desc', options?: AxiosRequestConfig) {
        return BlocksApiFp(this.configuration).getBlockTransactionsByHash(appId, version, hash, size, cursor, order, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Retrieves the latest block available. This is known as the tip of the blockchain.
     * @summary Retrieve latest block
     * @param {string} appId Tangocrypto &#x60;app_id&#x60;.
     * @param {string} version Tangocrypto version.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof BlocksApi
     */
    public getLatestBlock(appId: string, version: string, options?: AxiosRequestConfig) {
        return BlocksApiFp(this.configuration).getLatestBlock(appId, version, options).then((request) => request(this.axios, this.basePath));
    }
}