import { Colors } from '../coreui.types';

export interface IProgress {
  height: number;
  thin: boolean;
  white: boolean;
}

export interface IProgressBar extends IProgressBarStacked {
  animated?: boolean;
  color?: Colors;
  max?: number;
  precision: number;
  value?: number;
  variant?: 'striped';
  width?: number;
}

export interface IProgressBarStacked {
  stacked?: boolean;
}
