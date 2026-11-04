import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { TToasterPlacement } from './toaster.component';
import { type ToastComponent } from '../toast/toast.component';

export interface IToasterAction {
  placement?: TToasterPlacement;
  toast?: ToastComponent;
  show?: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class ToasterService {
  readonly #toasterState = new Subject<IToasterAction>();
  readonly toasterState$ = this.#toasterState.asObservable();

  setState(state: IToasterAction): void {
    this.#toasterState.next({ ...state });
  }
}
