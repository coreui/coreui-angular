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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLXNpZGViYXItbmF2LWl0ZW1zLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bjb3JldWkvYW5ndWxhci8iLCJzb3VyY2VzIjpbImxpYi9zaWRlYmFyL2FwcC1zaWRlYmFyLW5hdi9hcHAtc2lkZWJhci1uYXYtaXRlbXMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLEtBQUssRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUMvQyxPQUFPLEVBQUMsTUFBTSxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFFdkMsT0FBTyxFQUFDLGdCQUFnQixFQUFDLE1BQU0sNEJBQTRCLENBQUM7QUFFNUQ7SUE4Q0UscUNBQ1MsTUFBYyxFQUNkLE1BQXdCO1FBRHhCLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDZCxXQUFNLEdBQU4sTUFBTSxDQUFrQjtJQUM5QixDQUFDOztnQkFqREwsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSx1QkFBdUI7b0JBQ2pDLFFBQVEsRUFBRSxpNENBd0NUO2lCQUNGOzs7O2dCQS9DTyxNQUFNO2dCQUVOLGdCQUFnQjs7O3dCQStDckIsS0FBSzs7SUFLUixrQ0FBQztDQUFBLEFBbERELElBa0RDO1NBTlksMkJBQTJCOzs7SUFDdEMsNENBQTJCOztJQUV6Qiw2Q0FBcUI7O0lBQ3JCLDZDQUErQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBJbnB1dH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1JvdXRlcn0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuaW1wb3J0IHtTaWRlYmFyTmF2SGVscGVyfSBmcm9tICcuLi9hcHAtc2lkZWJhci1uYXYuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC1zaWRlYmFyLW5hdi1pdGVtcycsXG4gIHRlbXBsYXRlOiBgXG4gICAgPG5nLWNvbnRhaW5lciAqbmdGb3I9XCJsZXQgaXRlbSBvZiBpdGVtc1wiPlxuICAgICAgPG5nLWNvbnRhaW5lciBbbmdTd2l0Y2hdPVwiaGVscGVyLml0ZW1UeXBlKGl0ZW0pXCI+XG4gICAgICAgIDxhcHAtc2lkZWJhci1uYXYtZHJvcGRvd25cbiAgICAgICAgICAqbmdTd2l0Y2hDYXNlPVwiJ2Ryb3Bkb3duJ1wiXG4gICAgICAgICAgW2l0ZW1dPVwiaXRlbVwiXG4gICAgICAgICAgW2NsYXNzLm9wZW5dPVwiaGVscGVyLmlzQWN0aXZlKHJvdXRlciwgaXRlbSlcIlxuICAgICAgICAgIFtuZ0NsYXNzXT1cImhlbHBlci5nZXRDbGFzcyhpdGVtKVwiXG4gICAgICAgICAgYXBwTmF2RHJvcGRvd25cbiAgICAgICAgICByb3V0ZXJMaW5rQWN0aXZlPVwib3BlblwiPlxuICAgICAgICA8L2FwcC1zaWRlYmFyLW5hdi1kcm9wZG93bj5cbiAgICAgICAgPGFwcC1zaWRlYmFyLW5hdi1kaXZpZGVyXG4gICAgICAgICAgKm5nU3dpdGNoQ2FzZT1cIidkaXZpZGVyJ1wiXG4gICAgICAgICAgW2l0ZW1dPVwiaXRlbVwiXG4gICAgICAgICAgW25nQ2xhc3NdPVwiaGVscGVyLmdldENsYXNzKGl0ZW0pXCJcbiAgICAgICAgICBbYXBwSHRtbEF0dHJdPVwiaXRlbS5hdHRyaWJ1dGVzXCI+XG4gICAgICAgIDwvYXBwLXNpZGViYXItbmF2LWRpdmlkZXI+XG4gICAgICAgIDxhcHAtc2lkZWJhci1uYXYtdGl0bGVcbiAgICAgICAgICAqbmdTd2l0Y2hDYXNlPVwiJ3RpdGxlJ1wiXG4gICAgICAgICAgW2l0ZW1dPVwiaXRlbVwiXG4gICAgICAgICAgW25nQ2xhc3NdPVwiaGVscGVyLmdldENsYXNzKGl0ZW0pXCJcbiAgICAgICAgICBbYXBwSHRtbEF0dHJdPVwiaXRlbS5hdHRyaWJ1dGVzXCI+XG4gICAgICAgIDwvYXBwLXNpZGViYXItbmF2LXRpdGxlPlxuICAgICAgICA8YXBwLXNpZGViYXItbmF2LWxhYmVsXG4gICAgICAgICAgKm5nU3dpdGNoQ2FzZT1cIidsYWJlbCdcIlxuICAgICAgICAgIFtpdGVtXT1cIml0ZW1cIlxuICAgICAgICAgIGNsYXNzPVwibmF2LWl0ZW1cIlxuICAgICAgICAgIFtuZ0NsYXNzXT1cImhlbHBlci5nZXRDbGFzcyhpdGVtKVwiPlxuICAgICAgICA8L2FwcC1zaWRlYmFyLW5hdi1sYWJlbD5cbiAgICAgICAgPG5nLWNvbnRhaW5lclxuICAgICAgICAgICpuZ1N3aXRjaENhc2U9XCInZW1wdHknXCI+XG4gICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICA8YXBwLXNpZGViYXItbmF2LWxpbmtcbiAgICAgICAgICAqbmdTd2l0Y2hEZWZhdWx0XG4gICAgICAgICAgW2l0ZW1dPVwiaXRlbVwiXG4gICAgICAgICAgY2xhc3M9XCJuYXYtaXRlbVwiXG4gICAgICAgICAgW25nQ2xhc3NdPVwiaGVscGVyLmdldENsYXNzKGl0ZW0pXCI+XG4gICAgICAgIDwvYXBwLXNpZGViYXItbmF2LWxpbms+XG4gICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICA8L25nLWNvbnRhaW5lcj5cbiAgYFxufSlcbmV4cG9ydCBjbGFzcyBBcHBTaWRlYmFyTmF2SXRlbXNDb21wb25lbnQge1xuICBASW5wdXQoKSBpdGVtczogQXJyYXk8YW55PjtcbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIHJvdXRlcjogUm91dGVyLFxuICAgIHB1YmxpYyBoZWxwZXI6IFNpZGViYXJOYXZIZWxwZXJcbiAgKSB7fVxufVxuIl19