import { AfterContentInit, Directive, ElementRef, inject, input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[cHeaderToggler]',
  exportAs: 'cHeaderToggler',
  host: {
    '[attr.type]': 'type()',
    '[attr.aria-label]': 'ariaLabel()',
    class: 'header-toggler'
  }
})
export class HeaderTogglerDirective implements AfterContentInit {
  readonly #renderer = inject(Renderer2);
  readonly #hostElement = inject(ElementRef);

  /**
   * Default type for header-toggler button. [docs]
   * @return string
   * @default 'button'
   */
  readonly type = input('button');

  /**
   * Default aria-label attr for header-toggler. [docs]
   * @type string
   * @default 'Toggle navigation'
   */
  readonly ariaLabel = input('Toggle navigation');

  addDefaultIcon(): void {
    const span = this.#renderer.createElement('span');
    this.#renderer.addClass(span, 'header-toggler-icon');
    this.#renderer.appendChild(this.#hostElement.nativeElement, span);
  }

  ngAfterContentInit(): void {
    const hasContent = this.#hostElement.nativeElement.childNodes.length > 0;
    if (!hasContent) {
      this.addDefaultIcon();
    }
  }
}
