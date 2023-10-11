import { Directive, ElementRef, HostBinding, Input, Renderer2 } from '@angular/core';
import { BooleanInput, coerceBooleanProperty } from '@angular/cdk/coercion';

@Directive({
  selector: 'input[cFormCheckInput]',
  standalone: true
})
export class FormCheckInputDirective {

  static ngAcceptInputType_checked: BooleanInput;
  static ngAcceptInputType_indeterminate: BooleanInput;

  /**
   * Specifies the type of component.
   * @type {'checkbox' | 'radio'}
   * @default 'checkbox'
   */
  @HostBinding('attr.type')
  @Input() type: ('checkbox' | 'radio') = 'checkbox';

  /**
   * Set component indeterminate state.
   * @type boolean
   */
  @Input()
  set indeterminate(value: boolean) {
    const indeterminate = coerceBooleanProperty(value);
    if (this._indeterminate !== indeterminate) {
      this._indeterminate = indeterminate;
      const htmlInputElement = this.hostElement.nativeElement as HTMLInputElement;
      if (indeterminate) {
        this.renderer.setProperty(htmlInputElement, 'checked', false);
      }
      this.renderer.setProperty(htmlInputElement, 'indeterminate', indeterminate);
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

  @Input()
  set checked(value: boolean) {
    const checked = coerceBooleanProperty(value);
    const htmlInputElement = this.hostElement?.nativeElement as HTMLInputElement;
    if (htmlInputElement) {
      this.renderer.setProperty(htmlInputElement, 'checked', checked);
    }
  }

  get checked(): boolean {
    return this.hostElement?.nativeElement?.checked;
  }

  constructor(
    private renderer: Renderer2,
    private hostElement: ElementRef
  ) { }

}
