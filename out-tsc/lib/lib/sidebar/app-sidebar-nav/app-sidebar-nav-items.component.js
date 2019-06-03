import * as tslib_1 from "tslib";
var _a, _b;
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { SidebarNavHelper } from '../app-sidebar-nav.service';
let AppSidebarNavItemsComponent = class AppSidebarNavItemsComponent {
    constructor(router, helper) {
        this.router = router;
        this.helper = helper;
    }
};
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", typeof (_a = typeof Array !== "undefined" && Array) === "function" ? _a : Object)
], AppSidebarNavItemsComponent.prototype, "items", void 0);
AppSidebarNavItemsComponent = tslib_1.__decorate([
    Component({
        selector: 'app-sidebar-nav-items',
        template: `
    <ng-container *ngFor="let item of items">
      <ng-container [ngSwitch]="helper.itemType(item)">
        <app-sidebar-nav-dropdown
          *ngSwitchCase="'dropdown'"
          [item]="item"
          [class.open]="helper.isActive(router, item)"
          [ngClass]="helper.getClass(item)"
          appNavDropdown
          routerLinkActive="open">
        </app-sidebar-nav-dropdown>
        <app-sidebar-nav-divider
          *ngSwitchCase="'divider'"
          [item]="item"
          [ngClass]="helper.getClass(item)"
          [appHtmlAttr]="item.attributes">
        </app-sidebar-nav-divider>
        <app-sidebar-nav-title
          *ngSwitchCase="'title'"
          [item]="item"
          [ngClass]="helper.getClass(item)"
          [appHtmlAttr]="item.attributes">
        </app-sidebar-nav-title>
        <app-sidebar-nav-label
          *ngSwitchCase="'label'"
          [item]="item"
          class="nav-item"
          [ngClass]="helper.getClass(item)">
        </app-sidebar-nav-label>
        <ng-container
          *ngSwitchCase="'empty'">
        </ng-container>
        <app-sidebar-nav-link
          *ngSwitchDefault
          [item]="item"
          class="nav-item"
          [ngClass]="helper.getClass(item)">
        </app-sidebar-nav-link>
      </ng-container>
    </ng-container>
  `
    }),
    tslib_1.__metadata("design:paramtypes", [typeof (_b = typeof Router !== "undefined" && Router) === "function" ? _b : Object, SidebarNavHelper])
], AppSidebarNavItemsComponent);
export { AppSidebarNavItemsComponent };
//# sourceMappingURL=app-sidebar-nav-items.component.js.map