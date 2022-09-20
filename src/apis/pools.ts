import globalAxios, { AxiosInstance, AxiosRequestConfig } from "axios";
import { BaseAPI, BASE_PATH, PaginateResponse, RequestArgs } from "../base";
import { ApiPromise, assertParamExists, buildPath, DUMMY_BASE_URL, setApiKeyToObject, setSearchParams, toPathString, createRequestFunction } from "../common";
import { Configuration } from "../configuration";
import { Delegation } from "../models/delegation";
import { PoolInfo } from "../models/pool-info";

/**
 * PoolsApi - axios parameter creator
 * @export
 */
 export const PoolsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Returns a list of delegations for a given stake pool. The response is paginated. If truncated, the response includes a cursor that you use in a subsequent request to retrieve the next set of delegations. 
         * @summary List stake pool delegations
         * @param {string} appId Tangocrypto &#x60;app_id&#x60;.
         * @param {string} version Tangocrypto version.         
         * @param {string} poolId Bech32 or hexadecimal pool ID.
         * @param {number} [size] The number of results displayed on one page.
         * @param {string} [cursor] A &#x60;cursor&#x60; to access the next set of results. You include the cursor in subsequent requests to the endpoint as a URL query parameter of your request. If the cursor is empty in the result it means there are no more items to be retrieved. 
         * @param {'asc' | 'desc'} [order] The ordering of items from the point of view of the blockchain. By default, we return oldest first, newest last.          
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        stakePoolDelegations: async (appId: string, version: string, poolId: string, size?: number, cursor?: string, order?: 'asc' | 'desc', options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'appId' is not null or undefined
            assertParamExists('stakePoolDelegations', 'appId', appId)
            // verify required parameter 'poolId' is not null or undefined
            assertParamExists('stakePoolDelegations', 'poolId', poolId)
            const localVarPath = buildPath(appId, version, 'pools', poolId, 'delegations');
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
         * Retrieve stake pool registration metadata specified by a `pool_id`. 
         * @summary Retrieve stake pool metadata
         * @param {string} appId Tangocrypto &#x60;app_id&#x60;.
         * @param {string} version Tangocrypto version.          
         * @param {string} poolId Bech32 or hexadecimal pool ID.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        stakePoolMetadata: async (appId: string, version: string, poolId: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'appId' is not null or undefined
            assertParamExists('stakePoolMetadata', 'appId', appId)
            // verify required parameter 'poolId' is not null or undefined
            assertParamExists('stakePoolMetadata', 'poolId', poolId)
            const localVarPath = buildPath(appId, version, 'pools', poolId);
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
 * PoolsApi - functional programming interface
 * @export
 */
export const PoolsApiFp = function (configuration?: Configuration) {
    const localVarAxiosParamCreator = PoolsApiAxiosParamCreator(configuration)
    return {
        /**
         * Returns a list of delegations for a given stake pool. The response is paginated. If truncated, the response includes a cursor that you use in a subsequent request to retrieve the next set of delegations. 
         * @summary List stake pool delegations
         * @param {string} appId Tangocrypto &#x60;app_id&#x60;.
         * @param {string} version Tangocrypto version.
         * @param {string} poolId Bech32 or hexadecimal pool ID.
         * @param {number} [size] The number of results displayed on one page.
         * @param {string} [cursor] A &#x60;cursor&#x60; to access the next set of results. You include the cursor in subsequent requests to the endpoint as a URL query parameter of your request. If the cursor is empty in the result it means there are no more items to be retrieved. 
         * @param {'asc' | 'desc'} [order] The ordering of items from the point of view of the blockchain. By default, we return oldest first, newest last.         
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async stakePoolDelegations(appId: string, version: string, poolId: string, size?: number, cursor?: string, order?: 'asc' | 'desc', options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => ApiPromise<PaginateResponse<Delegation>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.stakePoolDelegations(appId, version, poolId, size, cursor, order, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },

        /**
         * Retrieve stake pool registration metadata specified by a `pool_id`. 
         * @summary Retrieve stake pool metadata
         * @param {string} appId Tangocrypto &#x60;app_id&#x60;.
         * @param {string} version Tangocrypto version.         
         * @param {string} poolId Bech32 or hexadecimal pool ID.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async stakePoolMetadata(appId: string, version: string, poolId: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => ApiPromise<PoolInfo>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.stakePoolMetadata(appId, version, poolId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * PoolsApi - factory interface
 * @export
 */
export const PoolsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = PoolsApiFp(configuration)
    return {
        /**
         * Returns a list of delegations for a given stake pool. The response is paginated. If truncated, the response includes a cursor that you use in a subsequent request to retrieve the next set of delegations. 
         * @summary List stake pool delegations
         * @param {string} appId Tangocrypto &#x60;app_id&#x60;.
         * @param {string} poolId Bech32 or hexadecimal pool ID.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        stakePoolDelegations(appId: string, poolId: string, options?: any): ApiPromise<PaginateResponse<Delegation>> {
            return localVarFp.stakePoolDelegations(appId, poolId, options).then((request) => request(axios, basePath));
        },
        /**
         * Retrieve stake pool registration metadata specified by a `pool_id`. 
         * @summary Retrieve stake pool metadata
         * @param {string} appId Tangocrypto &#x60;app_id&#x60;.
         * @param {string} poolId Bech32 or hexadecimal pool ID.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        stakePoolMetadata(appId: string, poolId: string, options?: any): ApiPromise<PoolInfo> {
            return localVarFp.stakePoolMetadata(appId, poolId, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * PoolsApi - object-oriented interface
 * @export
 * @class PoolsApi
 * @extends {BaseAPI}
 */
export class PoolsApi extends BaseAPI {
    /**
     * Returns a list of delegations for a given stake pool. The response is paginated. If truncated, the response includes a cursor that you use in a subsequent request to retrieve the next set of delegations. 
     * @summary List stake pool delegations
     * @param {string} appId Tangocrypto &#x60;app_id&#x60;.
     * @param {string} version Tangocrypto version.
     * @param {string} poolId Bech32 or hexadecimal pool ID.
     * @param {number} [size] The number of results displayed on one page.
     * @param {string} [cursor] A &#x60;cursor&#x60; to access the next set of results. You include the cursor in subsequent requests to the endpoint as a URL query parameter of your request. If the cursor is empty in the result it means there are no more items to be retrieved. 
     * @param {'asc' | 'desc'} [order] The ordering of items from the point of view of the blockchain. By default, we return oldest first, newest last.     
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PoolsApi
     */
    public stakePoolDelegations(appId: string, version: string, poolId: string, size?: number, cursor?: string, order?: 'asc' | 'desc', options?: AxiosRequestConfig) {
        return PoolsApiFp(this.configuration).stakePoolDelegations(appId, version, poolId, size, cursor, order, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Retrieve stake pool registration metadata specified by a `pool_id`. 
     * @summary Retrieve stake pool metadata
     * @param {string} appId Tangocrypto &#x60;app_id&#x60;.
     * @param {string} version Tangocrypto version.
     * @param {string} poolId Bech32 or hexadecimal pool ID.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PoolsApi
     */
    public stakePoolMetadata(appId: string, version: string, poolId: string, options?: AxiosRequestConfig) {
        return PoolsApiFp(this.configuration).stakePoolMetadata(appId, version, poolId, options).then((request) => request(this.axios, this.basePath));
    }
}