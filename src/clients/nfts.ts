import { AxiosInstance } from "axios";
import { ClientConfiguration } from ".";
import { AddressesApi, CreateCollectionRequest, CreateNftRequest, CreateNftSaleRequest, NFTsAddressListApi, NFTsCollectionsApi, NFTsSalePhasesApi, NFTsSalesApi, NFTsTokensApi, UpdateCollectionRequest, UpdateNftRequest } from "../api";
import { Configuration } from "../configuration";

export class NftApi {
    private collectionsApi: NFTsCollectionsApi;
    private tokensApi: NFTsTokensApi;
    private salesApi: NFTsSalesApi;
    private phasesApi: NFTsSalePhasesApi;
    private addresslistsApi: NFTsAddressListApi;
    config: ClientConfiguration;

    constructor(config: ClientConfiguration, protected axios: AxiosInstance) {
        this.config = config;
        const configuration = new Configuration({
            apiKey: config.apiKey,
            basePath: config.basePath,
            maxAttempts: config.maxAttempts
        })

        // initialize api
        this.collectionsApi = new NFTsCollectionsApi(configuration, configuration.basePath, axios);
        this.tokensApi = new NFTsTokensApi(configuration, configuration.basePath, axios);
        this.salesApi = new NFTsSalesApi(configuration, configuration.basePath, axios);
        this.phasesApi = new NFTsSalePhasesApi(configuration, configuration.basePath, axios);
        this.addresslistsApi = new NFTsAddressListApi(configuration, configuration.basePath, axios);
    }


    /** COLLECTION SECTION */

    /**
     * Delete an collection in your Tangocrypto account.
     * @summary Delete NFT collection
     * @param {string} collectionId Collection ID.
     * @throws {RequiredError}
     * @memberof NFTsCollectionsApi
     */
    public deleteCollection(collectionId: string) {
        return this.collectionsApi.deleteNftCollection(this.config.appId, this.config.version, collectionId);
    }

    /**
     * Returns a list of NFTs for a given collection. The response is paginated to make the result set easier to handle. If truncated, the response includes a `cursor` that you use in a subsequent request to retrieve the next batch of NFTs. To learn more about how pagination works, visit https://docs.tangocrypto.com/rest-api/pagination 
     * @summary List Collection NFTs
     * @param {string} collectionId Collection ID
     * @param {string} [status] Filter by token &#x60;status&#x60;. For example, you can get the list of tokens for sale with &#x60;status&#x3D;FOR_SALE&#x60; or tokens sold with &#x60;status&#x3D;COMPLETED&#x60;. For a full reference of the status check https://docs.tangocrypto.com/nfts/nft-api/token-sale-flow
     * @param {string} [order] Use &#x60;asc&#x60; to show the oldest NFT first and &#x60;desc&#x60; to show the most recent NFT first!. If you don\&#39;t specify, this parameter it uses&#x60;desc&#x60; by default.
     * @param {number} [size] The number of NFTs to return in a single page.
     * @param {string} [cursor] A pagination cursor returned by a previous call to this endpoint. Provide this cursor to retrieve the next set of results for your original query.
     * @throws {RequiredError}
     * @memberof NFTsCollectionsApi
     */
    public getCollectionNfts(collectionId: string, status?: string, order?: string, size?: number, cursor?: string) {
        return this.collectionsApi.getCollectionNfts(this.config.appId, this.config.version, collectionId, status, order, size, cursor);
    }

    /**
     * Returns a list of collections in your Tangocrypto account. The response is paginated. If truncated, the response includes a `cursor` that you use in a subsequent request to retrieve the next set of NFT Collections. For more information, see our <a href=\"https://docs.tangocrypto.com/rest-api/pagination\">pagination guide</a>. 
     * @summary List NFT collections
     * @param {number} [size] The number of collections to return in a single page.
     * @param {string} [cursor] A pagination cursor returned by a previous call to this endpoint. Provide this cursor to retrieve the next set of results for your original query.
     * @param {string} [ids] List of collection ids. **NOTICE:** When you use &#x60;ids&#x60; you can specify a maximum of 25 elements and can\&#39;t use &#x60;cursor&#x60; or &#x60;size&#x60;.
     * @throws {RequiredError}
     * @memberof NFTsCollectionsApi
     */
    public listCollections(size?: number, cursor?: string, ids?: string[]) {
        return this.collectionsApi.listNftCollections(this.config.appId, this.config.version, size, cursor, ids);
    }

    /**
     * Create a new collection in your Tangocrypto account.
     * @summary Create NFT collection
     * @param {CreateCollectionRequest} [createCollectionRequest] 
     * @throws {RequiredError}
     * @memberof NFTsCollectionsApi
     */
    public createCollection(createCollectionRequest?: CreateCollectionRequest) {
        return this.collectionsApi.nftCollection(this.config.appId, this.config.version, createCollectionRequest);
    }

    /**
     * Get details for a single collection in your Tangocrypto account.
     * @summary Retrieve NFT collection
     * @param {string} collectionId The ID of the NFT Collection to retrieve.
     * @throws {RequiredError}
     * @memberof NFTsCollectionsApi
     */
    public getCollection(collectionId: string) {
        return this.collectionsApi.retrieveNftCollection(this.config.appId, this.config.version, collectionId);
    }

