import { Injectable } from '@angular/core';
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
  readonly #modalState = new Subject<any>();
  readonly modalState$ = this.#modalState.asObservable();
  readonly #opened = new Subject<{ modal: ModalComponent; focusFallback: (HTMLElement | null)[] }>();
  /** Emits once a modal has opened through `toggle()`; the other visible modals close on it. */
  readonly opened$ = this.#opened.asObservable();

  toggle(action: IModalAction): void {
    this.#modalState.next({ ...action, focusFallback: [...(action.focusFallback ?? [])] });
  }

  announceOpened(modal: ModalComponent, focusFallback: (HTMLElement | null)[]): void {
    this.#opened.next({ modal, focusFallback });
  }
}
