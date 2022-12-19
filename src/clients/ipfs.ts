import { AxiosInstance } from "axios";
import { ApiConfiguration } from ".";
import { IpfsApi as IpfsApiClient } from "../apis/ipfs";
import { Configuration } from "../configuration";

export class IpfsApi {
    ipfsApi: IpfsApiClient;
    config: ApiConfiguration;

    constructor(config: ApiConfiguration, protected axios: AxiosInstance) {
        this.config = config;
        const configuration = new Configuration({
            apiKey: config.apiKey,
            basePath: config.basePath,
            maxAttempts: config.maxAttempts
        })

        // initialize api
        this.ipfsApi = new IpfsApiClient(configuration, configuration.basePath, axios);
    }

    /**
     * Upload a new content to IPFS. 
     * @summary add new file to IPFS
     * @param {string} name Name for the new content.
     * @param {any} file The file containing the data.
     * @throws {RequiredError}
     * @memberof IpfsApi
     */
     public createContent(name: string, file: any) {
        return this.ipfsApi.createContent(this.config.version, name, file);
    }

    /**
     * Pin content to IPFS. 
     * @summary Pin content to IPFS
     * @param {string} cid Pin CID.
     * @param {string} name The name of the content.    
     * @throws {RequiredError}
     * @memberof IpfsApi
     */
     public pinCid(cid: string, name: string) {
        return this.ipfsApi.pinCid(this.config.version, cid, name);
    }

    /**
     * Retrieve ipfs content by a `id`. 
     * @summary Retrieve ipfs content       
     * @param {string} contentId Content Id.
     * @throws {RequiredError}
     * @memberof IpfsApi
     */
    public getContent(contentId: string) {
        return this.ipfsApi.getContent(this.config.version, contentId);
    }

    /**
     * Returns a list of ipfs contents. 
     * @summary List ipfs contents        
     * @param {number} [size] The number of results displayed on one page.
     * @param {string} [cursor] A &#x60;cursor&#x60; to access the next set of results. You include the cursor in subsequent requests to the endpoint as a URL query parameter of your request. If the cursor is empty in the result it means there are no more items to be retrieved.
     * @throws {RequiredError}
     * @memberof IpfsApi
     */
    public listContents(size?: number, cursor?: string, order?: 'asc' | 'desc') {
        return this.ipfsApi.listContents(this.config.version, size, cursor, order);
    }

    /**
     * Retrieve stake pool registration metadata specified by a `pool_id`. 
     * @summary Retrieve stake pool metadata
     * @param {string} poolId Bech32 or hexadecimal pool ID.
     * @throws {RequiredError}
     * @memberof IpfsApi
     */
    public deleteContent(contentId: string) {
        return this.ipfsApi.deleteContent(this.config.version, contentId);
    }
}