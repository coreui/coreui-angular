import { Component, computed, input } from '@angular/core';

import { Colors } from '../coreui.types';

@Component({
  selector: 'c-spinner',
  templateUrl: './spinner.component.html',
  host: {
    '[attr.role]': 'role()',
    '[class]': 'hostClasses()'
  }
})
export class SpinnerComponent {
  /**
   * Sets the color context of the component to one of CoreUI’s themed colors.
   * @returns Colors
   */
  readonly color = input<Colors>();

  /**
   * Label for accessibility.
   * @returns string
   * @default 'Loading...'
   */
  readonly label = input('Loading...');

  /**
   * Size the component small.
   * @returns string
   * @values 'sm'
   */
  readonly size = input<'sm'>();

  /**
   * Set the button variant to an outlined button or a ghost button.
   * @returns 'border' | 'grow'
   * @default 'border'
   */
  readonly variant = input<'border' | 'grow'>('border');
  /**
   * Default role attr for spinner
   * @returns string
   * @default 'status'
   */
  readonly role = input('status');

  readonly hostClasses = computed(() => {
    const color = this.color();
    const size = this.size();
    const variant = this.variant();

    return {
      [`spinner-${variant}`]: true,
      [`text-${color}`]: !!color,
      [`spinner-${variant}-${size}`]: !!size
    } as Record<string, boolean>;
  });
}
