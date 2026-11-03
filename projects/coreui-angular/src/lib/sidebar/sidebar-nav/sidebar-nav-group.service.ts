import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { SidebarNavGroupComponent } from './sidebar-nav.component';

export interface ISidebarAction {
  open?: boolean;
  sidebarNavGroup?: SidebarNavGroupComponent;
}

@Injectable()
export class SidebarNavGroupService {
  private sidebarNavGroupState = new Subject<ISidebarAction>();
  sidebarNavGroupState$ = this.sidebarNavGroupState.asObservable();

  toggle(action: ISidebarAction): void {
    this.sidebarNavGroupState.next(action);
  }
}
