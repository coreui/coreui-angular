/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { SidebarNavHelper } from '../app-sidebar-nav.service';
export class AppSidebarNavItemsComponent {
    /**
     * @param {?} router
     * @param {?} helper
     */
    constructor(router, helper) {
        this.router = router;
        this.helper = helper;
    }
}
AppSidebarNavItemsComponent.decorators = [
    { type: Component, args: [{
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
            }] }
];
/** @nocollapse */
AppSidebarNavItemsComponent.ctorParameters = () => [
    { type: Router },
    { type: SidebarNavHelper }
];
AppSidebarNavItemsComponent.propDecorators = {
    items: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    AppSidebarNavItemsComponent.prototype.items;
    /** @type {?} */
    AppSidebarNavItemsComponent.prototype.router;
    /** @type {?} */
    AppSidebarNavItemsComponent.prototype.helper;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLXNpZGViYXItbmF2LWl0ZW1zLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bjb3JldWkvYW5ndWxhci8iLCJzb3VyY2VzIjpbImxpYi9zaWRlYmFyL2FwcC1zaWRlYmFyLW5hdi9hcHAtc2lkZWJhci1uYXYtaXRlbXMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLEtBQUssRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUMvQyxPQUFPLEVBQUMsTUFBTSxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFFdkMsT0FBTyxFQUFDLGdCQUFnQixFQUFDLE1BQU0sNEJBQTRCLENBQUM7QUE4QzVELE1BQU0sT0FBTywyQkFBMkI7Ozs7O0lBRXRDLFlBQ1MsTUFBYyxFQUNkLE1BQXdCO1FBRHhCLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDZCxXQUFNLEdBQU4sTUFBTSxDQUFrQjtJQUM5QixDQUFDOzs7WUFqREwsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSx1QkFBdUI7Z0JBQ2pDLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXdDVDthQUNGOzs7O1lBL0NPLE1BQU07WUFFTixnQkFBZ0I7OztvQkErQ3JCLEtBQUs7Ozs7SUFBTiw0Q0FBMkI7O0lBRXpCLDZDQUFxQjs7SUFDckIsNkNBQStCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIElucHV0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtSb3V0ZXJ9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcblxyXG5pbXBvcnQge1NpZGViYXJOYXZIZWxwZXJ9IGZyb20gJy4uL2FwcC1zaWRlYmFyLW5hdi5zZXJ2aWNlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYXBwLXNpZGViYXItbmF2LWl0ZW1zJyxcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgPG5nLWNvbnRhaW5lciAqbmdGb3I9XCJsZXQgaXRlbSBvZiBpdGVtc1wiPlxyXG4gICAgICA8bmctY29udGFpbmVyIFtuZ1N3aXRjaF09XCJoZWxwZXIuaXRlbVR5cGUoaXRlbSlcIj5cclxuICAgICAgICA8YXBwLXNpZGViYXItbmF2LWRyb3Bkb3duXHJcbiAgICAgICAgICAqbmdTd2l0Y2hDYXNlPVwiJ2Ryb3Bkb3duJ1wiXHJcbiAgICAgICAgICBbaXRlbV09XCJpdGVtXCJcclxuICAgICAgICAgIFtjbGFzcy5vcGVuXT1cImhlbHBlci5pc0FjdGl2ZShyb3V0ZXIsIGl0ZW0pXCJcclxuICAgICAgICAgIFtuZ0NsYXNzXT1cImhlbHBlci5nZXRDbGFzcyhpdGVtKVwiXHJcbiAgICAgICAgICBhcHBOYXZEcm9wZG93blxyXG4gICAgICAgICAgcm91dGVyTGlua0FjdGl2ZT1cIm9wZW5cIj5cclxuICAgICAgICA8L2FwcC1zaWRlYmFyLW5hdi1kcm9wZG93bj5cclxuICAgICAgICA8YXBwLXNpZGViYXItbmF2LWRpdmlkZXJcclxuICAgICAgICAgICpuZ1N3aXRjaENhc2U9XCInZGl2aWRlcidcIlxyXG4gICAgICAgICAgW2l0ZW1dPVwiaXRlbVwiXHJcbiAgICAgICAgICBbbmdDbGFzc109XCJoZWxwZXIuZ2V0Q2xhc3MoaXRlbSlcIlxyXG4gICAgICAgICAgW2FwcEh0bWxBdHRyXT1cIml0ZW0uYXR0cmlidXRlc1wiPlxyXG4gICAgICAgIDwvYXBwLXNpZGViYXItbmF2LWRpdmlkZXI+XHJcbiAgICAgICAgPGFwcC1zaWRlYmFyLW5hdi10aXRsZVxyXG4gICAgICAgICAgKm5nU3dpdGNoQ2FzZT1cIid0aXRsZSdcIlxyXG4gICAgICAgICAgW2l0ZW1dPVwiaXRlbVwiXHJcbiAgICAgICAgICBbbmdDbGFzc109XCJoZWxwZXIuZ2V0Q2xhc3MoaXRlbSlcIlxyXG4gICAgICAgICAgW2FwcEh0bWxBdHRyXT1cIml0ZW0uYXR0cmlidXRlc1wiPlxyXG4gICAgICAgIDwvYXBwLXNpZGViYXItbmF2LXRpdGxlPlxyXG4gICAgICAgIDxhcHAtc2lkZWJhci1uYXYtbGFiZWxcclxuICAgICAgICAgICpuZ1N3aXRjaENhc2U9XCInbGFiZWwnXCJcclxuICAgICAgICAgIFtpdGVtXT1cIml0ZW1cIlxyXG4gICAgICAgICAgY2xhc3M9XCJuYXYtaXRlbVwiXHJcbiAgICAgICAgICBbbmdDbGFzc109XCJoZWxwZXIuZ2V0Q2xhc3MoaXRlbSlcIj5cclxuICAgICAgICA8L2FwcC1zaWRlYmFyLW5hdi1sYWJlbD5cclxuICAgICAgICA8bmctY29udGFpbmVyXHJcbiAgICAgICAgICAqbmdTd2l0Y2hDYXNlPVwiJ2VtcHR5J1wiPlxyXG4gICAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgICAgIDxhcHAtc2lkZWJhci1uYXYtbGlua1xyXG4gICAgICAgICAgKm5nU3dpdGNoRGVmYXVsdFxyXG4gICAgICAgICAgW2l0ZW1dPVwiaXRlbVwiXHJcbiAgICAgICAgICBjbGFzcz1cIm5hdi1pdGVtXCJcclxuICAgICAgICAgIFtuZ0NsYXNzXT1cImhlbHBlci5nZXRDbGFzcyhpdGVtKVwiPlxyXG4gICAgICAgIDwvYXBwLXNpZGViYXItbmF2LWxpbms+XHJcbiAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgPC9uZy1jb250YWluZXI+XHJcbiAgYFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQXBwU2lkZWJhck5hdkl0ZW1zQ29tcG9uZW50IHtcclxuICBASW5wdXQoKSBpdGVtczogQXJyYXk8YW55PjtcclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHB1YmxpYyByb3V0ZXI6IFJvdXRlcixcclxuICAgIHB1YmxpYyBoZWxwZXI6IFNpZGViYXJOYXZIZWxwZXJcclxuICApIHt9XHJcbn1cclxuIl19