import { booleanAttribute, computed, Directive, input, InputSignal, InputSignalWithTransform } from '@angular/core';

import { ButtonType, Colors, Shapes } from '../coreui.types';

@Directive({
  selector: '[cButton]',
  exportAs: 'cButton',
  standalone: true,
  host: {
    class: 'btn',
    '[class]': 'hostClasses()',
    '[attr.aria-disabled]': 'ariaDisabled()',
    '[attr.aria-pressed]': 'isActive()',
    '[attr.disabled]': 'attrDisabled()',
    '[attr.tabindex]': 'tabIndex()',
    '[attr.type]': 'type()'
  }
})
export class ButtonDirective {
  /**
   * Toggle the active state for the component. [docs]
   * @type InputSignalWithTransform<boolean, unknown>
   */
  active: InputSignalWithTransform<boolean, unknown> = input(false, { transform: booleanAttribute });

  /**
   * Sets the color context of the component to one of CoreUI’s themed colors. [docs]
   * @type InputSignal<Colors>
   */
  color: InputSignal<Colors> = input<Colors>('primary');

  /**
   * Toggle the disabled state for the component.
   * @type InputSignalWithTransform<boolean, unknown>
   */
  disabled: InputSignalWithTransform<boolean, unknown> = input(false, { transform: booleanAttribute });

  /**
   * Select the shape of the component.
   * @type InputSignal<Shapes>
   */
  shape: InputSignal<Shapes | undefined> = input<Shapes>();

  /**
   * Size the component small or large.
   * @type InputSignal<'sm' | 'lg' | ''>
   */
  size: InputSignal<'' | 'sm' | 'lg'> = input<'' | 'sm' | 'lg'>('');

  /**
   * Specifies the type of button. Always specify the type attribute for the `<button>` element.
   * Different browsers may use different default types for the `<button>` element.
   * @type InputSignal<ButtonType>
   * @default 'button'
   */
  type: InputSignal<ButtonType> = input<ButtonType>('button');

  /**
   * Set the button variant to an outlined button or a ghost button.
   * @type InputSignal<'ghost' | 'outline' | undefined>
   */
  variant: InputSignal<'ghost' | 'outline' | undefined> = input<'ghost' | 'outline'>();

  hostClasses = computed(() => {
    return {
      btn: true,
      [`btn-${this.color()}`]: !!this.color() && !this.variant(),
      [`btn-${this.variant()}`]: !!this.variant() && !this.color(),
      [`btn-${this.variant()}-${this.color()}`]: !!this.variant() && !!this.color(),
      [`btn-${this.size()}`]: !!this.size(),
      [`${this.shape()}`]: !!this.shape(),
      active: this.active(),
      disabled: this._disabled()
    } as Record<string, boolean>;
  });

  _disabled = computed(() => this.disabled());

  ariaDisabled = computed(() => {
    return this._disabled() ? true : null;
  });

  attrDisabled = computed(() => {
    return this._disabled() ? '' : null;
  });

  tabIndex = computed(() => {
    return this._disabled() ? '-1' : null;
  });

  isActive = computed(() => {
    return <boolean>this.active() || null;
  });
}
