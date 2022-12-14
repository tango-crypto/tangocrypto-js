import { AxiosInstance } from "axios";
import { ApiConfiguration } from ".";
import { Configuration } from "../configuration";
import { TransactionsApi } from "../apis/transactions";
import { BuildTxRequest, SubmitTansactionRequest } from "../models/transaction";
import { SignTxRequest } from "../../utils/models/sing-transaction-request.model";
import { Seed } from "../../utils/serialization.util";
import { MultisigTransaction } from "../../utils/models/multisig-transaction";

export class TransactionApi {
    transactionsApi: TransactionsApi;
    config: ApiConfiguration

    constructor(config: ApiConfiguration, protected axios: AxiosInstance) {
        this.config = config;
        const configuration = new Configuration({
            apiKey: config.apiKey,
            basePath: config.basePath,
            maxAttempts: config.maxAttempts
        })

        // initialize api
        this.transactionsApi = new TransactionsApi(configuration, configuration.basePath, axios);
    }

    /**
     * Retrieves the information about a transaction requested specified by a transaction `hash`.
     * @summary Retrieve Transaction
     * @param {string} hash Hash of the requested transaction
     * @throws {RequiredError}
     * @memberof ClientApi
     */
    public getTransaction(hash: string) {
        return this.transactionsApi.getTransaction(this.config.appId, this.config.version, hash);
    }

    /**
     * Retrieve the transaction metadata specified by a transaction `hash`. The response is paginated. If truncated, the response includes a cursor that you use in a subsequent request to retrieve the next set of metadata values. 
     * @summary Retrieve transaction metadata
     * @param {string} hash Hash of the requested transaction
     * @throws {RequiredError}
     * @memberof ClientApi
     */
    public getTransactionMetadata(hash: string) {
        return this.transactionsApi.getTransactionMetadata(this.config.appId, this.config.version, hash);
    }

    /**
     * List the UTXOs from a transaction specified by a transaction `hash`.
     * @summary List transaction UTXOs
     * @param {string} hash Hash of the requested transaction
     * @throws {RequiredError}
     * @memberof ClientApi
     */
    public listTransactionUtxos(hash: string) {
        return this.transactionsApi.listTransactionUtxos(this.config.appId, this.config.version, hash);
    }

    /**
     * List the Scripts from a transaction specified by a transaction `hash`.
     * @summary List transaction Scripts
     * @param {string} hash Hash of the requested transaction
     * @throws {RequiredError}
     * @memberof ClientApi
     */
    public listTransactionScripts(hash: string) {
        return this.transactionsApi.listTransactionScripts(this.config.appId, this.config.version, hash);
    }

    /**
     * List the Collaterals from a transaction specified by a transaction `hash`.
     * @summary List transaction Collaterals
     * @param {string} hash Hash of the requested transaction
     * @throws {RequiredError}
     * @memberof ClientApi
     */
    public listTransactionCollaterals(hash: string) {
        return this.transactionsApi.listTransactionCollaterals(this.config.appId, this.config.version, hash);
    }

    /**
     * List the Mints from a transaction specified by a transaction `hash`.
     * @summary List transaction Mints
     * @param {string} hash Hash of the requested transaction
     * @param {number} [size] The number of results displayed on one page.
     * @param {string} [cursor] A &#x60;cursor&#x60; to access the next set of results. You include the cursor in subsequent requests to the endpoint as a URL query parameter of your request. If the cursor is empty in the result it means there are no more items to be retrieved. 
     * @param {'asc' | 'desc'} [order] The ordering of items from the point of view of lexicografic asset fingerprint. By default, we return oldest first, newest last.     
     * @throws {RequiredError}
     * @memberof ClientApi
     */
    public listTransactionMints(hash: string, size?: number, cursor?: string, order?: 'asc' | 'desc') {
        return this.transactionsApi.listTransactionMints(this.config.appId, this.config.version, hash, size, cursor, order);
    }

    /**
     * Submit an already serialized transaction to the network.
     * @summary Submit a transaction
     * @param {SubmitTansactionRequest} [subitTansactionRequest] 
     * @throws {RequiredError}
     * @memberof ClientApi
     */
    public submitTransaction(submitTansactionRequest?: SubmitTansactionRequest) {
        return this.transactionsApi.submitTransaction(this.config.appId, this.config.version, submitTansactionRequest);
    }

    /**
    * Build and serialize transaction with custom logic like swap, send, mint, burn etc.
    * @summary Build a transaction
    * @param {BuildTxRequest} [buildTxRequest] 
    * @throws {RequiredError}
    * @memberof ClientApi
    */
    public buildTransaction(buildTxRequest: BuildTxRequest) {
        return this.transactionsApi.buildTransaction(this.config.appId, this.config.version, buildTxRequest);
    }

    /**
    * Sign transaction off-chain.
    * @summary Build a transaction
    * @param {BuildTxRequest} [buildTxRequest] 
    * @throws {RequiredError}
    * @memberof ClientApi
    */
    public signTransaction(signTxRequest: SignTxRequest) {
        const { tx: cborTx, keys, witnesses } = signTxRequest;
        const tx = MultisigTransaction.fromRawTx(cborTx);

        // add signing keys
        if (keys && keys.length > 0) {
            const signingKeys = keys.map(key => Seed.getPrivateKey(key));
            for (const prvKey of signingKeys) {
                tx.addWitnessesFromKeys(prvKey);
            }
        }

        // add witnesses (already signed keys)
        if (witnesses) {
            tx.addWitnesses(witnesses);
        }

        // const buffer = Buffer.from(cborTx, 'hex');
        // const tx = MultisigTransaction.fromBytes(buffer);

        const signed = tx.build();
        return Promise.resolve(signed);
    }
}