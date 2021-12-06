import { Directive, HostBinding, Input } from '@angular/core';
import { BooleanInput, coerceBooleanProperty } from '@angular/cdk/coercion';

@Directive({
  selector: '[cNavLink]'
})
export class NavLinkDirective {

  static ngAcceptInputType_cNavLink: BooleanInput;
  static ngAcceptInputType_disabled: BooleanInput;

  /**
   * Sets .nav-link class to the host. [docs]
   * @type boolean
   * @default true
   */
  @Input()
  set cNavLink(value: boolean) {
    this._cNavLink = coerceBooleanProperty(value);
  };
  get cNavLink() {
    return this._cNavLink;
  }
  private _cNavLink = true

  /**
   * Toggle the active state for the component. [docs]
   * @type boolean
   */
  @Input() active?: boolean;
  /**
   * Set disabled attr for the host element. [docs]
   * @type boolean
   */
  @Input()
  get disabled(): boolean {
    return this._disabled;
  }
  set disabled(value: boolean) {
    this._disabled = coerceBooleanProperty(value);
  }
  private _disabled = false;

  @HostBinding('attr.aria-current')
  get ariaCurrent(): string | null {
    return this.active ? 'page' : null;
  }

  @HostBinding('attr.aria-disabled')
  get isDisabled(): boolean | null {
    return this.disabled || null;
  }

  @HostBinding('attr.disabled')
  get attrDisabled () {
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
