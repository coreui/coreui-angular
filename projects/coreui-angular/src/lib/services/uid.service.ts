import { DOCUMENT, inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UIDService {
  readonly #document = inject(DOCUMENT);
  readonly #infix = Math.floor(Math.random() * 36 ** 5)
    .toString(36)
    .padStart(5, '0');
  readonly #counters = new Map<string, number>();

  /**
   * Returns an id no other call in this application returns, skipping ids already in the document.
   * The random infix, drawn once per application, keeps it apart from other applications and page ids.
   * @param prefix id prefix
   * @returns `${prefix}-${infix}-${count}`
   */
  getUID(prefix: string = 'random-id'): string {
    let uid: string;
    do {
      const count = (this.#counters.get(prefix) ?? 0) + 1;
      this.#counters.set(prefix, count);
      uid = `${prefix}-${this.#infix}-${count}`;
    } while (this.#document.getElementById(uid));

    return uid;
  }
}
