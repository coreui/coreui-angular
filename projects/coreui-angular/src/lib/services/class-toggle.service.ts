import { DOCUMENT, inject, Injectable, Renderer2, RendererFactory2 } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClassToggleService {
  readonly #document = inject<Document>(DOCUMENT);
  readonly #rendererFactory = inject(RendererFactory2);

  #renderer: Renderer2;

  constructor() {
    this.#renderer = this.#rendererFactory.createRenderer(null, null);
  }

  toggle(selector: any, className: string) {
    const element = this.#document.querySelector(selector);
    if (element) {
      element.classList.contains(className)
        ? this.#renderer.removeClass(element, className)
        : this.#renderer.addClass(element, className);
    }
  }
}
