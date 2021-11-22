import { Component, HostBinding, Input } from '@angular/core';

import { Colors } from '../coreui.types';

@Component({
  selector: 'c-spinner',
  templateUrl: './spinner.component.html',
})
export class SpinnerComponent {
  /**
   * Sets the color context of the component to one of CoreUI’s themed colors.
   * @type Colors
   */
  @Input() color?: Colors;

  /**
   * Label for accessibility.
   * @type string
   * @default 'Loading...'
   */
  @Input() label: string = "Loading...";

  /**
   * Size the component small.
   * @type string
   * @values 'sm'
   */
  @Input() size?: 'sm';

  /**
   * Set the button variant to an outlined button or a ghost button.
   * @values 'border' | 'grow'
   * @default 'border'
   */
  @Input() variant?: 'border' | 'grow' = 'border';

  @Input()
  @HostBinding('attr.role') role = 'status';

  @HostBinding('class')
  get hostClasses(): any {
    return {
      [`spinner-${this.variant}`]: true,
      [`text-${this.color}`]: !!this.color,
      [`spinner-${this.variant}-${this.size}`]: !!this.size
    };
  }
}
