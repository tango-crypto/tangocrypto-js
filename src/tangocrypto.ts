import { BaseAPI, BASE_PATH } from "./base";
import { Configuration } from "./configuration";
import globalAxios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import { BuildTxRequest, SubmitTansactionRequest, TransactionsApi } from "./api";
import { SignTxRequest } from "../utils/models/sing-transaction-request.model";
import { Seed } from "../utils/serialization.util";
import { MultisigTransaction } from "../utils/models/multisig-transaction";

export interface ClientConfiguration {
    apiKey: string;
    appId: string;
    basePath?: string;
}

const defaultConfig: ClientConfiguration = {
    apiKey: '',
    appId: '',
    basePath: BASE_PATH
}

export class ClientApi {
    config: ClientConfiguration;
    protected axios: AxiosInstance = globalAxios;
    transactionsApi: TransactionsApi;

    constructor(config: ClientConfiguration) {
        this.config = config || defaultConfig;
        const configuration: Configuration = new Configuration({
            apiKey: config.apiKey,
            basePath: config.basePath
        })

        // super(configuration, basePath, axios);

        // initialize api
        this.transactionsApi = new TransactionsApi(configuration, this.config.basePath, this.axios);
    }

    /** BEGIN TRANSACTION API **/


    /**
     * Retrieves the information about a transaction requested specified by a transaction `hash`.
     * @summary Retrieve Transaction
     * @param {string} hash Hash of the requested transaction
     * @throws {RequiredError}
     * @memberof ClientApi
     */
    public getTransaction(hash: string) {
        return this.transactionsApi.getTransaction(this.config.appId, hash);
    }

    /**
     * Retrieve the transaction metadata specified by a transaction `hash`. The response is paginated. If truncated, the response includes a cursor that you use in a subsequent request to retrieve the next set of metadata values. 
     * @summary Retrieve transaction metadata
     * @param {string} hash Hash of the requested transaction
     * @throws {RequiredError}
     * @memberof ClientApi
     */
    public getTransactionMetadata(hash: string) {
        return this.transactionsApi.getTransactionMetadata(this.config.appId, hash);
    }

    /**
     * List the UTXOs from a transaction specified by a transaction `hash`.
     * @summary List transaction UTXOs
     * @param {string} hash Hash of the requested transaction
     * @throws {RequiredError}
     * @memberof ClientApi
     */
    public listTransactionUtxos(hash: string) {
        return this.transactionsApi.listTransactionUtxos(this.config.appId, hash);
    }

    /**
     * Submit an already serialized transaction to the network.
     * @summary Submit a transaction
     * @param {SubmitTansactionRequest} [subitTansactionRequest] 
     * @throws {RequiredError}
     * @memberof ClientApi
     */
    public submitTransaction(submitTansactionRequest?: SubmitTansactionRequest) {
        return this.transactionsApi.submitTransaction(this.config.appId, submitTansactionRequest);
    }

    /**
    * Build and serialize transaction with custom logic like swap, send, mint, burn etc.
    * @summary Build a transaction
    * @param {BuildTxRequest} [buildTxRequest] 
    * @throws {RequiredError}
    * @memberof ClientApi
    */
    public buildTransaction(buildTxRequest: BuildTxRequest) {
        return this.transactionsApi.buildTransaction(this.config.appId, buildTxRequest);
    }

    /**
    * Sign transaction off-chain.
    * @summary Build a transaction
    * @param {BuildTxRequest} [buildTxRequest] 
    * @throws {RequiredError}
    * @memberof ClientApi
    */
   public signTransaction(signTxRequest: SignTxRequest) {
        const { tx: encoded, keys } = signTxRequest;

        const signingKeys = keys.map(key => Seed.getPrivateKey(key));
        const buffer = Buffer.from(encoded, 'hex');
		
		const tx = MultisigTransaction.fromBytes(buffer);

		for (const prvKey of signingKeys) {
			tx.addKeyWitnesses(prvKey);
		}
        
		const signed = tx.build();
        return signed;
   }

    /** END TRANSACTION API **/



}