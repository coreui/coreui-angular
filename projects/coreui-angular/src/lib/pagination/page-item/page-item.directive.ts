import {
  booleanAttribute,
  computed,
  contentChild,
  Directive,
  effect,
  ElementRef,
  inject,
  input,
  Renderer2
} from '@angular/core';
import { BooleanInput } from '@angular/cdk/coercion';

import { PageLinkDirective } from '../page-link/page-link.directive';

@Directive({
  selector: '[cPageItem]',
  host: {
    class: 'page-item',
    '[class]': 'hostClasses()',
    '[attr.aria-current]': 'ariaCurrent()'
  }
})
export class PageItemDirective {
  static ngAcceptInputType_disabled: BooleanInput;

  readonly #renderer = inject(Renderer2);

  /**
   * Toggle the active state for the component.
   * @return boolean
   */
  readonly active = input<boolean>();

  /**
   * Toggle the disabled state for the component.
   * @return boolean
   */
  readonly disabled = input(false, { transform: booleanAttribute });

  readonly ariaCurrent = computed(() => {
    return this.active() ? 'page' : null;
  });

  readonly hostClasses = computed(() => {
    return {
      'page-item': true,
      disabled: this.disabled(),
      active: this.active()
    } as Record<string, boolean>;
  });

  readonly pageLinkElementRef = contentChild(PageLinkDirective, { read: ElementRef });

  readonly pageLinkElementRefEffect = effect(() => {
    const pageLinkElementRef = this.pageLinkElementRef();
    const disabled = this.disabled();
    if (!pageLinkElementRef) {
      return;
    }
    const pageLinkElement = pageLinkElementRef.nativeElement;

    if (disabled) {
      this.#renderer.setAttribute(pageLinkElement, 'aria-disabled', 'true');
      this.#renderer.setAttribute(pageLinkElement, 'tabindex', '-1');
    } else {
      this.#renderer.removeAttribute(pageLinkElement, 'aria-disabled');
      this.#renderer.removeAttribute(pageLinkElement, 'tabindex');
    }
  });
}
