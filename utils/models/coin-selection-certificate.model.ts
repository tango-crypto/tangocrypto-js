import { CertificateTypeEnum } from './certificate-type-enum.model';

export interface CoinSelectionCertificate {
  certificate_type: CertificateTypeEnum;
  pool?: string;
  reward_account_path: string[];
}
