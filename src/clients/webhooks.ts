import { AxiosInstance } from "axios";
import { ClientConfiguration } from ".";
import { CreateWebhookRequest, UpdateWebhookRequest, WebhooksApi } from "../api";
import { Configuration } from "../configuration";

export class WebhookApi {
    webhooksApi: WebhooksApi;
    config: ClientConfiguration;

    constructor(config: ClientConfiguration, protected axios: AxiosInstance) {
        this.config = config;
        const configuration = new Configuration({
            apiKey: config.apiKey,
            basePath: config.basePath
        })

        // initialize api
        this.webhooksApi = new WebhooksApi(configuration, configuration.basePath, axios);
    }

    /**
     * Create Webhook
     * @summary Create Webhook
     * @param {CreateWebhookRequest} [createWebhookRequest] 
     * @throws {RequiredError}
     * @memberof WebhooksApi
     */
    public createWebhook(createWebhookRequest?: CreateWebhookRequest) {
        return this.webhooksApi.createWebhook(this.config.appId, this.config.version, createWebhookRequest);
    }

    /**
     * Deletes a single Webhook based on the provided ID.
     * @summary Delete Webhook
     * @param {string} webhookId Webhook ID
     * @throws {RequiredError}
     * @memberof WebhooksApi
     */
    public deleteWebhook(webhookId: string) {
        return this.webhooksApi.deleteWebhook(this.config.appId, this.config.version, webhookId);
    }

    /**
     * Returns a list of webhooks created in your Tangocrypto account. The response is paginated. If truncated, the response includes a `cursor` that you use in a subsequent request to retrieve the next set of webhooks. For more information, see our <a href=\"https://docs.tangocrypto.com/rest-api/pagination\">pagination guide</a>. 
     * @summary List Webhooks
     * @param {number} [size] The number of webhooks to return in a single page.
     * @param {string} [cursor] A &#x60;cursor&#x60; to access the next set of results. You include the cursor in subsequent requests to the endpoint as a URL query parameter of your request. If the cursor is empty in the result it means there are no more items to be retrieved. 
     * @throws {RequiredError}
     * @memberof WebhooksApi
     */
    public listWebhooks(size?: number, cursor?: string) {
        return this.webhooksApi.listWebhooks(this.config.appId, this.config.version, size, cursor);
    }

    /**
     * Get details for a single Webhook in your Tangocrypto account.
     * @summary Retrieve Webhook
     * @param {string} webhookId The ID of the webhook to retrieve.
     * @throws {RequiredError}
     * @memberof WebhooksApi
     */
    public retrieveWebhook( webhookId: string) {
        return this.webhooksApi.retrieveWebhook(this.config.appId, this.config.version, webhookId);
    }

    /**
     * Updates the webbook without having to perform an upsert on the entire item. Just include include the fields you want to be updated in the request body.
     * @summary Update Webhook
     * @param {string} webhookId The ID of the webhook to update.
     * @param {UpdateWebhookRequest} [updateWebhookRequest] 
     * @throws {RequiredError}
     * @memberof WebhooksApi
     */
    public updateWebhook(webhookId: string, updateWebhookRequest?: UpdateWebhookRequest) {
        return this.webhooksApi.updateWebhook(this.config.appId, this.config.version, webhookId, updateWebhookRequest);
    }
}