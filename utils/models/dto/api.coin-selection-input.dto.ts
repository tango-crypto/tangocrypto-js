import { Asset } from "../asset.model";

export interface CoinSelectionInputDto {
  hash: string;
  index: number;
  address: string;
  value: number;
  assets?: Asset[];
}
