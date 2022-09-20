/**
 * 
 * @export
 * @interface AddressSummary
 */
 export interface AddressSummary {
    /**
     * Bech32 encoded addresses
     * @type {string}
     * @memberof AddressSummary
     */
    'address'?: string;
    /**
     * The network that the address belongs to.
     * @type {string}
     * @memberof AddressSummary
     */
    'network'?: CardanoBlockchainNetworkEnum;
    /**
     * Stake address that controls the key
     * @type {string}
     * @memberof AddressSummary
     */
    'stake_address'?: string;
    /**
     * Amount of Ada in the address in Lovelace (1 Ada == 1000000 Lovelace)
     * @type {number}
     * @memberof AddressSummary
     */
    'balance'?: number;
    /**
     * Number of transactions containing the address
     * @type {number}
     * @memberof AddressSummary
     */
    'transactions_count'?: number;
}

export const CardanoBlockchainNetworkEnum = {
    Mainnet: 'mainnet',
    Testnet: 'testnet'
} as const;

export type CardanoBlockchainNetworkEnum = typeof CardanoBlockchainNetworkEnum[keyof typeof CardanoBlockchainNetworkEnum];