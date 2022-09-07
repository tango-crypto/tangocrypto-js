import { BASE_PATH, V1 } from "../base";
import globalAxios, { AxiosInstance } from 'axios';
import { TransactionApi } from "./transactions";
import { AddressApi } from "./address";
import { WalletApi } from "./wallets";

export interface ClientConfiguration {
    apiKey: string;
    appId: string;
    basePath?: string;
    version?: string;
}

const defaultConfig: ClientConfiguration = {
    apiKey: '',
    appId: '',
    basePath: BASE_PATH,
    version: V1
}

export class ApiClient {
    configuration: ClientConfiguration;
    protected axios: AxiosInstance = globalAxios;

    constructor(config: ClientConfiguration) {
        this.configuration = defaultConfig;
        Object.assign(this.configuration, config);
    }

    /**
     * Get Transaction api client
     */
    public transaction(): TransactionApi {
        return new TransactionApi(this.configuration, this.axios);
    }

    /**
     * Get address api client
     */
    public address(): AddressApi {
        return new AddressApi(this.configuration, this.axios);
    }

    /**
     * Get wallet api client
     */
    public wallet(): WalletApi {
        return new WalletApi(this.configuration, this.axios);
    }

}