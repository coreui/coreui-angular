import {
  booleanAttribute,
  computed,
  Directive,
  effect,
  ElementRef,
  inject,
  input,
  linkedSignal,
  Renderer2
} from '@angular/core';
import { BooleanInput } from '@angular/cdk/coercion';

@Directive({
  selector: 'input[cFormCheckInput]',
  host: {
    class: 'form-check-input',
    '[class]': 'hostClasses()',
    '[attr.type]': 'type()'
  }
})
export class FormCheckInputDirective {
  static ngAcceptInputType_indeterminate: BooleanInput;

  readonly #renderer = inject(Renderer2);
  readonly #hostElement = inject(ElementRef);

  /**
   * Specifies the type of component.
   * @default 'checkbox'
   */
  readonly type = input<'checkbox' | 'radio'>('checkbox');

  /**
   * Set component indeterminate state.
   * @default false
   */
  readonly indeterminateInput = input(false, { transform: booleanAttribute, alias: 'indeterminate' });

  readonly #indeterminate = linkedSignal(this.indeterminateInput);

  readonly #indeterminateEffect = effect(() => {
    if (this.type() === 'checkbox') {
      const indeterminate = this.#indeterminate();
      const htmlInputElement = this.#hostElement.nativeElement as HTMLInputElement;
      if (indeterminate) {
        this.#renderer.setProperty(htmlInputElement, 'checked', false);
      }
      this.#renderer.setProperty(htmlInputElement, 'indeterminate', indeterminate);
    }
  });

  get indeterminate() {
    return this.#indeterminate();
  }

  /**
   * Set component validation state to valid.
   * @default undefined
   */
  readonly valid = input<boolean>();

  readonly hostClasses = computed(() => {
    const valid = this.valid();
    return {
      'form-check-input': true,
      'is-valid': valid === true,
      'is-invalid': valid === false
    } as Record<string, boolean>;
  });

  get checked(): boolean {
    return this.#hostElement?.nativeElement?.checked;
  }
}
