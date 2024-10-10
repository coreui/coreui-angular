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
  readonly #toasterState = new BehaviorSubject<IToasterAction>({});
  readonly toasterState$ = this.#toasterState.asObservable();

  setState(state: IToasterAction): void {
    this.#toasterState.next({ ...state });
  }
}
