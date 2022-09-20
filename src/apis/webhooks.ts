import globalAxios, { AxiosInstance, AxiosRequestConfig } from "axios";
import { BaseAPI, BASE_PATH, PaginateResponse, RequestArgs } from "../base";
import { ApiPromise, assertParamExists, buildPath, DUMMY_BASE_URL, setApiKeyToObject, setSearchParams, toPathString, createRequestFunction, serializeDataIfNeeded } from "../common";
import { Configuration } from "../configuration";
import { CreateWebhookRequest, UpdateWebhookRequest, DeleteWebhookResponse, Webhook } from "../models/webhooks";

/**
 * WebhooksApi - axios parameter creator
 * @export
 */
 export const WebhooksApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Create Webhook
         * @summary Create Webhook
         * @param {string} appId Tangocrypto &#x60;app_id&#x60;.
         * @param {string} version Tangocrypto version.         
         * @param {CreateWebhookRequest} [createWebhookRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createWebhook: async (appId: string, version: string, createWebhookRequest?: CreateWebhookRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'appId' is not null or undefined
            assertParamExists('createWebhook', 'appId', appId)
            const localVarPath = buildPath(appId, version, 'webhooks');
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
            await setApiKeyToObject(localVarHeaderParameter, "x-api-key", configuration)



            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers };
            localVarRequestOptions.data = serializeDataIfNeeded(createWebhookRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },

        /**
         * Deletes a single Webhook based on the provided ID.
         * @summary Delete Webhook
         * @param {string} appId Tangocrypto &#x60;app_id&#x60;.
         * @param {string} version Tangocrypto version.         
         * @param {string} webhookId Webhook ID
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteWebhook: async (appId: string, version: string, webhookId: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'appId' is not null or undefined
            assertParamExists('deleteWebhook', 'appId', appId)
            // verify required parameter 'webhookId' is not null or undefined
            assertParamExists('deleteWebhook', 'webhookId', webhookId)
            const localVarPath = buildPath(appId, version, 'webhooks', webhookId);
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
         * Returns a list of webhooks created in your Tangocrypto account. The response is paginated. If truncated, the response includes a `cursor` that you use in a subsequent request to retrieve the next set of webhooks. For more information, see our <a href=\"https://docs.tangocrypto.com/rest-api/pagination\">pagination guide</a>. 
         * @summary List Webhooks
         * @param {string} appId Tangocrypto &#x60;app_id&#x60;.
         * @param {string} version Tangocrypto version.         
         * @param {number} [size] The number of webhooks to return in a single page.
         * @param {string} [cursor] A &#x60;cursor&#x60; to access the next set of results. You include the cursor in subsequent requests to the endpoint as a URL query parameter of your request. If the cursor is empty in the result it means there are no more items to be retrieved. 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listWebhooks: async (appId: string, version: string, size?: number, cursor?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'appId' is not null or undefined
            assertParamExists('listWebhooks', 'appId', appId)
            const localVarPath = buildPath(appId, version, 'webhooks');
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

        /**
         * Get details for a single Webhook in your Tangocrypto account.
         * @summary Retrieve Webhook
         * @param {string} appId Tangocrypto &#x60;app_id&#x60;.
         * @param {string} version Tangocrypto version.         
         * @param {string} webhookId The ID of the webhook to retrieve.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        retrieveWebhook: async (appId: string, version: string, webhookId: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'appId' is not null or undefined
            assertParamExists('retrieveWebhook', 'appId', appId)
            // verify required parameter 'webhookId' is not null or undefined
            assertParamExists('retrieveWebhook', 'webhookId', webhookId)
            const localVarPath = `/{app_id}/v1/webhooks/{webhook_id}`
                .replace(`{${"app_id"}}`, encodeURIComponent(String(appId)))
                .replace(`{${"webhook_id"}}`, encodeURIComponent(String(webhookId)));
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
         * Updates the webbook without having to perform an upsert on the entire item. Just include include the fields you want to be updated in the request body.
         * @summary Update Webhook
         * @param {string} appId Tangocrypto &#x60;app_id&#x60;.
         * @param {string} version Tangocrypto version.         
         * @param {string} webhookId The ID of the webhook to update.
         * @param {UpdateWebhookRequest} [updateWebhookRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateWebhook: async (appId: string, version: string, webhookId: string, updateWebhookRequest?: UpdateWebhookRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'appId' is not null or undefined
            assertParamExists('updateWebhook', 'appId', appId)
            // verify required parameter 'webhookId' is not null or undefined
            assertParamExists('updateWebhook', 'webhookId', webhookId)
            const localVarPath = buildPath(appId, version, 'webhooks', webhookId);
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'PATCH', ...baseOptions, ...options };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication x-api-key required
            await setApiKeyToObject(localVarHeaderParameter, "x-api-key", configuration)



            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers };
            localVarRequestOptions.data = serializeDataIfNeeded(updateWebhookRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * WebhooksApi - functional programming interface
 * @export
 */
export const WebhooksApiFp = function (configuration?: Configuration) {
    const localVarAxiosParamCreator = WebhooksApiAxiosParamCreator(configuration)
    return {
        /**
         * Create Webhook
         * @summary Create Webhook
         * @param {string} appId Tangocrypto &#x60;app_id&#x60;
         * @param {string} version Tangocrypto version.         
         * @param {CreateWebhookRequest} [createWebhookRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createWebhook(appId: string, version: string, createWebhookRequest?: CreateWebhookRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => ApiPromise<Webhook>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createWebhook(appId, version, createWebhookRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },

        /**
         * Deletes a single Webhook based on the provided ID.
         * @summary Delete Webhook
         * @param {string} appId Tangocrypto &#x60;app_id&#x60;.
         * @param {string} version Tangocrypto version.          
         * @param {string} webhookId Webhook ID
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteWebhook(appId: string, version: string, webhookId: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => ApiPromise<DeleteWebhookResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deleteWebhook(appId, version, webhookId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },

        /**
         * Returns a list of webhooks created in your Tangocrypto account. The response is paginated. If truncated, the response includes a `cursor` that you use in a subsequent request to retrieve the next set of webhooks. For more information, see our <a href=\"https://docs.tangocrypto.com/rest-api/pagination\">pagination guide</a>. 
         * @summary List Webhooks
         * @param {string} appId Tangocrypto &#x60;app_id&#x60;.
         * @param {string} version Tangocrypto version.          
         * @param {number} [size] The number of webhooks to return in a single page.
         * @param {string} [cursor] A &#x60;cursor&#x60; to access the next set of results. You include the cursor in subsequent requests to the endpoint as a URL query parameter of your request. If the cursor is empty in the result it means there are no more items to be retrieved. 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async listWebhooks(appId: string, version: string, size?: number, cursor?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => ApiPromise<PaginateResponse<Webhook>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.listWebhooks(appId, version, size, cursor, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },

        /**
         * Get details for a single Webhook in your Tangocrypto account.
         * @summary Retrieve Webhook
         * @param {string} appId Tangocrypto &#x60;app_id&#x60;.
         * @param {string} version Tangocrypto version.          
         * @param {string} webhookId The ID of the webhook to retrieve.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async retrieveWebhook(appId: string, version: string, webhookId: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => ApiPromise<Webhook>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.retrieveWebhook(appId, version, webhookId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },

        /**
         * Updates the webbook without having to perform an upsert on the entire item. Just include include the fields you want to be updated in the request body.
         * @summary Update Webhook
         * @param {string} appId Tangocrypto &#x60;app_id&#x60;.
         * @param {string} version Tangocrypto version. 
         * @param {string} webhookId The ID of the webhook to update.
         * @param {UpdateWebhookRequest} [updateWebhookRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateWebhook(appId: string, version: string, webhookId: string, updateWebhookRequest?: UpdateWebhookRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => ApiPromise<Webhook>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateWebhook(appId, version, webhookId, updateWebhookRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * WebhooksApi - factory interface
 * @export
 */
export const WebhooksApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = WebhooksApiFp(configuration)
    return {
        /**
         * Create Webhook
         * @summary Create Webhook
         * @param {string} appId Tangocrypto &#x60;app_id&#x60;.
         * @param {string} version Tangocrypto version.
         * @param {CreateWebhookRequest} [createWebhookRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createWebhook(appId: string, version: string, createWebhookRequest?: CreateWebhookRequest, options?: any): ApiPromise<Webhook> {
            return localVarFp.createWebhook(appId, version, createWebhookRequest, options).then((request) => request(axios, basePath));
        },

        /**
         * Deletes a single Webhook based on the provided ID.
         * @summary Delete Webhook
         * @param {string} appId Tangocrypto &#x60;app_id&#x60;.
         * @param {string} version Tangocrypto version.         
         * @param {string} webhookId Webhook ID
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteWebhook(appId: string, version: string, webhookId: string, options?: any): ApiPromise<DeleteWebhookResponse> {
            return localVarFp.deleteWebhook(appId, version, webhookId, options).then((request) => request(axios, basePath));
        },

        /**
         * Returns a list of webhooks created in your Tangocrypto account. The response is paginated. If truncated, the response includes a `cursor` that you use in a subsequent request to retrieve the next set of webhooks. For more information, see our <a href=\"https://docs.tangocrypto.com/rest-api/pagination\">pagination guide</a>. 
         * @summary List Webhooks
         * @param {string} appId Tangocrypto &#x60;app_id&#x60;.
         * @param {string} version Tangocrypto version.         
         * @param {number} [size] The number of webhooks to return in a single page.
         * @param {string} [cursor] A &#x60;cursor&#x60; to access the next set of results. You include the cursor in subsequent requests to the endpoint as a URL query parameter of your request. If the cursor is empty in the result it means there are no more items to be retrieved. 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listWebhooks(appId: string, version: string, size?: number, cursor?: string, options?: any): ApiPromise<PaginateResponse<Webhook>> {
            return localVarFp.listWebhooks(appId, version, size, cursor, options).then((request) => request(axios, basePath));
        },

        /**
         * Get details for a single Webhook in your Tangocrypto account.
         * @summary Retrieve Webhook
         * @param {string} appId Tangocrypto &#x60;app_id&#x60;.
         * @param {string} version Tangocrypto version.         
         * @param {string} webhookId The ID of the webhook to retrieve.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        retrieveWebhook(appId: string, version: string, webhookId: string, options?: any): ApiPromise<Webhook> {
            return localVarFp.retrieveWebhook(appId, version, webhookId, options).then((request) => request(axios, basePath));
        },

        /**
         * Updates the webbook without having to perform an upsert on the entire item. Just include include the fields you want to be updated in the request body.
         * @summary Update Webhook
         * @param {string} appId Tangocrypto &#x60;app_id&#x60;.
         * @param {string} version Tangocrypto version.        
         * @param {string} webhookId The ID of the webhook to update.
         * @param {UpdateWebhookRequest} [updateWebhookRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateWebhook(appId: string, version: string, webhookId: string, updateWebhookRequest?: UpdateWebhookRequest, options?: any): ApiPromise<Webhook> {
            return localVarFp.updateWebhook(appId, version, webhookId, updateWebhookRequest, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * WebhooksApi - object-oriented interface
 * @export
 * @class WebhooksApi
 * @extends {BaseAPI}
 */
export class WebhooksApi extends BaseAPI {
    /**
     * Create Webhook
     * @summary Create Webhook
     * @param {string} appId Tangocrypto &#x60;app_id&#x60;.
     * @param {string} version Tangocrypto version.
     * @param {CreateWebhookRequest} [createWebhookRequest] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof WebhooksApi
     */
    public createWebhook(appId: string, version: string, createWebhookRequest?: CreateWebhookRequest, options?: AxiosRequestConfig) {
        return WebhooksApiFp(this.configuration).createWebhook(appId, version, createWebhookRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Deletes a single Webhook based on the provided ID.
     * @summary Delete Webhook
     * @param {string} appId Tangocrypto &#x60;app_id&#x60;.
     * @param {string} version Tangocrypto version.     
     * @param {string} webhookId Webhook ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof WebhooksApi
     */
    public deleteWebhook(appId: string, version: string, webhookId: string, options?: AxiosRequestConfig) {
        return WebhooksApiFp(this.configuration).deleteWebhook(appId, version, webhookId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns a list of webhooks created in your Tangocrypto account. The response is paginated. If truncated, the response includes a `cursor` that you use in a subsequent request to retrieve the next set of webhooks. For more information, see our <a href=\"https://docs.tangocrypto.com/rest-api/pagination\">pagination guide</a>. 
     * @summary List Webhooks
     * @param {string} appId Tangocrypto &#x60;app_id&#x60;.
     * @param {string} version Tangocrypto version.     
     * @param {number} [size] The number of webhooks to return in a single page.
     * @param {string} [cursor] A &#x60;cursor&#x60; to access the next set of results. You include the cursor in subsequent requests to the endpoint as a URL query parameter of your request. If the cursor is empty in the result it means there are no more items to be retrieved. 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof WebhooksApi
     */
    public listWebhooks(appId: string, version: string, size?: number, cursor?: string, options?: AxiosRequestConfig) {
        return WebhooksApiFp(this.configuration).listWebhooks(appId, version, size, cursor, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Get details for a single Webhook in your Tangocrypto account.
     * @summary Retrieve Webhook
     * @param {string} appId Tangocrypto &#x60;app_id&#x60;.
     * @param {string} version Tangocrypto version.     
     * @param {string} webhookId The ID of the webhook to retrieve.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof WebhooksApi
     */
    public retrieveWebhook(appId: string, version: string, webhookId: string, options?: AxiosRequestConfig) {
        return WebhooksApiFp(this.configuration).retrieveWebhook(appId, version, webhookId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Updates the webbook without having to perform an upsert on the entire item. Just include include the fields you want to be updated in the request body.
     * @summary Update Webhook
     * @param {string} appId Tangocrypto &#x60;app_id&#x60;.
     * @param {string} version Tangocrypto version.
     * @param {string} webhookId The ID of the webhook to update.
     * @param {UpdateWebhookRequest} [updateWebhookRequest] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof WebhooksApi
     */
    public updateWebhook(appId: string, version: string, webhookId: string, updateWebhookRequest?: UpdateWebhookRequest, options?: AxiosRequestConfig) {
        return WebhooksApiFp(this.configuration).updateWebhook(appId, version, webhookId, updateWebhookRequest, options).then((request) => request(this.axios, this.basePath));
    }
}