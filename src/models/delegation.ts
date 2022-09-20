/**
 * 
 * @export
 * @interface Delegation
 */
 export interface Delegation {
    /**
     * Bech32 encoded stake addresses.
     * @type {string}
     * @memberof Delegation
     */
    'stake_address'?: string;
    /**
     * Rewards earned by staking.
     * @type {string}
     * @memberof Delegation
     */
    'available_rewards'?: string;
    /**
     * Delegated amount (in Lovelace).
     * @type {string}
     * @memberof Delegation
     */
    'stake'?: string;
}