import { booleanAttribute, computed, Directive, ElementRef, inject, input, OnInit } from '@angular/core';

import { InputType } from '../../coreui.types';

@Directive({
  selector: 'input[cFormControl], textarea[cFormControl]',
  host: {
    '[class]': 'hostClasses()',
    '[attr.type]': 'type()'
  }
})
export class FormControlDirective implements OnInit {
  readonly #hostElement = inject(ElementRef);

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

  /**
   * Specifies the type of input element.
   */
  readonly type = input<Omit<InputType, 'checkbox' | 'radio'>>('text');

  /**
   * Render the component styled as plain text. Removes the default form field styling and preserve the correct margin and padding. Recommend to use alongside `readonly`
   * @default false
   */
  readonly plaintext = input(false, { transform: booleanAttribute });

  readonly hostClasses = computed(() => {
    const type = this.type();
    const isRange = type === 'range';
    const plaintext = this.plaintext();
    const sizing = this.sizing();
    const valid = this.valid();

    return {
      'form-control': !isRange && !plaintext,
      'form-control-plaintext': !isRange && plaintext,
      'form-control-color': type === 'color',
      'form-range': isRange,
      [`form-control-${sizing}`]: !!sizing && !isRange,
      'is-valid': valid === true,
      'is-invalid': valid === false
    } as Record<string, boolean>;
  });

  get hostTag(): string {
    return this.#hostElement.nativeElement.tagName;
  }

  ngOnInit(): void {
    const hostTag = this.hostTag.toLowerCase();
    if (hostTag !== 'input' && hostTag !== 'textarea') {
      console.warn(`CoreUI [cFormControl] works with '<input>' and '<textarea>' - not with '<${hostTag}>'`);
    }
  }
}
