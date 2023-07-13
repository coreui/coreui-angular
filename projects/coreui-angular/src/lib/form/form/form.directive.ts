import { booleanAttribute, Directive, HostBinding, Input } from '@angular/core';

@Directive({
  selector: 'form[cForm]',
  standalone: true
})
export class FormDirective {

  /**
   * Mark a form as validated. If you set it `true`, all validation styles will be applied to the form. [docs]
   * @type boolean
   * @default false
   */
  @Input({ transform: booleanAttribute }) validated: string | boolean = false;

  @HostBinding('class')
  get hostClasses(): any {
    return {
      'was-validated': this.validated
    };
  }
}
