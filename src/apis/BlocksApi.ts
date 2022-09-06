/* tslint:disable */
/* eslint-disable */
/**
 * Tangocrypto API
 * ## Overview  Tangocrypto API(Application Programing Interface) allows you fast and reliable access to the Cardano network that requires only minutes to integrate.    ## API Key header   When you sign up on https://www.tangocrypto.com and create an App an `x-api-key` is created. You must include the HTTP header `x-api-key` in every request in order to authenticate the API calls.   ## Network and Account ID   You can choose the mainnet or the testnet for your queries. The API requires a valid `app_id` to be included with your request traffic. This identifier should be appended to the request URL.   <table>    <tr><td><b>Network</b></td><td><b>Endpoint</b></td></tr>    <tr><td>Cardano mainnet</td><td><tt>https://cardano-mainnet.tangocrypto.com/{app_id}/v1</td></tt></tr>    <tr><td>Cardano testnet</td><td><tt>https://cardano-testnet.tangocrypto.com/{app_id}/v1</tt></td></tr>  </table>   ## Errors   ### HTTP Status codes   These are the response codes you are going to get when you query Tangocrypto API.   <table>    <tr><td><b>Code</b></td><td><b>Meaning</b></td></tr>    <tr><td><tt><strong>400</strong></tt></td><td><strong>Bad Request</strong> - Your request is invalid. </td></tr>    <tr><td><tt><strong>401</strong></tt></td><td><strong>Unauthorized</strong> - You must authenticate your request with an API key. Check out how to create a key if you do not have one. </td></tr>    <tr><td><tt><strong>403</strong></tt></td><td><strong>Forbidden</strong> - Check you are using the right API KEY, or you\'ve hit your capacity limit, or your request was rejected by your app\'s whitelist settings. </td></tr>    <tr><td><tt><strong>404</strong></tt></td><td><strong>Not found</strong> - Endpoint not found. </td></tr>    <tr><td><tt><strong>429</strong></tt></td><td><strong>Too Many Requests</strong> - You\'ve exceeded your concurrent requests capacity. Check out the Rate Limits page for solutions.</td></tr>    <tr><td><tt><strong>500</strong></tt></td><td><strong>Internal Server Error</strong> - We\'re unable to process your request right now. Get in touch with us if you see this.</td></tr>  </table>  
 *
 * The version of the OpenAPI document: 1
 * Contact: contact@tangocrypto.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import type {
  GetAddressSummary400Response,
  GetAddressSummary401Response,
  GetAddressSummary403Response,
  GetAddressSummary404Response,
  GetAddressSummary429Response,
  GetAddressSummary500Response,
  ListBlockTransactionsResponse,
  RetrieveBlockResponse,
} from '../models';
import {
    GetAddressSummary400ResponseFromJSON,
    GetAddressSummary400ResponseToJSON,
    GetAddressSummary401ResponseFromJSON,
    GetAddressSummary401ResponseToJSON,
    GetAddressSummary403ResponseFromJSON,
    GetAddressSummary403ResponseToJSON,
    GetAddressSummary404ResponseFromJSON,
    GetAddressSummary404ResponseToJSON,
    GetAddressSummary429ResponseFromJSON,
    GetAddressSummary429ResponseToJSON,
    GetAddressSummary500ResponseFromJSON,
    GetAddressSummary500ResponseToJSON,
    ListBlockTransactionsResponseFromJSON,
    ListBlockTransactionsResponseToJSON,
    RetrieveBlockResponseFromJSON,
    RetrieveBlockResponseToJSON,
} from '../models';

export interface GetBlockRequest {
    appId: string;
    hashOrBlockNo: string;
}

export interface GetBlockTransactionsRequest {
    appId: string;
    blockNumber: number;
    size?: number;
    cursor?: string;
    order?: GetBlockTransactionsOrderEnum;
}

export interface GetLatestBlockRequest {
    appId: string;
}

/**
 * 
 */
export class BlocksApi extends runtime.BaseAPI {

