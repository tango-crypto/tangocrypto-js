import globalAxios, { AxiosInstance, AxiosRequestConfig } from "axios";
import { BaseAPI, BASE_PATH, PaginateResponse, RequestArgs } from "../base";
import { ApiPromise, assertParamExists, buildPath, DUMMY_BASE_URL, setApiKeyToObject, setSearchParams, toPathString, createRequestFunction } from "../common";
import { Configuration } from "../configuration";
import { Epoch } from "../models/epoch";
import { EpochParameters } from "../models/epoch-parameters";

/**
 * EpochsApi - axios parameter creator
 * @export
 */
 export const EpochsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Retrieves the current epoch information
         * @summary Retrieve current epoch information
         * @param {string} appId Tangocrypto &#x60;app_id&#x60;.
         * @param {string} version Tangocrypto version.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        retrieveCurrentEpoch: async (appId: string, version: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'appId' is not null or undefined
            assertParamExists('retrieveCurrentEpoch', 'appId', appId)
            const localVarPath = buildPath(appId, version, 'epochs', 'current');
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
         * Retrieves the protocol parameters for a given epoch.
         * @summary Retrieve protocol parameters
         * @param {string} appId Tangocrypto &#x60;app_id&#x60;.
         * @param {string} version Tangocrypto version.         
         * @param {number} number Number of the epoch
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        retrieveEpochParameters: async (appId: string, version: string, number: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'appId' is not null or undefined
            assertParamExists('retrieveEpochParameters', 'appId', appId)
            // verify required parameter 'number' is not null or undefined
            assertParamExists('retrieveEpochParameters', 'number', number)
            const localVarPath = buildPath(appId, version, 'epochs', number.toString(), 'parameters');
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
 * EpochsApi - functional programming interface
 * @export
 */
export const EpochsApiFp = function (configuration?: Configuration) {
    const localVarAxiosParamCreator = EpochsApiAxiosParamCreator(configuration)
    return {
        /**
         * Retrieves the current epoch information
         * @summary Retrieve current epoch information
         * @param {string} appId Tangocrypto &#x60;app_id&#x60;.
         * @param {string} version Tangocrypto version.     
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async retrieveCurrentEpoch(appId: string, version: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => ApiPromise<Epoch>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.retrieveCurrentEpoch(appId, version, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },

        /**
         * Retrieves the protocol parameters for a given epoch.
         * @summary Retrieve protocol parameters
         * @param {string} appId Tangocrypto &#x60;app_id&#x60;.
         * @param {string} version Tangocrypto version.     
         * @param {number} number Number of the epoch
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async retrieveEpochParameters(appId: string, version: string, number: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => ApiPromise<EpochParameters>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.retrieveEpochParameters(appId, version, number, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * EpochsApi - factory interface
 * @export
 */
export const EpochsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = EpochsApiFp(configuration)
    return {
        /**
         * Retrieves the current epoch information
         * @summary Retrieve current epoch information
         * @param {string} appId Tangocrypto &#x60;app_id&#x60;.
         * @param {string} version Tangocrypto version.         
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        retrieveCurrentEpoch(appId: string, version: string, options?: any): ApiPromise<Epoch> {
            return localVarFp.retrieveCurrentEpoch(appId, version, options).then((request) => request(axios, basePath));
        },


        /**
         * Retrieves the protocol parameters for a given epoch.
         * @summary Retrieve protocol parameters
         * @param {string} appId Tangocrypto &#x60;app_id&#x60;.
         * @param {string} version Tangocrypto version.         
         * @param {number} number Number of the epoch
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        retrieveEpochParameters(appId: string, version: string, number: number, options?: any): ApiPromise<EpochParameters> {
            return localVarFp.retrieveEpochParameters(appId, version, number, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * EpochsApi - object-oriented interface
 * @export
 * @class EpochsApi
 * @extends {BaseAPI}
 */
export class EpochsApi extends BaseAPI {
    /**
     * Retrieves the current epoch information
     * @summary Retrieve current epoch information
     * @param {string} appId Tangocrypto &#x60;app_id&#x60;.
     * @param {string} version Tangocrypto version.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof EpochsApi
     */
    public retrieveCurrentEpoch(appId: string, version: string, options?: AxiosRequestConfig) {
        return EpochsApiFp(this.configuration).retrieveCurrentEpoch(appId, version, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Retrieves the protocol parameters for a given epoch.
     * @summary Retrieve protocol parameters
     * @param {string} appId Tangocrypto &#x60;app_id&#x60;.
     * @param {string} version Tangocrypto version.     
     * @param {number} number Number of the epoch
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof EpochsApi
     */
    public retrieveEpochParameters(appId: string, version: string, number: number, options?: AxiosRequestConfig) {
        return EpochsApiFp(this.configuration).retrieveEpochParameters(appId, version, number, options).then((request) => request(this.axios, this.basePath));
    }
}