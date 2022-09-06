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
 * @interface NftCollectionRoyaltySaleInfo
 */
export interface NftCollectionRoyaltySaleInfo {
    /**
     * Sale id where the royalty token was minted.
     * @type {string}
     * @memberof NftCollectionRoyaltySaleInfo
     */
    saleId?: string;
    /**
     * Transaction Id where the royalty token was minted.
     * @type {string}
     * @memberof NftCollectionRoyaltySaleInfo
     */
    txId?: string;
    /**
     * Amount of Ada spent on fees minting the royalty token.
     * @type {number}
     * @memberof NftCollectionRoyaltySaleInfo
     */
    txFee?: number;
    /**
     * Amount of ADA spent to send the NFTs to the buyer's wallets.
     * @type {number}
     * @memberof NftCollectionRoyaltySaleInfo
     */
    nftFee?: number;
}

/**
 * Check if a given object implements the NftCollectionRoyaltySaleInfo interface.
 */
export function instanceOfNftCollectionRoyaltySaleInfo(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function NftCollectionRoyaltySaleInfoFromJSON(json: any): NftCollectionRoyaltySaleInfo {
    return NftCollectionRoyaltySaleInfoFromJSONTyped(json, false);
}

export function NftCollectionRoyaltySaleInfoFromJSONTyped(json: any, ignoreDiscriminator: boolean): NftCollectionRoyaltySaleInfo {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'saleId': !exists(json, 'sale_id') ? undefined : json['sale_id'],
        'txId': !exists(json, 'tx_id') ? undefined : json['tx_id'],
        'txFee': !exists(json, 'tx_fee') ? undefined : json['tx_fee'],
        'nftFee': !exists(json, 'nft_fee') ? undefined : json['nft_fee'],
    };
}

export function NftCollectionRoyaltySaleInfoToJSON(value?: NftCollectionRoyaltySaleInfo | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'sale_id': value.saleId,
        'tx_id': value.txId,
        'tx_fee': value.txFee,
        'nft_fee': value.nftFee,
    };
}

