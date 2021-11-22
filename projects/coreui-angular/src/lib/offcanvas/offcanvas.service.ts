import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { OffcanvasComponent } from './offcanvas/offcanvas.component';

export interface IOffcanvasAction {
  show?: boolean | 'toggle';
  offcanvas?: OffcanvasComponent;
  id?: string;
}

@Injectable({
  providedIn: 'root'
})
export class OffcanvasService {

  private offcanvasState = new Subject<any>();
  offcanvasState$ = this.offcanvasState.asObservable();

  constructor() { }

  toggle(action: IOffcanvasAction): void {
    this.offcanvasState.next(action);
  }
}
