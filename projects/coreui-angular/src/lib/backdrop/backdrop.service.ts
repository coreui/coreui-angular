import { inject, Injectable, RendererFactory2 } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BackdropService {

  readonly #backdropClick = new Subject<boolean>();
  readonly backdropClick$ = this.#backdropClick.asObservable();

  #document = inject(DOCUMENT);
  #rendererFactory = inject(RendererFactory2);
  #renderer = this.#rendererFactory.createRenderer(null, null);
  #unListen!: () => void;

  activeBackdrop: any;

  get #scrollbarWidth() {
    // https://developer.mozilla.org/en-US/docs/Web/API/Window/innerWidth#usage_notes
    const documentWidth = this.#document.documentElement.clientWidth;
    const scrollbarWidth = Math.abs((this.#document.defaultView?.innerWidth ?? documentWidth) - documentWidth);
    return `${scrollbarWidth}px`;
  }

  scrollbarWidth = this.#scrollbarWidth;

  setBackdrop(type: string = 'modal'): any {
    const backdropElement = this.#renderer.createElement('div');
    this.#renderer.addClass(backdropElement, `${type}-backdrop`);
    this.#renderer.addClass(backdropElement, 'fade');
    this.#renderer.appendChild(this.#document.body, backdropElement);
    this.#unListen = this.#renderer.listen(backdropElement, 'click', (e): void => {
      this.onClickHandler();
    });
    this.scrollbarWidth = this.#scrollbarWidth;
    setTimeout(() => {
      this.#renderer.addClass(backdropElement, 'show');
      // this.hideScrollbar();
    });
    this.activeBackdrop = backdropElement;
    return backdropElement;
  }

  clearBackdrop(backdropElement: any): any {
    if (backdropElement) {
      this.#unListen();
      this.#renderer.removeClass(backdropElement, 'show');
      setTimeout(() => {
        this.#renderer.removeChild(this.#document.body, backdropElement);
        if (this.activeBackdrop === backdropElement) {
          this.resetScrollbar();
        }
        backdropElement = undefined;
      }, 300);
    }
    return undefined;
  }

  get #isRTL() { return this.#document.documentElement.dir === 'rtl' || this.#document.body.dir === 'rtl'; }

  #scrollBarVisible = true;

  hideScrollbar(): void {
    if (this.#scrollBarVisible) {
      this.#renderer.setStyle(this.#document.body, 'overflow', 'hidden');
      this.#renderer.setStyle(this.#document.body, `padding-${this.#isRTL ? 'left' : 'right'}`, this.scrollbarWidth);
      this.#scrollBarVisible = false;
    }
  }

  resetScrollbar(): void {
    this.#renderer.removeStyle(this.#document.body, 'overflow');
    this.#renderer.removeStyle(this.#document.body, `padding-${this.#isRTL ? 'left' : 'right'}`);
    this.#scrollBarVisible = true;
  }

  onClickHandler(): void {
    this.#backdropClick.next(true);
  }
}
