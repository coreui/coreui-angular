import { Inject, Injectable, Renderer2, RendererFactory2 } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class ClassToggleService {

  private renderer: Renderer2;

  constructor(
    @Inject(DOCUMENT) private document: any,
    private rendererFactory: RendererFactory2
  ) {
    this.renderer = rendererFactory.createRenderer(null, null);
  }

  toggle(selector: any, className: string) {
    const element = document.querySelector(selector);
    if (element) {
      element.classList.contains(className) ?
        this.renderer.removeClass(element, className) :
        this.renderer.addClass(element, className);
    }
  }
}
