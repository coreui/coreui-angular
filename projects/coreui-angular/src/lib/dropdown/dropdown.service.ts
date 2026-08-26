import { Injectable, signal } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { DropdownAlignment } from '../coreui.types';

export interface IDropdownState {
  visible?: boolean | 'toggle';
  dropdown?: any;
}

@Injectable({
  providedIn: 'root'
})
export class DropdownService {
  readonly #dropdownState = new BehaviorSubject<any>({});
  readonly dropdownState$ = this.#dropdownState.asObservable();

  readonly alignment = signal<DropdownAlignment | undefined>(undefined);

  toggle(state: IDropdownState): void {
    this.#dropdownState.next(state);
  }
}
