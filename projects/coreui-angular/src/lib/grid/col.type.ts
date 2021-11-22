import { BooleanInput, NumberInput } from '@angular/cdk/coercion';

export type ColOrder = (number | 'first' | 'last');

export type ColBreakpoint = (BooleanInput | NumberInput);

export interface ICol {
  xs?: (BooleanInput | NumberInput);
  sm?: (BooleanInput | NumberInput);
  md?: (BooleanInput | NumberInput);
  lg?: (BooleanInput | NumberInput);
  xl?: (BooleanInput | NumberInput);
  xxl?: (BooleanInput | NumberInput);
}
