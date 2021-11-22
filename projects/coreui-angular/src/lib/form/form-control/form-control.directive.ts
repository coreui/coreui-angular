import { Directive, ElementRef, HostBinding, Input, OnInit } from '@angular/core';
import { BooleanInput, coerceBooleanProperty } from '@angular/cdk/coercion';

import { InputType } from '../../coreui.types';

@Directive({
  selector: 'input[cFormControl], textarea[cFormControl]'
})
export class FormControlDirective implements OnInit {

  static ngAcceptInputType_plaintext: BooleanInput;
  /**
   * Size the component small or large.
   * @type {'sm' | 'lg'}
   */
  @Input() sizing?: '' | 'sm' | 'lg' | string = '';
  /**
   * Set component validation state to valid.
   * @type boolean
   */
  @Input() valid?: boolean;

  /**
   * Specifies the type of input element.
   */
  @HostBinding('attr.type')
  @Input() type: Omit<InputType, 'checkbox' | 'radio'> = 'text';

  /**
   * Render the component styled as plain text. Removes the default form field styling and preserve the correct margin and padding. Recommend to use alongside `readonly` [docs]
   */
  @Input()
  set plaintext(value: boolean) {
    this._plaintext = coerceBooleanProperty(value);
  }
  get plaintext(): boolean {
    return this._plaintext;
  }
  private _plaintext = false;

  constructor(
    private hostElement: ElementRef
  ) {}

  @HostBinding('class')
  get hostClasses(): any {

    const isRangeType = this.type === 'range';

    return {
      'form-control': !isRangeType && !this.plaintext,
      'form-control-plaintext': !isRangeType && this.plaintext,
      'form-control-color': this.type === 'color',
      'form-range': isRangeType,
      [`form-control-${this.sizing}`]: !!this.sizing && !isRangeType,
      'is-valid': this.valid === true,
      'is-invalid': this.valid === false
    };
  }

  get hostTag(): string {
    return this.hostElement.nativeElement.tagName;
  }

  ngOnInit(): void {
    const hostTag = this.hostTag.toLowerCase();
    if (hostTag !== 'input' && hostTag !== 'textarea') {
      console.warn(`CoreUI [cFormControl] works with '<input>' and '<texarea>' - not with '<${hostTag}>'`);
    }
  }

}
