export interface CreateIpfsContentResponse {
    id: string;
    cid: string;
}

export interface IpfsContent {
    created_at: Date;
    status: string;
    account_id: string;
    name: string;
    updated_at: Date;
    content_cid: string;
    id: string;
    cid: string;
    pins: Pin[];
    dag_size: number;
    type: string;
}

export interface Location {
    ipfs_peer_id: string;
    peer_id: string;
    peer_name: string;
}

export interface Pin {
    location: Location;
    id: string;
    status: string;
}


export interface IpfsDeleteResponse {
    /**
     * Returns `true` if successfuly deleted or `false` if there was an error deleting the collection.
     * @type {boolean}
     * @memberof CollectionDeleteResponse
     */
    'deleted'?: boolean;
    /**
     * Deleted collection ID.
     * @type {string}
     * @memberof CollectionDeleteResponse
     */
    'deleted_content_id'?: string;
    /**
     * Deletion datetime in ISO 8601 format.
     * @type {string}
     * @memberof CollectionDeleteResponse
     */
    'deleted_at'?: string;
}