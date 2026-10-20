import { APP_ID, DOCUMENT, inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UIDService {
  private static readonly counters = new Map<string, number>();
  readonly #appId = inject(APP_ID);
  readonly #document = inject(DOCUMENT);

  /**
   * Returns an id unique within the application, skipping ids already in the document.
   * Applications sharing a page need distinct `APP_ID`s, as Angular requires.
   * @param prefix id prefix
   * @returns `${prefix}-${count}`, or `${prefix}-${APP_ID}-${count}` when `APP_ID` is not `ng`
   */
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
