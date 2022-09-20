/**
 * 
 * @export
 * @interface PoolInfo
 */
 export interface PoolInfo {
    /**
     * Pool id
     * @type {string}
     * @memberof PoolInfo
     */
    'id'?: string;
    /**
     * The Bech32 encoding of the pool hash.
     * @type {string}
     * @memberof PoolInfo
     */
    'pool_id'?: string | null;
    /**
     * The amount (in Lovelace) the pool owner pledges to the pool.
     * @type {number}
     * @memberof PoolInfo
     */
    'pledge'?: number;
    /**
     * The margin (as a percentage) this pool charges.
     * @type {number}
     * @memberof PoolInfo
     */
    'margin'?: number;
    /**
     * The fixed per epoch fee (in ADA) this pool charges.
     * @type {number}
     * @memberof PoolInfo
     */
    'fixed_cost'?: number;
    /**
     * The epoch number where this update becomes active.
     * @type {number}
     * @memberof PoolInfo
     */
    'active_epoch_no'?: number;
    /**
     * URL to the stake pool metadata
     * @type {string}
     * @memberof PoolInfo
     */
    'url'?: string | null;
    /**
     * The expected hash for the off-chain data.
     * @type {string}
     * @memberof PoolInfo
     */
    'hash'?: string | null;
    /**
     * The pool\'s ticker name (as many as 5 characters).
     * @type {string}
     * @memberof PoolInfo
     */
    'ticker'?: string | null;
    /**
     * Pool name
     * @type {string}
     * @memberof PoolInfo
     */
    'name'?: string | null;
    /**
     * Pool description
     * @type {string}
     * @memberof PoolInfo
     */
    'description'?: string | null;
    /**
     * Pool URL. This is usually a landing page to explain the pool mission and unique value proposition.
     * @type {string}
     * @memberof PoolInfo
     */
    'homepage'?: string | null;
}