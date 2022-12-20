import globalAxios, { AxiosInstance, AxiosRequestConfig } from "axios";
import { BaseAPI, BASE_PATH, PaginateResponse, RequestArgs } from "../base";
import { ApiPromise, assertParamExists, buildPath, DUMMY_BASE_URL, setApiKeyToObject, setSearchParams, toPathString, createRequestFunction, getApiKey, serializeDataIfNeeded } from "../common";
import { Configuration } from "../configuration";
import * as FormData from 'form-data';
import { CreateIpfsContentResponse, IpfsContent, IpfsDeleteResponse } from "../models/ipfs";

/**
 * IpfsApi - axios parameter creator
 * @export
 */
export const IpfsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Upload a new content to IPFS. 
         * @summary add new file to IPFS
         * @param {string} name Name for the new content.
         * @param {any} file The file containing the data.          
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createContent: async (version: string, name: string, file: any, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const apiKey = await getApiKey("x-api-key", configuration);
            // verify required parameter 'poolId' is not null or undefined
            assertParamExists('createContent', 'apiKey', apiKey)

            const localVarPath = buildPath(apiKey, version, 'ipfs', 'contents');
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            const localVarFormParams = new FormData();
            // const blob = new Blob([Buffer.from(fs.readFileSync(file).buffer)]);
            localVarFormParams.append('file', file);

            // authentication x-api-key required
            localVarHeaderParameter["x-api-key"] = apiKey;
            localVarHeaderParameter["x-name"] = name;
            Object.assign(localVarHeaderParameter, localVarFormParams.getHeaders());


            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers };
            localVarRequestOptions.data = localVarFormParams;

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },

        /**
         * Pin content to IPFS. 
         * @summary Pin content to IPFS
         * @param {string} version Tangocrypto version.         
         * @param {string} cid Pin CID.
         * @param {string} name The name of the content.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        pinCid: async (version: string, cid: string, name: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const apiKey = await getApiKey("x-api-key", configuration);
            // verify required parameter 'poolId' is not null or undefined
            assertParamExists('pinCid', 'apiKey', apiKey)

            const localVarPath = buildPath(apiKey, version, 'ipfs', 'pins');
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication x-api-key required
            localVarHeaderParameter["x-api-key"] = apiKey;
            localVarHeaderParameter['Content-Type'] = 'application/json';

            const pinCidRequest = { cid, name };

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers };
            localVarRequestOptions.data = serializeDataIfNeeded(pinCidRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },

        /**
         * Retrieve ipfs content by `id`. 
         * @summary Retrieve ipfs content
         * @param {string} version Tangocrypto version.          
         * @param {string} contentId Content Id.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getContent: async (version: string, contentId: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const apiKey = await getApiKey("x-api-key", configuration);
            // verify required parameter 'poolId' is not null or undefined
            assertParamExists('getContent', 'apiKey', apiKey)

            // verify required parameter 'contentId' is not null or undefined
            assertParamExists('getContent', 'contentId', contentId)
            const localVarPath = buildPath(apiKey, version, 'ipfs', 'contents', contentId);
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
            localVarHeaderParameter["x-api-key"] = apiKey;

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers };

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },

        /**
         * Returns a list of ipfs contents. 
         * @summary List ipfs contents
         * @param {string} version Tangocrypto version.         
         * @param {number} [size] The number of results displayed on one page.
         * @param {string} [cursor] A &#x60;cursor&#x60; to access the next set of results. You include the cursor in subsequent requests to the endpoint as a URL query parameter of your request. If the cursor is empty in the result it means there are no more items to be retrieved. 
         * @param {'asc' | 'desc'} [order] The ordering of items from the point of view of the blockchain. By default, we return oldest first, newest last.          
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listContents: async (version: string, size?: number, cursor?: string, order?: 'asc' | 'desc', options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const apiKey = await getApiKey("x-api-key", configuration);
            // verify required parameter 'poolId' is not null or undefined
            assertParamExists('listContents', 'apiKey', apiKey)

            const localVarPath = buildPath(apiKey, version, 'ipfs', 'contents');
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
            localVarHeaderParameter["x-api-key"] = apiKey;

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
         * Delete ipfs content by `id`. 
         * @summary Delete ipfs content
         * @param {string} version Tangocrypto version. 
         * @param {string} contentId Content Id.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteContent: async (version: string, contentId: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const apiKey = await getApiKey("x-api-key", configuration);
            // verify required parameter 'poolId' is not null or undefined
            assertParamExists('getContent', 'apiKey', apiKey)

            // verify required parameter 'contentId' is not null or undefined
            assertParamExists('getContent', 'contentId', contentId)
            const localVarPath = buildPath(apiKey, version, 'ipfs', 'contents', contentId);
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'DELETE', ...baseOptions, ...options };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication x-api-key required
            localVarHeaderParameter["x-api-key"] = apiKey;

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
 * IpfsApi - functional programming interface
 * @export
 */
