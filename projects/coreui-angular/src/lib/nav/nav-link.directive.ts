import { booleanAttribute, computed, Directive, effect, input, numberAttribute } from '@angular/core';
import { BooleanInput } from '../coreui.types';

@Directive({
  selector: '[cNavLink]',
  host: {
    '[class]': 'hostClasses()',
    '[attr.aria-current]': 'ariaCurrent()',
    '[attr.aria-disabled]': 'ariaDisabled',
    '[attr.disabled]': 'attrDisabled',
    '[attr.tabindex]': 'attrTabindex',
    '[style.cursor]': 'styleCursor'
  }
})
export class NavLinkDirective {
  static ngAcceptInputType_disabled: BooleanInput;

  /**
   * Sets .nav-link class to the host. [docs]
   * @default true
   */
  readonly cNavLink = input(true, { transform: booleanAttribute });

  /**
   * Toggle the active state for the component. [docs]
   * @default undefined
   */
  readonly active = input<boolean>();

  /**
   * Set disabled attr for the host element. [docs]
   * @default false
   */
  readonly disabled = input(false, { transform: booleanAttribute });

  /**
   * The tabindex attribute specifies the tab order of an element (when the "tab" button is used for navigating).
   */
  readonly tabindex = input(undefined, { transform: numberAttribute });

  readonly ariaCurrent = computed(() => {
    return this.active() ? 'page' : null;
  });

  ariaDisabled: boolean | null = null;
  attrDisabled: boolean | string | null = null;
  attrTabindex: number | null = null;
  styleCursor: 'pointer' | null = null;

  readonly #disabledEffect = effect(() => {
    const disabled = this.disabled();
    this.ariaDisabled = disabled || null;
    this.attrDisabled = disabled ? '' : null;
    this.attrTabindex = disabled ? -1 : (this.tabindex() ?? null);
    this.styleCursor = disabled ? null : 'pointer';
  });

  readonly hostClasses = computed(() => {
    return {
      'nav-link': this.cNavLink(),
      disabled: this.disabled(),
      active: this.active()
    } as Record<string, boolean>;
  });
}
