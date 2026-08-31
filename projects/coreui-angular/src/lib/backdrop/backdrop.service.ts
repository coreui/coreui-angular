import { DOCUMENT, inject, Injectable } from '@angular/core';

import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BackdropService {
  readonly #backdropClick = new Subject<boolean>();
  readonly backdropClick$ = this.#backdropClick.asObservable();

  readonly #document = inject(DOCUMENT);

  activeBackdrop: any;

  #clearBackdropId?: ReturnType<typeof setTimeout>;
  #pendingBackdrop?: HTMLElement;

  get #scrollbarWidth() {
    // https://developer.mozilla.org/en-US/docs/Web/API/Window/innerWidth#usage_notes
    const documentWidth = this.#document.documentElement.clientWidth;
    const scrollbarWidth = Math.abs((this.#document.defaultView?.innerWidth ?? documentWidth) - documentWidth);
    return `${scrollbarWidth}px`;
  }

  scrollbarWidth = this.#scrollbarWidth;

  setBackdrop(type: string = 'modal'): HTMLDivElement {
    this.#flushClearBackdrop();

    const backdropElement = this.#document.createElement('div');
    backdropElement.classList.add(`${type}-backdrop`);
    backdropElement.classList.add('fade');
    this.#document.body.appendChild(backdropElement);

    const clickHandler = () => {
      this.onClickHandler();
    };
    (backdropElement as any).__backdropClickHandler = clickHandler;
    backdropElement.addEventListener('click', clickHandler);

    this.scrollbarWidth = this.#scrollbarWidth;
    setTimeout(() => {
      backdropElement.classList.add('show');
      // this.hideScrollbar();
    });
    this.activeBackdrop = backdropElement;
    return backdropElement;
  }

  clearBackdrop(backdropElement: HTMLElement): any {
    if (backdropElement) {
      const storedHandler = (backdropElement as any).__backdropClickHandler;
      if (storedHandler) {
        backdropElement.removeEventListener('click', storedHandler);
        delete (backdropElement as any).__backdropClickHandler;
      }
      backdropElement.classList.remove('show');
      this.#flushClearBackdrop();
      this.#pendingBackdrop = backdropElement;
      this.#clearBackdropId = setTimeout(() => {
        this.#clearBackdropId = undefined;
        this.#pendingBackdrop = undefined;
        if (this.activeBackdrop === backdropElement) {
          this.resetScrollbar();
          this.activeBackdrop = undefined;
        }
        this.#removeBackdrop(backdropElement);
      }, 300);
    }
    return undefined;
  }

  #flushClearBackdrop(): void {
    if (this.#clearBackdropId === undefined) {
      return;
    }
    clearTimeout(this.#clearBackdropId);
    this.#clearBackdropId = undefined;
    const pending = this.#pendingBackdrop;
    this.#pendingBackdrop = undefined;
    if (pending) {
      this.#removeBackdrop(pending);
    }
  }

  #removeBackdrop(backdropElement: HTMLElement): void {
    if (backdropElement.parentElement === this.#document.body) {
      this.#document.body.removeChild(backdropElement);
    }
  }

  get #isRTL() {
    return [this.#document.documentElement.dir, this.#document.body.dir].includes('rtl');
  }

  get #padding() {
    return `padding-${this.#isRTL ? 'left' : 'right'}`;
  }

  #scrollBarVisible = true;

  hideScrollbar(): void {
    if (this.#scrollBarVisible) {
      this.#document.body.style.setProperty('overflow', 'hidden');
      this.#document.body.style.setProperty(this.#padding, this.scrollbarWidth);
      this.#scrollBarVisible = false;
    }
  }

  resetScrollbar(): void {
    this.#document.body.style.removeProperty('overflow');
    this.#document.body.style.removeProperty(this.#padding);
    this.#scrollBarVisible = true;
  }

  onClickHandler(): void {
    this.#backdropClick.next(true);
  }
}
