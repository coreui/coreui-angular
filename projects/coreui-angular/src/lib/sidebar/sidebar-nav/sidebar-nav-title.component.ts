import { Component, computed, effect, ElementRef, inject, input, Renderer2 } from '@angular/core';
import { setHtmlAttributes } from '../../shared/html-attr.utils';
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
        setHtmlAttributes(this.#renderer, wrapper, item.wrapper.attributes);
        this.#renderer.appendChild(wrapper, name);
        this.#renderer.appendChild(nativeElement, wrapper);
      } else {
        this.#renderer.appendChild(nativeElement, name);
      }
    }
  });
}
