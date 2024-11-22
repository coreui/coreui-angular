import { afterNextRender, Directive, ElementRef, HostListener, inject, input, Renderer2 } from '@angular/core';
import { CollapseDirective } from '../../collapse';

@Directive({
  selector: '[cNavbarToggler]',
  host: {
    '[attr.aria-label]': 'ariaLabel()',
    '[attr.type]': 'type()',
    class: 'navbar-toggler'
  }
})
export class NavbarTogglerDirective {
  readonly #renderer = inject(Renderer2);
  readonly #hostElement = inject(ElementRef);

  constructor() {
    afterNextRender({
      read: () => {
        const hasContent = this.#hostElement.nativeElement.childNodes.length as boolean;
        if (!hasContent) {
          this.addDefaultIcon();
        }
      }
    });
  }

  /**
   * Reference to navbar collapse element (via # template variable) . [docs]
   * @type string
   * @default 'button'
   */
  readonly collapseRef = input<CollapseDirective | undefined>(undefined, { alias: 'cNavbarToggler' });

  /**
   * Default type for navbar-toggler. [docs]
   * @type string
   * @default 'button'
   */
  readonly type = input('button');

  /**
   * Default aria-label attr for navbar-toggler. [docs]
   * @type string
   * @default 'Toggle navigation'
   */
  readonly ariaLabel = input('Toggle navigation');

  @HostListener('click', ['$event'])
  handleClick() {
    const collapseRef = this.collapseRef();
    collapseRef?.toggle(!collapseRef?.visible());
  }

  addDefaultIcon(): void {
    const span = this.#renderer.createElement('span');
    this.#renderer.addClass(span, 'navbar-toggler-icon');
    this.#renderer.appendChild(this.#hostElement.nativeElement, span);
  }
}
