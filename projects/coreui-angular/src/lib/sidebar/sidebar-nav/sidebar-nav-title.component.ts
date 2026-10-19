import { Component, computed, effect, ElementRef, inject, input, Renderer2 } from '@angular/core';
import { INavData } from './sidebar-nav';
import { classMap } from './sidebar-nav.utils';

@Component({
  selector: 'c-sidebar-nav-title',
  template: '',
  host: {
    '[class]': 'itemClass()'
  }
})
export class SidebarNavTitleComponent {
  readonly #elementRef = inject(ElementRef);
  readonly #renderer = inject(Renderer2);

  /**
   * The nav data item rendered as a sidebar nav title.
   * @returns INavData
   */
  readonly item = input<INavData>();

  readonly itemClass = computed(() => ({
    'nav-title': true,
    ...classMap(this.item()?.class)
  }));

  readonly #itemEffect = effect(() => {
    const item = this.item();
    const nativeElement: HTMLElement = this.#elementRef.nativeElement;
    for (const child of [...nativeElement.childNodes]) {
      this.#renderer.removeChild(nativeElement, child);
    }
    if (item?.name) {
      const name = this.#renderer.createText(item.name);

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
