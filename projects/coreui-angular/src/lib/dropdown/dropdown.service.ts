import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

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

  toggle(state: IDropdownState): void {
    this.#dropdownState.next(state);
  }
}
