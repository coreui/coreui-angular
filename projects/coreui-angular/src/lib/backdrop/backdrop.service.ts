import { DOCUMENT, inject, Injectable } from '@angular/core';

import { Subject } from 'rxjs';

import { afterTransitions } from '../shared/transition.utils';

interface Backdrop {
  type: string;
  element: HTMLDivElement;
  users: number;
  shown?: boolean;
  fading?: object;
}

@Injectable({
  providedIn: 'root'
})
export class BackdropService {
  readonly #backdropClick = new Subject<boolean>();
  readonly backdropClick$ = this.#backdropClick.asObservable();

  readonly #document = inject(DOCUMENT);

  activeBackdrop: any;

  readonly #backdrops = new Map<string, Backdrop>();
  readonly #clickHandler = () => this.onClickHandler();

  get #scrollbarWidth() {
    // https://developer.mozilla.org/en-US/docs/Web/API/Window/innerWidth#usage_notes
    const documentWidth = this.#document.documentElement.clientWidth;
    const scrollbarWidth = Math.abs((this.#document.defaultView?.innerWidth ?? documentWidth) - documentWidth);
    return `${scrollbarWidth}px`;
  }

  scrollbarWidth = this.#scrollbarWidth;

  /**
   * Returns the backdrop element of a type, shared by everyone who sets it; a fading backdrop of the type comes back.
   * Pair every call with `clearBackdrop()`.
   * @param type the backdrop type, rendered as the `<type>-backdrop` class
   * @param fade fade the backdrop in and out, as the latest call asks; without it the backdrop shows at once and goes once released (since 5.7.38)
   * @returns the backdrop element
   */
  setBackdrop(type: string = 'modal', fade: boolean = true): HTMLDivElement {
    const existing = this.#backdrops.get(type);
    const backdrop = existing?.element.isConnected ? existing : this.#createBackdrop(type);
    const fading = backdrop.fading;
    backdrop.users++;
    backdrop.element.classList.toggle('fade', fade);
    if (fading) {
      backdrop.fading = undefined;
      backdrop.element.addEventListener('click', this.#clickHandler);
    }
    if ((fading && backdrop.shown) || !fade) {
      this.#show(backdrop);
    }
    this.activeBackdrop = backdrop.element;
    return backdrop.element;
  }

  /**
   * Releases one use of a backdrop; the last release fades it out and removes it once its transition ends.
   * A backdrop set again before its fade starts (a microtask after the last release) comes back without fading.
   * Does nothing for an element the service does not hold in use.
   * @param backdropElement the element `setBackdrop()` returned
   * @returns `undefined`, to clear the caller's reference
   */
  clearBackdrop(backdropElement: HTMLElement): any {
    const backdrop = [...this.#backdrops.values()].find(({ element }) => element === backdropElement);
    if (backdrop?.users && --backdrop.users === 0) {
      this.#fadeOut(backdrop);
    }
    return undefined;
  }

  #createBackdrop(type: string): Backdrop {
    const element = this.#document.createElement('div');
    const backdrop: Backdrop = { type, element, users: 0 };
    element.classList.add(`${type}-backdrop`);
    this.#document.body.appendChild(element);
    element.addEventListener('click', this.#clickHandler);
    this.#backdrops.set(type, backdrop);
    setTimeout(() => {
      if (backdrop.users && !backdrop.fading) {
        this.#show(backdrop);
      }
    });
    return backdrop;
  }

  #show(backdrop: Backdrop): void {
    backdrop.element.classList.add('show');
    backdrop.shown = true;
  }

  #fadeOut(backdrop: Backdrop): void {
    const fading = {};
    backdrop.fading = fading;
    backdrop.element.removeEventListener('click', this.#clickHandler);
    queueMicrotask(() => {
      if (backdrop.fading !== fading) {
        return;
      }
      backdrop.element.classList.remove('show');
      afterTransitions(backdrop.element).then(() => {
        if (backdrop.fading !== fading) {
          return;
        }
        if (this.#backdrops.get(backdrop.type) === backdrop) {
          this.#backdrops.delete(backdrop.type);
        }
        backdrop.element.remove();
        if (this.activeBackdrop === backdrop.element) {
          this.activeBackdrop = undefined;
        }
      });
    });
  }

  get #isRTL() {
    return [this.#document.documentElement.dir, this.#document.body.dir].includes('rtl');
  }

  get #padding() {
    return `padding-${this.#isRTL ? 'left' : 'right'}`;
  }

  readonly #scrollLockOwners = new Set<object>();
  #lockedPadding = '';

  /**
   * Locks page scrolling for an owner: hides the body overflow and pads the body by the scrollbar width.
   * The lock stays while any owner holds it; locking twice for the same owner counts once.
   * @since 5.7.38
   * @param owner the component or object holding the lock
   */
  lockScroll(owner: object): void {
    if (this.#scrollLockOwners.has(owner)) {
      return;
    }
    this.#scrollLockOwners.add(owner);
    if (this.#scrollLockOwners.size === 1) {
      this.scrollbarWidth = this.#scrollbarWidth;
      this.#lockedPadding = this.#padding;
      this.#document.body.style.setProperty('overflow', 'hidden');
      this.#document.body.style.setProperty(this.#lockedPadding, this.scrollbarWidth);
    }
  }

  /**
   * Releases the scroll lock of an owner; once the last owner releases it, the overflow and the padding property the lock set
   * are removed (a page's own inline padding on that side, overwritten by the lock, is not restored).
   * Does nothing for an owner that holds no lock.
   * @since 5.7.38
   * @param owner the component or object that locked scrolling
   */
  unlockScroll(owner: object): void {
    if (this.#scrollLockOwners.delete(owner) && this.#scrollLockOwners.size === 0) {
      this.#document.body.style.removeProperty('overflow');
      this.#document.body.style.removeProperty(this.#lockedPadding);
    }
  }

  /**
   * Locks page scrolling on behalf of the service itself.
   * @deprecated 5.7.38. Use `lockScroll(owner)` instead.
   */
  hideScrollbar(): void {
    this.lockScroll(this);
  }

  /**
   * Releases the lock taken by `hideScrollbar()`; locks of other owners stay.
   * @deprecated 5.7.38. Use `unlockScroll(owner)` instead.
   */
  resetScrollbar(): void {
    this.unlockScroll(this);
  }

  onClickHandler(): void {
    this.#backdropClick.next(true);
  }
}
