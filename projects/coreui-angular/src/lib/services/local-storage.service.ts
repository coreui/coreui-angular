import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { inject, Injectable, PLATFORM_ID } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { InMemoryStorageService } from './in-memory-storage.service';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  private platformId = inject(PLATFORM_ID);
  private document = inject(DOCUMENT);

  constructor() {
    this.#localStorage =
      isPlatformBrowser(this.platformId) && this.document.defaultView
        ? this.document.defaultView?.localStorage
        : new InMemoryStorageService();
  }

  #localStorage: Storage;
  readonly #data$ = new BehaviorSubject<{ key: string; data: any } | null>(null);
  public readonly data$ = this.#data$.asObservable();

  public setItem(key: string, data: any): void {
    this.#localStorage.setItem(key, JSON.stringify(data));
    this.#data$.next({ key, data });
  }

  public getItem(key: string): any {
    const data = JSON.parse(this.#localStorage.getItem(key) || 'null');
    this.#data$.next({ key, data });
    return data;
  }

  public removeItem(key: string): void {
    this.#localStorage.removeItem(key);
    this.#data$.next({ key, data: null });
  }

  public clear() {
    this.#localStorage.clear();
    this.#data$.next(null);
  }
}
