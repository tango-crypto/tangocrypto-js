/**
 * 
 * @export
 * @interface CreateWebhookRequest
 */
 export interface CreateWebhookRequest {
    /**
     * Webhook name
     * @type {string}
     * @memberof CreateWebhookRequest
     */
    'name': string;
    /**
     * Blockchain network
     * @type {string}
     * @memberof CreateWebhookRequest
     */
    'network': CardanoNetwork;
    /**
     * Webhook description
     * @type {string}
     * @memberof CreateWebhookRequest
     */
    'description'?: string;
    /**
     * Webhook type
     * @type {string}
     * @memberof CreateWebhookRequest
     */
    'type': WebhookType;
    /**
     * Destination address. This field is used only in the payment webhook and it\'s mandatory in payment webhooks.
     * @type {any}
     * @memberof CreateWebhookRequest
     */
    'address'?: any;
    /**
     * The URL where your server is listening. We send a POST to this URL with the webhook event.
     * @type {string}
     * @memberof CreateWebhookRequest
     */
    'callback_url': string;
    /**
     * Every rule is composed of a field, a value and an operator. All the conditions have to be met for the webhook to be triggered. Rules are optional; depending on the number of rules and their parameters, the webhook will be triggered or not.
     * @type {Array<CreateWebhookRequestRulesInner>}
     * @memberof CreateWebhookRequest
     */
    'rules'?: Array<WebhookRule>;
}

/**
 * 
 * @export
 * @interface UpdateWebhookRequest
 */
 export interface UpdateWebhookRequest {
    /**
     * Webhook name
     * @type {string}
     * @memberof UpdateWebhookRequest
     */
    'name': string;
    /**
     * Webhook description
     * @type {string}
     * @memberof UpdateWebhookRequest
     */
    'description'?: string;
    /**
     * Webhook type
     * @type {string}
     * @memberof UpdateWebhookRequest
     */
    'type': WebhookType;
    /**
     * Destination address. This field is used only in the payment webhook and it\'s mandatory in payment webhooks.
     * @type {any}
     * @memberof UpdateWebhookRequest
     */
    'address'?: any;
    /**
     * The URL where your server is listening. We send a POST to this URL with the webhook event.
     * @type {string}
     * @memberof UpdateWebhookRequest
     */
    'callback_url': string;
    /**
     * Every rule is composed of a field, a value and an operator. All the conditions have to be met for the webhook to be triggered. Rules are optional; depending on the number of rules and their parameters, the webhook will be triggered or not.
     * @type {Array<CreateWebhookRequestRulesInner>}
     * @memberof UpdateWebhookRequest
     */
    'rules'?: Array<WebhookRule>;
}

/**
 * 
 * @export
 * @interface DeleteWebhookResponse
 */
export interface DeleteWebhookResponse {
    /**
     * True if was succesfully deleted. False if there was an error.
     * @type {boolean}
     * @memberof DeleteWebhookResponse
     */
    'deleted'?: boolean;
    /**
     * The ID of the deleted webhook
     * @type {string}
     * @memberof DeleteWebhookResponse
     */
    'deleted_webhook_id'?: string;
    /**
     * The database timestamp of this deletion in ISO 8601 format.
     * @type {string}
     * @memberof DeleteWebhookResponse
     */
    'deleted_at'?: string;
}

/**
 * 
 * @export
 * @interface Webhook
 */
export interface Webhook {
    /**
     * Webhook name.
     * @type {string}
     * @memberof Webhook
     */
    'name'?: string;
    /**
     * Webhook network.
     * @type {string}
     * @memberof Webhook
     */
    'network'?: CardanoNetwork;
    /**
     * Webhook description.
     * @type {string}
     * @memberof Webhook
     */
    'description'?: string;
    /**
     * The url where your server is listening.
     * @type {string}
     * @memberof Webhook
     */
    'callback_url'?: string;
    /**
     * Every rule is composed of a field, a value and an operator. All the conditions have to be met for the webhook to be triggered. Rules are optional; depending on the number of rules and their parameters, the webhook will be triggered or not. 
     * @type {Array<WebhookRule>}
     * @memberof Webhook
     */
    'rules'?: Array<WebhookRule> | null;
    /**
     * Webhook creation date in ISO 8601 format.
     * @type {string}
     * @memberof Webhook
     */
    'create_date'?: string;
    /**
     * Webhook update date in ISO 8601 format.
     * @type {string}
     * @memberof Webhook
     */
    'update_date'?: string;
    /**
     * Webhook status.
     * @type {boolean}
     * @memberof Webhook
     */
    'available'?: boolean;
    /**
     * Number of confirmations of the transaction
     * @type {number}
     * @memberof Webhook
     */
    'confirmations'?: number;
    /**
     * Webhook id.
     * @type {string}
     * @memberof Webhook
     */
    'id'?: string;
    /**
     * Wehhook type.
     * @type {string}
     * @memberof Webhook
     */
    'type'?: WebhookType;
    /**
     * Payment address.
     * @type {string}
     * @memberof Webhook
     */
    'address'?: string;
}

/**
 * 
 * @export
 * @interface WebhookRule
 */
 export interface WebhookRule {
    /**
     * The `field` value depends on the type of webhook. For a full reference vist <a href=\"https://docs.tangocrypto.com/notify/notify/trigger-rules\">Trigger Rules</a>.
     * @type {string}
     * @memberof WebhookRule
     */
    'field'?: string;
    /**
     * The `operator` value depends on the type of webhook. For a full reference vist <a href=\"https://docs.tangocrypto.com/notify/notify/trigger-rules\">Trigger Rules</a>.
     * @type {string}
     * @memberof WebhookRule
     */
    'operator'?: string;
    /**
     * The `value` value depends on the type of webhook. For a full reference vist <a href=\"https://docs.tangocrypto.com/notify/notify/trigger-rules\">Trigger Rules</a>.
     * @type {string}
     * @memberof WebhookRule
     */
    'value'?: string;
}

export const CardanoNetworkEnum = {
    Mainnet: 'mainnet',
    Testnet: 'testnet'
} as const;

export type CardanoNetwork = typeof CardanoNetworkEnum[keyof typeof CardanoNetworkEnum];
export const WebhookTypeEnum = {
    Payment: 'payment',
    Transaction: 'transaction',
    Block: 'block',
    Delegation: 'delegation',
    Epoch: 'epoch',
    Asset: 'asset',
    NftApi: 'nft_api'
} as const;

export type WebhookType = typeof WebhookTypeEnum[keyof typeof WebhookTypeEnum];