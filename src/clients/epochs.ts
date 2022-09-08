import { AxiosInstance } from "axios";
import { ClientConfiguration } from ".";
import { EpochsApi } from "../api";
import { Configuration } from "../configuration";

export class EpochApi {
    epochsApi: EpochsApi;
    config: ClientConfiguration;

    constructor(config: ClientConfiguration, protected axios: AxiosInstance) {
        this.config = config;
        const configuration = new Configuration({
            apiKey: config.apiKey,
            basePath: config.basePath
        })

        // initialize api
        this.epochsApi = new EpochsApi(configuration, configuration.basePath, axios);
    }

    /**
     * Retrieves the current epoch information
     * @summary Retrieve current epoch information
     * @throws {RequiredError}
     * @memberof EpochsApi
     */
     public retrieveCurrentEpoch() {
        return this.epochsApi.retrieveCurrentEpoch(this.config.appId, this.config.version);
    }

    /**
     * Retrieves the protocol parameters for a given epoch.
     * @summary Retrieve protocol parameters
     * @param {number} number Number of the epoch
     * @throws {RequiredError}
     * @memberof EpochsApi
     */
    public retrieveEpochParameters(number: number) {
        return this.epochsApi.retrieveEpochParameters(this.config.appId, this.config.version, number);
    }
}