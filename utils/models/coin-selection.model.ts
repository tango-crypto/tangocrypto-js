import { CoinSelectionCertificate } from './coin-selection-certificate.model';
import { CoinSelectionChange } from './coin-selection-change.model';
import { CoinSelectionInput } from './coin-selection-input.model';
import { CoinSelectionWithdrawal } from './coin-selection-withdrawal.model';
import { Amount } from './amount.model';
import { Payment } from './payment.model';

export interface CoinSelection {
  inputs: CoinSelectionInput[];
  outputs: Payment[];
  change: CoinSelectionChange[];
  withdrawals?: CoinSelectionWithdrawal[];
  certificates?: CoinSelectionCertificate[];
  deposits?: Amount[];
  metadata?: any;
}
