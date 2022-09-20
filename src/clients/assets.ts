import { AxiosInstance } from "axios";
import { ApiConfiguration } from ".";
import { AssetsApi } from "../apis/assets";
import { Configuration } from "../configuration";

export class AssetApi {
    assetsApi: AssetsApi;
    config: ApiConfiguration;

    constructor(config: ApiConfiguration, protected axios: AxiosInstance) {
        this.config = config;
        const configuration = new Configuration({
            apiKey: config.apiKey,
            basePath: config.basePath,
            maxAttempts: config.maxAttempts
        })

        // initialize api
        this.assetsApi = new AssetsApi(configuration, configuration.basePath, axios);
    }

     /**
     * Retrieves information about an asset
     * @summary Retrieve asset
     * @param {string} asset Concatenation of the policy_id and hex-encoded asset_name
     * @throws {RequiredError}
     * @memberof AssetsApi
     */
      public getAsset(asset: string) {
        return this.assetsApi.getAsset(this.config.appId, this.config.version, asset);
    }

    /**
     * Retrieves information about an asset
     * @summary Retrieve asset by fingerprint
     * @param {string} fingerprint The CIP14 fingerprint for the Multi-Asset.
     * @throws {RequiredError}
     * @memberof AssetsApi
     */
    public getAssetByFingerprint(fingerprint: string) {
        return this.assetsApi.getAssetByFingerprint(this.config.appId, this.config.version, fingerprint);
    }

    /**
     * Returns a list of addresses and quantities for a given asset. The response is paginated to make the result set easier to handle. If truncated, the response includes a `cursor` that you use in a subsequent request to retrieve the next batch of addresses. To learn more about how pagination works, visit https://docs.tangocrypto.com/rest-api/pagination 
     * @summary List asset addresses
     * @param {string} asset Concatenation of the policy_id and hex-encoded asset_name
     * @throws {RequiredError}
     * @memberof AssetsApi
     */
    public listAssetAddresses(asset: string) {
        return this.assetsApi.listAssetAddresses(this.config.appId, this.config.version, asset);
    }

    /**
     * Returns a list of addresses and quantities holding the given asset. The response is paginated to make the result set easier to handle. If truncated, the response includes a `cursor` that you use in a subsequent request to retrieve the next batch of owners. To learn more about how pagination works, visit https://docs.tangocrypto.com/rest-api/pagination 
     * @summary List asset addresses by fingerprint
     * @param {string} fingerprint The CIP14 fingerprint for the Multi-Asset.
     * @throws {RequiredError}
     * @memberof AssetsApi
     */
    public listAssetAddressesByFingerprint(fingerprint: string) {
        return this.assetsApi.listAssetAddressesFingerprint(this.config.appId, this.config.version, fingerprint);
    }
}