export const IpfsApiFp = function (configuration?: Configuration) {
    const localVarAxiosParamCreator = IpfsApiAxiosParamCreator(configuration)
    return {
        /**
         * Upload a new content to IPFS. 
         * @summary add new file to IPFS
         * @param {string} name Name for the new content.
         * @param {any} file The file containing the data.         
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createContent(version: string, name: string, file: any, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => ApiPromise<CreateIpfsContentResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createContent(version, name, file, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },

        /**
         * Pin content to IPFS. 
         * @summary Pin content to IPFS
         * @param {string} version Tangocrypto version.
         * @param {string} cid Pin CID.
         * @param {string} name The name of the content.         
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async pinCid(version: string, cid: string, name: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => ApiPromise<CreateIpfsContentResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.pinCid(version, cid, name, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },

        /**
         * Retrieve ipfs content by a `id`. 
         * @summary Retrieve ipfs content
         * @param {string} version Tangocrypto version.          
         * @param {string} contentId Content Id.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getContent(version: string, contentId: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => ApiPromise<IpfsContent>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getContent(version, contentId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },

        /**
         * Returns a list of ipfs contents. 
         * @summary List ipfs contents
         * @param {string} version Tangocrypto version.         
         * @param {number} [size] The number of results displayed on one page.
         * @param {string} [cursor] A &#x60;cursor&#x60; to access the next set of results. You include the cursor in subsequent requests to the endpoint as a URL query parameter of your request. If the cursor is empty in the result it means there are no more items to be retrieved.
         * @throws {RequiredError}
         */
        async listContents(version: string, size?: number, cursor?: string, order?: 'asc' | 'desc', options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => ApiPromise<PaginateResponse<IpfsContent>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.listContents(version, size, cursor, order, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },


        /**
         * Delete ipfs content by `id`. 
         * @summary Delete ipfs content
         * @param {string} version Tangocrypto version. 
         * @param {string} contentId Content Id.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteContent(version: string, contentId: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => ApiPromise<IpfsDeleteResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deleteContent(version, contentId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * IpfsApi - object-oriented interface
 * @export
 * @class IpfsApi
 * @extends {BaseAPI}
 */
export class IpfsApi extends BaseAPI {
    /**
     * Upload a new content to IPFS. 
     * @summary add new file to IPFS
     * @param {string} name Name for the new content.
     * @param {any} file The file containing the data.    
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof IpfsApi
     */
    public createContent(version: string, name: string, file: any, options?: AxiosRequestConfig) {
        return IpfsApiFp(this.configuration).createContent(version, name, file, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Pin content to IPFS. 
     * @summary Pin content to IPFS
     * @param {string} version Tangocrypto version.
     * @param {string} cid Pin CID.
     * @param {string} name The name of the content.    
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof IpfsApi
     */
    public pinCid(version: string, cid: string, name: string, options?: AxiosRequestConfig) {
        return IpfsApiFp(this.configuration).pinCid(version, cid, name, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Retrieve ipfs content by a `id`. 
     * @summary Retrieve ipfs content
     * @param {string} version Tangocrypto version.          
     * @param {string} contentId Content Id.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof IpfsApi
     */
    public getContent(version: string, contentId: string, options?: AxiosRequestConfig) {
        return IpfsApiFp(this.configuration).getContent(version, contentId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns a list of ipfs contents. 
     * @summary List ipfs contents
     * @param {string} version Tangocrypto version.         
     * @param {number} [size] The number of results displayed on one page.
     * @param {string} [cursor] A &#x60;cursor&#x60; to access the next set of results. You include the cursor in subsequent requests to the endpoint as a URL query parameter of your request. If the cursor is empty in the result it means there are no more items to be retrieved.    
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PoolsApi
     */
    public listContents(version: string, size?: number, cursor?: string, order?: 'asc' | 'desc', options?: AxiosRequestConfig) {
        return IpfsApiFp(this.configuration).listContents(version, size, cursor, order, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Delete ipfs content by `id`. 
     * @summary Delete ipfs content
     * @param {string} version Tangocrypto version. 
     * @param {string} contentId Content Id.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof IpfsApi
     */
    public deleteContent(version: string, contentId: string, options?: AxiosRequestConfig) {
        return IpfsApiFp(this.configuration).deleteContent(version, contentId, options).then((request) => request(this.axios, this.basePath));
    }
}
