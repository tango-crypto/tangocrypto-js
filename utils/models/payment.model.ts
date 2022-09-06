import { Amount } from './amount.model';
import { Asset } from './asset.model';

export interface Payment {
  address: string;
  amount: Amount;
  assets?: Asset[];
}
