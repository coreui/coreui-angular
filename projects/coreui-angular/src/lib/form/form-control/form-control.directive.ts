import { booleanAttribute, Directive, ElementRef, HostBinding, Input, OnInit } from '@angular/core';

import { InputType } from '../../coreui.types';

@Directive({
  selector: 'input[cFormControl], textarea[cFormControl]',
  standalone: true
})
export class FormControlDirective implements OnInit {

  constructor(
    private hostElement: ElementRef
  ) {}

  /**
   * Size the component small or large.
   * @type {'sm' | 'lg'}
   */
  @Input() sizing?: '' | 'sm' | 'lg' | string = '';
  /**
   * Set component validation state to valid.
   * @type boolean | undefined
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
  @Input({ transform: booleanAttribute }) plaintext: string | boolean = false;

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
      console.warn(`CoreUI [cFormControl] works with '<input>' and '<textarea>' - not with '<${hostTag}>'`);
    }
  }

}
