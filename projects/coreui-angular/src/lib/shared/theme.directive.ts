import { booleanAttribute, Directive, effect, ElementRef, inject, input, Renderer2, untracked } from '@angular/core';

@Directive({
  selector: '[cTheme]',
  exportAs: 'cTheme'
})
export class ThemeDirective {
  readonly #hostElement = inject(ElementRef);
  readonly #renderer = inject(Renderer2);

  /**
   * Sets the dark theme attribute on the host element. 
   * @returns 'dark' | 'light'
   */
  readonly colorScheme = input<'dark' | 'light'>();

  readonly #colorSchemeChange = effect(() => {
    const colorScheme = this.colorScheme();
    colorScheme ? this.setTheme(colorScheme) : this.unsetTheme();
  });

  /**
   * Sets a darker color scheme. If the colorScheme is set to 'dark', the dark theme will be applied.
   * @returns boolean
   * @default false
   */
  readonly dark = input(false, { transform: booleanAttribute });

  readonly #darkChange = effect(() => {
    const darkTheme = this.dark() || untracked(this.colorScheme) === 'dark';
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
