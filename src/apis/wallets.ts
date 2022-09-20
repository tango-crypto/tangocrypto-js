
import globalAxios, { AxiosInstance, AxiosRequestConfig } from "axios";
import { BaseAPI, BASE_PATH, PaginateResponse, RequestArgs } from "../base";
import { ApiPromise, assertParamExists, buildPath, DUMMY_BASE_URL, setApiKeyToObject, setSearchParams, toPathString, createRequestFunction } from "../common";
import { Configuration } from "../configuration";
import { WalletAddress, WalletSummary } from "../models/wallet";

/**
 * WalletsApi - axios parameter creator
 * @export
 */
 export const WalletsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Retrieve wallet summary specified by `stake_address`.
         * @summary Retrieve wallet summary
         * @param {string} appId Tangocrypto &#x60;app_id&#x60;.
         * @param {string} version Tangocrypto version.
         * @param {string} stakeAddress The Bech32 encoded version of the stake address.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getWalletsStake: async (appId: string, version: string, stakeAddress: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'appId' is not null or undefined
            assertParamExists('getWalletsStake', 'appId', appId)
            // verify required parameter 'stakeAddress' is not null or undefined
            assertParamExists('getWalletsStake', 'stakeAddress', stakeAddress)
            const localVarPath = buildPath(appId, version, 'wallets', stakeAddress);
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
         * Returns a list of addreses for a given wallet `stake_address`. The response is paginated. If truncated, the response includes a cursor that you use in a subsequent request to retrieve the next set of addresses. 
         * @summary List wallet addresses
         * @param {string} appId Tangocrypto &#x60;app_id&#x60;.
         * @param {string} version Tangocrypto version.
         * @param {string} stakeAddress 
         * @param {number} [size] The number of results displayed on one page.
         * @param {string} [cursor] A &#x60;cursor&#x60; to access the next set of results. You include the cursor in subsequent requests to the endpoint as a URL query parameter of your request. If the cursor is empty in the result it means there are no more items to be retrieved. 
         * @param {'asc' | 'desc'} [order] The ordering of items from the point of view of the blockchain. By default, we return oldest first, newest last. 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listStakeAddressAddresses: async (appId: string, version: string, stakeAddress: string, size?: number, cursor?: string, order?: 'asc' | 'desc', options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'appId' is not null or undefined
            assertParamExists('listStakeAddressAddresses', 'appId', appId)
            // verify required parameter 'stakeAddress' is not null or undefined
            assertParamExists('listStakeAddressAddresses', 'stakeAddress', stakeAddress)
            const localVarPath = buildPath(appId, version, 'wallets', stakeAddress, 'addresses');
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
 * WalletsApi - functional programming interface
 * @export
 */
export const WalletsApiFp = function (configuration?: Configuration) {
    const localVarAxiosParamCreator = WalletsApiAxiosParamCreator(configuration)
    return {
        /**
         * Retrieve wallet summary specified by `stake_address`.
         * @summary Retrieve wallet summary
         * @param {string} appId Tangocrypto &#x60;app_id&#x60;.
         * @param {string} version Tangocrypto version.
         * @param {string} stakeAddress The Bech32 encoded version of the stake address.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getWalletsStake(appId: string, version: string, stakeAddress: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => ApiPromise<WalletSummary>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getWalletsStake(appId, version, stakeAddress, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },

        /**
         * Returns a list of addreses for a given wallet `stake_address`. The response is paginated. If truncated, the response includes a cursor that you use in a subsequent request to retrieve the next set of addresses. 
         * @summary List wallet addresses
         * @param {string} appId Tangocrypto &#x60;app_id&#x60;.
         * @param {string} version Tangocrypto version.
         * @param {string} stakeAddress 
         * @param {number} [size] The number of results displayed on one page.
         * @param {string} [cursor] A &#x60;cursor&#x60; to access the next set of results. You include the cursor in subsequent requests to the endpoint as a URL query parameter of your request. If the cursor is empty in the result it means there are no more items to be retrieved. 
         * @param {'asc' | 'desc'} [order] The ordering of items from the point of view of the blockchain. By default, we return oldest first, newest last. 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async listStakeAddressAddresses(appId: string, version: string, stakeAddress: string, size?: number, cursor?: string, order?: 'asc' | 'desc', options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => ApiPromise<PaginateResponse<WalletAddress>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.listStakeAddressAddresses(appId, version, stakeAddress, size, cursor, order, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * WalletsApi - object-oriented interface
 * @export
 * @class WalletsApi
 * @extends {BaseAPI}
 */
export class WalletsApi extends BaseAPI {
    /**
     * Retrieve wallet summary specified by `stake_address`.
     * @summary Retrieve wallet summary
     * @param {string} appId Tangocrypto &#x60;app_id&#x60;.
     * @param {string} version Tangocrypto version.
     * @param {string} stakeAddress The Bech32 encoded version of the stake address.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof WalletsApi
     */
    public getWalletsStake(appId: string, version: string, stakeAddress: string, options?: AxiosRequestConfig) {
        return WalletsApiFp(this.configuration).getWalletsStake(appId, version, stakeAddress, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns a list of addreses for a given wallet `stake_address`. The response is paginated. If truncated, the response includes a cursor that you use in a subsequent request to retrieve the next set of addresses. 
     * @summary List wallet addresses
     * @param {string} appId Tangocrypto &#x60;app_id&#x60;.
     * @param {string} version Tangocrypto version.
     * @param {string} stakeAddress 
     * @param {number} [size] The number of results displayed on one page.
     * @param {string} [cursor] A &#x60;cursor&#x60; to access the next set of results. You include the cursor in subsequent requests to the endpoint as a URL query parameter of your request. If the cursor is empty in the result it means there are no more items to be retrieved. 
     * @param {'asc' | 'desc'} [order] The ordering of items from the point of view of the blockchain. By default, we return oldest first, newest last. 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof WalletsApi
     */
    public listStakeAddressAddresses(appId: string, version: string, stakeAddress: string, size?: number, cursor?: string, order?: 'asc' | 'desc', options?: AxiosRequestConfig) {
        return WalletsApiFp(this.configuration).listStakeAddressAddresses(appId, version, stakeAddress, size, cursor, order, options).then((request) => request(this.axios, this.basePath));
    }
}