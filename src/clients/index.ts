import { BASE_PATH, BASE_PATH_TEST, BASE_PATH_TEST_STAGING, IPFS_BASE_PATH, V1 } from "../base";
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
import { DEFAULT_MAX_ATTEMPTS } from "../../utils/constants";
import { NftApi } from "./nfts";
import { IpfsApi } from "./ipfs";

export const Network = {
    CARDANO_MAINNET: 'cardano-mainnet',
    CARDANO_TESTNET: 'cardano-testnet',
    CARDANO_TESTNET_STAGING: 'cardano-testnet-staging',
}

export interface ClientConfiguration {
    apiKey: string;
    appId?: string;
    network?: string;
    version?: string;
    maxAttempts?: number;
}

export interface ApiConfiguration extends ClientConfiguration {
    basePath: string;
}

const defaultConfig: ClientConfiguration = {
    apiKey: '',
    appId: '',
    network: Network.CARDANO_MAINNET,
    version: V1,
    maxAttempts: DEFAULT_MAX_ATTEMPTS
}

export class Tangocrypto {
    configuration: ApiConfiguration;
    protected axios: AxiosInstance = globalAxios;

    constructor(config: ClientConfiguration) {
        const configuration = defaultConfig;
        Object.assign(configuration, config);
        let basePath = '';
        switch (configuration.network) {
            case Network.CARDANO_TESTNET:
                basePath = BASE_PATH_TEST;
                break;
            case Network.CARDANO_TESTNET_STAGING:
                basePath = BASE_PATH_TEST_STAGING;
                break;
            default:
                basePath = BASE_PATH;
                break;
        }
        this.configuration = { ...configuration, basePath };
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

    /**
     * Get nft api client
     */
     public nft(): NftApi {
        return new NftApi(this.configuration, this.axios);
    }

    /**
     * Get ipfs api client
     */
     public ipfs(): IpfsApi {
        const config = {...this.configuration, basePath: IPFS_BASE_PATH };
        return new IpfsApi(config, this.axios);
    } 

}