    /**
     * Retrieves information about a block specified by `hash` or `block_no`.
     * Retrieve block
     */
    async getBlockRaw(requestParameters: GetBlockRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<RetrieveBlockResponse>> {
        if (requestParameters.appId === null || requestParameters.appId === undefined) {
            throw new runtime.RequiredError('appId','Required parameter requestParameters.appId was null or undefined when calling getBlock.');
        }

        if (requestParameters.hashOrBlockNo === null || requestParameters.hashOrBlockNo === undefined) {
            throw new runtime.RequiredError('hashOrBlockNo','Required parameter requestParameters.hashOrBlockNo was null or undefined when calling getBlock.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["x-api-key"] = this.configuration.apiKey("x-api-key"); // x-api-key authentication
        }

        const response = await this.request({
            path: `/{app_id}/v1/blocks/{hash_or_block_no}`.replace(`{${"app_id"}}`, encodeURIComponent(String(requestParameters.appId))).replace(`{${"hash_or_block_no"}}`, encodeURIComponent(String(requestParameters.hashOrBlockNo))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => RetrieveBlockResponseFromJSON(jsonValue));
    }

    /**
     * Retrieves information about a block specified by `hash` or `block_no`.
     * Retrieve block
     */
    async getBlock(requestParameters: GetBlockRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<RetrieveBlockResponse> {
        const response = await this.getBlockRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Returns a list of transactions for a given block. The response is paginated. If truncated, the response includes a cursor that you use in a subsequent request to retrieve the next set of transactions. 
     * List block transactions
     */
    async getBlockTransactionsRaw(requestParameters: GetBlockTransactionsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ListBlockTransactionsResponse>> {
        if (requestParameters.appId === null || requestParameters.appId === undefined) {
            throw new runtime.RequiredError('appId','Required parameter requestParameters.appId was null or undefined when calling getBlockTransactions.');
        }

        if (requestParameters.blockNumber === null || requestParameters.blockNumber === undefined) {
            throw new runtime.RequiredError('blockNumber','Required parameter requestParameters.blockNumber was null or undefined when calling getBlockTransactions.');
        }

        const queryParameters: any = {};

        if (requestParameters.size !== undefined) {
            queryParameters['size'] = requestParameters.size;
        }

        if (requestParameters.cursor !== undefined) {
            queryParameters['cursor'] = requestParameters.cursor;
        }

        if (requestParameters.order !== undefined) {
            queryParameters['order'] = requestParameters.order;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["x-api-key"] = this.configuration.apiKey("x-api-key"); // x-api-key authentication
        }

        const response = await this.request({
            path: `/{app_id}/v1/blocks/{block_number}/transactions`.replace(`{${"app_id"}}`, encodeURIComponent(String(requestParameters.appId))).replace(`{${"block_number"}}`, encodeURIComponent(String(requestParameters.blockNumber))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ListBlockTransactionsResponseFromJSON(jsonValue));
    }

    /**
     * Returns a list of transactions for a given block. The response is paginated. If truncated, the response includes a cursor that you use in a subsequent request to retrieve the next set of transactions. 
     * List block transactions
     */
    async getBlockTransactions(requestParameters: GetBlockTransactionsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ListBlockTransactionsResponse> {
        const response = await this.getBlockTransactionsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Retrieves the latest block available. This is known as the tip of the blockchain.
     * Retrieve latest block
     */
    async getLatestBlockRaw(requestParameters: GetLatestBlockRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<RetrieveBlockResponse>> {
        if (requestParameters.appId === null || requestParameters.appId === undefined) {
            throw new runtime.RequiredError('appId','Required parameter requestParameters.appId was null or undefined when calling getLatestBlock.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["x-api-key"] = this.configuration.apiKey("x-api-key"); // x-api-key authentication
        }

        const response = await this.request({
            path: `/{app_id}/v1/blocks/latest`.replace(`{${"app_id"}}`, encodeURIComponent(String(requestParameters.appId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => RetrieveBlockResponseFromJSON(jsonValue));
    }

    /**
     * Retrieves the latest block available. This is known as the tip of the blockchain.
     * Retrieve latest block
     */
    async getLatestBlock(requestParameters: GetLatestBlockRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<RetrieveBlockResponse> {
        const response = await this.getLatestBlockRaw(requestParameters, initOverrides);
        return await response.value();
    }

}

/**
 * @export
 */
export const GetBlockTransactionsOrderEnum = {
    Asc: 'asc',
    Desc: 'desc'
} as const;
export type GetBlockTransactionsOrderEnum = typeof GetBlockTransactionsOrderEnum[keyof typeof GetBlockTransactionsOrderEnum];
