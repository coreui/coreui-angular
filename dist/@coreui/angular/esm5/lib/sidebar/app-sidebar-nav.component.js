/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, HostBinding, Input } from '@angular/core';
import { Router } from '@angular/router';
var AppSidebarNavComponent = /** @class */ (function () {
    function AppSidebarNavComponent(router) {
        this.router = router;
        this.navItems = [];
        this._sidebarBav = true;
        this.role = 'nav';
        this.navItemsArray = [];
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    AppSidebarNavComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        this.navItemsArray = Array.isArray(this.navItems) ? this.navItems.slice() : [];
    };
    AppSidebarNavComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-sidebar-nav, cui-sidebar-nav',
                    template: "<app-sidebar-nav-items\n  class=\"nav\"\n  [items]=\"navItemsArray\">\n</app-sidebar-nav-items>\n"
                }] }
    ];
    /** @nocollapse */
    AppSidebarNavComponent.ctorParameters = function () { return [
        { type: Router }
    ]; };
    AppSidebarNavComponent.propDecorators = {
        navItems: [{ type: Input }],
        _sidebarBav: [{ type: HostBinding, args: ['class.sidebar-nav',] }],
        role: [{ type: HostBinding, args: ['attr.role',] }, { type: Input }]
    };
    return AppSidebarNavComponent;
}());
export { AppSidebarNavComponent };
if (false) {
    /** @type {?} */
    AppSidebarNavComponent.prototype.navItems;
    /** @type {?} */
    AppSidebarNavComponent.prototype._sidebarBav;
    /** @type {?} */
    AppSidebarNavComponent.prototype.role;
    /** @type {?} */
    AppSidebarNavComponent.prototype.navItemsArray;
    /** @type {?} */
    AppSidebarNavComponent.prototype.router;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLXNpZGViYXItbmF2LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bjb3JldWkvYW5ndWxhci8iLCJzb3VyY2VzIjpbImxpYi9zaWRlYmFyL2FwcC1zaWRlYmFyLW5hdi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBNEIsTUFBTSxlQUFlLENBQUM7QUFDeEYsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBSXpDO0lBWUUsZ0NBQ1MsTUFBYztRQUFkLFdBQU0sR0FBTixNQUFNLENBQVE7UUFSZCxhQUFRLEdBQWUsRUFBRSxDQUFDO1FBRUQsZ0JBQVcsR0FBRyxJQUFJLENBQUM7UUFDbEIsU0FBSSxHQUFHLEtBQUssQ0FBQztRQUV6QyxrQkFBYSxHQUFlLEVBQUUsQ0FBQztJQUlsQyxDQUFDOzs7OztJQUVFLDRDQUFXOzs7O0lBQWxCLFVBQW1CLE9BQXNCO1FBQ3ZDLElBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztJQUNqRixDQUFDOztnQkFsQkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxrQ0FBa0M7b0JBQzVDLDZHQUErQztpQkFDaEQ7Ozs7Z0JBUFEsTUFBTTs7OzJCQVNaLEtBQUs7OEJBRUwsV0FBVyxTQUFDLG1CQUFtQjt1QkFDL0IsV0FBVyxTQUFDLFdBQVcsY0FBRyxLQUFLOztJQVdsQyw2QkFBQztDQUFBLEFBbkJELElBbUJDO1NBZlksc0JBQXNCOzs7SUFDakMsMENBQW1DOztJQUVuQyw2Q0FBcUQ7O0lBQ3JELHNDQUFnRDs7SUFFaEQsK0NBQXNDOztJQUdwQyx3Q0FBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEhvc3RCaW5kaW5nLCBJbnB1dCwgT25DaGFuZ2VzLCBTaW1wbGVDaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5pbXBvcnQgeyBJTmF2RGF0YSB9IGZyb20gJy4vYXBwLXNpZGViYXItbmF2JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLXNpZGViYXItbmF2LCBjdWktc2lkZWJhci1uYXYnLFxuICB0ZW1wbGF0ZVVybDogJy4vYXBwLXNpZGViYXItbmF2LmNvbXBvbmVudC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBBcHBTaWRlYmFyTmF2Q29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzIHtcbiAgQElucHV0KCkgbmF2SXRlbXM6IElOYXZEYXRhW10gPSBbXTtcblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLnNpZGViYXItbmF2JykgX3NpZGViYXJCYXYgPSB0cnVlO1xuICBASG9zdEJpbmRpbmcoJ2F0dHIucm9sZScpIEBJbnB1dCgpIHJvbGUgPSAnbmF2JztcblxuICBwdWJsaWMgbmF2SXRlbXNBcnJheTogSU5hdkRhdGFbXSA9IFtdO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyByb3V0ZXI6IFJvdXRlcixcbiAgKSB7IH1cblxuICBwdWJsaWMgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgIHRoaXMubmF2SXRlbXNBcnJheSA9IEFycmF5LmlzQXJyYXkodGhpcy5uYXZJdGVtcykgPyB0aGlzLm5hdkl0ZW1zLnNsaWNlKCkgOiBbXTtcbiAgfVxufVxuIl19