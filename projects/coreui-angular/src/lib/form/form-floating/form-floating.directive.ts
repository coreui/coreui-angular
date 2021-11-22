import { Directive, HostBinding, Input } from '@angular/core';
import { BooleanInput, coerceBooleanProperty } from '@angular/cdk/coercion';

@Directive({
  selector: '[cFormFloating]'
})
export class FormFloatingDirective {

  static ngAcceptInputType_floating: BooleanInput;

  /**
   * Enable floating labels
   * @type boolean
   */
  @Input('cFormFloating')
  get floating(): boolean {
    return this._floating;
  }
  set floating(value: boolean) {
    this._floating = coerceBooleanProperty(value);
  }
  private _floating = true;

  @HostBinding('class')
  get hostClasses(): any {
    return {
      'form-floating': this.floating,
    };
  }

  constructor() { }

}
