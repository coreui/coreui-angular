import { Directive, HostBinding, Input } from '@angular/core';
import { BooleanInput, coerceBooleanProperty } from '@angular/cdk/coercion';

@Directive({
  selector: 'form[cForm]'
})
export class FormDirective {

  static ngAcceptInputType_validated: BooleanInput;
  private _validated = false;

  /**
   * Mark a form as validated. If you set it `true`, all validation styles will be applied to the form. [docs]
   * @type boolean
   * @default false
   */
  @Input()
  set validated(value: boolean) {
    this._validated = coerceBooleanProperty(value);
  }
  get validated() {
    return this._validated;
  }

  @HostBinding('class')
  get hostClasses(): any {
    return {
      'was-validated': this.validated,
    };
  }

  constructor() { }
}
