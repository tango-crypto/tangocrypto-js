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
/**
 * 
 * @export
 * @interface CreateNftSaleResponse
 */
export interface CreateNftSaleResponse {
    /**
     * Sale id. This gives you a way to identify a particular sale. Every time you generate a sale you'll get a new sale id.
     * @type {string}
     * @memberof CreateNftSaleResponse
     */
    id?: string;
    /**
     * NFT status
     * @type {string}
     * @memberof CreateNftSaleResponse
     */
    status?: CreateNftSaleResponseStatusEnum;
    /**
     * Use `fixed` for selling a particular token or token list identified by the token-id. Use `random` for random sales, it will pick random tokens from the collection.
     * @type {string}
     * @memberof CreateNftSaleResponse
     */
    type?: CreateNftSaleResponseTypeEnum;
    /**
     * Individual token price in Lovelace (1 ADA = 1000000 Lovelace).
     * @type {number}
     * @memberof CreateNftSaleResponse
     */
    price?: number;
    /**
     * Number of tokens for sale. 1 for NFTs.
     * @type {number}
     * @memberof CreateNftSaleResponse
     */
    supply?: number;
    /**
     * Address where the customer has to make the payment.
     * @type {string}
     * @memberof CreateNftSaleResponse
     */
    paymentAddress?: string;
    /**
     * Reservation time in ms. This timer defines how long an NFT will be reserved once a potential buyer starts the buying process. During this time interval, the NFT won''t be available for sale. No other buyer will be able to create a new reservation. If the payment is not received, and this timer expires then the NFT is ready for sale again and it can be reserved by another buyer.
     * @type {number}
     * @memberof CreateNftSaleResponse
     */
    reservedTime?: number;
    /**
     * Payment URL. This is the URL you add to your website as a link or a button to buy the NFTs. You can think about this URL as your payment button.
     * @type {string}
     * @memberof CreateNftSaleResponse
     */
    paymentLink?: string;
    /**
     * Tangocrypto fee per NFT minted.
     * @type {number}
     * @memberof CreateNftSaleResponse
     */
    serviceFee?: number;
    /**
     * Array of NFTs. The metadata is shown with the same format that is minted.
     * @type {Array<object>}
     * @memberof CreateNftSaleResponse
     */
    tokens?: Array<object>;
    /**
     * number of confirmations.
     * @type {number}
     * @memberof CreateNftSaleResponse
     */
    confirmations?: number;
    /**
     * Creation datetime in ISO 8601 format.
     * @type {string}
     * @memberof CreateNftSaleResponse
     */
    createdAt?: string;
    /**
     * Update datetime in ISO 8601 format.
     * @type {string}
     * @memberof CreateNftSaleResponse
     */
    updatedAt?: string;
}


/**
 * @export
 */
export const CreateNftSaleResponseStatusEnum = {
    UploadingContent: 'UPLOADING_CONTENT',
    ForSale: 'FOR_SALE',
    Reserved: 'RESERVED',
    Completed: 'COMPLETED'
} as const;
export type CreateNftSaleResponseStatusEnum = typeof CreateNftSaleResponseStatusEnum[keyof typeof CreateNftSaleResponseStatusEnum];

/**
 * @export
 */
export const CreateNftSaleResponseTypeEnum = {
    Fixed: 'fixed',
    Random: 'random'
} as const;
export type CreateNftSaleResponseTypeEnum = typeof CreateNftSaleResponseTypeEnum[keyof typeof CreateNftSaleResponseTypeEnum];


/**
 * Check if a given object implements the CreateNftSaleResponse interface.
 */
export function instanceOfCreateNftSaleResponse(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CreateNftSaleResponseFromJSON(json: any): CreateNftSaleResponse {
    return CreateNftSaleResponseFromJSONTyped(json, false);
}

export function CreateNftSaleResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateNftSaleResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'status': !exists(json, 'status') ? undefined : json['status'],
        'type': !exists(json, 'type') ? undefined : json['type'],
        'price': !exists(json, 'price') ? undefined : json['price'],
        'supply': !exists(json, 'supply') ? undefined : json['supply'],
        'paymentAddress': !exists(json, 'payment_address') ? undefined : json['payment_address'],
        'reservedTime': !exists(json, 'reserved_time') ? undefined : json['reserved_time'],
        'paymentLink': !exists(json, 'payment_link') ? undefined : json['payment_link'],
        'serviceFee': !exists(json, 'service_fee') ? undefined : json['service_fee'],
        'tokens': !exists(json, 'tokens') ? undefined : json['tokens'],
        'confirmations': !exists(json, 'confirmations') ? undefined : json['confirmations'],
        'createdAt': !exists(json, 'created_at') ? undefined : json['created_at'],
        'updatedAt': !exists(json, 'updated_at') ? undefined : json['updated_at'],
    };
}

export function CreateNftSaleResponseToJSON(value?: CreateNftSaleResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'status': value.status,
        'type': value.type,
        'price': value.price,
        'supply': value.supply,
        'payment_address': value.paymentAddress,
        'reserved_time': value.reservedTime,
        'payment_link': value.paymentLink,
        'service_fee': value.serviceFee,
        'tokens': value.tokens,
        'confirmations': value.confirmations,
        'created_at': value.createdAt,
        'updated_at': value.updatedAt,
    };
}

