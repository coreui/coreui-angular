import { booleanAttribute, Directive, input } from '@angular/core';

@Directive({
  selector: 'form[cForm]',
  host: { '[class.was-validated]': 'validated()' }
})
export class FormDirective {
  /**
   * Mark a form as validated. If you set it `true`, all validation styles will be applied to the form. [docs]
   * @return boolean
   * @default false
   */
  readonly validated = input(false, { transform: booleanAttribute });
}
