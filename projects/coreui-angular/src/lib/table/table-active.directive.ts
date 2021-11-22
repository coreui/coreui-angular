import { Directive, HostBinding, Input } from '@angular/core';
import { BooleanInput, coerceBooleanProperty } from '@angular/cdk/coercion';

@Directive({
  selector: '[cTableActive]'
})
export class TableActiveDirective {

  static ngAcceptInputType_active: BooleanInput;

  /**
   * Highlight a table row or cell
   * @type boolean
   */
  @Input('cTableActive')
  set active(value: boolean) {
    this._active = coerceBooleanProperty(value);
  };
  get active() {
    return this._active;
  };

  private _active = false;

  @HostBinding('class')
  get hostClasses(): any {
    return {
      'table-active': this.active,
    };
  }

  constructor() { }

}
