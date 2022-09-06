export interface TokenStorage {
  content: { base64: string; bucket: string; key?: string; index?: number }[];
}
