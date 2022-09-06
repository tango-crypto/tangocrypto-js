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
import type { ListWebhooksResponseDataInnerRulesInner } from './ListWebhooksResponseDataInnerRulesInner';
import {
    ListWebhooksResponseDataInnerRulesInnerFromJSON,
    ListWebhooksResponseDataInnerRulesInnerFromJSONTyped,
    ListWebhooksResponseDataInnerRulesInnerToJSON,
} from './ListWebhooksResponseDataInnerRulesInner';

/**
 * 
 * @export
 * @interface ListWebhooksResponseDataInner
 */
export interface ListWebhooksResponseDataInner {
    /**
     * Webhook name.
     * @type {string}
     * @memberof ListWebhooksResponseDataInner
     */
    name?: string;
    /**
     * Webhook network.
     * @type {string}
     * @memberof ListWebhooksResponseDataInner
     */
    network?: ListWebhooksResponseDataInnerNetworkEnum;
    /**
     * Webhook description.
     * @type {string}
     * @memberof ListWebhooksResponseDataInner
     */
    description?: string;
    /**
     * The url where your server is listening.
     * @type {string}
     * @memberof ListWebhooksResponseDataInner
     */
    callbackUrl?: string;
    /**
     * Every rule is composed of a field, a value and an operator. All the conditions have to be met for the webhook to be triggered. Rules are optional; depending on the number of rules and their parameters, the webhook will be triggered or not.
     * @type {Array<ListWebhooksResponseDataInnerRulesInner>}
     * @memberof ListWebhooksResponseDataInner
     */
    rules?: Array<ListWebhooksResponseDataInnerRulesInner> | null;
    /**
     * Webhook creation date in ISO 8601 format.
     * @type {string}
     * @memberof ListWebhooksResponseDataInner
     */
    createDate?: string;
    /**
     * Webhook update date in ISO 8601 format.
     * @type {string}
     * @memberof ListWebhooksResponseDataInner
     */
    updateDate?: string;
    /**
     * Webhook status.
     * @type {boolean}
     * @memberof ListWebhooksResponseDataInner
     */
    available?: boolean;
    /**
     * Number of confirmations of the transaction
     * @type {number}
     * @memberof ListWebhooksResponseDataInner
     */
    confirmations?: number;
    /**
     * Webhook id.
     * @type {string}
     * @memberof ListWebhooksResponseDataInner
     */
    id?: string;
    /**
     * Wehhook type.
     * @type {string}
     * @memberof ListWebhooksResponseDataInner
     */
    type?: ListWebhooksResponseDataInnerTypeEnum;
    /**
     * Payment address.
     * @type {string}
     * @memberof ListWebhooksResponseDataInner
     */
    address?: string;
}


/**
 * @export
 */
export const ListWebhooksResponseDataInnerNetworkEnum = {
    Mainnet: 'mainnet',
    Testnet: 'testnet'
} as const;
export type ListWebhooksResponseDataInnerNetworkEnum = typeof ListWebhooksResponseDataInnerNetworkEnum[keyof typeof ListWebhooksResponseDataInnerNetworkEnum];

/**
 * @export
 */
export const ListWebhooksResponseDataInnerTypeEnum = {
    Payment: 'payment',
    Block: 'block',
    Transaction: 'transaction',
    Delegation: 'delegation',
    Nft: 'nft'
} as const;
export type ListWebhooksResponseDataInnerTypeEnum = typeof ListWebhooksResponseDataInnerTypeEnum[keyof typeof ListWebhooksResponseDataInnerTypeEnum];


/**
 * Check if a given object implements the ListWebhooksResponseDataInner interface.
 */
export function instanceOfListWebhooksResponseDataInner(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ListWebhooksResponseDataInnerFromJSON(json: any): ListWebhooksResponseDataInner {
    return ListWebhooksResponseDataInnerFromJSONTyped(json, false);
}

export function ListWebhooksResponseDataInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): ListWebhooksResponseDataInner {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': !exists(json, 'name') ? undefined : json['name'],
        'network': !exists(json, 'network') ? undefined : json['network'],
        'description': !exists(json, 'description') ? undefined : json['description'],
        'callbackUrl': !exists(json, 'callback_url') ? undefined : json['callback_url'],
        'rules': !exists(json, 'rules') ? undefined : (json['rules'] === null ? null : (json['rules'] as Array<any>).map(ListWebhooksResponseDataInnerRulesInnerFromJSON)),
        'createDate': !exists(json, 'create_date') ? undefined : json['create_date'],
        'updateDate': !exists(json, 'update_date') ? undefined : json['update_date'],
        'available': !exists(json, 'available') ? undefined : json['available'],
        'confirmations': !exists(json, 'confirmations') ? undefined : json['confirmations'],
        'id': !exists(json, 'id') ? undefined : json['id'],
        'type': !exists(json, 'type') ? undefined : json['type'],
        'address': !exists(json, 'address') ? undefined : json['address'],
    };
}

export function ListWebhooksResponseDataInnerToJSON(value?: ListWebhooksResponseDataInner | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
        'network': value.network,
        'description': value.description,
        'callback_url': value.callbackUrl,
        'rules': value.rules === undefined ? undefined : (value.rules === null ? null : (value.rules as Array<any>).map(ListWebhooksResponseDataInnerRulesInnerToJSON)),
        'create_date': value.createDate,
        'update_date': value.updateDate,
        'available': value.available,
        'confirmations': value.confirmations,
        'id': value.id,
        'type': value.type,
        'address': value.address,
    };
}

