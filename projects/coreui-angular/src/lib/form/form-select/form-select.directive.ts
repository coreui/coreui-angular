import { computed, Directive, input } from '@angular/core';

import { bindAriaInvalid } from '../../shared/aria-invalid.utils';

@Directive({
  selector: 'select[cSelect]',
  host: { class: 'form-select', '[class]': 'hostClasses()' }
})
export class FormSelectDirective {
  /**
   * Size the component small or large.
   * @default undefined
   */
  readonly sizing = input<'' | 'sm' | 'lg'>();

  /**
   * Validation state: `true` valid, `false` invalid, which also sets `aria-invalid="true"`, `undefined` none.
   * Do not bind `aria-invalid` on the same element as well.
   * @default undefined
   */
  readonly valid = input<boolean>();

  readonly #ariaInvalidEffect = bindAriaInvalid(this.valid);

  readonly hostClasses = computed(() => {
    const sizing = this.sizing();
    const valid = this.valid();
    return {
      'form-select': true,
      [`form-select-${sizing}`]: !!sizing,
      'is-valid': valid === true,
      'is-invalid': valid === false
    } as Record<string, boolean>;
  });
}
