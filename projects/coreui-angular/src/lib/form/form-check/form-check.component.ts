import { booleanAttribute, Component, computed, contentChild, input } from '@angular/core';

import { FormCheckLabelDirective } from './form-check-label.directive';

@Component({
  selector: 'c-form-check',
  template: '<ng-content />',
  exportAs: 'cFormCheck',
  host: { '[class]': 'hostClasses()' }
})
export class FormCheckComponent {
  /**
   * Group checkboxes or radios on the same horizontal row.
   * @default false
   */
  readonly inline = input(false, { transform: booleanAttribute });

  /**
   * Put checkboxes or radios on the opposite side.
   * @default false
   * @since 4.4.7
   */
  readonly reverse = input(false, { transform: booleanAttribute });

  /**
   * Size the component large or extra large. Works only with `[switch]="true"` [docs]
   * @default undefined
   */
  readonly sizing = input<'' | 'lg' | 'xl' | string>();

  /**
   * Render a toggle switch on for checkbox.
   * @type boolean
   * @default false
   */
  readonly switch = input(false, { transform: booleanAttribute });

  readonly formCheckLabel = contentChild(FormCheckLabelDirective);

  readonly formCheckClass = computed(() => !!this.formCheckLabel());

  readonly hostClasses = computed(() => {
    const sizing = this.sizing();
    const isSwitch = this.switch();

    return {
      'form-check': !!this.formCheckLabel(),
      'form-switch': isSwitch,
      [`form-switch-${sizing}`]: isSwitch && !!sizing,
      'form-check-inline': this.inline(),
      'form-check-reverse': this.reverse()
    };
  });
}
