import { Asset } from "./asset";
import { Block } from "./block";
import { Utxo } from "./utxo";

/**
 * 
 * @export
 * @interface BuildTxAsset
 */
 export interface BuildTxAsset {
    /**
     * 
     * @type {string}
     * @memberof BuildTxAsset
     */
    'policy_id'?: string;
    /**
     * 
     * @type {string}
     * @memberof BuildTxAsset
     */
    'asset_name'?: string;
    /**
     * 
     * @type {number}
     * @memberof BuildTxAsset
     */
    'quantity'?: number;
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof BuildTxAsset
     */
    'metadata'?: { [key: string]: any; };
}

/**
 * 
 * @export
 * @interface BuildTxRequest
 */
export interface BuildTxRequest {
    /**
     * 
     * @type {Array<Utxo>}
     * @memberof BuildTxRequest
     */
    'inputs'?: Array<Utxo>;
    /**
     * 
     * @type {Array<Utxo>}
     * @memberof BuildTxRequest
     */
    'outputs'?: Array<Utxo>;
    /**
     * 
     * @type {{ [key: string]: Array<BuildTxAsset>; }}
     * @memberof BuildTxRequest
     */
    'recipients'?: { [key: string]: Array<BuildTxAsset>; };
    /**
     * 
     * @type {BuildTxRequestMintingScript}
     * @memberof BuildTxRequest
     */
    'minting_script'?: BuildTxRequestMintingScript;
    /**
     * 
     * @type {string}
     * @memberof BuildTxRequest
     */
    'change_address'?: string;
}

/**
 * 
 * @export
 * @interface BuildTxRequestMintingScript
 */
export interface BuildTxRequestMintingScript {
    /**
     * 
     * @type {string}
     * @memberof BuildTxRequestMintingScript
     */
    'type'?: string;
    /**
     * 
     * @type {Array<BuildTxRequestMintingScriptScriptsInner>}
     * @memberof BuildTxRequestMintingScript
     */
    'scripts'?: Array<BuildTxRequestMintingScriptScriptsInner>;
}
/**
 * 
 * @export
 * @interface BuildTxRequestMintingScriptScriptsInner
 */
export interface BuildTxRequestMintingScriptScriptsInner {
    /**
     * 
     * @type {string}
     * @memberof BuildTxRequestMintingScriptScriptsInner
     */
    'type'?: string;
    /**
     * 
     * @type {string}
     * @memberof BuildTxRequestMintingScriptScriptsInner
     */
    'keyHash'?: string;
    /**
     * 
     * @type {number}
     * @memberof BuildTxRequestMintingScriptScriptsInner
     */
    'slot'?: number;
}
/**
 * 
 * @export
 * @interface BuildTxResponse
 */
export interface BuildTxResponse {
    /**
     * 
     * @type {string}
     * @memberof BuildTxResponse
     */
    'tx_id'?: string;
    /**
     * 
     * @type {string}
     * @memberof BuildTxResponse
     */
    'tx'?: string;
}

/**
 * submit transaction payload
 * @export
 * @interface SubmitTansactionRequest
 */
 export interface SubmitTansactionRequest {
    /**
     * Transaction in CBOR format
     * @type {string}
     * @memberof SubmitTansactionRequest
     */
    'tx': string;
}
/**
 * Submit transaction response
 * @export
 * @interface SubitTansactionResponse
 */
export interface SubmitTansactionResponse {
    /**
     * Transaction ID.
     * @type {string}
     * @memberof SubitTansactionResponse
     */
    'tx_id'?: string;
}


/**
 * 
 * @export
 * @interface Transaction
 */
 export interface Transaction {
    /**
     * Transaction hash
     * @type {string}
     * @memberof Transaction
     */
    'hash'?: string;
    /**
     * Transaction index within the block
     * @type {number}
     * @memberof Transaction
     */
    'block_index'?: number;
    /**
     * The sum of all the UTXO per asset
     * @type {string}
     * @memberof Transaction
     */
    'out_sum'?: string;
    /**
     * Transaction fee in Lovelace
     * @type {string}
     * @memberof Transaction
     */
    'fee'?: string;
    /**
     * Deposit within the transaction in Lovelace
     * @type {string}
     * @memberof Transaction
     */
    'deposit'?: string;
    /**
     * Size of the transaction in bytes
     * @type {number}
     * @memberof Transaction
     */
    'size'?: number;
    /**
     * Specify a lower bound for a transaction to be valid. The transaction is valid from this slot number (including it) and thereafter.
     * @type {string}
     * @memberof Transaction
     */
    'invalid_before'?: string | null;
    /**
     * Specify an upper bound for a transaction to be valid. The transaction is valid up to this slot number (not including it).
     * @type {string}
     * @memberof Transaction
     */
    'invalid_hereafter'?: string | null;
    /**
     * Count of UTXOs within the transaction
     * @type {string}
     * @memberof Transaction
     */
    'utxo_count'?: string;
    /**
     * Count of the withdrawals within the transaction
     * @type {string}
     * @memberof Transaction
     */
    'withdrawal_count'?: string;
    /**
     * Count of the delegations within the transaction
     * @type {string}
     * @memberof Transaction
     */
    'delegation_count'?: string;
    /**
     * Count of the stake keys (de)registration and delegation certificates within the transaction
     * @type {string}
     * @memberof Transaction
     */
    'stake_cert_count'?: string;
    /**
     * True if the transaction was made to update a pool
     * @type {boolean}
     * @memberof Transaction
     */
    'pool_update'?: boolean;
    /**
     * True if the transaction was made to retire a pool
     * @type {boolean}
     * @memberof Transaction
     */
    'pool_retire'?: boolean;
    /**
     * Numnber of minted of burned tokens in the transaction
     * @type {string}
     * @memberof Transaction
     */
    'asset_mint_or_burn_count'?: string;
    /**
     * 
     * @type {RetrieveTransactionResponseBlock}
     * @memberof Transaction
     */
    'block'?: Block;
    /**
     * 
     * @type {Array<Asset>}
     * @memberof Transaction
     */
    'assets'?: Array<Asset>;
}


/**
 * Get transaction UTXOs
 * @export
 * @interface TransactionUtxos
 */
 export interface TransactionUtxos {
    /**
     * Transaction hash
     * @type {string}
     * @memberof TransactionUtxos
     */
    'hash'?: string;
    /**
     * 
     * @type {Array<Utxo>}
     * @memberof TransactionUtxos
     */
    'inputs'?: Array<Utxo>;
    /**
     * 
     * @type {Array<Utxo>}
     * @memberof TransactionUtxos
     */
    'outputs'?: Array<Utxo>;
}

/**
 * 
 * @export
 * @interface TransactionMetadata
 */
 export interface TransactionMetadata {
    /**
     * TransactionMetadata label
     * @type {string}
     * @memberof TransactionMetadata
     */
    'label'?: string;
    /**
     * Content of the metadata
     * @type {object}
     * @memberof TransactionMetadata
     */
    'json'?: object;
}