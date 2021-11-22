import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[cLabel]'
})
export class FormLabelDirective {

  /**
   * For horizontal forms set labels to 'col' and make them vertically centered with their associated form controls.
   * @type 'col'
   */
  @Input('cLabel') col: 'col' | '' = '';
  /**
   * Size the label small or large.
   */
  @Input() sizing: '' | 'sm' | 'lg' | string = '';

  @HostBinding('class')
  get hostClasses(): any {

    return {
      'form-label': true,
      'col-form-label': this.col === 'col',
      [`col-form-label-${this.sizing}`]: !!this.sizing && this.col === 'col',
    };
  }

  constructor() {}

}
