import { Amount } from './amount.model';
import { Asset } from './asset.model';

export interface CoinSelectionInput {
  id: string;
  index: number;
  address: string;
  amount: Amount;
  assets?: Asset[];
  derivation_path?: string[];
}
