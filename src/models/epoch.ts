/**
 * 
 * @export
 * @interface Epoch
 */
export interface Epoch {
    /**
     * The sum of the transaction output values (in Lovelace) in this epoch.
     * @type {string}
     * @memberof Epoch
     */
    'out_sum'?: string;
    /**
     * The sum of the fees (in Lovelace) in this epoch.
     * @type {string}
     * @memberof Epoch
     */
    'fees'?: string;
    /**
     * The number of transactions in this epoch.
     * @type {number}
     * @memberof Epoch
     */
    'tx_count'?: number;
    /**
     * The number of blocks in this epoch.
     * @type {number}
     * @memberof Epoch
     */
    'blk_count'?: number;
    /**
     * The epoch number.
     * @type {number}
     * @memberof Epoch
     */
    'no'?: number;
    /**
     * The epoch start time.
     * @type {string}
     * @memberof Epoch
     */
    'start_time'?: string;
    /**
     * The epoch end time.
     * @type {string}
     * @memberof Epoch
     */
    'end_time'?: string;
}