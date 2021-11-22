import { BreakpointInfix } from '../coreui.types';

export interface IGutter {
  gutter?: (IGutterObject | GutterBreakpoints | Gutters);
}

export type Gutters = 0 | 1 | 2 | 3 | 4 | 5 | number;

export interface IGutterObject {
  g?: Gutters;
  gx?: Gutters;
  gy?: Gutters;
}

export type GutterBreakpoints = {
  [key in BreakpointInfix]?: IGutterObject;
};
