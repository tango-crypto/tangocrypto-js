import globalAxios, { AxiosInstance, AxiosRequestConfig } from "axios";
import { BaseAPI, BASE_PATH, PaginateResponse, RequestArgs } from "../base";
import { ApiPromise, assertParamExists, buildPath, DUMMY_BASE_URL, setApiKeyToObject, setSearchParams, toPathString, createRequestFunction } from "../common";
import { Configuration } from "../configuration";
import { Asset, AssetAddress } from "../models/asset";

/**
 * AssetsApi - axios parameter creator
 * @export
 */
 export const AssetsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Retrieves information about an asset
         * @summary Retrieve asset
         * @param {string} appId Tangocrypto &#x60;app_id&#x60;.
         * @param {string} version Tangocrypto version.              
         * @param {string} asset Concatenation of the policy_id and hex-encoded asset_name
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getAsset: async (appId: string, version: string, asset: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'appId' is not null or undefined
            assertParamExists('getAsset', 'appId', appId)
            // verify required parameter 'asset' is not null or undefined
            assertParamExists('getAsset', 'asset', asset)
            const localVarPath = buildPath(appId, version, 'assets', asset);
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
         * Retrieves information about an asset
         * @summary Retrieve asset by fingerprint
         * @param {string} appId Tangocrypto &#x60;app_id&#x60;.
         * @param {string} version Tangocrypto version.              
         * @param {string} fingerprint The CIP14 fingerprint for the Multi-Asset.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getAssetByFingerprint: async (appId: string, version: string, fingerprint: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'appId' is not null or undefined
            assertParamExists('getAssetByFingerprint', 'appId', appId)
            // verify required parameter 'fingerprint' is not null or undefined
            assertParamExists('getAssetByFingerprint', 'fingerprint', fingerprint)
            const localVarPath = buildPath(appId, version, 'assets', 'fingerprint', fingerprint);
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
         * Returns a list of addresses and quantities for a given asset. The response is paginated to make the result set easier to handle. If truncated, the response includes a `cursor` that you use in a subsequent request to retrieve the next batch of addresses. To learn more about how pagination works, visit https://docs.tangocrypto.com/rest-api/pagination 
         * @summary List asset addresses
         * @param {string} appId Tangocrypto &#x60;app_id&#x60;.
         * @param {string} version Tangocrypto version.          
         * @param {string} asset Concatenation of the policy_id and hex-encoded asset_name
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listAssetAddresses: async (appId: string, version: string, asset: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'appId' is not null or undefined
            assertParamExists('listAssetAddresses', 'appId', appId)
            // verify required parameter 'asset' is not null or undefined
            assertParamExists('listAssetAddresses', 'asset', asset)
            const localVarPath = buildPath(appId, version, 'assets', asset, 'addresses');
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
         * Returns a list of addresses and quantities holding the given asset. The response is paginated to make the result set easier to handle. If truncated, the response includes a `cursor` that you use in a subsequent request to retrieve the next batch of owners. To learn more about how pagination works, visit https://docs.tangocrypto.com/rest-api/pagination 
         * @summary List asset addresses by fingerprint
         * @param {string} appId Tangocrypto &#x60;app_id&#x60;.
         * @param {string} version Tangocrypto version.             
         * @param {string} fingerprint The CIP14 fingerprint for the Multi-Asset.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listAssetAddressesFingerprint: async (appId: string, version: string, fingerprint: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'appId' is not null or undefined
            assertParamExists('listAssetAddressesFingerprint', 'appId', appId)
            // verify required parameter 'fingerprint' is not null or undefined
            assertParamExists('listAssetAddressesFingerprint', 'fingerprint', fingerprint)
            const localVarPath = buildPath(appId, version, 'assets', 'fingerprint', fingerprint, 'addresses');
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
 * AssetsApi - functional programming interface
 * @export
 */
export const AssetsApiFp = function (configuration?: Configuration) {
    const localVarAxiosParamCreator = AssetsApiAxiosParamCreator(configuration)
    return {
        /**
         * Retrieves information about an asset
         * @summary Retrieve asset
         * @param {string} appId Tangocrypto &#x60;app_id&#x60;.
         * @param {string} version Tangocrypto version.         
         * @param {string} asset Concatenation of the policy_id and hex-encoded asset_name
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getAsset(appId: string, version: string, asset: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => ApiPromise<Asset>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getAsset(appId, version, asset, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },

        /**
         * Retrieves information about an asset
         * @summary Retrieve asset by fingerprint
         * @param {string} appId Tangocrypto &#x60;app_id&#x60;.
         * @param {string} version Tangocrypto version.             
         * @param {string} fingerprint The CIP14 fingerprint for the Multi-Asset.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getAssetByFingerprint(appId: string, version: string, fingerprint: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => ApiPromise<Asset>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getAssetByFingerprint(appId, version, fingerprint, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },

        /**
         * Returns a list of addresses and quantities for a given asset. The response is paginated to make the result set easier to handle. If truncated, the response includes a `cursor` that you use in a subsequent request to retrieve the next batch of addresses. To learn more about how pagination works, visit https://docs.tangocrypto.com/rest-api/pagination 
         * @summary List asset addresses
         * @param {string} appId Tangocrypto &#x60;app_id&#x60;.
         * @param {string} version Tangocrypto version.             
         * @param {string} asset Concatenation of the policy_id and hex-encoded asset_name
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async listAssetAddresses(appId: string, version: string, asset: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => ApiPromise<PaginateResponse<AssetAddress>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.listAssetAddresses(appId, version, asset, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },

        /**
         * Returns a list of addresses and quantities holding the given asset. The response is paginated to make the result set easier to handle. If truncated, the response includes a `cursor` that you use in a subsequent request to retrieve the next batch of owners. To learn more about how pagination works, visit https://docs.tangocrypto.com/rest-api/pagination 
         * @summary List asset addresses by fingerprint
         * @param {string} appId Tangocrypto &#x60;app_id&#x60;.
         * @param {string} version Tangocrypto version.             
         * @param {string} fingerprint The CIP14 fingerprint for the Multi-Asset.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async listAssetAddressesFingerprint(appId: string, version: string, fingerprint: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => ApiPromise<Asset>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.listAssetAddressesFingerprint(appId, version, fingerprint, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * AssetsApi - object-oriented interface
 * @export
 * @class AssetsApi
 * @extends {BaseAPI}
 */
 export class AssetsApi extends BaseAPI {
    /**
     * Retrieves information about an asset
     * @summary Retrieve asset
     * @param {string} appId Tangocrypto &#x60;app_id&#x60;.
     * @param {string} version Tangocrypto version.
     * @param {string} asset Concatenation of the policy_id and hex-encoded asset_name
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AssetsApi
     */
    public getAsset(appId: string, version: string, asset: string, options?: AxiosRequestConfig) {
        return AssetsApiFp(this.configuration).getAsset(appId, version, asset, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Retrieves information about an asset
     * @summary Retrieve asset by fingerprint
     * @param {string} appId Tangocrypto &#x60;app_id&#x60;.
     * @param {string} version Tangocrypto version.     
     * @param {string} fingerprint The CIP14 fingerprint for the Multi-Asset.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AssetsApi
     */
    public getAssetByFingerprint(appId: string, version: string, fingerprint: string, options?: AxiosRequestConfig) {
        return AssetsApiFp(this.configuration).getAssetByFingerprint(appId, version, fingerprint, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns a list of addresses and quantities for a given asset. The response is paginated to make the result set easier to handle. If truncated, the response includes a `cursor` that you use in a subsequent request to retrieve the next batch of addresses. To learn more about how pagination works, visit https://docs.tangocrypto.com/rest-api/pagination 
     * @summary List asset addresses
     * @param {string} appId Tangocrypto &#x60;app_id&#x60;.
     * @param {string} version Tangocrypto version.     
     * @param {string} asset Concatenation of the policy_id and hex-encoded asset_name
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AssetsApi
     */
    public listAssetAddresses(appId: string, version: string, asset: string, options?: AxiosRequestConfig) {
        return AssetsApiFp(this.configuration).listAssetAddresses(appId, version, asset, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns a list of addresses and quantities holding the given asset. The response is paginated to make the result set easier to handle. If truncated, the response includes a `cursor` that you use in a subsequent request to retrieve the next batch of owners. To learn more about how pagination works, visit https://docs.tangocrypto.com/rest-api/pagination 
     * @summary List asset addresses by fingerprint
     * @param {string} appId Tangocrypto &#x60;app_id&#x60;.
     * @param {string} version Tangocrypto version.     
     * @param {string} fingerprint The CIP14 fingerprint for the Multi-Asset.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AssetsApi
     */
    public listAssetAddressesFingerprint(appId: string, version: string, fingerprint: string, options?: AxiosRequestConfig) {
        return AssetsApiFp(this.configuration).listAssetAddressesFingerprint(appId, version, fingerprint, options).then((request) => request(this.axios, this.basePath));
    }
}