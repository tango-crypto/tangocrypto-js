import { Asset } from "./asset";
import { Script } from "./script";

/**
 * 
 * @export
 * @interface Utxo
 */
 export interface Utxo {
    /**
     * Bech32 encoded addresses
     * @type {string}
     * @memberof Utxo
     */
    'address'?: string;
    /**
     * Transaction hash of the UTXO
     * @type {string}
     * @memberof Utxo
     */
    'hash'?: string;
    /**
     * UTXO index in the transaction
     * @type {number}
     * @memberof Utxo
     */
    'index'?: number;
    /**
     * Amount of Ada in the address (in Lovelace)
     * @type {number}
     * @memberof Utxo
     */
    'value'?: number;
    /**
     * True if there is a script
     * @type {boolean}
     * @memberof Utxo
     */
    'has_script'?: boolean;
    /**
     * 
     * @type {Array<Asset>}
     * @memberof Utxo
     */
    'assets'?: Array<Asset>;
    /**
     * 
     * @type {Script}
     * @memberof Utxo
     */
    'script'?: Script;
}