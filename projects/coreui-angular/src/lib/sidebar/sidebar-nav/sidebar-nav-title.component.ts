import { Component, effect, ElementRef, inject, input, Renderer2 } from '@angular/core';
import { INavData } from './sidebar-nav';

@Component({
  selector: 'c-sidebar-nav-title',
  template: ''
})
export class SidebarNavTitleComponent {
  readonly #elementRef = inject(ElementRef);
  readonly #renderer = inject(Renderer2);

  readonly item = input<INavData>();

  readonly #itemEffect = effect(() => {
    const item = this.item();
    if (item?.name) {
      const nativeElement: HTMLElement = this.#elementRef.nativeElement;
      const name = this.#renderer.createText(item.name);

      if (item?.class) {
        const classes = item.class;
        this.#renderer.addClass(nativeElement, classes);
      }

      if (item?.wrapper) {
        const wrapper = this.#renderer.createElement(item.wrapper.element);
        this.addAttribs(item.wrapper.attributes, wrapper);
        this.#renderer.appendChild(wrapper, name);
        this.#renderer.appendChild(nativeElement, wrapper);
      } else {
        this.#renderer.appendChild(nativeElement, name);
      }
    }
  });

  private addAttribs(attribs: { [x: string]: any }, element: HTMLElement): void {
    if (attribs) {
      for (const attr in attribs) {
        if (attr === 'style' && typeof attribs[attr] === 'object') {
          this.setStyle(attribs[attr], element);
        } else if (attr === 'class') {
          this.addClass(attribs[attr], element);
        } else {
          this.setAttrib(attr, attribs[attr], element);
        }
      }
    }
  }

  private setStyle(styles: { [x: string]: any }, el: any): void {
    for (const style in styles) {
      if (style) {
        this.#renderer.setStyle(el, style, styles[style]);
      }
    }
  }

  private addClass(classes: string | string[], el: any): void {
    const classArray = Array.isArray(classes) ? classes : classes.split(' ');
    classArray
      .filter((element) => element.length > 0)
      .forEach((element) => {
        this.#renderer.addClass(el, element);
      });
  }

  private setAttrib(key: string, value: string, el: any): void {
    this.#renderer.setAttribute(el, key, value);
  }
}
