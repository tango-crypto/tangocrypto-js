import globalAxios, { AxiosInstance, AxiosRequestConfig } from "axios";
import { BaseAPI, BASE_PATH, PaginateResponse, RequestArgs } from "../base";
import { ApiPromise, assertParamExists, buildPath, DUMMY_BASE_URL, setApiKeyToObject, setSearchParams, toPathString, createRequestFunction, serializeDataIfNeeded } from "../common";
import { Configuration } from "../configuration";
import { BuildTxRequest, BuildTxResponse, SubmitTansactionRequest, SubmitTansactionResponse, Transaction, TransactionMetadata, TransactionUtxos } from "../models/transaction";
import { Utxo } from "../models/utxo";

/**
 * TransactionsApi - axios parameter creator
 * @export
 */
 export const TransactionsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Build and serialize transaction with custom logic like swap, send, mint, burn etc.
         * @summary Build a transaction
         * @param {string} appId Tangocrypto &#x60;app_id&#x60;.
         * @param {BuildTxRequest} [buildTxRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        buildTransaction: async (appId: string, version: string, buildTxRequest?: BuildTxRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'appId' is not null or undefined
            assertParamExists('buildTransaction', 'appId', appId)
            const localVarPath = buildPath(appId, version, 'transactions', 'build');
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
            localVarRequestOptions.data = serializeDataIfNeeded(buildTxRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },

        /**
         * Retrieves the information about a transaction requested specified by a transaction `hash`.
         * @summary Retrieve Transaction
         * @param {string} appId Tangocrypto &#x60;app_id&#x60;.
         * @param {string} version Tangocrypto version.         
         * @param {string} hash Hash of the requested transaction
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getTransaction: async (appId: string, version: string, hash: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'appId' is not null or undefined
            assertParamExists('getTransaction', 'appId', appId)
            // verify required parameter 'hash' is not null or undefined
            assertParamExists('getTransaction', 'hash', hash)
            const localVarPath = buildPath(appId, version, 'transactions', hash);
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
         * Retrieve the transaction metadata specified by a transaction `hash`. The response is paginated. If truncated, the response includes a cursor that you use in a subsequent request to retrieve the next set of metadata values. 
         * @summary Retrieve transaction metadata
         * @param {string} appId Tangocrypto &#x60;app_id&#x60;.
         * @param {string} version Tangocrypto version.          
         * @param {string} hash Hash of the requested transaction
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getTransactionMetadata: async (appId: string, version: string, hash: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'appId' is not null or undefined
            assertParamExists('getTransactionMetadata', 'appId', appId)
            // verify required parameter 'hash' is not null or undefined
            assertParamExists('getTransactionMetadata', 'hash', hash)
            const localVarPath = buildPath(appId, version, 'transactions', hash, 'metadata');
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
         * List the UTXOs from a transaction specified by a transaction `hash`.
         * @summary List transaction UTXOs
         * @param {string} appId Tangocrypto &#x60;app_id&#x60;.
         * @param {string} version Tangocrypto version.
         * @param {string} hash Hash of the requested transaction
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listTransactionUtxos: async (appId: string, version: string, hash: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'appId' is not null or undefined
            assertParamExists('listTransactionUtxos', 'appId', appId)
            // verify required parameter 'hash' is not null or undefined
            assertParamExists('listTransactionUtxos', 'hash', hash)
            const localVarPath = buildPath(appId, version, 'transactions', hash, 'utxos');
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
         * Submit an already serialized transaction to the network.
         * @summary Submit a transaction
         * @param {string} appId Tangocrypto &#x60;app_id&#x60;.
         * @param {string} version Tangocrypto version.
         * @param {SubmitTansactionRequest} [subitTansactionRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        submitTransaction: async (appId: string, version: string, subitTansactionRequest?: SubmitTansactionRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'appId' is not null or undefined
            assertParamExists('submitTransaction', 'appId', appId)
            const localVarPath = buildPath(appId, version, 'transactions', 'submit');
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
            localVarRequestOptions.data = serializeDataIfNeeded(subitTansactionRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * TransactionsApi - functional programming interface
 * @export
 */
export const TransactionsApiFp = function (configuration?: Configuration) {
    const localVarAxiosParamCreator = TransactionsApiAxiosParamCreator(configuration)
    return {
        /**
         * Build and serialize transaction with custom logic like swap, send, mint, burn etc.
         * @summary Build a transaction
         * @param {string} appId Tangocrypto &#x60;app_id&#x60;.
         * @param {string} version Tangocrypto version.
         * @param {BuildTxRequest} [buildTxRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async buildTransaction(appId: string, version: string, buildTxRequest?: BuildTxRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => ApiPromise<BuildTxResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.buildTransaction(appId, version, buildTxRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },

        /**
         * Retrieves the information about a transaction requested specified by a transaction `hash`.
         * @summary Retrieve Transaction
         * @param {string} appId Tangocrypto &#x60;app_id&#x60;.
         * @param {string} version Tangocrypto version.
         * @param {string} hash Hash of the requested transaction
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getTransaction(appId: string, version: string, hash: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => ApiPromise<Transaction>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getTransaction(appId, version, hash, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },

        /**
         * Retrieve the transaction metadata specified by a transaction `hash`. The response is paginated. If truncated, the response includes a cursor that you use in a subsequent request to retrieve the next set of metadata values. 
         * @summary Retrieve transaction metadata
         * @param {string} appId Tangocrypto &#x60;app_id&#x60;.
         * @param {string} version Tangocrypto version.         
         * @param {string} hash Hash of the requested transaction
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getTransactionMetadata(appId: string, version: string, hash: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => ApiPromise<PaginateResponse<TransactionMetadata>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getTransactionMetadata(appId, version, hash, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },

        /**
         * List the UTXOs from a transaction specified by a transaction `hash`.
         * @summary List transaction UTXOs
         * @param {string} appId Tangocrypto &#x60;app_id&#x60;.
         * @param {string} version Tangocrypto version.         
         * @param {string} hash Hash of the requested transaction
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async listTransactionUtxos(appId: string, version: string, hash: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => ApiPromise<TransactionUtxos>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.listTransactionUtxos(appId, version, hash, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },

        /**
         * Submit an already serialized transaction to the network.
         * @summary Submit a transaction
         * @param {string} appId Tangocrypto &#x60;app_id&#x60;.
         * @param {string} version Tangocrypto version.
         * @param {SubmitTansactionRequest} [subitTansactionRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async submitTransaction(appId: string, version: string, subitTansactionRequest?: SubmitTansactionRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => ApiPromise<SubmitTansactionResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.submitTransaction(appId, version, subitTansactionRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * TransactionsApi - factory interface
 * @export
 */
export const TransactionsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = TransactionsApiFp(configuration)
    return {
        /**
         * Build and serialize transaction with custom logic like swap, send, mint, burn etc.
         * @summary Build a transaction
         * @param {string} appId Tangocrypto &#x60;app_id&#x60;.
         * @param {string} version Tangocrypto version.
         * @param {BuildTxRequest} [buildTxRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        buildTransaction(appId: string, version: string, buildTxRequest?: BuildTxRequest, options?: any): ApiPromise<BuildTxResponse> {
            return localVarFp.buildTransaction(appId, version, buildTxRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * Retrieves the information about a transaction requested specified by a transaction `hash`.
         * @summary Retrieve Transaction
         * @param {string} appId Tangocrypto &#x60;app_id&#x60;.
         * @param {string} hash Hash of the requested transaction
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getTransaction(appId: string, hash: string, options?: any): ApiPromise<Transaction> {
            return localVarFp.getTransaction(appId, hash, options).then((request) => request(axios, basePath));
        },
        /**
         * Retrieve the transaction metadata specified by a transaction `hash`. The response is paginated. If truncated, the response includes a cursor that you use in a subsequent request to retrieve the next set of metadata values. 
         * @summary Retrieve transaction metadata
         * @param {string} appId Tangocrypto &#x60;app_id&#x60;.
         * @param {string} hash Hash of the requested transaction
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getTransactionMetadata(appId: string, hash: string, options?: any): ApiPromise<PaginateResponse<TransactionMetadata>> {
            return localVarFp.getTransactionMetadata(appId, hash, options).then((request) => request(axios, basePath));
        },
        /**
         * List the UTXOs from a transaction specified by a transaction `hash`.
         * @summary List transaction UTXOs
         * @param {string} appId Tangocrypto &#x60;app_id&#x60;.
         * @param {string} hash Hash of the requested transaction
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listTransactionUtxos(appId: string, hash: string, options?: any): ApiPromise<TransactionUtxos> {
            return localVarFp.listTransactionUtxos(appId, hash, options).then((request) => request(axios, basePath));
        },
        /**
         * Submit an already serialized transaction to the network.
         * @summary Submit a transaction
         * @param {string} appId Tangocrypto &#x60;app_id&#x60;.
         * @param {string} version Tangocrypto version.
         * @param {SubmitTansactionRequest} [subitTansactionRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        submitTransaction(appId: string, version: string, subitTansactionRequest?: SubmitTansactionRequest, options?: any): ApiPromise<SubmitTansactionResponse> {
            return localVarFp.submitTransaction(appId, version, subitTansactionRequest, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * TransactionsApi - object-oriented interface
 * @export
 * @class TransactionsApi
 * @extends {BaseAPI}
 */
export class TransactionsApi extends BaseAPI {
    /**
     * Build and serialize transaction with custom logic like swap, send, mint, burn etc.
     * @summary Build a transaction
     * @param {string} appId Tangocrypto &#x60;app_id&#x60;.
     * @param {string} version Tangocrypto version.
     * @param {BuildTxRequest} [buildTxRequest] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TransactionsApi
     */
    public buildTransaction(appId: string, version: string, buildTxRequest?: BuildTxRequest, options?: AxiosRequestConfig) {
        return TransactionsApiFp(this.configuration).buildTransaction(appId, version, buildTxRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Retrieves the information about a transaction requested specified by a transaction `hash`.
     * @summary Retrieve Transaction
     * @param {string} appId Tangocrypto &#x60;app_id&#x60;.
     * @param {string} version Tangocrypto version.
     * @param {string} hash Hash of the requested transaction
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TransactionsApi
     */
    public getTransaction(appId: string, version: string, hash: string, options?: AxiosRequestConfig) {
        return TransactionsApiFp(this.configuration).getTransaction(appId, version, hash, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Retrieve the transaction metadata specified by a transaction `hash`. The response is paginated. If truncated, the response includes a cursor that you use in a subsequent request to retrieve the next set of metadata values. 
     * @summary Retrieve transaction metadata
     * @param {string} appId Tangocrypto &#x60;app_id&#x60;.
     * @param {string} version Tangocrypto version.
     * @param {string} hash Hash of the requested transaction
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TransactionsApi
     */
    public getTransactionMetadata(appId: string, version: string, hash: string, options?: AxiosRequestConfig) {
        return TransactionsApiFp(this.configuration).getTransactionMetadata(appId, version, hash, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * List the UTXOs from a transaction specified by a transaction `hash`.
     * @summary List transaction UTXOs
     * @param {string} appId Tangocrypto &#x60;app_id&#x60;.
     * @param {string} version Tangocrypto version.     
     * @param {string} hash Hash of the requested transaction
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TransactionsApi
     */
    public listTransactionUtxos(appId: string, version: string, hash: string, options?: AxiosRequestConfig) {
        return TransactionsApiFp(this.configuration).listTransactionUtxos(appId, version, hash, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Submit an already serialized transaction to the network.
     * @summary Submit a transaction
     * @param {string} appId Tangocrypto &#x60;app_id&#x60;.
     * @param {string} version Tangocrypto version.
     * @param {SubmitTansactionRequest} [subitTansactionRequest] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TransactionsApi
     */
    public submitTransaction(appId: string, version: string, subitTansactionRequest?: SubmitTansactionRequest, options?: AxiosRequestConfig) {
        return TransactionsApiFp(this.configuration).submitTransaction(appId, version, subitTansactionRequest, options).then((request) => request(this.axios, this.basePath));
    }
}