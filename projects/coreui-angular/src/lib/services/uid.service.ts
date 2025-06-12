import { DOCUMENT, inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UIDService {
  readonly #document = inject(DOCUMENT);

  getUID(prefix: string = 'random-id'): string {
    let uid = prefix;
    do {
      uid = `${prefix}-${Math.floor(Math.random() * 1000000).toString(10)}`;
    } while (this.#document.getElementById(uid));

    return uid;
  }
}
