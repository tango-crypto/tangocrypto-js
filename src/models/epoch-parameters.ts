import { CostModel } from "./cost-model";

/**
 * 
 * @export
 * @interface EpochParameters
 */
export interface EpochParameters {
    /**
     * Epoch number
     * @type {number}
     * @memberof EpochParameters
     */
    'epoch_no'?: number;
    /**
     * The \'a\' parameter to calculate the minimum transaction fee.
     * @type {number}
     * @memberof EpochParameters
     */
    'min_fee_a'?: number;
    /**
     * The \'b\' parameter to calculate the minimum transaction fee.
     * @type {number}
     * @memberof EpochParameters
     */
    'min_fee_b'?: number;
    /**
     * The maximum block size (in bytes).
     * @type {number}
     * @memberof EpochParameters
     */
    'max_block_size'?: number;
    /**
     * The maximum transaction size (in bytes).
     * @type {number}
     * @memberof EpochParameters
     */
    'max_tx_size'?: number;
    /**
     * The maximum block header size (in bytes).
     * @type {number}
     * @memberof EpochParameters
     */
    'max_block_header_size'?: number;
    /**
     * The amount (in Lovelace) require for a deposit to register a StakeAddress.
     * @type {number}
     * @memberof EpochParameters
     */
    'key_deposit'?: number;
    /**
     * The amount (in Lovelace) require for a deposit to register a stake pool.
     * @type {number}
     * @memberof EpochParameters
     */
    'pool_deposit'?: number;
    /**
     * The maximum number of epochs in the future that a pool retirement is allowed to be scheduled for.
     * @type {number}
     * @memberof EpochParameters
     */
    'max_epoch'?: number;
    /**
     * The optimal number of stake pools (K).
     * @type {number}
     * @memberof EpochParameters
     */
    'optimal_pool_count'?: number;
    /**
     * The influence of the pledge on a stake pool\'s probability on minting a block.
     * @type {number}
     * @memberof EpochParameters
     */
    'influence_a0'?: number;
    /**
     * The monetary expansion rate.
     * @type {number}
     * @memberof EpochParameters
     */
    'monetary_expand_rate_rho'?: number;
    /**
     * The treasury growth rate.
     * @type {number}
     * @memberof EpochParameters
     */
    'treasury_growth_rate_tau'?: number;
    /**
     * The decentralisation parameter (1 fully centralised, 0 fully decentralised).
     * @type {number}
     * @memberof EpochParameters
     */
    'decentralisation'?: number;
    /**
     * The 32 byte string of extra random-ness to be added into the protocol's entropy pool.
     * @type {string}
     * @memberof EpochParameters
     */
    'extra_entropy'?: string;
    /**
     * The protocol major number.
     * @type {number}
     * @memberof EpochParameters
     */
    'protocol_major'?: number;
    /**
     * The protocol minor number.
     * @type {number}
     * @memberof EpochParameters
     */
    'protocol_minor'?: number;
    /**
     * The minimum value of a UTxO entry (in Lovelace).
     * @type {number}
     * @memberof EpochParameters
     */
    'min_utxo_value'?: number;
    /**
     * The minimum pool cost.
     * @type {number}
     * @memberof EpochParameters
     */
    'min_pool_cost'?: number;
    /**
     * The nonce value for this epoch.
     * @type {string}
     * @memberof EpochParameters
     */
    'nonce'?: string;
    /**
     * For Alonzo this is the cost per UTxO word. For Babbage and later per UTxO byte.
     * @type {number}
     * @memberof EpochParameters
     */
    'coins_per_utxo_size'?: number;
    /**
     * The per word cost of script memory usage.
     * @type {number}
     * @memberof EpochParameters
     */
    'price_mem'?: number;
    /**
     * The cost of script execution step usage.
     * @type {number}
     * @memberof EpochParameters
     */
    'price_step'?: number;
    /**
     * The maximum number of execution memory allowed to be used in a single transaction.
     * @type {number}
     * @memberof EpochParameters
     */
    'max_tx_ex_mem'?: number;
    /**
     * The maximum number of execution steps allowed to be used in a single transaction.
     * @type {number}
     * @memberof EpochParameters
     */
    'max_tx_ex_steps'?: number;
    /**
     * The maximum number of execution memory allowed to be used in a single block.
     * @type {number}
     * @memberof EpochParameters
     */    
    'max_block_ex_mem'?: number;
    /**
     * The maximum number of execution steps allowed to be used in a single block.
     * @type {number}
     * @memberof EpochParameters
     */    
    'max_block_ex_steps'?: number;
    /**
     * The maximum Val size.
     * @type {number}
     * @memberof EpochParameters
     */ 
    'max_val_size'?: number;
    /**
     * The percentage of the txfee which must be provided as collateral when including non-native scripts.
     * @type {number}
     * @memberof EpochParameters
     */ 
    'collateral_percent'?: number;
    /**
     * The maximum number of collateral inputs allowed in a transaction.
     * @type {number}
     * @memberof EpochParameters
     */ 
    'max_collateral_inputs'?: number;	
    /**
     * The Block table index for the first block where these parameters are valid.
     * @type {number}
     * @memberof EpochParameters
     */
    'block_id'?: number;
    /**
     * The CostModel for the params.
     * @type {CostModel}
     * @memberof EpochParameters
     */
    'cost_model'?: CostModel;
}