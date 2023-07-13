import { booleanAttribute, Directive, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[cNavLink]',
  standalone: true
})
export class NavLinkDirective {

  /**
   * Sets .nav-link class to the host. [docs]
   * @type boolean
   * @default true
   */
  @Input({ transform: booleanAttribute }) cNavLink: string | boolean = true;

  /**
   * Toggle the active state for the component. [docs]
   * @type boolean
   */
  @Input() active?: boolean;
  /**
   * Set disabled attr for the host element. [docs]
   * @type boolean
   */
  @Input({ transform: booleanAttribute }) disabled: string | boolean = false;

  @HostBinding('attr.aria-current')
  get ariaCurrent(): string | null {
    return this.active ? 'page' : null;
  }

  @HostBinding('attr.aria-disabled')
  get isDisabled(): boolean | null {
    return <boolean>this.disabled || null;
  }

  @HostBinding('attr.disabled')
  get attrDisabled() {
    return this.disabled ? '' : null;
  };

  @HostBinding('attr.tabindex')
  get getTabindex(): string | null {
    return this.disabled ? '-1' : null;
  }

  @HostBinding('style.cursor')
  get getCursorStyle(): string | null {
    return this.disabled ? null : 'pointer';
  }

  @HostBinding('class')
  get hostClasses(): any {
    return {
      'nav-link': this.cNavLink,
      disabled: this.disabled,
      active: this.active
    };
  }
}
