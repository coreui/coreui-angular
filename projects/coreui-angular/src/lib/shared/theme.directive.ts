import { booleanAttribute, Directive, effect, ElementRef, inject, input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[cTheme]',
  exportAs: 'cTheme'
})
export class ThemeDirective {
  readonly #hostElement = inject(ElementRef);
  readonly #renderer = inject(Renderer2);

  /**
   * Add dark theme attribute.
   * @return 'dark' | 'light' | undefined
   */
  readonly colorScheme = input<'dark' | 'light'>();

  readonly #colorSchemeChange = effect(() => {
    const colorScheme = this.colorScheme();
    colorScheme ? this.setTheme(colorScheme) : this.unsetTheme();
  });

  readonly dark = input(false, { transform: booleanAttribute });

  readonly #darkChange = effect(() => {
    const darkTheme = this.dark();
    darkTheme ? this.setTheme('dark') : this.unsetTheme();
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
