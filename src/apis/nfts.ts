import globalAxios, { AxiosInstance, AxiosRequestConfig } from "axios";
import { BaseAPI, BASE_PATH, PaginateResponse, RequestArgs } from "../base";
import { ApiPromise, assertParamExists, buildPath, DUMMY_BASE_URL, setApiKeyToObject, setSearchParams, toPathString, createRequestFunction, serializeDataIfNeeded } from "../common";
import { Configuration } from "../configuration";
import { SalePhase } from "../models/nft";
import { CancelNftSaleResponse, CheckAddressListRequest, CollectionDeleteResponse, CreateAddressListResponse, CreateAffiliateRequest, CreateAffiliateResponse, CreateCollectionRequest, CreateCollectionResponse, CreateNftRequest, CreateNftResponse, CreateNftSaleRequest, CreateNftSaleResponse, CreatePriceTierRequest, CreatePriceTierResponse, CreateSalePhaseRequest, CreateSalePhaseResponse, DeleteAddressListResponse, DeleteAffiliateResponse, DeleteNftResponse, DeletePriceTierResponse, DeleteSalePhaseResponse, AddressList, Collection, Token, RetrieveAddressListResponse, RetrieveNftSaleResponse, RetrieveSalePhaseResponse, Sale, UpdateAffiliateRequest, UpdateCollectionRequest, UpdateNftRequest, UpdatePriceTierRequest, UpdateSalePhaseRequest } from "../models/nft";

