import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface ISidebarAction {
  minimize?: boolean | 'toggle';
}

@Injectable({
  providedIn: 'root'
})
export class AppSidebarService {

  private events = new BehaviorSubject<ISidebarAction>({});
  events$ = this.events.asObservable();

  constructor() {}

  toggle(action: ISidebarAction) {
    this.events.next(action);
  }
}
