import { BASE_PATH, V1 } from "../base";
import globalAxios, { AxiosInstance } from 'axios';
import { TransactionApi } from "./transactions";
import { AddressApi } from "./address";
import { WalletApi } from "./wallets";
import { BlockApi } from "./blocks";
import { AssetApi } from "./assets";
import { PoolApi } from "./pools";
import { EpochApi } from "./epochs";
import { PolicyApi } from "./policies";
import { WebhookApi } from "./webhooks";

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

    /**
     * Get block api client
     */
    public block(): BlockApi {
        return new BlockApi(this.configuration, this.axios);
    }

    /**
     * Get asset api client
     */
    public asset(): AssetApi {
        return new AssetApi(this.configuration, this.axios);
    }

    /**
     * Get pool api client
     */
    public pool(): PoolApi {
        return new PoolApi(this.configuration, this.axios);
    }

    /**
     * Get epoch api client
     */
    public epoch(): EpochApi {
        return new EpochApi(this.configuration, this.axios);
    }

    /**
     * Get policy api client
     */
     public policy(): PolicyApi {
        return new PolicyApi(this.configuration, this.axios);
    }    
    /**
     * Get webhook api client
     */
     public webhook(): WebhookApi {
        return new WebhookApi(this.configuration, this.axios);
    }    

}