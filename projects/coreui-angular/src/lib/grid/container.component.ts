import { booleanAttribute, Component, computed, input, InputSignal, InputSignalWithTransform } from '@angular/core';

import { IContainer } from './container.type';
import { Breakpoints } from '../coreui.types';

@Component({
  selector: 'c-container, [cContainer]',
  template: '<ng-content />',
  styleUrls: ['./container.component.scss'],
  standalone: true,
  host: { '[class]': 'hostClasses()' }
})
export class ContainerComponent implements IContainer {
  /**
   * Set container 100% wide until a breakpoint.
   */
  readonly breakpoint: InputSignal<Exclude<Breakpoints, 'xs'>> = input<Exclude<Breakpoints, 'xs'>>('');

  /**
   * Set container 100% wide, spanning the entire width of the viewport.
   * @type InputSignalWithTransform<unknown, boolean>
   */
  readonly fluid: InputSignalWithTransform<unknown, boolean> = input<unknown, boolean>(false, {
    transform: booleanAttribute
  });

  readonly hostClasses = computed(() => {
    const breakpoint = this.breakpoint();
    const fluid = this.fluid();
    return {
      container: !fluid && !breakpoint,
      'container-fluid': !!fluid,
      [`container-${breakpoint}`]: !!breakpoint
    } as Record<string, boolean>;
  });
}
