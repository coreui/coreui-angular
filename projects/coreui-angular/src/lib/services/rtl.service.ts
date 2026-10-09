import { DOCUMENT, inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RtlService {
  readonly #document = inject(DOCUMENT);

  isRTL(element?: HTMLElement | null): boolean {
    if (element) {
      const direction = element.isConnected ? this.#document.defaultView?.getComputedStyle(element).direction : '';
      if (direction) {
        return direction === 'rtl';
      }
      const declared = element.closest('[dir="ltr"], [dir="rtl"]');
      if (declared) {
        return declared.matches('[dir="rtl"]');
      }
    }

    return [this.#document?.documentElement?.dir, this.#document?.body?.dir].includes('rtl');
  }
}
