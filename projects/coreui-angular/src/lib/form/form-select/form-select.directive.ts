import { computed, Directive, input } from '@angular/core';

@Directive({
  selector: 'select[cSelect]',
  host: { class: 'form-select', '[class]': 'hostClasses()' }
})
export class FormSelectDirective {
  /**
   * Size the component small or large.
   * @default undefined
   */
  readonly sizing = input<'' | 'sm' | 'lg' | string>();

  /**
   * Set component validation state to valid.
   * @default undefined
   */
  readonly valid = input<boolean>();

  readonly hostClasses = computed(() => {
    const sizing = this.sizing();
    const valid = this.valid();
    return {
      'form-select': true,
      [`form-select-${sizing}`]: !!sizing,
      'is-valid': valid === true,
      'is-invalid': valid === false
    };
  });
}
