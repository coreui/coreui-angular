import { APP_ID, DOCUMENT, inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UIDService {
  private static readonly counters = new Map<string, number>();
  readonly #appId = inject(APP_ID);
  readonly #document = inject(DOCUMENT);

  getUID(prefix: string = 'random-id'): string {
    const key = this.#appId === 'ng' ? prefix : `${prefix}-${this.#appId}`;
    let uid: string;
    do {
      const count = (UIDService.counters.get(key) ?? 0) + 1;
      UIDService.counters.set(key, count);
      uid = `${key}-${count}`;
    } while (this.#document.getElementById(uid));

    return uid;
  }
}