    /**
     * Updates the collection with the fields that were supplied, leaving the others alone.
     * @summary Update NFT collection
     * @param {string} collectionId The ID of the NFT Collection to update.
     * @param {UpdateCollectionRequest} [updateCollectionRequest] 
     * @throws {RequiredError}
     * @memberof NFTsCollectionsApi
     */
    public updateCollection(collectionId: string, updateCollectionRequest?: UpdateCollectionRequest) {
        return this.collectionsApi.updateNftCollection(this.config.appId, this.config.version, collectionId, updateCollectionRequest);
    }

    /** TOKEN SECTION */

    /**
     * Delete an NFT in your Tangocrypto account.
     * @summary Delete NFT
     * @param {string} collectionId Collection ID
     * @param {string} tokenId NFT id within your Tangocrypto account.
     * @throws {RequiredError}
     * @memberof NFTsTokensApi
     */
    public deleteNft(collectionId: string, tokenId: string) {
        return this.tokensApi.deleteNft(this.config.appId, this.config.version, collectionId, tokenId);
    }

    /**
     * Create NFT in a Collection 
     * @summary Create NFT
     * @param {string} collectionId Collection ID.
     * @param {CreateNftRequest} [createNftRequest] 
     * @throws {RequiredError}
     * @memberof NFTsTokensApi
     */
    public createNft(collectionId: string, createNftRequest?: CreateNftRequest) {
        return this.tokensApi.nftCreateNft(this.config.appId, this.config.version, collectionId, createNftRequest);
    }

    /**
     * Returns details for a single NFT.
     * @summary Retrieve NFT
     * @param {string} collectionId Collection ID
     * @param {string} tokenId NFT id within your Tangocrypto account.
     * @throws {RequiredError}
     * @memberof NFTsTokensApi
     */
    public getNFT(collectionId: string, tokenId: string) {
        return this.tokensApi.retrieveNFT(this.config.appId, this.config.version, collectionId, tokenId);
    }

    /**
     * Updates the NFT with the supplied parameters. The ones not provided  remain with the same value.
     * @summary Update NFT
     * @param {string} collectionId Collection ID
     * @param {string} tokenId NFT id within your Tangocrypto account.
     * @param {UpdateNftRequest} [updateNftRequest] 
     * @throws {RequiredError}
     * @memberof NFTsTokensApi
     */
    public updateNFT(collectionId: string, tokenId: string, updateNftRequest?: UpdateNftRequest) {
        return this.tokensApi.updateNFT(this.config.appId, this.config.version, collectionId, tokenId, updateNftRequest);
    }

    /** SALE SECTION */

    /**
    * Cancel a sale for a given NFT. When you cancel a sale the status of the NFT will return back to `OPEN`
    * @summary Cancel sale
    * @param {string} collectionId Collection ID
    * @param {string} tokenId Token ID
    * @param {string} saleId Sale ID
    * @throws {RequiredError}
    * @memberof NFTsSalesApi
    */
    public cancelNftSale(collectionId: string, tokenId: string, saleId: string) {
        return this.salesApi.cancelNftSale(this.config.appId, this.config.version, collectionId, tokenId, saleId);
    }

    /**
     * Create an sale. You can sell multiple tokens in a single sale.
     * @summary Create sale
     * @param {string} collectionId Collection ID
     * @param {CreateNftSaleRequest} [createNftSaleRequest] 
     * @throws {RequiredError}
     * @memberof NFTsSalesApi
     */
    public createSale(collectionId: string, createNftSaleRequest?: CreateNftSaleRequest) {
        return this.salesApi.createNftSale(this.config.appId, this.config.version, collectionId, createNftSaleRequest);
    }

    /**
     * Returns a list of Sales for a given collection. The response is paginated to make the result set easier to handle. If truncated, the response includes a `cursor` that you use in a subsequent request to retrieve the next batch of NFTs. To learn more about how pagination works, visit https://docs.tangocrypto.com/rest-api/pagination 
     * @summary List collection sales
     * @param {string} collectionId Collection ID
     * @param {string} [order] Use &#x60;asc&#x60; to show the oldest NFT first and &#x60;desc&#x60; to show the most recent NFT first!. If you don\&#39;t specify, this parameter it uses&#x60;desc&#x60; by default.
     * @param {number} [size] The number of NFTs to return in a single page.
     * @param {string} [cursor] A pagination cursor returned by a previous call to this endpoint. Provide this cursor to retrieve the next set of results for your original query.
     * @throws {RequiredError}
     * @memberof NFTsSalesApi
     */
    public listCollectionSales(collectionId: string, order?: string, size?: number, cursor?: string) {
        return this.salesApi.listNftSales(this.config.appId, this.config.version, collectionId, order, size, cursor);
    }

    /**
     * Returns details for a single sale. With this endpoint, you can check the remaining reservation time or if the sale is expired. Also, you can check if a customer has made a partial payment or if the total amount was paid. Once the payment is received, the NFT is minted and sent to the buyer\'s wallet address.
     * @summary Retrieve collection sale
     * @param {string} collectionId Collection ID
     * @param {string} salesId Sales ID
     * @throws {RequiredError}
     * @memberof NFTsSalesApi
     */
    public getSale(collectionId: string, salesId: string) {
        return this.salesApi.retrieveNFTSale(this.config.appId, this.config.version, collectionId, salesId);
    }

}