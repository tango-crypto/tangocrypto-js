import { Block } from "./block";
import { Utxo } from "./utxo";

/**
 * 
 * @export
 * @interface AddressTransaction
 */
 export interface AddressTransaction {
    /**
     * AddressTransaction hash.
     * @type {string}
     * @memberof AddressTransaction
     */
    'hash'?: string;
    /**
     * AddressTransaction total output sum in Lovelace (1 Ada == 1000000 Lovelace).
     * @type {string}
     * @memberof AddressTransaction
     */
    'out_sum'?: string;
    /**
     * AddressTransaction fee in Lovelace (1 Ada == 1000000 Lovelace).
     * @type {string}
     * @memberof AddressTransaction
     */
    'fee'?: string;
    /**
     * 
     * @type {Block}
     * @memberof AddressTransaction
     */
    'block'?: Block;
    /**
     * AddressTransaction input addresses
     * @type {Array<string>}
     * @memberof AddressTransaction
     */
    'inputs'?: Array<string>;
    /**
     * AddressTransaction output addresses
     * @type {Array<string>}
     * @memberof AddressTransaction
     */
    'outputs'?: Array<string>;
}