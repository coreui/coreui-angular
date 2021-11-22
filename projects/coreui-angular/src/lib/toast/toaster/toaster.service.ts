import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { TToasterPlacement } from './toaster.component';
import { ToastComponent } from '../toast/toast.component';

export interface IToasterAction {
  placement?: TToasterPlacement;
  toast?: ToastComponent;
  show?: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class ToasterService {

  private toasterState = new BehaviorSubject<IToasterAction>({});
  toasterState$ = this.toasterState.asObservable();

  constructor() {}

  setState(state: IToasterAction): void {
    this.toasterState.next({ ...state });
  }
}
