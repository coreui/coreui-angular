import {
  booleanAttribute,
  computed,
  Directive,
  effect,
  ElementRef,
  inject,
  input,
  Renderer2,
  signal,
  untracked
} from '@angular/core';

@Directive({
  selector: 'input[cFormCheckInput]',
  host: {
    class: 'form-check-input',
    '[class]': 'hostClasses()',
    '[attr.type]': 'type()'
  }
})
export class FormCheckInputDirective {
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

  readonly #indeterminateEffect = effect(() => {
    const indeterminate = this.indeterminateInput();
    if (untracked(this.#indeterminate) !== indeterminate) {
      const htmlInputElement = this.#hostElement.nativeElement as HTMLInputElement;
      if (indeterminate) {
        this.#renderer.setProperty(htmlInputElement, 'checked', false);
      }
      this.#renderer.setProperty(htmlInputElement, 'indeterminate', indeterminate);
      this.#indeterminate.set(indeterminate);
    }
  });

  get indeterminate() {
    return this.#indeterminate();
  }

  readonly #indeterminate = signal(false);

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

  /**
   * Set component checked state.
   * @default false
   */
  readonly checkedInput = input(false, { transform: booleanAttribute, alias: 'checked' });

  readonly #checkedEffect = effect(() => {
    const checked = this.checkedInput();
    const htmlInputElement = this.#hostElement?.nativeElement as HTMLInputElement;
    if (htmlInputElement) {
      this.#renderer.setProperty(htmlInputElement, 'checked', checked);
    }
  });

  get checked(): boolean {
    return this.#hostElement?.nativeElement?.checked;
  }
}
