import { DOCUMENT, inject, Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { ModalComponent } from './modal/modal.component';

export interface IModalAction {
  show?: boolean | 'toggle';
  modal?: ModalComponent;
  focusFallback?: (HTMLElement | null)[];
  id?: string;
  trigger?: HTMLElement;
}

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  readonly #document = inject(DOCUMENT);
  readonly #modalState = new Subject<any>();
  readonly modalState$ = this.#modalState.asObservable();
  readonly #opened = new Subject<{ modal: ModalComponent; focusFallback: (HTMLElement | null)[] }>();
  /** Emits once a modal has opened through `toggle()`; the other visible modals close on it. */
  readonly opened$ = this.#opened.asObservable();
  readonly #openClassHolders = new Set<ModalComponent>();

  toggle(action: IModalAction): void {
    this.#modalState.next({ ...action, focusFallback: [...(action.focusFallback ?? [])] });
  }

  announceOpened(modal: ModalComponent, focusFallback: (HTMLElement | null)[]): void {
    this.#opened.next({ modal, focusFallback });
  }

  /**
   * Adds the `modal-open` class to the body on behalf of a modal; the class stays while any modal holds it.
   * @since 5.7.38
   * @param modal the open modal
   */
  addOpenClass(modal: ModalComponent): void {
    this.#openClassHolders.add(modal);
    this.#document.body.classList.add('modal-open');
  }

  /**
   * Releases the `modal-open` class held by a modal; the body loses it once no modal holds it.
   * Does nothing for a modal that holds no class.
   * @since 5.7.38
   * @param modal the modal that added the class
   */
  removeOpenClass(modal: ModalComponent): void {
    if (this.#openClassHolders.delete(modal) && this.#openClassHolders.size === 0) {
      this.#document.body.classList.remove('modal-open');
    }
  }
}
