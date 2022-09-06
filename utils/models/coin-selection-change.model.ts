import { Amount } from './amount.model';
import { Asset } from './asset.model';

export interface CoinSelectionChange {
  address: string;
  amount: Amount;
  assets?: Asset[];
  derivation_path?: string[];
}
