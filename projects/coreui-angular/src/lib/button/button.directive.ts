import {
  booleanAttribute,
  computed,
  Directive,
  input,
  InputSignal,
  InputSignalWithTransform,
  numberAttribute
} from '@angular/core';

import { BooleanInput, ButtonType, Colors, Shapes } from '../coreui.types';

@Directive({
  selector: '[cButton]',
  exportAs: 'cButton',
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
  static ngAcceptInputType_active: BooleanInput;
  static ngAcceptInputType_disabled: BooleanInput;

  /**
   * Toggle the active state for the component. [docs]
   * @type InputSignalWithTransform<boolean, unknown>
   */
  readonly active: InputSignalWithTransform<boolean, unknown> = input(false, { transform: booleanAttribute });

  /**
   * Sets the color context of the component to one of CoreUI’s themed colors. [docs]
   * @type InputSignal<Colors>
   */
  readonly color: InputSignal<Colors> = input<Colors>('primary');

  /**
   * Toggle the disabled state for the component.
   * @type InputSignalWithTransform<boolean, unknown>
   */
  readonly disabled: InputSignalWithTransform<boolean, unknown> = input(false, { transform: booleanAttribute });

  /**
   * Select the shape of the component.
   * @return Shapes
   */
  readonly shape = input<Shapes>();

  /**
   * Size the component small or large.
   * @return  sm' | 'lg' | ''
   */
  readonly size = input<'' | 'sm' | 'lg' | string>('');

  /**
   * The tabindex attribute specifies the tab order of an element (when the "tab" button is used for navigating).
   */
  readonly tabindex = input(undefined, { transform: numberAttribute });

  /**
   * Specifies the type of button. Always specify the type attribute for the `<button>` element.
   * Different browsers may use different default types for the `<button>` element.
   * @type InputSignal<ButtonType>
   * @default 'button'
   */
  readonly type: InputSignal<ButtonType> = input<ButtonType>('button');

  /**
   * Set the button variant to an outlined button or a ghost button.
   * @type InputSignal<'ghost' | 'outline' | undefined>
   */
  readonly variant: InputSignal<'ghost' | 'outline' | undefined> = input<'ghost' | 'outline'>();

  readonly hostClasses = computed(() => {
    const color = this.color();
    const variant = this.variant();
    const size = this.size();
    const shape = this.shape();

    return {
      btn: true,
      [`btn-${color}`]: !!color && !variant,
      [`btn-${variant}`]: !!variant && !color,
      [`btn-${variant}-${color}`]: !!variant && !!color,
      [`btn-${size}`]: !!size,
      [`${shape}`]: !!shape,
      active: this.active(),
      disabled: this._disabled()
    } as Record<string, boolean>;
  });

  readonly _disabled = computed(() => this.disabled());

  readonly ariaDisabled = computed(() => {
    return this._disabled() ? true : null;
  });

  readonly attrDisabled = computed(() => {
    return this._disabled() ? '' : null;
  });

  readonly tabIndex = computed(() => {
    return this._disabled() ? '-1' : (this.tabindex() ?? null);
  });

  readonly isActive = computed(() => {
    return <boolean>this.active() || null;
  });
}
