import { __decorate, __metadata } from "tslib";
import { Component, Input } from '@angular/core';
import { SidebarNavHelper } from '../app-sidebar-nav.service';
let AppSidebarNavDropdownComponent = class AppSidebarNavDropdownComponent {
    constructor(helper) {
        this.helper = helper;
    }
};
AppSidebarNavDropdownComponent.ctorParameters = () => [
    { type: SidebarNavHelper }
];
__decorate([
    Input(),
    __metadata("design:type", Object)
], AppSidebarNavDropdownComponent.prototype, "item", void 0);
AppSidebarNavDropdownComponent = __decorate([
    Component({
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
        providers: [SidebarNavHelper],
        styles: ['.nav-dropdown-toggle { cursor: pointer; }',
            '.nav-dropdown-items { display: block; }']
    }),
    __metadata("design:paramtypes", [SidebarNavHelper])
], AppSidebarNavDropdownComponent);
export { AppSidebarNavDropdownComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLXNpZGViYXItbmF2LWRyb3Bkb3duLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bjb3JldWkvYW5ndWxhci8iLCJzb3VyY2VzIjpbImxpYi9zaWRlYmFyL2FwcC1zaWRlYmFyLW5hdi9hcHAtc2lkZWJhci1uYXYtZHJvcGRvd24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLEtBQUssRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUUvQyxPQUFPLEVBQUMsZ0JBQWdCLEVBQUMsTUFBTSw0QkFBNEIsQ0FBQztBQXVCNUQsSUFBYSw4QkFBOEIsR0FBM0MsTUFBYSw4QkFBOEI7SUFHekMsWUFDUyxNQUF3QjtRQUF4QixXQUFNLEdBQU4sTUFBTSxDQUFrQjtJQUM3QixDQUFDO0NBQ04sQ0FBQTs7WUFGa0IsZ0JBQWdCOztBQUh4QjtJQUFSLEtBQUssRUFBRTs7NERBQVc7QUFEUiw4QkFBOEI7SUFyQjFDLFNBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxvREFBb0Q7UUFDOUQsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7R0FZVDtRQUtELFNBQVMsRUFBRSxDQUFFLGdCQUFnQixDQUFFO2lCQUg3QiwyQ0FBMkM7WUFDM0MseUNBQXlDO0tBRzVDLENBQUM7cUNBS2lCLGdCQUFnQjtHQUp0Qiw4QkFBOEIsQ0FNMUM7U0FOWSw4QkFBOEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgSW5wdXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHtTaWRlYmFyTmF2SGVscGVyfSBmcm9tICcuLi9hcHAtc2lkZWJhci1uYXYuc2VydmljZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FwcC1zaWRlYmFyLW5hdi1kcm9wZG93biwgY3VpLXNpZGViYXItbmF2LWRyb3Bkb3duJyxcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgPGEgY2xhc3M9XCJuYXYtbGluayBuYXYtZHJvcGRvd24tdG9nZ2xlXCJcclxuICAgICAgIGFwcE5hdkRyb3Bkb3duVG9nZ2xlXHJcbiAgICAgICBbYXBwSHRtbEF0dHJdPVwiaXRlbS5hdHRyaWJ1dGVzXCI+XHJcbiAgICAgIDxpICpuZ0lmPVwiaGVscGVyLmhhc0ljb24oaXRlbSlcIiBbbmdDbGFzc109XCJpdGVtIHwgYXBwU2lkZWJhck5hdkljb25cIj48L2k+XHJcbiAgICAgIDxuZy1jb250YWluZXI+e3tpdGVtLm5hbWV9fTwvbmctY29udGFpbmVyPlxyXG4gICAgICA8c3BhbiAqbmdJZj1cImhlbHBlci5oYXNCYWRnZShpdGVtKVwiIFtuZ0NsYXNzXT1cIml0ZW0gfCBhcHBTaWRlYmFyTmF2QmFkZ2VcIj57eyBpdGVtLmJhZGdlLnRleHQgfX08L3NwYW4+XHJcbiAgICA8L2E+XHJcbiAgICA8YXBwLXNpZGViYXItbmF2LWl0ZW1zXHJcbiAgICAgIGNsYXNzPVwibmF2LWRyb3Bkb3duLWl0ZW1zXCJcclxuICAgICAgW2l0ZW1zXT1cIml0ZW0uY2hpbGRyZW5cIj5cclxuICAgIDwvYXBwLXNpZGViYXItbmF2LWl0ZW1zPlxyXG4gIGAsXHJcbiAgc3R5bGVzOiBbXHJcbiAgICAnLm5hdi1kcm9wZG93bi10b2dnbGUgeyBjdXJzb3I6IHBvaW50ZXI7IH0nLFxyXG4gICAgJy5uYXYtZHJvcGRvd24taXRlbXMgeyBkaXNwbGF5OiBibG9jazsgfSdcclxuICBdLFxyXG4gIHByb3ZpZGVyczogWyBTaWRlYmFyTmF2SGVscGVyIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIEFwcFNpZGViYXJOYXZEcm9wZG93bkNvbXBvbmVudCB7XHJcbiAgQElucHV0KCkgaXRlbTogYW55O1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHB1YmxpYyBoZWxwZXI6IFNpZGViYXJOYXZIZWxwZXJcclxuICApIHsgfVxyXG59XHJcbiJdfQ==