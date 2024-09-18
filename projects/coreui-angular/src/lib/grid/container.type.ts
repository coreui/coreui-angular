import { Breakpoints } from '../coreui.types';
import { InputSignal, InputSignalWithTransform } from '@angular/core';

export interface IContainer {
  fluid?: string | boolean | InputSignalWithTransform<unknown, boolean>;
  breakpoint?: Exclude<Breakpoints, 'xs'> | InputSignal<Exclude<Breakpoints, 'xs'>>;
}
