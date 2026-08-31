import { booleanAttribute, Component, computed, input } from '@angular/core';
import { BooleanInput } from '../coreui.types';

@Component({
  selector: 'c-nav-group-items',
  template: '<ng-content />',
  styleUrls: ['./nav-group-items.component.scss'],
  host: { '[class]': 'hostClasses()' }
})
export class NavGroupItemsComponent {
  static ngAcceptInputType_compact: BooleanInput;

  /**
   * Make nav group items more compact by cutting all `padding` in half.
   * @returns boolean
   * @default false
   */
  readonly compact = input(false, { transform: booleanAttribute });

  readonly hostClasses = computed(() => {
    return {
      'nav-group-items': true,
      compact: this.compact()
    } as Record<string, boolean>;
  });
}
