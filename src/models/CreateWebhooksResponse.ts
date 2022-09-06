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
import type { RetrieveWebhookResponseRulesInner } from './RetrieveWebhookResponseRulesInner';
import {
    RetrieveWebhookResponseRulesInnerFromJSON,
    RetrieveWebhookResponseRulesInnerFromJSONTyped,
    RetrieveWebhookResponseRulesInnerToJSON,
} from './RetrieveWebhookResponseRulesInner';

/**
 * 
 * @export
 * @interface CreateWebhooksResponse
 */
export interface CreateWebhooksResponse {
    /**
     * Webhook ID
     * @type {string}
     * @memberof CreateWebhooksResponse
     */
    id?: string;
    /**
     * Webhook type
     * @type {string}
     * @memberof CreateWebhooksResponse
     */
    type?: string;
    /**
     * Webhook name
     * @type {string}
     * @memberof CreateWebhooksResponse
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof CreateWebhooksResponse
     */
    network?: string;
    /**
     * Webhook description
     * @type {string}
     * @memberof CreateWebhooksResponse
     */
    description?: string;
    /**
     * Destination address.
     * @type {any}
     * @memberof CreateWebhooksResponse
     */
    address?: any | null;
    /**
     * The URL where your server is listening. We send a POST to this URL with the webhook event.
     * @type {string}
     * @memberof CreateWebhooksResponse
     */
    callbackUrl?: string;
    /**
     * Every rule is composed of a field, a value and an operator. 
     * @type {Array<RetrieveWebhookResponseRulesInner>}
     * @memberof CreateWebhooksResponse
     */
    rules?: Array<RetrieveWebhookResponseRulesInner>;
    /**
     * Creation datetime in ISO 8601 format.
     * @type {string}
     * @memberof CreateWebhooksResponse
     */
    createDate?: string;
    /**
     * Update datetime in ISO 8601 format.
     * @type {string}
     * @memberof CreateWebhooksResponse
     */
    updateDate?: string;
    /**
     * True if the webhook is available. False if the webhook is disabled.
     * @type {boolean}
     * @memberof CreateWebhooksResponse
     */
    available?: boolean;
}

/**
 * Check if a given object implements the CreateWebhooksResponse interface.
 */
export function instanceOfCreateWebhooksResponse(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CreateWebhooksResponseFromJSON(json: any): CreateWebhooksResponse {
    return CreateWebhooksResponseFromJSONTyped(json, false);
}

export function CreateWebhooksResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateWebhooksResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'type': !exists(json, 'type') ? undefined : json['type'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'network': !exists(json, 'network') ? undefined : json['network'],
        'description': !exists(json, 'description') ? undefined : json['description'],
        'address': !exists(json, 'address') ? undefined : json['address'],
        'callbackUrl': !exists(json, 'callback_url') ? undefined : json['callback_url'],
        'rules': !exists(json, 'rules') ? undefined : ((json['rules'] as Array<any>).map(RetrieveWebhookResponseRulesInnerFromJSON)),
        'createDate': !exists(json, 'create_date') ? undefined : json['create_date'],
        'updateDate': !exists(json, 'update_date') ? undefined : json['update_date'],
        'available': !exists(json, 'available') ? undefined : json['available'],
    };
}

export function CreateWebhooksResponseToJSON(value?: CreateWebhooksResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'type': value.type,
        'name': value.name,
        'network': value.network,
        'description': value.description,
        'address': value.address,
        'callback_url': value.callbackUrl,
        'rules': value.rules === undefined ? undefined : ((value.rules as Array<any>).map(RetrieveWebhookResponseRulesInnerToJSON)),
        'create_date': value.createDate,
        'update_date': value.updateDate,
        'available': value.available,
    };
}

