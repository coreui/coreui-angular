import { computed, Directive, DOCUMENT, effect, ElementRef, inject, input } from '@angular/core';
import { fromEvent } from 'rxjs';

@Directive({
  selector: '[cShadowOnScroll]',
  exportAs: 'cShadowOnScroll'
})
export class ShadowOnScrollDirective {
  readonly #document: Document = inject(DOCUMENT);
  readonly #elementRef: ElementRef<HTMLElement> = inject(ElementRef);

  /**
   * Shadow size applied to the host element once the document has been scrolled; `false`/`'none'` disables it.
   * @returns 'sm' | 'lg' | 'none' | boolean
   * @default true
   */
  readonly cShadowOnScroll = input<'sm' | 'lg' | 'none' | boolean>(true);

  readonly #shadowClass = computed(() => {
    const value = this.cShadowOnScroll();
    if (!value || value === 'none') {
      return undefined;
    }
    return value === true ? 'shadow' : `shadow-${value}`;
  });

  readonly #shadowOnScrollEffect = effect((onCleanup) => {
    const shadowClass = this.#shadowClass();
    if (!shadowClass) {
      return;
    }
    const host = this.#elementRef.nativeElement;
    const toggleShadow = () => host.classList.toggle(shadowClass, this.#document.documentElement.scrollTop > 0);
    toggleShadow();
    const subscription = fromEvent(this.#document, 'scroll').subscribe(toggleShadow);
    onCleanup(() => {
      subscription.unsubscribe();
      host.classList.remove(shadowClass);
    });
  });
}
