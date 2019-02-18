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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLXNpZGViYXItbmF2LWl0ZW1zLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bjb3JldWkvYW5ndWxhci8iLCJzb3VyY2VzIjpbImxpYi9zaWRlYmFyL2FwcC1zaWRlYmFyLW5hdi9hcHAtc2lkZWJhci1uYXYtaXRlbXMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLEtBQUssRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUMvQyxPQUFPLEVBQUMsTUFBTSxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFFdkMsT0FBTyxFQUFDLGdCQUFnQixFQUFDLE1BQU0sNEJBQTRCLENBQUM7QUE4QzVELE1BQU0sT0FBTywyQkFBMkI7Ozs7O0lBRXRDLFlBQ1MsTUFBYyxFQUNkLE1BQXdCO1FBRHhCLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDZCxXQUFNLEdBQU4sTUFBTSxDQUFrQjtJQUM5QixDQUFDOzs7WUFqREwsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSx1QkFBdUI7Z0JBQ2pDLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXdDVDthQUNGOzs7O1lBL0NPLE1BQU07WUFFTixnQkFBZ0I7OztvQkErQ3JCLEtBQUs7Ozs7SUFBTiw0Q0FBMkI7O0lBRXpCLDZDQUFxQjs7SUFDckIsNkNBQStCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIElucHV0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Um91dGVyfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5pbXBvcnQge1NpZGViYXJOYXZIZWxwZXJ9IGZyb20gJy4uL2FwcC1zaWRlYmFyLW5hdi5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLXNpZGViYXItbmF2LWl0ZW1zJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8bmctY29udGFpbmVyICpuZ0Zvcj1cImxldCBpdGVtIG9mIGl0ZW1zXCI+XG4gICAgICA8bmctY29udGFpbmVyIFtuZ1N3aXRjaF09XCJoZWxwZXIuaXRlbVR5cGUoaXRlbSlcIj5cbiAgICAgICAgPGFwcC1zaWRlYmFyLW5hdi1kcm9wZG93blxuICAgICAgICAgICpuZ1N3aXRjaENhc2U9XCInZHJvcGRvd24nXCJcbiAgICAgICAgICBbaXRlbV09XCJpdGVtXCJcbiAgICAgICAgICBbY2xhc3Mub3Blbl09XCJoZWxwZXIuaXNBY3RpdmUocm91dGVyLCBpdGVtKVwiXG4gICAgICAgICAgW25nQ2xhc3NdPVwiaGVscGVyLmdldENsYXNzKGl0ZW0pXCJcbiAgICAgICAgICBhcHBOYXZEcm9wZG93blxuICAgICAgICAgIHJvdXRlckxpbmtBY3RpdmU9XCJvcGVuXCI+XG4gICAgICAgIDwvYXBwLXNpZGViYXItbmF2LWRyb3Bkb3duPlxuICAgICAgICA8YXBwLXNpZGViYXItbmF2LWRpdmlkZXJcbiAgICAgICAgICAqbmdTd2l0Y2hDYXNlPVwiJ2RpdmlkZXInXCJcbiAgICAgICAgICBbaXRlbV09XCJpdGVtXCJcbiAgICAgICAgICBbbmdDbGFzc109XCJoZWxwZXIuZ2V0Q2xhc3MoaXRlbSlcIlxuICAgICAgICAgIFthcHBIdG1sQXR0cl09XCJpdGVtLmF0dHJpYnV0ZXNcIj5cbiAgICAgICAgPC9hcHAtc2lkZWJhci1uYXYtZGl2aWRlcj5cbiAgICAgICAgPGFwcC1zaWRlYmFyLW5hdi10aXRsZVxuICAgICAgICAgICpuZ1N3aXRjaENhc2U9XCIndGl0bGUnXCJcbiAgICAgICAgICBbaXRlbV09XCJpdGVtXCJcbiAgICAgICAgICBbbmdDbGFzc109XCJoZWxwZXIuZ2V0Q2xhc3MoaXRlbSlcIlxuICAgICAgICAgIFthcHBIdG1sQXR0cl09XCJpdGVtLmF0dHJpYnV0ZXNcIj5cbiAgICAgICAgPC9hcHAtc2lkZWJhci1uYXYtdGl0bGU+XG4gICAgICAgIDxhcHAtc2lkZWJhci1uYXYtbGFiZWxcbiAgICAgICAgICAqbmdTd2l0Y2hDYXNlPVwiJ2xhYmVsJ1wiXG4gICAgICAgICAgW2l0ZW1dPVwiaXRlbVwiXG4gICAgICAgICAgY2xhc3M9XCJuYXYtaXRlbVwiXG4gICAgICAgICAgW25nQ2xhc3NdPVwiaGVscGVyLmdldENsYXNzKGl0ZW0pXCI+XG4gICAgICAgIDwvYXBwLXNpZGViYXItbmF2LWxhYmVsPlxuICAgICAgICA8bmctY29udGFpbmVyXG4gICAgICAgICAgKm5nU3dpdGNoQ2FzZT1cIidlbXB0eSdcIj5cbiAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgIDxhcHAtc2lkZWJhci1uYXYtbGlua1xuICAgICAgICAgICpuZ1N3aXRjaERlZmF1bHRcbiAgICAgICAgICBbaXRlbV09XCJpdGVtXCJcbiAgICAgICAgICBjbGFzcz1cIm5hdi1pdGVtXCJcbiAgICAgICAgICBbbmdDbGFzc109XCJoZWxwZXIuZ2V0Q2xhc3MoaXRlbSlcIj5cbiAgICAgICAgPC9hcHAtc2lkZWJhci1uYXYtbGluaz5cbiAgICAgIDwvbmctY29udGFpbmVyPlxuICAgIDwvbmctY29udGFpbmVyPlxuICBgXG59KVxuZXhwb3J0IGNsYXNzIEFwcFNpZGViYXJOYXZJdGVtc0NvbXBvbmVudCB7XG4gIEBJbnB1dCgpIGl0ZW1zOiBBcnJheTxhbnk+O1xuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgcm91dGVyOiBSb3V0ZXIsXG4gICAgcHVibGljIGhlbHBlcjogU2lkZWJhck5hdkhlbHBlclxuICApIHt9XG59XG4iXX0=