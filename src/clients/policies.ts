import { AxiosInstance } from "axios";
import { ClientConfiguration } from ".";
import { PoliciesApi } from "../api";
import { Configuration } from "../configuration";

export class PolicyApi {
    policiesApi: PoliciesApi;
    config: ClientConfiguration;

    constructor(config: ClientConfiguration, protected axios: AxiosInstance) {
        this.config = config;
        const configuration = new Configuration({
            apiKey: config.apiKey,
            basePath: config.basePath,
            maxAttempts: config.maxAttempts
        })

        // initialize api
        this.policiesApi = new PoliciesApi(configuration, configuration.basePath, axios);
    }

    /**
     * Returns a list of assets with the given Policy ID. The response is paginated to make the result set easier to handle. If truncated, the response includes a `cursor` that you use in a subsequent request to retrieve the next batch of owners. To learn more about how pagination works, visit https://docs.tangocrypto.com/rest-api/pagination 
     * @summary List assets by policy
     * @param {string} policyId Policy ID controlling an asset.
     * @param {number} [size] The number of assets to return in a single page.
     * @param {string} [cursor] A pagination cursor returned by a previous call to this endpoint. Provide this cursor to retrieve the next set of results for your original query.
     * @throws {RequiredError}
     * @memberof PolicyApi
     */
     public getAssetsByPolicy(policyId: string, size?: number, cursor?: string) {
        return this.policiesApi.getAssetByPolicy(this.config.appId, this.config.version, policyId, size, cursor);
    }
}