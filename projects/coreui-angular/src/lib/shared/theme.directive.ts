import { booleanAttribute, Directive, ElementRef, inject, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[cTheme]',
  standalone: true
})
export class ThemeDirective {

  readonly #hostElement = inject(ElementRef);
  readonly #renderer = inject(Renderer2);

  /**
   * Add dark theme attribute.
   * @type 'dark' | 'light' | undefined
   */
  @Input() set colorScheme(scheme: 'dark' | 'light' | undefined) {
    !!scheme ? this.setTheme(scheme) : this.unsetTheme();
  };

  /**
   * Add dark theme attribute.
   * @type boolean
   */
  @Input({ transform: booleanAttribute })
  set dark(darkTheme: boolean) {
    darkTheme ? this.setTheme('dark') : this.unsetTheme();
  };

  setTheme(theme?: string): void {
    if (theme) {
      this.#renderer.setAttribute(this.#hostElement.nativeElement, 'data-coreui-theme', theme);
    }
  }

  unsetTheme(): void {
    this.#renderer.removeAttribute(this.#hostElement.nativeElement, 'data-coreui-theme');
  }

}
