import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface IDropdownState {
  visible?: boolean | 'toggle';
  dropdown?: any;
}

@Injectable()
export class DropdownService {

  private dropdownState = new BehaviorSubject<any>({});
  dropdownState$ = this.dropdownState.asObservable();

  constructor() {
  }

  toggle(state: IDropdownState): void {
    this.dropdownState.next(state);
  }
}
