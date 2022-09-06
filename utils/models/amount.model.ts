import { AmountUnitEnum } from './amount-unit-enum.model';

export interface Amount {
  quantity: number;
  unit: AmountUnitEnum;
}
