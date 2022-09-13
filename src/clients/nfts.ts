import { AxiosInstance } from "axios";
import { ClientConfiguration } from ".";
import { AddressesApi, CreateAffiliateRequest, CreateCollectionRequest, CreateNftRequest, CreateNftSaleRequest, CreateSalePhaseRequest, NFTsAddressListApi, NFTsCollectionsApi, NFTsSalePhasesApi, NFTsSalesApi, NFTsTokensApi, UpdateCollectionRequest, UpdateNftRequest, UpdateSalePhaseRequest } from "../api";
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
    public cancelSale(collectionId: string, tokenId: string, saleId: string) {
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

    /** SALE PHASE SECTION */

    /**
     * Create affiliate.
     * @summary Create affiliate
     * @param {string} collectionId Collection ID
     * @param {string} phaseId Sales phase ID.
     * @param {CreateAffiliateRequest} [createAffiliateRequest] 
     * @throws {RequiredError}
     * @memberof NFTsSalePhasesApi
     */
    public createAffiliate(collectionId: string, phaseId: string, createAffiliateRequest?: CreateAffiliateRequest) {
        return this.phasesApi.createAffiliate(this.config.appId, this.config.version, collectionId, phaseId, createAffiliateRequest);
    }

    /**
     * Delete affiliate.
     * @summary Delete Affiliate
     * @param {string} collectionId Collection ID
     * @param {string} phaseId Sale phase id.
     * @param {string} affiliateId Affiliate id.
     * @throws {RequiredError}
     * @memberof NFTsSalePhasesApi
     */
    public deleteAffiliate(collectionId: string, phaseId: string, affiliateId: string) {
        return this.phasesApi.deleteAffiliate(this.config.appId, this.config.version, collectionId, phaseId, affiliateId);
    }

    /**
     * Delete a sale phase.
     * @summary Delete sale phase
     * @param {string} collectionId Collection ID
     * @param {string} phaseId Sale phase id.
     * @throws {RequiredError}
     * @memberof NFTsSalePhasesApi
     */
    public deleteSalePhase(collectionId: string, phaseId: string) {
        return this.phasesApi.deleteSalePhase(this.config.appId, this.config.version, collectionId, phaseId);
    }

    /**
     * Create a sale phase for a given collection. You can add different phases to control how you will sell the collection. For example, you might have a total of 5000 NFTs, and you want to sell them in stages. You can create a pre-sale phase to sell 1000 NFTs to previous customers at a special price and within a specific time range. You can identify these customers with a condition; that would be an NFT with a certain policy id on their wallets. Then you create another sale phase for the public drop with the remaining 4000 NFTs and no conditions.   
     * @summary Create sale phase
     * @param {string} collectionId Collection ID.
     * @param {CreateSalePhaseRequest} [createSalePhaseRequest] 
     * @throws {RequiredError}
     * @memberof NFTsSalePhasesApi
     */
    public createSalePhase(collectionId: string, createSalePhaseRequest?: CreateSalePhaseRequest) {
        return this.phasesApi.nftCreateSale(this.config.appId, this.config.version, collectionId, createSalePhaseRequest);
    }

    /**
     * Returns details for a single sale phase.
     * @summary Retrieve sale phase
     * @param {string} collectionId Collection ID
     * @param {string} phaseId Sales phase ID.
     * @throws {RequiredError}
     * @memberof NFTsSalePhasesApi
     */
    public getSalePhase(collectionId: string, phaseId: string) {
        return this.phasesApi.retrieveSalePhase(this.config.appId, this.config.version, collectionId, phaseId);
    }

    /**
     * Returns a list of sale phases for a given collection. The response is paginated. If truncated, the response includes a `cursor` that you use in a subsequent request to retrieve the next set of sale phases. 
     * @summary List sale phases
     * @param {string} collectionId Collection ID
     * @throws {RequiredError}
     * @memberof NFTsSalePhasesApi
     */
    public geCollectionSalePhases(collectionId: string) {
        return this.phasesApi.retrieveSalePhases(this.config.appId, this.config.version, collectionId);
    }

    /**
     * Update affiliate.
     * @summary Update affiliate
     * @param {string} collectionId Collection ID
     * @param {string} phaseId Sales phase ID.
     * @param {string} affiliateId Affiliate id.
     * @param {CreateAffiliateRequest} [createAffiliateRequest] 
     * @throws {RequiredError}
     * @memberof NFTsSalePhasesApi
     */
    public updateAffiliate(collectionId: string, phaseId: string, affiliateId: string, createAffiliateRequest?: CreateAffiliateRequest) {
        return this.phasesApi.updateAffiliate(this.config.appId, this.config.version, collectionId, phaseId, affiliateId, createAffiliateRequest);
    }

    /**
     * Update sale phase.
     * @summary Update sale phase
     * @param {string} collectionId Collection ID
     * @param {string} phaseId Sales phase ID.
     * @param {CreateSalePhaseRequest} [createSalePhaseRequest] 
     * @throws {RequiredError}
     * @memberof NFTsSalePhasesApi
     */
    public updateSalePhase(collectionId: string, phaseId: string, updateSalePhaseRequest?: UpdateSalePhaseRequest) {
        return this.phasesApi.updateSalePhase(this.config.appId, this.config.version, collectionId, phaseId, updateSalePhaseRequest);
    }

}