import { booleanAttribute, Directive, ElementRef, HostBinding, inject, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: 'input[cFormCheckInput]',
  host: { class: 'form-check-input' }
})
export class FormCheckInputDirective {
  readonly #renderer = inject(Renderer2);
  readonly #hostElement = inject(ElementRef);

  /**
   * Specifies the type of component.
   * @type {'checkbox' | 'radio'}
   * @default 'checkbox'
   */
  @HostBinding('attr.type')
  @Input()
  type: 'checkbox' | 'radio' = 'checkbox';

  /**
   * Set component indeterminate state.
   * @type boolean
   * @default false
   */
  @Input({ transform: booleanAttribute })
  set indeterminate(value: boolean) {
    const indeterminate = value;
    if (this._indeterminate !== indeterminate) {
      this._indeterminate = indeterminate;
      const htmlInputElement = this.#hostElement.nativeElement as HTMLInputElement;
      if (indeterminate) {
        this.#renderer.setProperty(htmlInputElement, 'checked', false);
      }
      this.#renderer.setProperty(htmlInputElement, 'indeterminate', indeterminate);
    }
  }

  get indeterminate() {
    return this._indeterminate;
  }

  private _indeterminate = false;

  /**
   * Set component validation state to valid.
   * @type boolean
   * @default undefined
   */
  @Input() valid?: boolean;

  @HostBinding('class')
  get hostClasses(): any {
    return {
      'form-check-input': true,
      'is-valid': this.valid === true,
      'is-invalid': this.valid === false
    };
  }

  @Input({ transform: booleanAttribute })
  set checked(value: boolean) {
    const checked = value;
    const htmlInputElement = this.#hostElement?.nativeElement as HTMLInputElement;
    if (htmlInputElement) {
      this.#renderer.setProperty(htmlInputElement, 'checked', checked);
    }
  }

  get checked(): boolean {
    return this.#hostElement?.nativeElement?.checked;
  }
}
