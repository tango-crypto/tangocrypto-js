/**
 * Wallet Object
 * @export
 * @interface WalletSummary
 */
 export interface WalletSummary {
    /**
     * Pool ID (in Bech32) where the wallet is delegated to.
     * @type {string}
     * @memberof WalletSummary
     */
    'pool_id'?: string | null;
    /**
     * Registration state of an wallet
     * @type {boolean}
     * @memberof WalletSummary
     */
    'active'?: boolean;
    /**
     * Epoch of the most recent action (registration or deregistration)
     * @type {number}
     * @memberof WalletSummary
     */
    'active_epoch'?: number;
    /**
     * Balance of the wallet (in Lovelace)
     * @type {string}
     * @memberof WalletSummary
     */
    'controlled_total_stake'?: string;
    /**
     * Sum of all rewards for the wallet (in Lovelace)
     * @type {string}
     * @memberof WalletSummary
     */
    'rewards_sum'?: string;
    /**
     * Sum of all withdrawals for the wallet (in Lovelace)
     * @type {string}
     * @memberof WalletSummary
     */
    'withdrawals_sum'?: string;
    /**
     * Sum of all funds from the reserve for the wallet (in Lovelace)
     * @type {string}
     * @memberof WalletSummary
     */
    'reserves_sum'?: string;
    /**
     * Sum of all funds from treasury for the wallet (in Lovelace)
     * @type {string}
     * @memberof WalletSummary
     */
    'treasury_sum'?: string;
    /**
     * Sum of available rewards that haven\'t been withdrawn for the wallet (in Lovelace)
     * @type {string}
     * @memberof WalletSummary
     */
    'withdraw_available'?: string;
}

/**
 * 
 * @export
 * @interface WalletAddress
 */
 export interface WalletAddress {
    /**
     * Address associated with the stake key
     * @type {string}
     * @memberof WalletAddress
     */
    'address'?: string;
}