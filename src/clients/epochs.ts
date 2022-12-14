import { AxiosInstance } from "axios";
import { ApiConfiguration } from ".";
import { EpochsApi } from "../apis/epochs";
import { Configuration } from "../configuration";

export class EpochApi {
    epochsApi: EpochsApi;
    config: ApiConfiguration;

    constructor(config: ApiConfiguration, protected axios: AxiosInstance) {
        this.config = config;
        const configuration = new Configuration({
            apiKey: config.apiKey,
            basePath: config.basePath,
            maxAttempts: config.maxAttempts
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
     public getCurrentEpoch() {
        return this.epochsApi.retrieveCurrentEpoch(this.config.appId, this.config.version);
    }

    /**
     * Retrieves the protocol parameters for a given epoch.
     * @summary Retrieve protocol parameters
     * @param {number} number Number of the epoch
     * @throws {RequiredError}
     * @memberof EpochsApi
     */
    public getEpochParameters(number: number) {
        return this.epochsApi.retrieveEpochParameters(this.config.appId, this.config.version, number);
    }
}