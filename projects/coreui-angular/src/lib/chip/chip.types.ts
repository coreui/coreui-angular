import { Colors } from '../coreui.types';

export type ChipSize = 'sm' | 'lg';

export type ChipVariant = 'outline';

export interface ChipOptions {
  active: boolean;
  ariaRemoveLabel: string;
  clickable: boolean;
  color: Colors;
  disabled: boolean;
  filter: boolean;
  removable: boolean;
  selectable: boolean;
  size: ChipSize;
  variant: ChipVariant;
}
