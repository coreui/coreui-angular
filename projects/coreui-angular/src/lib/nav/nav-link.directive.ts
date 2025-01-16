import { booleanAttribute, computed, Directive, effect, input } from '@angular/core';

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

  readonly ariaCurrent = computed(() => {
    return this.active() ? 'page' : null;
  });

  ariaDisabled: boolean | null = null;
  attrDisabled: boolean | string | null = null;
  attrTabindex: '-1' | null = null;
  styleCursor: 'pointer' | null = null;

  readonly #disabledEffect = effect(() => {
    const disabled = this.disabled();
    this.ariaDisabled = disabled || null;
    this.attrDisabled = disabled ? '' : null;
    this.attrTabindex = disabled ? '-1' : null;
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
