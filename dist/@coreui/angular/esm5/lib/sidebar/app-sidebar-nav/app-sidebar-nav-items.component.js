/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { SidebarNavHelper } from '../app-sidebar-nav.service';
var AppSidebarNavItemsComponent = /** @class */ (function () {
    function AppSidebarNavItemsComponent(router, helper) {
        this.router = router;
        this.helper = helper;
    }
    AppSidebarNavItemsComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-sidebar-nav-items',
                    template: "\n    <ng-container *ngFor=\"let item of items\">\n      <ng-container [ngSwitch]=\"helper.itemType(item)\">\n        <app-sidebar-nav-dropdown\n          *ngSwitchCase=\"'dropdown'\"\n          [item]=\"item\"\n          [class.open]=\"helper.isActive(router, item)\"\n          [ngClass]=\"helper.getClass(item)\"\n          appNavDropdown\n          routerLinkActive=\"open\">\n        </app-sidebar-nav-dropdown>\n        <app-sidebar-nav-divider\n          *ngSwitchCase=\"'divider'\"\n          [item]=\"item\"\n          [ngClass]=\"helper.getClass(item)\"\n          [appHtmlAttr]=\"item.attributes\">\n        </app-sidebar-nav-divider>\n        <app-sidebar-nav-title\n          *ngSwitchCase=\"'title'\"\n          [item]=\"item\"\n          [ngClass]=\"helper.getClass(item)\"\n          [appHtmlAttr]=\"item.attributes\">\n        </app-sidebar-nav-title>\n        <app-sidebar-nav-label\n          *ngSwitchCase=\"'label'\"\n          [item]=\"item\"\n          class=\"nav-item\"\n          [ngClass]=\"helper.getClass(item)\">\n        </app-sidebar-nav-label>\n        <ng-container\n          *ngSwitchCase=\"'empty'\">\n        </ng-container>\n        <app-sidebar-nav-link\n          *ngSwitchDefault\n          [item]=\"item\"\n          class=\"nav-item\"\n          [ngClass]=\"helper.getClass(item)\">\n        </app-sidebar-nav-link>\n      </ng-container>\n    </ng-container>\n  "
                }] }
    ];
    /** @nocollapse */
    AppSidebarNavItemsComponent.ctorParameters = function () { return [
        { type: Router },
        { type: SidebarNavHelper }
    ]; };
    AppSidebarNavItemsComponent.propDecorators = {
        items: [{ type: Input }]
    };
    return AppSidebarNavItemsComponent;
}());
export { AppSidebarNavItemsComponent };
if (false) {
    /** @type {?} */
    AppSidebarNavItemsComponent.prototype.items;
    /** @type {?} */
    AppSidebarNavItemsComponent.prototype.router;
    /** @type {?} */
    AppSidebarNavItemsComponent.prototype.helper;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLXNpZGViYXItbmF2LWl0ZW1zLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bjb3JldWkvYW5ndWxhci8iLCJzb3VyY2VzIjpbImxpYi9zaWRlYmFyL2FwcC1zaWRlYmFyLW5hdi9hcHAtc2lkZWJhci1uYXYtaXRlbXMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLEtBQUssRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUMvQyxPQUFPLEVBQUMsTUFBTSxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFFdkMsT0FBTyxFQUFDLGdCQUFnQixFQUFDLE1BQU0sNEJBQTRCLENBQUM7QUFFNUQ7SUE4Q0UscUNBQ1MsTUFBYyxFQUNkLE1BQXdCO1FBRHhCLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDZCxXQUFNLEdBQU4sTUFBTSxDQUFrQjtJQUM5QixDQUFDOztnQkFqREwsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSx1QkFBdUI7b0JBQ2pDLFFBQVEsRUFBRSxpNENBd0NUO2lCQUNGOzs7O2dCQS9DTyxNQUFNO2dCQUVOLGdCQUFnQjs7O3dCQStDckIsS0FBSzs7SUFLUixrQ0FBQztDQUFBLEFBbERELElBa0RDO1NBTlksMkJBQTJCOzs7SUFDdEMsNENBQTJCOztJQUV6Qiw2Q0FBcUI7O0lBQ3JCLDZDQUErQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBJbnB1dH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7Um91dGVyfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5cclxuaW1wb3J0IHtTaWRlYmFyTmF2SGVscGVyfSBmcm9tICcuLi9hcHAtc2lkZWJhci1uYXYuc2VydmljZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FwcC1zaWRlYmFyLW5hdi1pdGVtcycsXHJcbiAgdGVtcGxhdGU6IGBcclxuICAgIDxuZy1jb250YWluZXIgKm5nRm9yPVwibGV0IGl0ZW0gb2YgaXRlbXNcIj5cclxuICAgICAgPG5nLWNvbnRhaW5lciBbbmdTd2l0Y2hdPVwiaGVscGVyLml0ZW1UeXBlKGl0ZW0pXCI+XHJcbiAgICAgICAgPGFwcC1zaWRlYmFyLW5hdi1kcm9wZG93blxyXG4gICAgICAgICAgKm5nU3dpdGNoQ2FzZT1cIidkcm9wZG93bidcIlxyXG4gICAgICAgICAgW2l0ZW1dPVwiaXRlbVwiXHJcbiAgICAgICAgICBbY2xhc3Mub3Blbl09XCJoZWxwZXIuaXNBY3RpdmUocm91dGVyLCBpdGVtKVwiXHJcbiAgICAgICAgICBbbmdDbGFzc109XCJoZWxwZXIuZ2V0Q2xhc3MoaXRlbSlcIlxyXG4gICAgICAgICAgYXBwTmF2RHJvcGRvd25cclxuICAgICAgICAgIHJvdXRlckxpbmtBY3RpdmU9XCJvcGVuXCI+XHJcbiAgICAgICAgPC9hcHAtc2lkZWJhci1uYXYtZHJvcGRvd24+XHJcbiAgICAgICAgPGFwcC1zaWRlYmFyLW5hdi1kaXZpZGVyXHJcbiAgICAgICAgICAqbmdTd2l0Y2hDYXNlPVwiJ2RpdmlkZXInXCJcclxuICAgICAgICAgIFtpdGVtXT1cIml0ZW1cIlxyXG4gICAgICAgICAgW25nQ2xhc3NdPVwiaGVscGVyLmdldENsYXNzKGl0ZW0pXCJcclxuICAgICAgICAgIFthcHBIdG1sQXR0cl09XCJpdGVtLmF0dHJpYnV0ZXNcIj5cclxuICAgICAgICA8L2FwcC1zaWRlYmFyLW5hdi1kaXZpZGVyPlxyXG4gICAgICAgIDxhcHAtc2lkZWJhci1uYXYtdGl0bGVcclxuICAgICAgICAgICpuZ1N3aXRjaENhc2U9XCIndGl0bGUnXCJcclxuICAgICAgICAgIFtpdGVtXT1cIml0ZW1cIlxyXG4gICAgICAgICAgW25nQ2xhc3NdPVwiaGVscGVyLmdldENsYXNzKGl0ZW0pXCJcclxuICAgICAgICAgIFthcHBIdG1sQXR0cl09XCJpdGVtLmF0dHJpYnV0ZXNcIj5cclxuICAgICAgICA8L2FwcC1zaWRlYmFyLW5hdi10aXRsZT5cclxuICAgICAgICA8YXBwLXNpZGViYXItbmF2LWxhYmVsXHJcbiAgICAgICAgICAqbmdTd2l0Y2hDYXNlPVwiJ2xhYmVsJ1wiXHJcbiAgICAgICAgICBbaXRlbV09XCJpdGVtXCJcclxuICAgICAgICAgIGNsYXNzPVwibmF2LWl0ZW1cIlxyXG4gICAgICAgICAgW25nQ2xhc3NdPVwiaGVscGVyLmdldENsYXNzKGl0ZW0pXCI+XHJcbiAgICAgICAgPC9hcHAtc2lkZWJhci1uYXYtbGFiZWw+XHJcbiAgICAgICAgPG5nLWNvbnRhaW5lclxyXG4gICAgICAgICAgKm5nU3dpdGNoQ2FzZT1cIidlbXB0eSdcIj5cclxuICAgICAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgICAgICA8YXBwLXNpZGViYXItbmF2LWxpbmtcclxuICAgICAgICAgICpuZ1N3aXRjaERlZmF1bHRcclxuICAgICAgICAgIFtpdGVtXT1cIml0ZW1cIlxyXG4gICAgICAgICAgY2xhc3M9XCJuYXYtaXRlbVwiXHJcbiAgICAgICAgICBbbmdDbGFzc109XCJoZWxwZXIuZ2V0Q2xhc3MoaXRlbSlcIj5cclxuICAgICAgICA8L2FwcC1zaWRlYmFyLW5hdi1saW5rPlxyXG4gICAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgIDwvbmctY29udGFpbmVyPlxyXG4gIGBcclxufSlcclxuZXhwb3J0IGNsYXNzIEFwcFNpZGViYXJOYXZJdGVtc0NvbXBvbmVudCB7XHJcbiAgQElucHV0KCkgaXRlbXM6IEFycmF5PGFueT47XHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwdWJsaWMgcm91dGVyOiBSb3V0ZXIsXHJcbiAgICBwdWJsaWMgaGVscGVyOiBTaWRlYmFyTmF2SGVscGVyXHJcbiAgKSB7fVxyXG59XHJcbiJdfQ==