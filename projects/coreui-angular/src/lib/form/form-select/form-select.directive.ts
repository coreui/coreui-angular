import { Directive, HostBinding, Input, OnChanges } from '@angular/core';

@Directive({
  selector: 'select[cSelect]'
})
export class FormSelectDirective {
  /**
   * Size the component small or large.
   */
  @Input() sizing?: '' | 'sm' | 'lg' | string = '';

  /**
   * Set component validation state to valid.
   * @type {boolean | undefined}
   */
  @Input() valid?: boolean;

  @HostBinding('class')
  get hostClasses(): any {
    return {
      'form-select': true,
      [`form-select-${this.sizing}`]: !!this.sizing,
      'is-valid': this.valid === true,
      'is-invalid': this.valid === false,
    };
  }

  constructor() {}

}
