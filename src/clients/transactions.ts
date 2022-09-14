import { AxiosInstance } from "axios";
import { ApiConfiguration } from ".";
import { Configuration } from "../configuration";
import { BuildTxRequest, SubmitTansactionRequest, TransactionsApi } from "../api";
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