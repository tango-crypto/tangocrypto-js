export interface SignTxRequest {
    tx: string;
    keys?: string[];
    witnesses?: string;
}