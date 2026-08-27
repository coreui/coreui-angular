import { Directive, effect, ElementRef, inject, input, Renderer2 } from '@angular/core';

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
      const attribs = this.cHtmlAttr();
      for (const attr in attribs) {
        if (attr === 'style' && typeof attribs[attr] === 'object') {
          this.setStyle(attribs[attr]);
        } else if (attr === 'class') {
          this.addClass(attribs[attr]);
        } else {
          this.setAttrib(attr, attribs[attr]);
        }
      }
    });
  }

  private setStyle(styles: Record<string, any>): void {
    for (const style in styles) {
      if (style) {
        this.#renderer.setStyle(this.#elementRef.nativeElement, style, styles[style]);
      }
    }
  }

  private addClass(classes: string | string[]): void {
    const classArray = Array.isArray(classes) ? classes : classes.split(' ');
    classArray
      .filter((element) => element.length > 0)
      .forEach((element) => {
        this.#renderer.addClass(this.#elementRef.nativeElement, element);
      });
  }

  private setAttrib(key: string, value: string | null): void {
    value !== null
      ? this.#renderer.setAttribute(this.#elementRef.nativeElement, key, value)
      : this.#renderer.removeAttribute(this.#elementRef.nativeElement, key);
  }
}
