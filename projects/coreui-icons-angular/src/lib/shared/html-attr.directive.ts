import { Directive, effect, ElementRef, HostAttributeToken, inject, input, Renderer2 } from '@angular/core';

import { HtmlAttributeNames, htmlAttributeNames, removeHtmlAttributes, setHtmlAttributes } from './html-attr.utils';

@Directive({
  selector: '[cHtmlAttr]',
  exportAs: 'cHtmlAttr'
})
export class HtmlAttributesDirective {
  /**
   * A map of HTML attributes (including `class` and `style`) to set on the host element. A key left out of a new map,
   * or a `null` class or style, takes off what the map before set. The static classes, styles and attributes of the
   * template are not taken off, though a `style` string replaces the static style; a name that a binding also sets
   * (`[class]`, `[attr.*]`, `routerLinkActive`) is taken off with it.
   * @returns Record<string, any>
   */
  readonly cHtmlAttr = input<Record<string, any>>();

  readonly #renderer = inject(Renderer2);
  readonly #elementRef = inject(ElementRef);
  readonly #static: HtmlAttributeNames = {
    ...htmlAttributeNames({
      class: inject(new HostAttributeToken('class'), { optional: true }),
      style: inject(new HostAttributeToken('style'), { optional: true })
    }),
    attributes: Array.from(this.#elementRef.nativeElement.attributes ?? [], (attribute: Attr) => attribute.name)
  };

  #written?: HtmlAttributeNames;

  constructor() {
    effect(() => {
      const attributes = this.cHtmlAttr();
      const previous = this.#written;
      this.#written = htmlAttributeNames(attributes);
      removeHtmlAttributes(this.#renderer, this.#elementRef.nativeElement, previous, this.#written, this.#static);
      setHtmlAttributes(this.#renderer, this.#elementRef.nativeElement, attributes);
    });
  }
}
