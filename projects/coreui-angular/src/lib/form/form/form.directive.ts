import { booleanAttribute, computed, Directive, input } from '@angular/core';

@Directive({
  selector: 'form[cForm]',
  host: { '[class]': 'hostClasses()' }
})
export class FormDirective {
  /**
   * Mark a form as validated. If you set it `true`, all validation styles will be applied to the form. [docs]
   * @type boolean
   * @default false
   */
  readonly validated = input(false, { transform: booleanAttribute });

  readonly hostClasses = computed(() => {
    return {
      'was-validated': this.validated()
    };
  });
}
