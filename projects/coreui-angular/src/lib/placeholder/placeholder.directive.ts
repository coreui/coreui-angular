import { Directive, HostBinding, Input } from '@angular/core';
import { BooleanInput, coerceBooleanProperty } from '@angular/cdk/coercion';

@Directive({
  selector: '[cPlaceholder]',
  exportAs: 'cPlaceholder',
  standalone: true
})
export class PlaceholderDirective {

  static ngAcceptInputType_visible: BooleanInput;

  constructor() { }

  /**
   * placeholder toggler
   * @type boolean
   * @default true
   */
  @Input('cPlaceholder')
  set visible(value: boolean) {
    this._visible = coerceBooleanProperty(value);
  }
  get visible() {
    return this._visible;
  }
  private _visible: boolean = false;

  /**
   * Size the placeholder extra small, small, large.
   */
  @Input('cPlaceholderSize') size?: 'xs' | 'sm' | 'lg';

  @HostBinding('attr.aria-hidden')
  get ariaHidden(): boolean | null {
    return this.visible ? null : true;
  };

  @HostBinding('class')
  get hostClasses(): any {
    return {
      'placeholder': this.visible,
      [`placeholder-${this.size}`]: !!this.size
    };
  }
}
