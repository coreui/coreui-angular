import { Component, computed, input } from '@angular/core';

import { Colors } from '../coreui.types';

@Component({
  selector: 'c-spinner',
  templateUrl: './spinner.component.html',
  standalone: true,
  host: {
    '[attr.role]': 'role()',
    '[class]': 'hostClasses()'
  }
})
export class SpinnerComponent {
  /**
   * Sets the color context of the component to one of CoreUI’s themed colors.
   * @type Colors
   */
  readonly color = input<Colors>();

  /**
   * Label for accessibility.
   * @type string
   * @default 'Loading...'
   */
  readonly label = input('Loading...');

  /**
   * Size the component small.
   * @type string
   * @values 'sm'
   */
  readonly size = input<'sm'>();

  /**
   * Set the button variant to an outlined button or a ghost button.
   * @values 'border' | 'grow'
   * @default 'border'
   */
  readonly variant = input<'border' | 'grow'>('border');
  /**
   * Default role attr for Spinner. [docs]
   * @type string
   * @default 'status'
   */
  readonly role = input('status');

  readonly hostClasses = computed(() => {
    return {
      [`spinner-${this.variant()}`]: true,
      [`text-${this.color()}`]: !!this.color(),
      [`spinner-${this.variant()}-${this.size()}`]: !!this.size()
    };
  });
}
