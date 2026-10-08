import { booleanAttribute, Directive, effect, ElementRef, inject, input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[cTheme]',
  exportAs: 'cTheme'
})
export class ThemeDirective {
  readonly #hostElement = inject(ElementRef);
  readonly #renderer = inject(Renderer2);

  /**
   * Sets the `data-coreui-theme` attribute on the host element. Overridden by `dark`.
   * @returns 'dark' | 'light'
   */
  readonly colorScheme = input<'dark' | 'light'>();

  /**
   * Applies the dark color scheme, regardless of `colorScheme`.
   * @returns boolean
   * @default false
   */
  readonly dark = input(false, { transform: booleanAttribute });

  readonly #themeChange = effect(() => {
    const theme = this.dark() ? 'dark' : this.colorScheme();
    theme ? this.setTheme(theme) : this.unsetTheme();
  });

  setTheme(theme?: string): void {
    if (theme) {
      this.#renderer.setAttribute(this.#hostElement.nativeElement, 'data-coreui-theme', theme);
    }
  }

  unsetTheme(): void {
    this.#renderer.removeAttribute(this.#hostElement.nativeElement, 'data-coreui-theme');
  }
}
