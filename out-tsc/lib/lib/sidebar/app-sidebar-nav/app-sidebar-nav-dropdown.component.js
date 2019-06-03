import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
import { SidebarNavHelper } from '../app-sidebar-nav.service';
let AppSidebarNavDropdownComponent = class AppSidebarNavDropdownComponent {
    constructor(helper) {
        this.helper = helper;
    }
};
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Object)
], AppSidebarNavDropdownComponent.prototype, "item", void 0);
AppSidebarNavDropdownComponent = tslib_1.__decorate([
    Component({
        selector: 'app-sidebar-nav-dropdown',
        template: `
    <a class="nav-link nav-dropdown-toggle"
       appNavDropdownToggle
       [appHtmlAttr]="item.attributes">
      <i *ngIf="helper.hasIcon(item)" [ngClass]="helper.getIconClass(item)"></i>
      <ng-container>{{item.name}}</ng-container>
      <span *ngIf="helper.hasBadge(item)" [ngClass]="helper.getBadgeClass(item)">{{ item.badge.text }}</span>
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
        providers: [SidebarNavHelper]
    }),
    tslib_1.__metadata("design:paramtypes", [SidebarNavHelper])
], AppSidebarNavDropdownComponent);
export { AppSidebarNavDropdownComponent };
//# sourceMappingURL=app-sidebar-nav-dropdown.component.js.map