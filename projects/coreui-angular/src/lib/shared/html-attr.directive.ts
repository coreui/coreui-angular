import { Directive, effect, ElementRef, inject, input, Renderer2 } from '@angular/core';

import { setHtmlAttributes } from './html-attr.utils';

@Directive({
  selector: '[cHtmlAttr]',
  exportAs: 'cHtmlAttr'
})
export class HtmlAttributesDirective {
  /**
   * A map of HTML attributes (including `class` and `style`) to set on the host element.
   * @returns Record<string, any>
   */
  readonly cHtmlAttr = input<Record<string, any>>();

  readonly #renderer = inject(Renderer2);
  readonly #elementRef = inject(ElementRef);

  constructor() {
    effect(() => {
      setHtmlAttributes(this.#renderer, this.#elementRef.nativeElement, this.cHtmlAttr());
    });
  }
}
