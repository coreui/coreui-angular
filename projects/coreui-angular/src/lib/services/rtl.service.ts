import { DOCUMENT, inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RtlService {
  readonly #document = inject(DOCUMENT);

  isRTL(element?: HTMLElement | null): boolean {
    if (element) {
      return (
        element.closest('[dir="rtl"]') !== null ||
        this.#document.defaultView?.getComputedStyle(element).direction === 'rtl'
      );
    }

    return [this.#document?.documentElement?.dir, this.#document?.body?.dir].includes('rtl');
  }
}
