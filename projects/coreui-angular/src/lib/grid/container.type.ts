import { Breakpoints } from '../coreui.types';

export interface IContainer {
  fluid?: string | boolean;
  breakpoint?: Exclude<Breakpoints, 'xs'>;
}
