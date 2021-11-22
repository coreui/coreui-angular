import { Breakpoints } from '../coreui.types';

export interface IContainer {
  fluid?: boolean;
  breakpoint?: Exclude<Breakpoints, 'xs'>;
}
