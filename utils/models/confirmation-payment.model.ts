export interface ConfirmationPayment {
  saleId: string;
  blockHash: string;
  address: string;
  derivation_path: string;
  price: number;
  fee: number;
  payoutAddress: string;
  buyerAddress: string;
  quantity: number;
  policyId: string;
  tokenName: string;
  metadata: any;
}
