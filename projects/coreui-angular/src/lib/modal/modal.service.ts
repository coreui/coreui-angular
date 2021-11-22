import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { ModalComponent } from './modal/modal.component';

export interface IModalAction {
  show?: boolean | 'toggle';
  modal?: ModalComponent;
  id?: string;
}

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  private modalState = new Subject<any>();
  modalState$ = this.modalState.asObservable();

  constructor() {}

  toggle(action: IModalAction): void {
    this.modalState.next(action);
  }
}