/**
 * NFTsAddressListApi - axios parameter creator
 * @export
 */
 export const NFTsAddressListApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Returns `true` if the address is included in the address list, `false` if not.
         * @summary Check address
         * @param {string} appId Tangocrypto &#x60;app_id&#x60;.
         * @param {string} addressListId Addres list id
         * @param {CheckAddressListRequest} [checkAddressListRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        checkAddressList: async (appId: string, addressListId: string, checkAddressListRequest?: CheckAddressListRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'appId' is not null or undefined
            assertParamExists('checkAddressList', 'appId', appId)
            // verify required parameter 'addressListId' is not null or undefined
            assertParamExists('checkAddressList', 'addressListId', addressListId)
            const localVarPath = `/{app_id}/v1/nft/address-lists/{address_list_id}/includes`
                .replace(`{${"app_id"}}`, encodeURIComponent(String(appId)))
                .replace(`{${"address_list_id"}}`, encodeURIComponent(String(addressListId)));
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
            localVarRequestOptions.data = serializeDataIfNeeded(checkAddressListRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Create a new address list in your Tangocrypto account.
         * @summary Create address list
         * @param {string} appId Tangocrypto &#x60;app_id&#x60;.
         * @param {string} name Address list name
         * @param {any} file File in .csv format
         * @param {string} [description] Address list description
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createAddressList: async (appId: string, name: string, file: any, description?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'appId' is not null or undefined
            assertParamExists('createAddressList', 'appId', appId)
            // verify required parameter 'name' is not null or undefined
            assertParamExists('createAddressList', 'name', name)
            // verify required parameter 'file' is not null or undefined
            assertParamExists('createAddressList', 'file', file)
            const localVarPath = `/{app_id}/v1/nft/address-lists`
                .replace(`{${"app_id"}}`, encodeURIComponent(String(appId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            const localVarFormParams = new ((configuration && configuration.formDataCtor) || FormData)();

            // authentication x-api-key required
            await setApiKeyToObject(localVarHeaderParameter, "x-api-key", configuration)


            if (name !== undefined) {
                localVarFormParams.append('name', name);
            }

            if (description !== undefined) {
                localVarFormParams.append('description', description);
            }

            if (file !== undefined) {
                localVarFormParams.append('file', file as any);
            }


            localVarHeaderParameter['Content-Type'] = 'multipart/form-data';

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
         * Delete an address list in your Tangocrypto account.
         * @summary Delete address list
         * @param {string} appId Tangocrypto &#x60;app_id&#x60;.
         * @param {string} addressListId Address list id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteAddressList: async (appId: string, addressListId: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'appId' is not null or undefined
            assertParamExists('deleteAddressList', 'appId', appId)
            // verify required parameter 'addressListId' is not null or undefined
            assertParamExists('deleteAddressList', 'addressListId', addressListId)
            const localVarPath = `/{app_id}/v1/nft/address-lists/{address_list_id}`
                .replace(`{${"app_id"}}`, encodeURIComponent(String(appId)))
                .replace(`{${"address_list_id"}}`, encodeURIComponent(String(addressListId)));
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
         * Returns a list of address lists. The response is paginated to make the result set easier to handle. If truncated, the response includes a `cursor` that you use in a subsequent request to retrieve the next batch of NFTs. To learn more about how pagination works, visit https://docs.tangocrypto.com/rest-api/pagination 
         * @summary List Address lists
         * @param {string} appId Tangocrypto &#x60;app_id&#x60;.
         * @param {string} [cursor] A pagination cursor returned by a previous call to this endpoint. Provide this cursor to retrieve the next set of results for your original query.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getAddressLists: async (appId: string, cursor?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'appId' is not null or undefined
            assertParamExists('getAddressLists', 'appId', appId)
            const localVarPath = `/{app_id}/v1/nft/address-lists`
                .replace(`{${"app_id"}}`, encodeURIComponent(String(appId)));
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
         * Returns details for a single NFT.
         * @summary Retrieve an address list
         * @param {string} appId Tangocrypto &#x60;app_id&#x60;.
         * @param {string} addressListId Addres list id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        retrieveAddressList: async (appId: string, addressListId: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'appId' is not null or undefined
            assertParamExists('retrieveAddressList', 'appId', appId)
            // verify required parameter 'addressListId' is not null or undefined
            assertParamExists('retrieveAddressList', 'addressListId', addressListId)
            const localVarPath = `/{app_id}/v1/nft/address-lists/{address_list_id}`
                .replace(`{${"app_id"}}`, encodeURIComponent(String(appId)))
                .replace(`{${"address_list_id"}}`, encodeURIComponent(String(addressListId)));
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
 * NFTsAddressListApi - functional programming interface
 * @export
 */
export const NFTsAddressListApiFp = function (configuration?: Configuration) {
    const localVarAxiosParamCreator = NFTsAddressListApiAxiosParamCreator(configuration)
    return {
        /**
         * Returns `true` if the address is included in the address list, `false` if not.
         * @summary Check address
         * @param {string} appId Tangocrypto &#x60;app_id&#x60;.
         * @param {string} addressListId Addres list id
         * @param {CheckAddressListRequest} [checkAddressListRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async checkAddressList(appId: string, addressListId: string, checkAddressListRequest?: CheckAddressListRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => ApiPromise<boolean>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.checkAddressList(appId, addressListId, checkAddressListRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Create a new address list in your Tangocrypto account.
         * @summary Create address list
         * @param {string} appId Tangocrypto &#x60;app_id&#x60;.
         * @param {string} name Address list name
         * @param {any} file File in .csv format
         * @param {string} [description] Address list description
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createAddressList(appId: string, name: string, file: any, description?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => ApiPromise<CreateAddressListResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createAddressList(appId, name, file, description, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Delete an address list in your Tangocrypto account.
         * @summary Delete address list
         * @param {string} appId Tangocrypto &#x60;app_id&#x60;.
         * @param {string} addressListId Address list id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteAddressList(appId: string, addressListId: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => ApiPromise<DeleteAddressListResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deleteAddressList(appId, addressListId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Returns a list of address lists. The response is paginated to make the result set easier to handle. If truncated, the response includes a `cursor` that you use in a subsequent request to retrieve the next batch of NFTs. To learn more about how pagination works, visit https://docs.tangocrypto.com/rest-api/pagination 
         * @summary List Address lists
         * @param {string} appId Tangocrypto &#x60;app_id&#x60;.
         * @param {string} [cursor] A pagination cursor returned by a previous call to this endpoint. Provide this cursor to retrieve the next set of results for your original query.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getAddressLists(appId: string, cursor?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => ApiPromise<PaginateResponse<AddressList>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getAddressLists(appId, cursor, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Returns details for a single NFT.
         * @summary Retrieve an address list
         * @param {string} appId Tangocrypto &#x60;app_id&#x60;.
         * @param {string} addressListId Addres list id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async retrieveAddressList(appId: string, addressListId: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => ApiPromise<RetrieveAddressListResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.retrieveAddressList(appId, addressListId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * NFTsAddressListApi - object-oriented interface
 * @export
 * @class NFTsAddressListApi
 * @extends {BaseAPI}
 */
export class NFTsAddressListApi extends BaseAPI {
    /**
     * Returns `true` if the address is included in the address list, `false` if not.
     * @summary Check address
     * @param {string} appId Tangocrypto &#x60;app_id&#x60;.
     * @param {string} addressListId Addres list id
     * @param {CheckAddressListRequest} [checkAddressListRequest] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof NFTsAddressListApi
     */
    public checkAddressList(appId: string, addressListId: string, checkAddressListRequest?: CheckAddressListRequest, options?: AxiosRequestConfig) {
        return NFTsAddressListApiFp(this.configuration).checkAddressList(appId, addressListId, checkAddressListRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Create a new address list in your Tangocrypto account.
     * @summary Create address list
     * @param {string} appId Tangocrypto &#x60;app_id&#x60;.
     * @param {string} name Address list name
     * @param {any} file File in .csv format
     * @param {string} [description] Address list description
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof NFTsAddressListApi
     */
    public createAddressList(appId: string, name: string, file: any, description?: string, options?: AxiosRequestConfig) {
        return NFTsAddressListApiFp(this.configuration).createAddressList(appId, name, file, description, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Delete an address list in your Tangocrypto account.
     * @summary Delete address list
     * @param {string} appId Tangocrypto &#x60;app_id&#x60;.
     * @param {string} addressListId Address list id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof NFTsAddressListApi
     */
    public deleteAddressList(appId: string, addressListId: string, options?: AxiosRequestConfig) {
        return NFTsAddressListApiFp(this.configuration).deleteAddressList(appId, addressListId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns a list of address lists. The response is paginated to make the result set easier to handle. If truncated, the response includes a `cursor` that you use in a subsequent request to retrieve the next batch of NFTs. To learn more about how pagination works, visit https://docs.tangocrypto.com/rest-api/pagination 
     * @summary List Address lists
     * @param {string} appId Tangocrypto &#x60;app_id&#x60;.
     * @param {string} [cursor] A pagination cursor returned by a previous call to this endpoint. Provide this cursor to retrieve the next set of results for your original query.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof NFTsAddressListApi
     */
    public getAddressLists(appId: string, cursor?: string, options?: AxiosRequestConfig) {
        return NFTsAddressListApiFp(this.configuration).getAddressLists(appId, cursor, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns details for a single NFT.
     * @summary Retrieve an address list
     * @param {string} appId Tangocrypto &#x60;app_id&#x60;.
     * @param {string} addressListId Addres list id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof NFTsAddressListApi
     */
    public retrieveAddressList(appId: string, addressListId: string, options?: AxiosRequestConfig) {
        return NFTsAddressListApiFp(this.configuration).retrieveAddressList(appId, addressListId, options).then((request) => request(this.axios, this.basePath));
    }
}

/**
 * NFTsCollectionsApi - axios parameter creator
 * @export
 */
export const NFTsCollectionsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Delete an NFT Collection in your Tangocrypto account.
         * @summary Delete NFT collection
         * @param {string} appId Tangocrypto &#x60;app_id&#x60;.
         * @param {string} version Tangocrypto version.         
         * @param {string} collectionId Collection ID.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteNftCollection: async (appId: string, version: string, collectionId: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'appId' is not null or undefined
            assertParamExists('deleteNftCollection', 'appId', appId)
            // verify required parameter 'collectionId' is not null or undefined
            assertParamExists('deleteNftCollection', 'collectionId', collectionId)
            const localVarPath = buildPath(appId, version, 'nft', 'collections', collectionId);
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
         * Returns a list of NFTs for a given collection. The response is paginated to make the result set easier to handle. If truncated, the response includes a `cursor` that you use in a subsequent request to retrieve the next batch of NFTs. To learn more about how pagination works, visit https://docs.tangocrypto.com/rest-api/pagination 
         * @summary List Collection NFTs
         * @param {string} appId Tangocrypto &#x60;app_id&#x60;.
         * @param {string} version Tangocrypto version.         
         * @param {string} collectionId Collection ID
         * @param {string} [status] Filter by token &#x60;status&#x60;. For example, you can get the list of tokens for sale with &#x60;status&#x3D;FOR_SALE&#x60; or tokens sold with &#x60;status&#x3D;COMPLETED&#x60;. For a full reference of the status check https://docs.tangocrypto.com/nfts/nft-api/token-sale-flow
         * @param {string} [order] Use &#x60;asc&#x60; to show the oldest NFT first and &#x60;desc&#x60; to show the most recent NFT first!. If you don\&#39;t specify, this parameter it uses&#x60;desc&#x60; by default.
         * @param {number} [size] The number of NFTs to return in a single page.
         * @param {string} [cursor] A pagination cursor returned by a previous call to this endpoint. Provide this cursor to retrieve the next set of results for your original query.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getCollectionNfts: async (appId: string, version: string, collectionId: string, status?: string, order?: string, size?: number, cursor?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'appId' is not null or undefined
            assertParamExists('getCollectionNfts', 'appId', appId)
            // verify required parameter 'collectionId' is not null or undefined
            assertParamExists('getCollectionNfts', 'collectionId', collectionId)
            const localVarPath = buildPath(appId, version, 'nft', 'collections', collectionId, 'tokens');
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

            if (status !== undefined) {
                localVarQueryParameter['status'] = status;
            }

            if (order !== undefined) {
                localVarQueryParameter['order'] = order;
            }

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
         * Returns a list of NFT collections in your Tangocrypto account. The response is paginated. If truncated, the response includes a `cursor` that you use in a subsequent request to retrieve the next set of NFT Collections. For more information, see our <a href=\"https://docs.tangocrypto.com/rest-api/pagination\">pagination guide</a>. 
         * @summary List NFT collections
         * @param {string} appId Tangocrypto &#x60;app_id&#x60;.
         * @param {string} version Tangocrypto version.         
         * @param {number} [size] The number of collections to return in a single page.
         * @param {string} [cursor] A pagination cursor returned by a previous call to this endpoint. Provide this cursor to retrieve the next set of results for your original query.
         * @param {string} [ids] List of collection ids. **NOTICE:** When you use &#x60;ids&#x60; you can specify a maximum of 25 elements and can\&#39;t use &#x60;cursor&#x60; or &#x60;size&#x60;.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listNftCollections: async (appId: string, version: string, size?: number, cursor?: string, ids?: string[], options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'appId' is not null or undefined
            assertParamExists('listNftCollections', 'appId', appId)
            const localVarPath = buildPath(appId, version, 'nft', 'collections');
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

            if (ids !== undefined) {
                localVarQueryParameter['ids'] = ids.join(',');
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
         * Create a new NFT collection in your Tangocrypto account.
         * @summary Create NFT collection
         * @param {string} appId Tangocrypto &#x60;app_id&#x60;.
         * @param {string} version Tangocrypto version.         
         * @param {CreateCollectionRequest} [createCollectionRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        nftCollection: async (appId: string, version: string, createCollectionRequest?: CreateCollectionRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'appId' is not null or undefined
            assertParamExists('nftCollection', 'appId', appId)
            const localVarPath = buildPath(appId, version, 'nft', 'collections');
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
            localVarRequestOptions.data = serializeDataIfNeeded(createCollectionRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },

        /**
         * Get details for a single NFT collection in your Tangocrypto account.
         * @summary Retrieve NFT collection
         * @param {string} appId Tangocrypto &#x60;app_id&#x60;.
         * @param {string} version Tangocrypto version.         
         * @param {string} collectionId The ID of the NFT Collection to retrieve.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        retrieveNftCollection: async (appId: string, version: string, collectionId: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'appId' is not null or undefined
            assertParamExists('retrieveNftCollection', 'appId', appId)
            // verify required parameter 'collectionId' is not null or undefined
            assertParamExists('retrieveNftCollection', 'collectionId', collectionId)
            const localVarPath = buildPath(appId, version, 'nft', 'collections', collectionId);
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
         * Updates the NFT collection with the fields that were supplied, leaving the others alone.
         * @summary Update NFT collection
         * @param {string} appId Tangocrypto &#x60;app_id&#x60;.
         * @param {string} version Tangocrypto version.    
         * @param {string} collectionId The ID of the NFT Collection to update.
         * @param {UpdateCollectionRequest} [updateCollectionRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateNftCollection: async (appId: string, version: string, collectionId: string, updateCollectionRequest?: UpdateCollectionRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'appId' is not null or undefined
            assertParamExists('updateNftCollection', 'appId', appId)
            // verify required parameter 'collectionId' is not null or undefined
            assertParamExists('updateNftCollection', 'collectionId', collectionId)
            const localVarPath = buildPath(appId, version, 'nft', 'collections', collectionId);
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
            localVarRequestOptions.data = serializeDataIfNeeded(updateCollectionRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * NFTsCollectionsApi - functional programming interface
 * @export
 */
export const NFTsCollectionsApiFp = function (configuration?: Configuration) {
    const localVarAxiosParamCreator = NFTsCollectionsApiAxiosParamCreator(configuration)
    return {
        /**
         * Delete an NFT Collection in your Tangocrypto account.
         * @summary Delete NFT collection
         * @param {string} appId Tangocrypto &#x60;app_id&#x60;.
         * @param {string} version Tangocrypto version.
         * @param {string} collectionId Collection ID.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteNftCollection(appId: string, version: string, collectionId: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => ApiPromise<CollectionDeleteResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deleteNftCollection(appId, version, collectionId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },

        /**
         * Returns a list of NFTs for a given collection. The response is paginated to make the result set easier to handle. If truncated, the response includes a `cursor` that you use in a subsequent request to retrieve the next batch of NFTs. To learn more about how pagination works, visit https://docs.tangocrypto.com/rest-api/pagination 
         * @summary List Collection NFTs
         * @param {string} appId Tangocrypto &#x60;app_id&#x60;.
         * @param {string} version Tangocrypto version.         
         * @param {string} collectionId Collection ID
         * @param {string} [status] Filter by token &#x60;status&#x60;. For example, you can get the list of tokens for sale with &#x60;status&#x3D;FOR_SALE&#x60; or tokens sold with &#x60;status&#x3D;COMPLETED&#x60;. For a full reference of the status check https://docs.tangocrypto.com/nfts/nft-api/token-sale-flow
         * @param {string} [order] Use &#x60;asc&#x60; to show the oldest NFT first and &#x60;desc&#x60; to show the most recent NFT first!. If you don\&#39;t specify, this parameter it uses&#x60;desc&#x60; by default.
         * @param {number} [size] The number of NFTs to return in a single page.
         * @param {string} [cursor] A pagination cursor returned by a previous call to this endpoint. Provide this cursor to retrieve the next set of results for your original query.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getCollectionNfts(appId: string, version: string, collectionId: string, status?: string, order?: string, size?: number, cursor?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => ApiPromise<PaginateResponse<Token>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getCollectionNfts(appId, version, collectionId, status, order, size, cursor, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },

        /**
         * Returns a list of NFT collections in your Tangocrypto account. The response is paginated. If truncated, the response includes a `cursor` that you use in a subsequent request to retrieve the next set of NFT Collections. For more information, see our <a href=\"https://docs.tangocrypto.com/rest-api/pagination\">pagination guide</a>. 
         * @summary List NFT collections
         * @param {string} appId Tangocrypto &#x60;app_id&#x60;.
         * @param {string} version Tangocrypto version.         
         * @param {number} [size] The number of collections to return in a single page.
         * @param {string} [cursor] A pagination cursor returned by a previous call to this endpoint. Provide this cursor to retrieve the next set of results for your original query.
         * @param {string} [ids] List of collection ids. **NOTICE:** When you use &#x60;ids&#x60; you can specify a maximum of 25 elements and can\&#39;t use &#x60;cursor&#x60; or &#x60;size&#x60;.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async listNftCollections(appId: string, version: string, size?: number, cursor?: string, ids?: string[], options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => ApiPromise<PaginateResponse<Collection>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.listNftCollections(appId, version, size, cursor, ids, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },

        /**
         * Create a new NFT collection in your Tangocrypto account.
         * @summary Create NFT collection
         * @param {string} appId Tangocrypto &#x60;app_id&#x60;.
         * @param {string} version Tangocrypto version.         
         * @param {CreateCollectionRequest} [createCollectionRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async nftCollection(appId: string, version: string, createCollectionRequest?: CreateCollectionRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => ApiPromise<CreateCollectionResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.nftCollection(appId, version, createCollectionRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },

        /**
         * Get details for a single NFT collection in your Tangocrypto account.
         * @summary Retrieve NFT collection
         * @param {string} appId Tangocrypto &#x60;app_id&#x60;.
         * @param {string} version Tangocrypto version.         
         * @param {string} collectionId The ID of the NFT Collection to retrieve.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async retrieveNftCollection(appId: string, version: string, collectionId: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => ApiPromise<Collection>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.retrieveNftCollection(appId, version, collectionId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },

        /**
         * Updates the NFT collection with the fields that were supplied, leaving the others alone.
         * @summary Update NFT collection
         * @param {string} appId Tangocrypto &#x60;app_id&#x60;.
         * @param {string} version Tangocrypto version.         
         * @param {string} collectionId The ID of the NFT Collection to update.
         * @param {UpdateCollectionRequest} [updateCollectionRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateNftCollection(appId: string, version: string, collectionId: string, updateCollectionRequest?: UpdateCollectionRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => ApiPromise<CreateCollectionResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateNftCollection(appId, version, collectionId, updateCollectionRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * NFTsCollectionsApi - object-oriented interface
 * @export
 * @class NFTsCollectionsApi
 * @extends {BaseAPI}
 */
export class NFTsCollectionsApi extends BaseAPI {
    /**
     * Delete an NFT Collection in your Tangocrypto account.
     * @summary Delete NFT collection
     * @param {string} appId Tangocrypto &#x60;app_id&#x60;.
     * @param {string} version Tangocrypto version.
     * @param {string} collectionId Collection ID.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof NFTsCollectionsApi
     */
    public deleteNftCollection(appId: string, version: string, collectionId: string, options?: AxiosRequestConfig) {
        return NFTsCollectionsApiFp(this.configuration).deleteNftCollection(appId, version, collectionId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns a list of NFTs for a given collection. The response is paginated to make the result set easier to handle. If truncated, the response includes a `cursor` that you use in a subsequent request to retrieve the next batch of NFTs. To learn more about how pagination works, visit https://docs.tangocrypto.com/rest-api/pagination 
     * @summary List Collection NFTs
     * @param {string} appId Tangocrypto &#x60;app_id&#x60;.
     * @param {string} version Tangocrypto version.      
     * @param {string} collectionId Collection ID
     * @param {string} [status] Filter by token &#x60;status&#x60;. For example, you can get the list of tokens for sale with &#x60;status&#x3D;FOR_SALE&#x60; or tokens sold with &#x60;status&#x3D;COMPLETED&#x60;. For a full reference of the status check https://docs.tangocrypto.com/nfts/nft-api/token-sale-flow
     * @param {string} [order] Use &#x60;asc&#x60; to show the oldest NFT first and &#x60;desc&#x60; to show the most recent NFT first!. If you don\&#39;t specify, this parameter it uses&#x60;desc&#x60; by default.
     * @param {number} [size] The number of NFTs to return in a single page.
     * @param {string} [cursor] A pagination cursor returned by a previous call to this endpoint. Provide this cursor to retrieve the next set of results for your original query.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof NFTsCollectionsApi
     */
    public getCollectionNfts(appId: string, version: string, collectionId: string, status?: string, order?: string, size?: number, cursor?: string, options?: AxiosRequestConfig) {
        return NFTsCollectionsApiFp(this.configuration).getCollectionNfts(appId, version, collectionId, status, order, size, cursor, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns a list of NFT collections in your Tangocrypto account. The response is paginated. If truncated, the response includes a `cursor` that you use in a subsequent request to retrieve the next set of NFT Collections. For more information, see our <a href=\"https://docs.tangocrypto.com/rest-api/pagination\">pagination guide</a>. 
     * @summary List NFT collections
     * @param {string} appId Tangocrypto &#x60;app_id&#x60;.
     * @param {string} version Tangocrypto version.     
     * @param {number} [size] The number of collections to return in a single page.
     * @param {string} [cursor] A pagination cursor returned by a previous call to this endpoint. Provide this cursor to retrieve the next set of results for your original query.
     * @param {string} [ids] List of collection ids. **NOTICE:** When you use &#x60;ids&#x60; you can specify a maximum of 25 elements and can\&#39;t use &#x60;cursor&#x60; or &#x60;size&#x60;.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof NFTsCollectionsApi
     */
    public listNftCollections(appId: string, version: string, size?: number, cursor?: string, ids?: string[], options?: AxiosRequestConfig) {
        return NFTsCollectionsApiFp(this.configuration).listNftCollections(appId, version, size, cursor, ids, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Create a new NFT collection in your Tangocrypto account.
     * @summary Create NFT collection
     * @param {string} appId Tangocrypto &#x60;app_id&#x60;.
     * @param {string} version Tangocrypto version.     
     * @param {CreateCollectionRequest} [createCollectionRequest] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof NFTsCollectionsApi
     */
    public nftCollection(appId: string, version: string, createCollectionRequest?: CreateCollectionRequest, options?: AxiosRequestConfig) {
        return NFTsCollectionsApiFp(this.configuration).nftCollection(appId, version, createCollectionRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Get details for a single NFT collection in your Tangocrypto account.
     * @summary Retrieve NFT collection
     * @param {string} appId Tangocrypto &#x60;app_id&#x60;.
     * @param {string} version Tangocrypto version.     
     * @param {string} collectionId The ID of the NFT Collection to retrieve.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof NFTsCollectionsApi
     */
    public retrieveNftCollection(appId: string, version: string, collectionId: string, options?: AxiosRequestConfig) {
        return NFTsCollectionsApiFp(this.configuration).retrieveNftCollection(appId, version, collectionId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Updates the NFT collection with the fields that were supplied, leaving the others alone.
     * @summary Update NFT collection
     * @param {string} appId Tangocrypto &#x60;app_id&#x60;.
     * @param {string} version Tangocrypto version.     
     * @param {string} collectionId The ID of the NFT Collection to update.
     * @param {UpdateCollectionRequest} [updateCollectionRequest] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof NFTsCollectionsApi
     */
    public updateNftCollection(appId: string, version: string, collectionId: string, updateCollectionRequest?: UpdateCollectionRequest, options?: AxiosRequestConfig) {
        return NFTsCollectionsApiFp(this.configuration).updateNftCollection(appId, version, collectionId, updateCollectionRequest, options).then((request) => request(this.axios, this.basePath));
    }
}

/**
 * NFTsSalePhasesApi - axios parameter creator
 * @export
 */
export const NFTsSalePhasesApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Create affiliate.
         * @summary Create affiliate
         * @param {string} appId Tangocrypto &#x60;app_id&#x60;.
         * @param {string} version Tangocrypto version.
         * @param {string} collectionId Collection ID
         * @param {string} phaseId Sales phase ID.
         * @param {CreateAffiliateRequest} [createAffiliateRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createAffiliate: async (appId: string, version: string, collectionId: string, phaseId: string, createAffiliateRequest?: CreateAffiliateRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'appId' is not null or undefined
            assertParamExists('createAffiliate', 'appId', appId)
            // verify required parameter 'collectionId' is not null or undefined
            assertParamExists('createAffiliate', 'collectionId', collectionId)
            // verify required parameter 'phaseId' is not null or undefined
            assertParamExists('createAffiliate', 'phaseId', phaseId)
            const localVarPath = buildPath(appId, version, 'nft', 'collections', collectionId, 'phases', phaseId, 'affiliates');
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
            localVarRequestOptions.data = serializeDataIfNeeded(createAffiliateRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },

        /**
         * Delete affiliate.
         * @summary Delete Affiliate
         * @param {string} appId Tangocrypto &#x60;app_id&#x60;.
         * @param {string} version Tangocrypto version.         
         * @param {string} collectionId Collection ID
         * @param {string} phaseId Sale phase id.
         * @param {string} affiliateId Affiliate id.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteAffiliate: async (appId: string, version: string, collectionId: string, phaseId: string, affiliateId: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'appId' is not null or undefined
            assertParamExists('deleteAffiliate', 'appId', appId)
            // verify required parameter 'collectionId' is not null or undefined
            assertParamExists('deleteAffiliate', 'collectionId', collectionId)
            // verify required parameter 'phaseId' is not null or undefined
            assertParamExists('deleteAffiliate', 'phaseId', phaseId)
            // verify required parameter 'affiliateId' is not null or undefined
            assertParamExists('deleteAffiliate', 'affiliateId', affiliateId)
            const localVarPath = buildPath(appId, version, 'nft', 'collections', collectionId, 'phases', phaseId, 'affiliates', affiliateId);
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
         * Update affiliate.
         * @summary Update affiliate
         * @param {string} appId Tangocrypto &#x60;app_id&#x60;.
         * @param {string} version Tangocrypto version.         
         * @param {string} collectionId Collection ID
         * @param {string} phaseId Sales phase ID.
         * @param {string} affiliateId Affiliate id.
         * @param {UpdateAffiliateRequest} [updateAffiliateRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateAffiliate: async (appId: string, version: string, collectionId: string, phaseId: string, affiliateId: string, updateAffiliateRequest?: UpdateAffiliateRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'appId' is not null or undefined
            assertParamExists('updateAffiliate', 'appId', appId)
            // verify required parameter 'collectionId' is not null or undefined
            assertParamExists('updateAffiliate', 'collectionId', collectionId)
            // verify required parameter 'phaseId' is not null or undefined
            assertParamExists('updateAffiliate', 'phaseId', phaseId)
            // verify required parameter 'affiliateId' is not null or undefined
            assertParamExists('updateAffiliate', 'affiliateId', affiliateId)
            const localVarPath = buildPath(appId, version, 'nft', 'collections', collectionId, 'phases', phaseId, 'affiliates', affiliateId);
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
            localVarRequestOptions.data = serializeDataIfNeeded(updateAffiliateRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },

        /**
         * Create price tier.
         * @summary Create price tier
         * @param {string} appId Tangocrypto &#x60;app_id&#x60;.
         * @param {string} version Tangocrypto version.
         * @param {string} collectionId Collection ID
         * @param {string} phaseId Sales phase ID.
         * @param {CreatePriceTierRequest} [createPriceTierRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createPriceTier: async (appId: string, version: string, collectionId: string, phaseId: string, createPriceTierRequest?: CreatePriceTierRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'appId' is not null or undefined
            assertParamExists('createPriceTier', 'appId', appId)
            // verify required parameter 'collectionId' is not null or undefined
            assertParamExists('createPriceTier', 'collectionId', collectionId)
            // verify required parameter 'phaseId' is not null or undefined
            assertParamExists('createPriceTier', 'phaseId', phaseId)
            const localVarPath = buildPath(appId, version, 'nft', 'collections', collectionId, 'phases', phaseId, 'price_tiers');
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
            localVarRequestOptions.data = serializeDataIfNeeded(createPriceTierRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },

        /**
         * Delete price tier.
         * @summary Delete price tier
         * @param {string} appId Tangocrypto &#x60;app_id&#x60;.
         * @param {string} version Tangocrypto version.         
         * @param {string} collectionId Collection ID
         * @param {string} phaseId Sale phase id.
         * @param {string} pricetierId Price Tier id.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deletePriceTier: async (appId: string, version: string, collectionId: string, phaseId: string, pricetierId: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'appId' is not null or undefined
            assertParamExists('deletePriceTier', 'appId', appId)
            // verify required parameter 'collectionId' is not null or undefined
            assertParamExists('deletePriceTier', 'collectionId', collectionId)
            // verify required parameter 'phaseId' is not null or undefined
            assertParamExists('deletePriceTier', 'phaseId', phaseId)
            // verify required parameter 'pricetierId' is not null or undefined
            assertParamExists('deletePriceTier', 'pricetierId', pricetierId)
            const localVarPath = buildPath(appId, version, 'nft', 'collections', collectionId, 'phases', phaseId, 'price_tiers', pricetierId);
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
         * Update affiliate.
         * @summary Update affiliate
         * @param {string} appId Tangocrypto &#x60;app_id&#x60;.
         * @param {string} version Tangocrypto version.         
         * @param {string} collectionId Collection ID
         * @param {string} phaseId Sales phase ID.
         * @param {string} pricetierId Price Tier id.
         * @param {UpdatePriceTierRequest} [updatePriceTierRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updatePriceTier: async (appId: string, version: string, collectionId: string, phaseId: string, pricetierId: string, updatePriceTierRequest?: UpdatePriceTierRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'appId' is not null or undefined
            assertParamExists('updatePriceTier', 'appId', appId)
            // verify required parameter 'collectionId' is not null or undefined
            assertParamExists('updatePriceTier', 'collectionId', collectionId)
            // verify required parameter 'phaseId' is not null or undefined
            assertParamExists('updatePriceTier', 'phaseId', phaseId)
            // verify required parameter 'pricetierId' is not null or undefined
            assertParamExists('updatePriceTier', 'pricetierId', pricetierId)
            const localVarPath = buildPath(appId, version, 'nft', 'collections', collectionId, 'phases', phaseId, 'price_tiers', pricetierId);
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
            localVarRequestOptions.data = serializeDataIfNeeded(updatePriceTierRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },

        /**
         * Delete a sale phase.
         * @summary Delete sale phase
         * @param {string} appId Tangocrypto &#x60;app_id&#x60;.
         * @param {string} version Tangocrypto version.         
         * @param {string} collectionId Collection ID
         * @param {string} phaseId Sale phase id.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteSalePhase: async (appId: string, version: string, collectionId: string, phaseId: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'appId' is not null or undefined
            assertParamExists('deleteSalePhase', 'appId', appId)
            // verify required parameter 'collectionId' is not null or undefined
            assertParamExists('deleteSalePhase', 'collectionId', collectionId)
            // verify required parameter 'phaseId' is not null or undefined
            assertParamExists('deleteSalePhase', 'phaseId', phaseId)
            const localVarPath = buildPath(appId, version, 'nft', 'collections', collectionId, 'phases', phaseId);
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
         * Create a sale phase for a given collection. You can add different phases to control how you will sell the collection. For example, you might have a total of 5000 NFTs, and you want to sell them in stages. You can create a pre-sale phase to sell 1000 NFTs to previous customers at a special price and within a specific time range. You can identify these customers with a condition; that would be an NFT with a certain policy id on their wallets. Then you create another sale phase for the public drop with the remaining 4000 NFTs and no conditions.   
         * @summary Create sale phase
         * @param {string} appId Tangocrypto &#x60;app_id&#x60;.
         * @param {string} version Tangocrypto version.         
         * @param {string} collectionId Collection ID.
         * @param {CreateSalePhaseRequest} [createSalePhaseRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        nftCreateSale: async (appId: string, version: string, collectionId: string, createSalePhaseRequest?: CreateSalePhaseRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'appId' is not null or undefined
            assertParamExists('nftCreateSale', 'appId', appId)
            // verify required parameter 'collectionId' is not null or undefined
            assertParamExists('nftCreateSale', 'collectionId', collectionId)
            const localVarPath = buildPath(appId, version, 'nft', 'collections', collectionId, 'phases');
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
            localVarRequestOptions.data = serializeDataIfNeeded(createSalePhaseRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },

        /**
         * Returns details for a single sale phase.
         * @summary Retrieve sale phase
         * @param {string} appId Tangocrypto &#x60;app_id&#x60;.
         * @param {string} version Tangocrypto version.         
         * @param {string} collectionId Collection ID
         * @param {string} phaseId Sales phase ID.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        retrieveSalePhase: async (appId: string, version: string, collectionId: string, phaseId: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'appId' is not null or undefined
            assertParamExists('retrieveSalePhase', 'appId', appId)
            // verify required parameter 'collectionId' is not null or undefined
            assertParamExists('retrieveSalePhase', 'collectionId', collectionId)
            // verify required parameter 'phaseId' is not null or undefined
            assertParamExists('retrieveSalePhase', 'phaseId', phaseId)
            const localVarPath = buildPath(appId, version, 'nft', 'collections', collectionId, 'phases', phaseId);
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
         * Returns a list of sale phases for a given collection. The response is paginated. If truncated, the response includes a `cursor` that you use in a subsequent request to retrieve the next set of sale phases. 
         * @summary List sale phases
         * @param {string} appId Tangocrypto &#x60;app_id&#x60;.
         * @param {string} version Tangocrypto version.         
         * @param {string} collectionId Collection ID
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        retrieveSalePhases: async (appId: string, version: string, collectionId: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'appId' is not null or undefined
            assertParamExists('retrieveSalePhases', 'appId', appId)
            // verify required parameter 'collectionId' is not null or undefined
            assertParamExists('retrieveSalePhases', 'collectionId', collectionId)
            const localVarPath = buildPath(appId, version, 'nft', 'collections', collectionId, 'phases');
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
         * Update sale phase.
         * @summary Update sale phase
         * @param {string} appId Tangocrypto &#x60;app_id&#x60;.
         * @param {string} version Tangocrypto version.         
         * @param {string} collectionId Collection ID
         * @param {string} phaseId Sales phase ID.
         * @param {UpdateSalePhaseRequest} [updateSalePhaseRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateSalePhase: async (appId: string, version: string, collectionId: string, phaseId: string, updateSalePhaseRequest?: UpdateSalePhaseRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'appId' is not null or undefined
            assertParamExists('updateSalePhase', 'appId', appId)
            // verify required parameter 'collectionId' is not null or undefined
            assertParamExists('updateSalePhase', 'collectionId', collectionId)
            // verify required parameter 'phaseId' is not null or undefined
            assertParamExists('updateSalePhase', 'phaseId', phaseId)
            const localVarPath = buildPath(appId, version, 'nft', 'collections', collectionId, 'phases', phaseId);
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
            localVarRequestOptions.data = serializeDataIfNeeded(updateSalePhaseRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * NFTsSalePhasesApi - functional programming interface
 * @export
 */
export const NFTsSalePhasesApiFp = function (configuration?: Configuration) {
    const localVarAxiosParamCreator = NFTsSalePhasesApiAxiosParamCreator(configuration)
    return {
        /**
         * Create affiliate.
         * @summary Create affiliate
         * @param {string} appId Tangocrypto &#x60;app_id&#x60;.
         * @param {string} version Tangocrypto version.
         * @param {string} collectionId Collection ID
         * @param {string} phaseId Sales phase ID.
         * @param {CreateAffiliateRequest} [createAffiliateRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createAffiliate(appId: string, version: string, collectionId: string, phaseId: string, createAffiliateRequest?: CreateAffiliateRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => ApiPromise<CreateAffiliateResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createAffiliate(appId, version, collectionId, phaseId, createAffiliateRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },

        /**
         * Delete affiliate.
         * @summary Delete Affiliate
         * @param {string} appId Tangocrypto &#x60;app_id&#x60;.
         * @param {string} version Tangocrypto version.         
         * @param {string} collectionId Collection ID
         * @param {string} phaseId Sale phase id.
         * @param {string} affiliateId Affiliate id.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteAffiliate(appId: string, version: string, collectionId: string, phaseId: string, affiliateId: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => ApiPromise<DeleteAffiliateResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deleteAffiliate(appId, version, collectionId, phaseId, affiliateId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },

        /**
         * Update affiliate.
         * @summary Update affiliate
         * @param {string} appId Tangocrypto &#x60;app_id&#x60;.
         * @param {string} version Tangocrypto version.         
         * @param {string} collectionId Collection ID
         * @param {string} phaseId Sales phase ID.
         * @param {string} affiliateId Affiliate id.
         * @param {UpdateAffiliateRequest} [updateAffiliateRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateAffiliate(appId: string, version: string, collectionId: string, phaseId: string, affiliateId: string, updateAffiliateRequest?: UpdateAffiliateRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => ApiPromise<RetrieveSalePhaseResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateAffiliate(appId, version, collectionId, phaseId, affiliateId, updateAffiliateRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },

        /**
         * Create price tier.
         * @summary Create price tier
         * @param {string} appId Tangocrypto &#x60;app_id&#x60;.
         * @param {string} version Tangocrypto version.
         * @param {string} collectionId Collection ID
         * @param {string} phaseId Sales phase ID.
         * @param {CreateAffiliateRequest} [createPriceTierRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createPriceTier(appId: string, version: string, collectionId: string, phaseId: string, createPriceTierRequest?: CreatePriceTierRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => ApiPromise<CreatePriceTierResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createPriceTier(appId, version, collectionId, phaseId, createPriceTierRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },

        /**
         * Delete price tier.
         * @summary Delete price tier
         * @param {string} appId Tangocrypto &#x60;app_id&#x60;.
         * @param {string} version Tangocrypto version.         
         * @param {string} collectionId Collection ID
         * @param {string} phaseId Sale phase id.
         * @param {string} pricetierId Price Tier id.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deletePriceTier(appId: string, version: string, collectionId: string, phaseId: string, pricetierId: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => ApiPromise<DeletePriceTierResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deletePriceTier(appId, version, collectionId, phaseId, pricetierId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },

        /**
         * Update price tier.
         * @summary Update price tier
         * @param {string} appId Tangocrypto &#x60;app_id&#x60;.
         * @param {string} version Tangocrypto version.         
         * @param {string} collectionId Collection ID
         * @param {string} phaseId Sales phase ID.
         * @param {string} pricetierId Price Tier id.
         * @param {UpdatePriceTierRequest} [updatePriceTierRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updatePriceTier(appId: string, version: string, collectionId: string, phaseId: string, pricetierId: string, updatePriceTierRequest?: UpdatePriceTierRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => ApiPromise<RetrieveSalePhaseResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.updatePriceTier(appId, version, collectionId, phaseId, pricetierId, updatePriceTierRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },

        /**
         * Delete a sale phase.
         * @summary Delete sale phase
         * @param {string} appId Tangocrypto &#x60;app_id&#x60;.
         * @param {string} version Tangocrypto version.         
         * @param {string} collectionId Collection ID
         * @param {string} phaseId Sale phase id.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteSalePhase(appId: string, version: string, collectionId: string, phaseId: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => ApiPromise<DeleteSalePhaseResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deleteSalePhase(appId, version, collectionId, phaseId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },

        /**
         * Create a sale phase for a given collection. You can add different phases to control how you will sell the collection. For example, you might have a total of 5000 NFTs, and you want to sell them in stages. You can create a pre-sale phase to sell 1000 NFTs to previous customers at a special price and within a specific time range. You can identify these customers with a condition; that would be an NFT with a certain policy id on their wallets. Then you create another sale phase for the public drop with the remaining 4000 NFTs and no conditions.   
         * @summary Create sale phase
         * @param {string} appId Tangocrypto &#x60;app_id&#x60;.
         * @param {string} version Tangocrypto version.         
         * @param {string} collectionId Collection ID.
         * @param {CreateSalePhaseRequest} [createSalePhaseRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async nftCreateSale(appId: string, version: string, collectionId: string, createSalePhaseRequest?: CreateSalePhaseRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => ApiPromise<CreateSalePhaseResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.nftCreateSale(appId, version, collectionId, createSalePhaseRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },

        /**
         * Returns details for a single sale phase.
         * @summary Retrieve sale phase
         * @param {string} appId Tangocrypto &#x60;app_id&#x60;.
         * @param {string} version Tangocrypto version.         
         * @param {string} collectionId Collection ID
         * @param {string} phaseId Sales phase ID.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async retrieveSalePhase(appId: string, version: string, collectionId: string, phaseId: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => ApiPromise<RetrieveSalePhaseResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.retrieveSalePhase(appId, version, collectionId, phaseId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },

        /**
         * Returns a list of sale phases for a given collection. The response is paginated. If truncated, the response includes a `cursor` that you use in a subsequent request to retrieve the next set of sale phases. 
         * @summary List sale phases
         * @param {string} appId Tangocrypto &#x60;app_id&#x60;.
         * @param {string} version Tangocrypto version.         
         * @param {string} collectionId Collection ID
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async retrieveSalePhases(appId: string, version: string, collectionId: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => ApiPromise<PaginateResponse<SalePhase>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.retrieveSalePhases(appId, version, collectionId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },

        /**
         * Update sale phase.
         * @summary Update sale phase
         * @param {string} appId Tangocrypto &#x60;app_id&#x60;.
         * @param {string} version Tangocrypto version.         
         * @param {string} collectionId Collection ID
         * @param {string} phaseId Sales phase ID.
         * @param {UpdateSalePhaseRequest} [updateSalePhaseRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateSalePhase(appId: string, version: string, collectionId: string, phaseId: string, updateSalePhaseRequest?: UpdateSalePhaseRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => ApiPromise<RetrieveSalePhaseResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateSalePhase(appId, version, collectionId, phaseId, updateSalePhaseRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * NFTsSalePhasesApi - object-oriented interface
 * @export
 * @class NFTsSalePhasesApi
 * @extends {BaseAPI}
 */
export class NFTsSalePhasesApi extends BaseAPI {
    /**
     * Create affiliate.
     * @summary Create affiliate
     * @param {string} appId Tangocrypto &#x60;app_id&#x60;.
     * @param {string} version Tangocrypto version.
     * @param {string} collectionId Collection ID
     * @param {string} phaseId Sales phase ID.
     * @param {CreateAffiliateRequest} [createAffiliateRequest] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof NFTsSalePhasesApi
     */
    public createAffiliate(appId: string, version: string, collectionId: string, phaseId: string, createAffiliateRequest?: CreateAffiliateRequest, options?: AxiosRequestConfig) {
        return NFTsSalePhasesApiFp(this.configuration).createAffiliate(appId, version, collectionId, phaseId, createAffiliateRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Delete affiliate.
     * @summary Delete Affiliate
     * @param {string} appId Tangocrypto &#x60;app_id&#x60;.
     * @param {string} version Tangocrypto version.     
     * @param {string} collectionId Collection ID
     * @param {string} phaseId Sale phase id.
     * @param {string} affiliateId Affiliate id.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof NFTsSalePhasesApi
     */
    public deleteAffiliate(appId: string, version: string, collectionId: string, phaseId: string, affiliateId: string, options?: AxiosRequestConfig) {
        return NFTsSalePhasesApiFp(this.configuration).deleteAffiliate(appId, version, collectionId, phaseId, affiliateId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Update affiliate.
     * @summary Update affiliate
     * @param {string} appId Tangocrypto &#x60;app_id&#x60;.
     * @param {string} version Tangocrypto version.    
     * @param {string} collectionId Collection ID
     * @param {string} phaseId Sales phase ID.
     * @param {string} affiliateId Affiliate id.
     * @param {UpdateAffiliateRequest} [updateAffiliateRequest] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof NFTsSalePhasesApi
     */
    public updateAffiliate(appId: string, version: string, collectionId: string, phaseId: string, affiliateId: string, updateAffiliateRequest?: UpdateAffiliateRequest, options?: AxiosRequestConfig) {
        return NFTsSalePhasesApiFp(this.configuration).updateAffiliate(appId, version, collectionId, phaseId, affiliateId, updateAffiliateRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Create price tier.
     * @summary Create price tier
     * @param {string} appId Tangocrypto &#x60;app_id&#x60;.
     * @param {string} version Tangocrypto version.
     * @param {string} collectionId Collection ID
     * @param {string} phaseId Sales phase ID.
     * @param {CreatePriceTierRequest} [createPriceTierRequest] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof NFTsSalePhasesApi
     */
    public createPriceTier(appId: string, version: string, collectionId: string, phaseId: string, createPriceTierRequest?: CreatePriceTierRequest, options?: AxiosRequestConfig) {
        return NFTsSalePhasesApiFp(this.configuration).createPriceTier(appId, version, collectionId, phaseId, createPriceTierRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Delete price tier.
     * @summary Delete price tier
     * @param {string} appId Tangocrypto &#x60;app_id&#x60;.
     * @param {string} version Tangocrypto version.     
     * @param {string} collectionId Collection ID
     * @param {string} phaseId Sale phase id.
     * @param {string} pricetierId Price Tier id.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof NFTsSalePhasesApi
     */
    public deletePriceTier(appId: string, version: string, collectionId: string, phaseId: string, pricetierId: string, options?: AxiosRequestConfig) {
        return NFTsSalePhasesApiFp(this.configuration).deletePriceTier(appId, version, collectionId, phaseId, pricetierId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Update price tier.
     * @summary Update price tier
     * @param {string} appId Tangocrypto &#x60;app_id&#x60;.
     * @param {string} version Tangocrypto version.    
     * @param {string} collectionId Collection ID
     * @param {string} phaseId Sales phase ID.
     * @param {string} pricetierId Price Tier id.
     * @param {UpdatePriceTierRequest} [updatePriceTierRequest] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof NFTsSalePhasesApi
     */
    public updatePriceTier(appId: string, version: string, collectionId: string, phaseId: string, pricetierId: string, updatePriceTierRequest?: UpdatePriceTierRequest, options?: AxiosRequestConfig) {
        return NFTsSalePhasesApiFp(this.configuration).updatePriceTier(appId, version, collectionId, phaseId, pricetierId, updatePriceTierRequest, options).then((request) => request(this.axios, this.basePath));
    }



    /**
     * Delete a sale phase.
     * @summary Delete sale phase
     * @param {string} appId Tangocrypto &#x60;app_id&#x60;.
     * @param {string} version Tangocrypto version.     
     * @param {string} collectionId Collection ID
     * @param {string} phaseId Sale phase id.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof NFTsSalePhasesApi
     */
    public deleteSalePhase(appId: string, version: string, collectionId: string, phaseId: string, options?: AxiosRequestConfig) {
        return NFTsSalePhasesApiFp(this.configuration).deleteSalePhase(appId, version, collectionId, phaseId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Create a sale phase for a given collection. You can add different phases to control how you will sell the collection. For example, you might have a total of 5000 NFTs, and you want to sell them in stages. You can create a pre-sale phase to sell 1000 NFTs to previous customers at a special price and within a specific time range. You can identify these customers with a condition; that would be an NFT with a certain policy id on their wallets. Then you create another sale phase for the public drop with the remaining 4000 NFTs and no conditions.   
     * @summary Create sale phase
     * @param {string} appId Tangocrypto &#x60;app_id&#x60;.
     * @param {string} version Tangocrypto version.     
     * @param {string} collectionId Collection ID.
     * @param {CreateSalePhaseRequest} [createSalePhaseRequest] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof NFTsSalePhasesApi
     */
    public nftCreateSale(appId: string, version: string, collectionId: string, createSalePhaseRequest?: CreateSalePhaseRequest, options?: AxiosRequestConfig) {
        return NFTsSalePhasesApiFp(this.configuration).nftCreateSale(appId, version, collectionId, createSalePhaseRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns details for a single sale phase.
     * @summary Retrieve sale phase
     * @param {string} appId Tangocrypto &#x60;app_id&#x60;.
     * @param {string} version Tangocrypto version.     
     * @param {string} collectionId Collection ID
     * @param {string} phaseId Sales phase ID.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof NFTsSalePhasesApi
     */
    public retrieveSalePhase(appId: string, version: string, collectionId: string, phaseId: string, options?: AxiosRequestConfig) {
        return NFTsSalePhasesApiFp(this.configuration).retrieveSalePhase(appId, version, collectionId, phaseId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns a list of sale phases for a given collection. The response is paginated. If truncated, the response includes a `cursor` that you use in a subsequent request to retrieve the next set of sale phases. 
     * @summary List sale phases
     * @param {string} appId Tangocrypto &#x60;app_id&#x60;.
     * @param {string} version Tangocrypto version.     
     * @param {string} collectionId Collection ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof NFTsSalePhasesApi
     */
    public retrieveSalePhases(appId: string, version: string, collectionId: string, options?: AxiosRequestConfig) {
        return NFTsSalePhasesApiFp(this.configuration).retrieveSalePhases(appId, version, collectionId, options).then((request) => request(this.axios, this.basePath));
    }


    /**
     * Update sale phase.
     * @summary Update sale phase
     * @param {string} appId Tangocrypto &#x60;app_id&#x60;.
     * @param {string} version Tangocrypto version.     
     * @param {string} collectionId Collection ID
     * @param {string} phaseId Sales phase ID.
     * @param {UpdateSalePhaseRequest} [updateSalePhaseRequest] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof NFTsSalePhasesApi
     */
    public updateSalePhase(appId: string, version: string, collectionId: string, phaseId: string, updateSalePhaseRequest?: UpdateSalePhaseRequest, options?: AxiosRequestConfig) {
        return NFTsSalePhasesApiFp(this.configuration).updateSalePhase(appId, version, collectionId, phaseId, updateSalePhaseRequest, options).then((request) => request(this.axios, this.basePath));
    }
}

/**
 * NFTsSalesApi - axios parameter creator
 * @export
 */
export const NFTsSalesApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Cancel a sale for a given NFT. When you cancel a sale the status of the NFT will return back to `OPEN`
         * @summary Cancel NFT sale
         * @param {string} appId Tangocrypto &#x60;app_id&#x60;.
         * @param {string} version Tangocrypto version.
         * @param {string} collectionId Collection ID
         * @param {string} tokenId Token ID
         * @param {string} saleId Sale ID
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        cancelNftSale: async (appId: string, version: string, collectionId: string, tokenId: string, saleId: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'appId' is not null or undefined
            assertParamExists('cancelNftSale', 'appId', appId)
            // verify required parameter 'collectionId' is not null or undefined
            assertParamExists('cancelNftSale', 'collectionId', collectionId)
            // verify required parameter 'tokenId' is not null or undefined
            assertParamExists('cancelNftSale', 'tokenId', tokenId)
            // verify required parameter 'saleId' is not null or undefined
            assertParamExists('cancelNftSale', 'saleId', saleId)
            const localVarPath = buildPath(appId, version, 'nft', 'collections', collectionId, 'sales', saleId, 'cancel');
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



            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers };

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },

        /**
         * Create an NFT sale. You can sell multiple tokens in a single sale.
         * @summary Create NFT sale
         * @param {string} appId Tangocrypto &#x60;app_id&#x60;.
         * @param {string} version Tangocrypto version.         
         * @param {string} collectionId Collection ID
         * @param {CreateNftSaleRequest} [createNftSaleRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createNftSale: async (appId: string, version: string, collectionId: string, createNftSaleRequest?: CreateNftSaleRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'appId' is not null or undefined
            assertParamExists('createNftSale', 'appId', appId)
            // verify required parameter 'collectionId' is not null or undefined
            assertParamExists('createNftSale', 'collectionId', collectionId)
            const localVarPath = buildPath(appId, version, 'nft', 'collections', collectionId, 'sales');
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
            localVarRequestOptions.data = serializeDataIfNeeded(createNftSaleRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },

        /**
         * Returns a list of Sales for a given collection. The response is paginated to make the result set easier to handle. If truncated, the response includes a `cursor` that you use in a subsequent request to retrieve the next batch of NFTs. To learn more about how pagination works, visit https://docs.tangocrypto.com/rest-api/pagination 
         * @summary List NFT sales
         * @param {string} appId Tangocrypto &#x60;app_id&#x60;.
         * @param {string} version Tangocrypto version.         
         * @param {string} collectionId Collection ID
         * @param {string} [order] Use &#x60;asc&#x60; to show the oldest NFT first and &#x60;desc&#x60; to show the most recent NFT first!. If you don\&#39;t specify, this parameter it uses&#x60;desc&#x60; by default.
         * @param {number} [size] The number of NFTs to return in a single page.
         * @param {string} [cursor] A pagination cursor returned by a previous call to this endpoint. Provide this cursor to retrieve the next set of results for your original query.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listNftSales: async (appId: string, version: string, collectionId: string, order?: string, size?: number, cursor?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'appId' is not null or undefined
            assertParamExists('listNftSales', 'appId', appId)
            // verify required parameter 'collectionId' is not null or undefined
            assertParamExists('listNftSales', 'collectionId', collectionId)
            const localVarPath = buildPath(appId, version, 'nft', 'collections', collectionId, 'sales');
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

            if (order !== undefined) {
                localVarQueryParameter['order'] = order;
            }

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
         * Returns details for a single NFT sale. With this endpoint, you can check the remaining reservation time or if the sale is expired. Also, you can check if a customer has made a partial payment or if the total amount was paid. Once the payment is received, the NFT is minted and sent to the buyer\'s wallet address.
         * @summary Retrieve NFT Sale
         * @param {string} appId Tangocrypto &#x60;app_id&#x60;.
         * @param {string} version Tangocrypto version.         
         * @param {string} collectionId Collection ID
         * @param {string} saleId Sale ID
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        retrieveNFTSale: async (appId: string, version: string, collectionId: string, saleId: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'appId' is not null or undefined
            assertParamExists('retrieveNFTSale', 'appId', appId)
            // verify required parameter 'collectionId' is not null or undefined
            assertParamExists('retrieveNFTSale', 'collectionId', collectionId)
            // verify required parameter 'saleId' is not null or undefined
            assertParamExists('retrieveNFTSale', 'saleId', saleId)
            const localVarPath = buildPath(appId, version, 'nft', 'collections', collectionId, 'sales', saleId);
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
 * NFTsSalesApi - functional programming interface
 * @export
 */
export const NFTsSalesApiFp = function (configuration?: Configuration) {
    const localVarAxiosParamCreator = NFTsSalesApiAxiosParamCreator(configuration)
    return {
        /**
         * Cancel a sale for a given NFT. When you cancel a sale the status of the NFT will return back to `OPEN`
         * @summary Cancel NFT sale
         * @param {string} appId Tangocrypto &#x60;app_id&#x60;.
         * @param {string} version Tangocrypto version.
         * @param {string} collectionId Collection ID
         * @param {string} tokenId Token ID
         * @param {string} saleId Sale ID
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async cancelNftSale(appId: string, version: string, collectionId: string, tokenId: string, saleId: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => ApiPromise<CancelNftSaleResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.cancelNftSale(appId, version, collectionId, tokenId, saleId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },

        /**
         * Create an NFT sale. You can sell multiple tokens in a single sale.
         * @summary Create NFT sale
         * @param {string} appId Tangocrypto &#x60;app_id&#x60;.
         * @param {string} version Tangocrypto version.         
         * @param {string} collectionId Collection ID
         * @param {CreateNftSaleRequest} [createNftSaleRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createNftSale(appId: string, version: string, collectionId: string, createNftSaleRequest?: CreateNftSaleRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => ApiPromise<CreateNftSaleResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createNftSale(appId, version, collectionId, createNftSaleRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },

        /**
         * Returns a list of Sales for a given collection. The response is paginated to make the result set easier to handle. If truncated, the response includes a `cursor` that you use in a subsequent request to retrieve the next batch of NFTs. To learn more about how pagination works, visit https://docs.tangocrypto.com/rest-api/pagination 
         * @summary List NFT sales
         * @param {string} appId Tangocrypto &#x60;app_id&#x60;.
         * @param {string} version Tangocrypto version.         
         * @param {string} collectionId Collection ID
         * @param {string} [order] Use &#x60;asc&#x60; to show the oldest NFT first and &#x60;desc&#x60; to show the most recent NFT first!. If you don\&#39;t specify, this parameter it uses&#x60;desc&#x60; by default.
         * @param {number} [size] The number of NFTs to return in a single page.
         * @param {string} [cursor] A pagination cursor returned by a previous call to this endpoint. Provide this cursor to retrieve the next set of results for your original query.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async listNftSales(appId: string, version: string, collectionId: string, order?: string, size?: number, cursor?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => ApiPromise<PaginateResponse<Sale>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.listNftSales(appId, version, collectionId, order, size, cursor, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },

        /**
         * Returns details for a single NFT sale. With this endpoint, you can check the remaining reservation time or if the sale is expired. Also, you can check if a customer has made a partial payment or if the total amount was paid. Once the payment is received, the NFT is minted and sent to the buyer\'s wallet address.
         * @summary Retrieve NFT Sale
         * @param {string} appId Tangocrypto &#x60;app_id&#x60;.
         * @param {string} version Tangocrypto version.         
         * @param {string} collectionId Collection ID
         * @param {string} salesId Sales ID
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async retrieveNFTSale(appId: string, version: string, collectionId: string, salesId: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => ApiPromise<RetrieveNftSaleResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.retrieveNFTSale(appId, version, collectionId, salesId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * NFTsSalesApi - object-oriented interface
 * @export
 * @class NFTsSalesApi
 * @extends {BaseAPI}
 */
export class NFTsSalesApi extends BaseAPI {
    /**
     * Cancel a sale for a given NFT. When you cancel a sale the status of the NFT will return back to `OPEN`
     * @summary Cancel NFT sale
     * @param {string} appId Tangocrypto &#x60;app_id&#x60;.
     * @param {string} version Tangocrypto version.
     * @param {string} collectionId Collection ID
     * @param {string} tokenId Token ID
     * @param {string} saleId Sale ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof NFTsSalesApi
     */
    public cancelNftSale(appId: string, version: string, collectionId: string, tokenId: string, saleId: string, options?: AxiosRequestConfig) {
        return NFTsSalesApiFp(this.configuration).cancelNftSale(appId, version, collectionId, tokenId, saleId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Create an NFT sale. You can sell multiple tokens in a single sale.
     * @summary Create NFT sale
     * @param {string} appId Tangocrypto &#x60;app_id&#x60;.
     * @param {string} version Tangocrypto version.     
     * @param {string} collectionId Collection ID
     * @param {CreateNftSaleRequest} [createNftSaleRequest] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof NFTsSalesApi
     */
    public createNftSale(appId: string, version: string, collectionId: string, createNftSaleRequest?: CreateNftSaleRequest, options?: AxiosRequestConfig) {
        return NFTsSalesApiFp(this.configuration).createNftSale(appId, version, collectionId, createNftSaleRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns a list of Sales for a given collection. The response is paginated to make the result set easier to handle. If truncated, the response includes a `cursor` that you use in a subsequent request to retrieve the next batch of NFTs. To learn more about how pagination works, visit https://docs.tangocrypto.com/rest-api/pagination 
     * @summary List NFT sales
     * @param {string} appId Tangocrypto &#x60;app_id&#x60;.
     * @param {string} version Tangocrypto version.     
     * @param {string} collectionId Collection ID
     * @param {string} [order] Use &#x60;asc&#x60; to show the oldest NFT first and &#x60;desc&#x60; to show the most recent NFT first!. If you don\&#39;t specify, this parameter it uses&#x60;desc&#x60; by default.
     * @param {number} [size] The number of NFTs to return in a single page.
     * @param {string} [cursor] A pagination cursor returned by a previous call to this endpoint. Provide this cursor to retrieve the next set of results for your original query.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof NFTsSalesApi
     */
    public listNftSales(appId: string, version: string, collectionId: string, order?: string, size?: number, cursor?: string, options?: AxiosRequestConfig) {
        return NFTsSalesApiFp(this.configuration).listNftSales(appId, version, collectionId, order, size, cursor, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns details for a single NFT sale. With this endpoint, you can check the remaining reservation time or if the sale is expired. Also, you can check if a customer has made a partial payment or if the total amount was paid. Once the payment is received, the NFT is minted and sent to the buyer\'s wallet address.
     * @summary Retrieve NFT Sale
     * @param {string} appId Tangocrypto &#x60;app_id&#x60;.
     * @param {string} version Tangocrypto version.     
     * @param {string} collectionId Collection ID
     * @param {string} salesId Sales ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof NFTsSalesApi
     */
    public retrieveNFTSale(appId: string, version: string, collectionId: string, salesId: string, options?: AxiosRequestConfig) {
        return NFTsSalesApiFp(this.configuration).retrieveNFTSale(appId, version, collectionId, salesId, options).then((request) => request(this.axios, this.basePath));
    }
}

/**
 * NFTsTokensApi - axios parameter creator
 * @export
 */
export const NFTsTokensApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Delete an NFT in your Tangocrypto account.
         * @summary Delete NFT
         * @param {string} appId Tangocrypto &#x60;app_id&#x60;.
         * @param {string} version Tangocrypto version.
         * @param {string} collectionId Collection ID
         * @param {string} tokenId NFT id within your Tangocrypto account.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteNft: async (appId: string, version: string, collectionId: string, tokenId: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'appId' is not null or undefined
            assertParamExists('deleteNft', 'appId', appId)
            // verify required parameter 'collectionId' is not null or undefined
            assertParamExists('deleteNft', 'collectionId', collectionId)
            // verify required parameter 'tokenId' is not null or undefined
            assertParamExists('deleteNft', 'tokenId', tokenId)
            const localVarPath = buildPath(appId, version, 'nft', 'collections', collectionId, 'tokens', tokenId);
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
         * Create NFT in a Collection 
         * @summary Create NFT
         * @param {string} appId Tangocrypto &#x60;app_id&#x60;.
         * @param {string} version Tangocrypto version.         
         * @param {string} collectionId Collection ID.
         * @param {CreateNftRequest} [createNftRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        nftCreateNft: async (appId: string, version: string, collectionId: string, createNftRequest?: CreateNftRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'appId' is not null or undefined
            assertParamExists('nftCreateNft', 'appId', appId)
            // verify required parameter 'collectionId' is not null or undefined
            assertParamExists('nftCreateNft', 'collectionId', collectionId)
            const localVarPath = buildPath(appId, version, 'nft', 'collections', collectionId, 'tokens');
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
            localVarRequestOptions.data = serializeDataIfNeeded(createNftRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },

        /**
         * Returns details for a single NFT.
         * @summary Retrieve NFT
         * @param {string} appId Tangocrypto &#x60;app_id&#x60;.
         * @param {string} version Tangocrypto version.         
         * @param {string} collectionId Collection ID
         * @param {string} tokenId NFT id within your Tangocrypto account.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        retrieveNFT: async (appId: string, version: string, collectionId: string, tokenId: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'appId' is not null or undefined
            assertParamExists('retrieveNFT', 'appId', appId)
            // verify required parameter 'collectionId' is not null or undefined
            assertParamExists('retrieveNFT', 'collectionId', collectionId)
            // verify required parameter 'tokenId' is not null or undefined
            assertParamExists('retrieveNFT', 'tokenId', tokenId)
            const localVarPath = buildPath(appId, version, 'nft', 'collections', collectionId, 'tokens', tokenId);
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
         * Updates the NFT with the supplied parameters. The ones not provided  remain with the same value.
         * @summary Update NFT
         * @param {string} appId Tangocrypto &#x60;app_id&#x60;.
         * @param {string} version Tangocrypto version.         
         * @param {string} collectionId Collection ID
         * @param {string} tokenId NFT id within your Tangocrypto account.
         * @param {UpdateNftRequest} [updateNftRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateNFT: async (appId: string, version: string, collectionId: string, tokenId: string, updateNftRequest?: UpdateNftRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'appId' is not null or undefined
            assertParamExists('updateNFT', 'appId', appId)
            // verify required parameter 'collectionId' is not null or undefined
            assertParamExists('updateNFT', 'collectionId', collectionId)
            // verify required parameter 'tokenId' is not null or undefined
            assertParamExists('updateNFT', 'tokenId', tokenId)
            const localVarPath = buildPath(appId, version, 'nft', 'collections', collectionId, 'tokens', tokenId);
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
            localVarRequestOptions.data = serializeDataIfNeeded(updateNftRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * NFTsTokensApi - functional programming interface
 * @export
 */
export const NFTsTokensApiFp = function (configuration?: Configuration) {
    const localVarAxiosParamCreator = NFTsTokensApiAxiosParamCreator(configuration)
    return {
        /**
         * Delete an NFT in your Tangocrypto account.
         * @summary Delete NFT
         * @param {string} appId Tangocrypto &#x60;app_id&#x60;.
         * @param {string} version Tangocrypto version.
         * @param {string} collectionId Collection ID
         * @param {string} tokenId NFT id within your Tangocrypto account.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteNft(appId: string, version: string, collectionId: string, tokenId: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => ApiPromise<DeleteNftResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deleteNft(appId, version, collectionId, tokenId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },

        /**
         * Create NFT in a Collection 
         * @summary Create NFT
         * @param {string} appId Tangocrypto &#x60;app_id&#x60;.
         * @param {string} version Tangocrypto version.         
         * @param {string} collectionId Collection ID.
         * @param {CreateNftRequest} [createNftRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async nftCreateNft(appId: string, version: string, collectionId: string, createNftRequest?: CreateNftRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => ApiPromise<CreateNftResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.nftCreateNft(appId, version, collectionId, createNftRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },

        /**
         * Returns details for a single NFT.
         * @summary Retrieve NFT
         * @param {string} appId Tangocrypto &#x60;app_id&#x60;.
         * @param {string} version Tangocrypto version.         
         * @param {string} collectionId Collection ID
         * @param {string} tokenId NFT id within your Tangocrypto account.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async retrieveNFT(appId: string, version: string, collectionId: string, tokenId: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => ApiPromise<Token>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.retrieveNFT(appId, version, collectionId, tokenId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },

        /**
         * Updates the NFT with the supplied parameters. The ones not provided  remain with the same value.
         * @summary Update NFT
         * @param {string} appId Tangocrypto &#x60;app_id&#x60;.
         * @param {string} version Tangocrypto version.         
         * @param {string} collectionId Collection ID
         * @param {string} tokenId NFT id within your Tangocrypto account.
         * @param {UpdateNftRequest} [updateNftRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateNFT(appId: string, version: string, collectionId: string, tokenId: string, updateNftRequest?: UpdateNftRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => ApiPromise<CreateNftResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateNFT(appId, version, collectionId, tokenId, updateNftRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * NFTsTokensApi - object-oriented interface
 * @export
 * @class NFTsTokensApi
 * @extends {BaseAPI}
 */
export class NFTsTokensApi extends BaseAPI {
    /**
     * Delete an NFT in your Tangocrypto account.
     * @summary Delete NFT
     * @param {string} appId Tangocrypto &#x60;app_id&#x60;.
     * @param {string} version Tangocrypto version.
     * @param {string} collectionId Collection ID
     * @param {string} tokenId NFT id within your Tangocrypto account.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof NFTsTokensApi
     */
    public deleteNft(appId: string, version: string, collectionId: string, tokenId: string, options?: AxiosRequestConfig) {
        return NFTsTokensApiFp(this.configuration).deleteNft(appId, version, collectionId, tokenId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Create NFT in a Collection 
     * @summary Create NFT
     * @param {string} appId Tangocrypto &#x60;app_id&#x60;
     * @param {string} version Tangocrypto version.     
     * @param {string} collectionId Collection ID.
     * @param {CreateNftRequest} [createNftRequest] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof NFTsTokensApi
     */
    public nftCreateNft(appId: string, version: string, collectionId: string, createNftRequest?: CreateNftRequest, options?: AxiosRequestConfig) {
        return NFTsTokensApiFp(this.configuration).nftCreateNft(appId, version, collectionId, createNftRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns details for a single NFT.
     * @summary Retrieve NFT
     * @param {string} appId Tangocrypto &#x60;app_id&#x60;.
     * @param {string} version Tangocrypto version.     
     * @param {string} collectionId Collection ID
     * @param {string} tokenId NFT id within your Tangocrypto account.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof NFTsTokensApi
     */
    public retrieveNFT(appId: string, version: string, collectionId: string, tokenId: string, options?: AxiosRequestConfig) {
        return NFTsTokensApiFp(this.configuration).retrieveNFT(appId, version, collectionId, tokenId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Updates the NFT with the supplied parameters. The ones not provided  remain with the same value.
     * @summary Update NFT
     * @param {string} appId Tangocrypto &#x60;app_id&#x60;.
     * @param {string} version Tangocrypto version.     
     * @param {string} collectionId Collection ID
     * @param {string} tokenId NFT id within your Tangocrypto account.
     * @param {UpdateNftRequest} [updateNftRequest] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof NFTsTokensApi
     */
    public updateNFT(appId: string, version: string, collectionId: string, tokenId: string, updateNftRequest?: UpdateNftRequest, options?: AxiosRequestConfig) {
        return NFTsTokensApiFp(this.configuration).updateNFT(appId, version, collectionId, tokenId, updateNftRequest, options).then((request) => request(this.axios, this.basePath));
    }
}