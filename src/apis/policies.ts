import globalAxios, { AxiosInstance, AxiosRequestConfig } from "axios";
import { BaseAPI, BASE_PATH, PaginateResponse, RequestArgs } from "../base";
import { ApiPromise, assertParamExists, buildPath, DUMMY_BASE_URL, setApiKeyToObject, setSearchParams, toPathString, createRequestFunction } from "../common";
import { Configuration } from "../configuration";
import { Asset } from "../models/asset";

/**
 * PolicyApi - axios parameter creator
 * @export
 */
 export const PolicyApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Returns a list of assets with the given Policy ID. The response is paginated to make the result set easier to handle. If truncated, the response includes a `cursor` that you use in a subsequent request to retrieve the next batch of owners. To learn more about how pagination works, visit https://docs.tangocrypto.com/rest-api/pagination 
         * @summary List assets by policy
         * @param {string} appId Tangocrypto &#x60;app_id&#x60;.
         * @param {string} version Tangocrypto version.
         * @param {string} policyId Policy ID controlling an asset.
         * @param {number} [size] The number of assets to return in a single page.
         * @param {string} [cursor] A pagination cursor returned by a previous call to this endpoint. Provide this cursor to retrieve the next set of results for your original query.         
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getAssetByPolicy: async (appId: string, version: string, policyId: string, size?: number, cursor?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'appId' is not null or undefined
            assertParamExists('getAssetByPolicy', 'appId', appId)
            // verify required parameter 'policyId' is not null or undefined
            assertParamExists('getAssetByPolicy', 'policyId', policyId)
            const localVarPath = buildPath(appId, version, 'policies', policyId, 'assets');
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
 * PolicyApi - functional programming interface
 * @export
 */
export const PolicyApiFp = function (configuration?: Configuration) {
    const localVarAxiosParamCreator = PolicyApiAxiosParamCreator(configuration)
    return {
        /**
         * Returns a list of assets with the given Policy ID. The response is paginated to make the result set easier to handle. If truncated, the response includes a `cursor` that you use in a subsequent request to retrieve the next batch of owners. To learn more about how pagination works, visit https://docs.tangocrypto.com/rest-api/pagination 
         * @summary List assets by policy
         * @param {string} appId Tangocrypto &#x60;app_id&#x60;.
         * @param {string} version Tangocrypto version.
         * @param {string} policyId Policy ID controlling an asset.
         * @param {number} [size] The number of assets to return in a single page.
         * @param {string} [cursor] A pagination cursor returned by a previous call to this endpoint. Provide this cursor to retrieve the next set of results for your original query.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getAssetByPolicy(appId: string, version: string, policyId: string, size?: number, cursor?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => ApiPromise<PaginateResponse<Asset>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getAssetByPolicy(appId, version, policyId, size, cursor, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * PolicyApi - object-oriented interface
 * @export
 * @class PolicyApi
 * @extends {BaseAPI}
 */
export class PoliciesApi extends BaseAPI {
    /**
     * Returns a list of assets with the given Policy ID. The response is paginated to make the result set easier to handle. If truncated, the response includes a `cursor` that you use in a subsequent request to retrieve the next batch of owners. To learn more about how pagination works, visit https://docs.tangocrypto.com/rest-api/pagination 
     * @summary List assets by policy
     * @param {string} appId Tangocrypto &#x60;app_id&#x60;.
     * @param {string} version Tangocrypto version.
     * @param {string} policyId Policy ID controlling an asset.
     * @param {number} [size] The number of assets to return in a single page.
     * @param {string} [cursor] A pagination cursor returned by a previous call to this endpoint. Provide this cursor to retrieve the next set of results for your original query.     
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PolicyApi
     */
    public getAssetByPolicy(appId: string, version: string, policyId: string, size?: number, cursor?: string, options?: AxiosRequestConfig) {
        return PolicyApiFp(this.configuration).getAssetByPolicy(appId, version, policyId, size, cursor, options).then((request) => request(this.axios, this.basePath));
    }
}