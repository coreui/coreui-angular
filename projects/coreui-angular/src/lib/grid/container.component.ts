import { booleanAttribute, Component, computed, input } from '@angular/core';
import { Breakpoints } from '../coreui.types';

@Component({
  selector: 'c-container, [cContainer]',
  template: '<ng-content />',
  styleUrls: ['./container.component.scss'],
  host: { '[class]': 'hostClasses()' }
})
export class ContainerComponent {
  /**
   * Set container 100% wide until a breakpoint.
   */
  readonly breakpoint = input<Exclude<Breakpoints, 'xs'>>('');

  /**
   * Set container 100% wide, spanning the entire width of the viewport.
   * @return boolean
   */
  readonly fluid = input(false, { transform: booleanAttribute });

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
