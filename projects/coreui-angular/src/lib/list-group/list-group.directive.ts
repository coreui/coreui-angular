import { booleanAttribute, computed, Directive, input, InputSignalWithTransform } from '@angular/core';
import { Sizes } from '../coreui.types';

@Directive({
  selector: '[cListGroup]',
  standalone: true,
  host: {
    class: 'list-group',
    '[class]': 'hostClasses()'
  }
})
export class ListGroupDirective {
  /**
   * Remove some borders and rounded corners to render list group items edge-to-edge in a parent component (e.g., `<CCard>`).
   * @type boolean
   */
  readonly flush: InputSignalWithTransform<boolean, unknown> = input(false, { transform: booleanAttribute });

  /**
   * Specify horizontal layout type.
   */
  readonly horizontal = input<boolean | Sizes>();

  readonly hostClasses = computed(() => {
    const horizontal = this.horizontal();
    return {
      'list-group': true,
      'list-group-horizontal': horizontal === true || horizontal === '',
      [`list-group-horizontal-${horizontal}`]: !!horizontal && typeof horizontal !== 'boolean',
      'list-group-flush': this.flush()
    } as Record<string, boolean>;
  });
}
