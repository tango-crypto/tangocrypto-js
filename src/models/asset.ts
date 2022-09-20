/**
 * 
 * @export
 * @interface Asset
 */
 export interface Asset {
    /**
     * Policy ID controlling an asset
     * @type {string}
     * @memberof Asset
     */
    'policy_id'?: string;
    /**
     * Asset name
     * @type {string}
     * @memberof Asset
     */
    'asset_name'?: string;
    /**
     * Asset fingerprint (<a href=\"https://cips.cardano.org/cips/cip14/\">CIP14</a>)
     * @type {string}
     * @memberof Asset
     */
    'fingerprint'?: string;
    /**
     * Assset quantity
     * @type {number}
     * @memberof Asset
     */
    'quantity'?: number;
    /**
     * Assset mint transactions
     * @type {number}
     * @memberof Asset
     */
    'mint_transactions'?: number;
    /**
     * Count of mint assets
     * @type {number}
     * @memberof Asset
     */
    'mint_quantity'?: number;
    /**
     * Count of burn assets
     * @type {number}
     * @memberof Asset
     */
    'burn_quantity'?: number;
    /**
     * ID of the initial minting transaction
     * @type {string}
     * @memberof Asset
     */
    'initial_mint_tx_hash'?: string;
    /**
     * Assset created at
     * @type {string}
     * @memberof Asset
     */
    'created_at'?: string;
    /**
     * Assset metadata
     * @type {object | Array<object>}
     * @memberof Asset
     */
    'metadata'?: object | Array<object>;
}

export interface AssetAddress {
    /**
     * Bech32 encoded addresses
     * @type {string}
     * @memberof AssetAddress
     */
    'address'?: string;
    /**
     * Assset quantity
     * @type {number}
     * @memberof AssetAddress
     */
    'quantity'?: number;
    /**
     * Percentage of asset ownership for a given address compared to the total supply.
     * @type {string}
     * @memberof AssetAddress
     */
    'share'?: string;
}