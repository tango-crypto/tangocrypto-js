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


export * from "./src/apis/addresses";
export * from "./src/apis/assets";
export * from "./src/apis/blocks";
export * from "./src/apis/epochs";
export * from "./src/apis/nfts";
export * from "./src/apis/policies";
export * from "./src/apis/pools";
export * from "./src/apis/transactions";
export * from "./src/apis/wallets";
export * from "./src/apis/webhooks";
export * from "./src/configuration";
export * from "./src/clients/index";
