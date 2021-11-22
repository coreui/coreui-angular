import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import {SidebarComponent} from './sidebar/sidebar.component';

export interface ISidebarAction {
  unfoldable?: boolean | 'toggle';
  visible?: boolean | 'toggle';
  toggle?: 'visible' | 'unfoldable';
  narrow?: boolean;
  mobile?: boolean;
  sidebar?: SidebarComponent;
  id?: string;
}

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  private sidebarState = new BehaviorSubject<ISidebarAction>({});
  sidebarState$ = this.sidebarState.asObservable();

  constructor() {}

  toggle(action: ISidebarAction): void {
    this.sidebarState.next(action);
  }
}
