import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { SidebarNavGroupComponent } from './sidebar-nav.component';

export interface ISidebarAction {
  open?: boolean;
  sidebarNavGroup?: SidebarNavGroupComponent;
}

@Injectable()
export class SidebarNavGroupService {

  constructor() { }

  private sidebarNavGroupState = new BehaviorSubject<ISidebarAction>({});
  sidebarNavGroupState$ = this.sidebarNavGroupState.asObservable();

  toggle(action: ISidebarAction): void {
    this.sidebarNavGroupState.next(action);
  }
}
