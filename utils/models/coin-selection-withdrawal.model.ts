import { Amount } from './amount.model';

export interface CoinSelectionWithdrawal {
  amount: Amount;
  derivation_path: string[];
  stake_address: string;
}
