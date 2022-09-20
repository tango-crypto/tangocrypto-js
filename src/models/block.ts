/**
 * 
 * @export
 * @interface Block
 */
export interface Block {
    /**
     * The hash identifier of the block.
     * @type {string}
     * @memberof Block
     */
    'hash'?: string;
    /**
     * The epoch number.
     * @type {number}
     * @memberof Block
     */
    'epoch_no'?: number;
    /**
     * The slot number.
     * @type {number}
     * @memberof Block
     */
    'slot_no'?: number;
    /**
     * The slot number within an epoch (resets to zero at the start of each epoch).
     * @type {number}
     * @memberof Block
     */
    'epoch_slot_no'?: number;
    /**
     * Block number.
     * @type {number}
     * @memberof Block
     */
    'block_no'?: number;
    /**
     * Number of the previous block.
     * @type {number}
     * @memberof Block
     */
    'previous_block'?: number;
    /**
     * Number of the next block.
     * @type {number}
     * @memberof Block
     */
    'next_block'?: number;
    /**
     * Bech32 ID of the slot leader (ie an entity that mines a block).
     * @type {string}
     * @memberof Block
     */
    'slot_leader'?: string;
    /**
     * Total output within the block (in Lovelace).
     * @type {number}
     * @memberof Block
     */
    'out_sum'?: number;
    /**
     * Total fees within the block (in Lovelace).
     * @type {number}
     * @memberof Block
     */
    'fees'?: number;
    /**
     * Number of block confirmations.
     * @type {number}
     * @memberof Block
     */
    'confirmations'?: number;
    /**
     * The block size (in bytes).
     * @type {number}
     * @memberof Block
     */
    'size'?: number;
    /**
     * Block creation time in ISO 8601 format
     * @type {string}
     * @memberof Block
     */
    'time'?: string;
    /**
     * Number of transactions in the block.
     * @type {number}
     * @memberof Block
     */
    'tx_count'?: number;
    /**
     * The VRF key of the creator of this block.
     * @type {string}
     * @memberof Block
     */
    'vrf_key'?: string;
    /**
     * The hash of the operational certificate of the block producer.
     * @type {string}
     * @memberof Block
     */
    'op_cert'?: string;
}

/**
 * 
 * @export
 * @interface BlockTransaction
 */
 export interface BlockTransaction {
    /**
     * The hash identifier of the transaction.
     * @type {string}
     * @memberof BlockTransaction
     */
    'hash'?: string;
    /**
     * The index of this transaction with the block (zero based).
     * @type {number}
     * @memberof BlockTransaction
     */
    'block_index'?: number;
    /**
     * The sum of the transaction outputs (in Lovelace).
     * @type {number}
     * @memberof BlockTransaction
     */
    'out_sum'?: number;
    /**
     * The fees paid for this transaction (in Lovelace).
     * @type {number}
     * @memberof BlockTransaction
     */
    'fee'?: number;
    /**
     * Deposit (or deposit refund) in this transaction. Deposits are positive, refunds negative.
     * @type {number}
     * @memberof BlockTransaction
     */
    'deposit'?: number;
    /**
     * The size of the transaction in bytes.
     * @type {number}
     * @memberof BlockTransaction
     */
    'size'?: number;
    /**
     * Transaction in invalid before this slot number.
     * @type {number}
     * @memberof BlockTransaction
     */
    'invalid_before'?: number | null;
    /**
     * Transaction in invalid at or after this slot number.
     * @type {number}
     * @memberof BlockTransaction
     */
    'invalid_hereafter'?: number | null;
    /**
     * False if the contract is invalid. True if the contract is valid or there is no contract.
     * @type {boolean}
     * @memberof BlockTransaction
     */
    'valid_contract'?: boolean;
    /**
     * The sum of the script sizes (in bytes) of scripts in the transaction.
     * @type {number}
     * @memberof BlockTransaction
     */
    'script_size'?: number;
}