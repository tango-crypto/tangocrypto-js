export interface Rule {
  field: string;
  operator: string;
  value: string;
}

export interface Webhook {
  network: string;
  name: string;
  description: string;
  webhook_type: string;
  auth_token: string;
  callback_url: string;
  rules?: Rule[];
  available: string;
}
