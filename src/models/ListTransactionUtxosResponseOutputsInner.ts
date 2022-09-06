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

import { exists, mapValues } from '../runtime';
import type { ListTransactionUtxosResponseInputsInnerAssetsInner } from './ListTransactionUtxosResponseInputsInnerAssetsInner';
import {
    ListTransactionUtxosResponseInputsInnerAssetsInnerFromJSON,
    ListTransactionUtxosResponseInputsInnerAssetsInnerFromJSONTyped,
    ListTransactionUtxosResponseInputsInnerAssetsInnerToJSON,
} from './ListTransactionUtxosResponseInputsInnerAssetsInner';

/**
 * 
 * @export
 * @interface ListTransactionUtxosResponseOutputsInner
 */
export interface ListTransactionUtxosResponseOutputsInner {
    /**
     * Output address
     * @type {string}
     * @memberof ListTransactionUtxosResponseOutputsInner
     */
    address?: string;
    /**
     * Transaction hash
     * @type {string}
     * @memberof ListTransactionUtxosResponseOutputsInner
     */
    hash?: string;
    /**
     * UTXO Index
     * @type {number}
     * @memberof ListTransactionUtxosResponseOutputsInner
     */
    index?: number;
    /**
     * Ammount of Ada (in Lovelace)  in the output
     * @type {number}
     * @memberof ListTransactionUtxosResponseOutputsInner
     */
    value?: number;
    /**
     * 
     * @type {Array<ListTransactionUtxosResponseInputsInnerAssetsInner>}
     * @memberof ListTransactionUtxosResponseOutputsInner
     */
    assets?: Array<ListTransactionUtxosResponseInputsInnerAssetsInner>;
}

/**
 * Check if a given object implements the ListTransactionUtxosResponseOutputsInner interface.
 */
export function instanceOfListTransactionUtxosResponseOutputsInner(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ListTransactionUtxosResponseOutputsInnerFromJSON(json: any): ListTransactionUtxosResponseOutputsInner {
    return ListTransactionUtxosResponseOutputsInnerFromJSONTyped(json, false);
}

export function ListTransactionUtxosResponseOutputsInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): ListTransactionUtxosResponseOutputsInner {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'address': !exists(json, 'address') ? undefined : json['address'],
        'hash': !exists(json, 'hash') ? undefined : json['hash'],
        'index': !exists(json, 'index') ? undefined : json['index'],
        'value': !exists(json, 'value') ? undefined : json['value'],
        'assets': !exists(json, 'assets') ? undefined : ((json['assets'] as Array<any>).map(ListTransactionUtxosResponseInputsInnerAssetsInnerFromJSON)),
    };
}

export function ListTransactionUtxosResponseOutputsInnerToJSON(value?: ListTransactionUtxosResponseOutputsInner | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'address': value.address,
        'hash': value.hash,
        'index': value.index,
        'value': value.value,
        'assets': value.assets === undefined ? undefined : ((value.assets as Array<any>).map(ListTransactionUtxosResponseInputsInnerAssetsInnerToJSON)),
    };
}

