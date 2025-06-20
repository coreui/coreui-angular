import { DOCUMENT, inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RtlService {
  readonly #document = inject(DOCUMENT);

  isRTL(element?: HTMLElement | null): boolean {
    if (element) {
      return element.closest('[dir="rtl"]') !== null;
    }

    return this.#document?.documentElement?.dir === 'rtl' || this.#document?.body?.dir === 'rtl';
  }
}
