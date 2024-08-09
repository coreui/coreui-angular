import { booleanAttribute, Directive, HostBinding, Input } from '@angular/core';

import { ButtonType, Colors, Shapes } from '../coreui.types';

@Directive({
  selector: '[cButton]',
  exportAs: 'cButton',
  standalone: true,
  host: { class: 'btn' }
})
export class ButtonDirective {
  /**
   * Toggle the active state for the component. [docs]
   * @type boolean
   */
  @Input({ transform: booleanAttribute }) active: string | boolean = false;

  /**
   * Sets the color context of the component to one of CoreUI’s themed colors. [docs]
   * @type Colors
   */
  @Input() color?: Colors = 'primary';
  /**
   * Toggle the disabled state for the component.
   * @type boolean
   */
  @Input({ transform: booleanAttribute }) disabled: string | boolean = false;

  /**
   * Select the shape of the component.
   * @type { 'rounded' | 'rounded-top' | 'rounded-end' | 'rounded-bottom' | 'rounded-start' | 'rounded-circle' | 'rounded-pill' | 'rounded-0' | 'rounded-1' | 'rounded-2' | 'rounded-3' | string }
   */
  @Input() shape?: Shapes;

  /**
   * Size the component small or large.
   * @type {'sm' | 'lg'}
   */
  @Input() size?: 'sm' | 'lg' | '' = '';

  /**
   * Specifies the type of button. Always specify the type attribute for the `<button>` element.
   * Different browsers may use different default types for the `<button>` element.
   */
  @HostBinding('attr.type')
  @Input()
  type: ButtonType = 'button';

  /**
   * Set the button variant to an outlined button or a ghost button.
   * @type {'ghost' | 'outline'}
   */
  @Input() variant?: 'ghost' | 'outline';

  @HostBinding('class')
  get hostClasses(): any {
    return {
      btn: true,
      [`btn-${this.color}`]: !!this.color && !this.variant,
      [`btn-${this.variant}`]: !!this.variant && !this.color,
      [`btn-${this.variant}-${this.color}`]: !!this.variant && !!this.color,
      [`btn-${this.size}`]: !!this.size,
      [`${this.shape}`]: !!this.shape,
      disabled: this.disabled,
      active: this.active
    };
  }

  @HostBinding('attr.aria-disabled')
  get ariaDisabled() {
    return this.disabled || null;
  }

  @HostBinding('attr.aria-pressed')
  get isActive(): boolean | null {
    return <boolean>this.active || null;
  }

  @HostBinding('attr.disabled')
  get attrDisabled() {
    return this.disabled ? '' : null;
  }

  @HostBinding('attr.tabindex')
  get tabIndex(): string | null {
    return this.disabled ? '-1' : null;
  }
}
