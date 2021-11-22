import { Directive, ElementRef, HostBinding, Input, Renderer2 } from '@angular/core';
import { BooleanInput, coerceBooleanProperty } from '@angular/cdk/coercion';

@Directive({
  selector: 'input[cFormCheckInput]'
})
export class FormCheckInputDirective {

  static ngAcceptInputType_indeterminate: BooleanInput;

  /**
   * Specifies the type of component.
   * @type {'checkbox' | 'radio'}
   * @default 'checkbox'
   */
  @Input() type: 'checkbox' | 'radio' = 'checkbox';

  /**
   * Set component indeterminate state.
   * @type boolean
   */
  @Input()
  set indeterminate(value: boolean) {
    const newValue = coerceBooleanProperty(value);
    if (this._indeterminate !== newValue) {
      this._indeterminate = newValue;
      this.renderer.setProperty(this.hostElement.nativeElement, 'indeterminate', newValue);
    }
  };

  get indeterminate() {
    return this._indeterminate;
  }

  private _indeterminate = false;

  /**
   * Set component validation state to valid.
   * @type boolean
   */
  @Input() valid?: boolean;

  @HostBinding('class')
  get hostClasses(): any {

    return {
      'form-check-input': true,
      'is-valid': this.valid === true,
      'is-invalid': this.valid === false
    };
  }

  get checked(): boolean {
    return this.hostElement?.nativeElement?.checked;
  }

  constructor(
    private renderer: Renderer2,
    private hostElement: ElementRef
  ) { }

}
