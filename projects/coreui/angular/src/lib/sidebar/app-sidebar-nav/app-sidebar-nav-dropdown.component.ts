import {Component, Input} from '@angular/core';

import {SidebarNavHelper} from '../app-sidebar-nav.service';

@Component({
  selector: 'app-sidebar-nav-dropdown, cui-sidebar-nav-dropdown',
  template: `
    <a class="nav-link nav-dropdown-toggle"
       appNavDropdownToggle
       [appHtmlAttr]="item.attributes">
      <i *ngIf="helper.hasIcon(item)" [ngClass]="item | appSidebarNavIcon"></i>
      <ng-container>{{item.name}}</ng-container>
      <span *ngIf="helper.hasBadge(item)" [ngClass]="item | appSidebarNavBadge">{{ item.badge.text }}</span>
    </a>
    <app-sidebar-nav-items
      class="nav-dropdown-items"
      [items]="item.children">
    </app-sidebar-nav-items>
  `,
  styles: [
    '.nav-dropdown-toggle { cursor: pointer; }',
    '.nav-dropdown-items { display: block; }'
  ],
  providers: [ SidebarNavHelper ]
})
export class AppSidebarNavDropdownComponent {
  @Input() item: any;

  constructor(
    public helper: SidebarNavHelper
  ) { }
}
