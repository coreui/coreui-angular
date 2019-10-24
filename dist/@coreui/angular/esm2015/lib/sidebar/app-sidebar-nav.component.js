/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, HostBinding, Input } from '@angular/core';
import { Router } from '@angular/router';
export class AppSidebarNavComponent {
    /**
     * @param {?} router
     */
    constructor(router) {
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
    ngOnChanges(changes) {
        this.navItemsArray = Array.isArray(this.navItems) ? this.navItems.slice() : [];
    }
}
AppSidebarNavComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-sidebar-nav, cui-sidebar-nav',
                template: "<app-sidebar-nav-items\n  class=\"nav\"\n  [items]=\"navItemsArray\">\n</app-sidebar-nav-items>\n"
            }] }
];
/** @nocollapse */
AppSidebarNavComponent.ctorParameters = () => [
    { type: Router }
];
AppSidebarNavComponent.propDecorators = {
    navItems: [{ type: Input }],
    _sidebarBav: [{ type: HostBinding, args: ['class.sidebar-nav',] }],
    role: [{ type: HostBinding, args: ['attr.role',] }, { type: Input }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLXNpZGViYXItbmF2LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bjb3JldWkvYW5ndWxhci8iLCJzb3VyY2VzIjpbImxpYi9zaWRlYmFyL2FwcC1zaWRlYmFyLW5hdi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBNEIsTUFBTSxlQUFlLENBQUM7QUFDeEYsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBUXpDLE1BQU0sT0FBTyxzQkFBc0I7Ozs7SUFRakMsWUFDUyxNQUFjO1FBQWQsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQVJkLGFBQVEsR0FBZSxFQUFFLENBQUM7UUFFRCxnQkFBVyxHQUFHLElBQUksQ0FBQztRQUNsQixTQUFJLEdBQUcsS0FBSyxDQUFDO1FBRXpDLGtCQUFhLEdBQWUsRUFBRSxDQUFDO0lBSWxDLENBQUM7Ozs7O0lBRUUsV0FBVyxDQUFDLE9BQXNCO1FBQ3ZDLElBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztJQUNqRixDQUFDOzs7WUFsQkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxrQ0FBa0M7Z0JBQzVDLDZHQUErQzthQUNoRDs7OztZQVBRLE1BQU07Ozt1QkFTWixLQUFLOzBCQUVMLFdBQVcsU0FBQyxtQkFBbUI7bUJBQy9CLFdBQVcsU0FBQyxXQUFXLGNBQUcsS0FBSzs7OztJQUhoQywwQ0FBbUM7O0lBRW5DLDZDQUFxRDs7SUFDckQsc0NBQWdEOztJQUVoRCwrQ0FBc0M7O0lBR3BDLHdDQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSG9zdEJpbmRpbmcsIElucHV0LCBPbkNoYW5nZXMsIFNpbXBsZUNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbmltcG9ydCB7IElOYXZEYXRhIH0gZnJvbSAnLi9hcHAtc2lkZWJhci1uYXYnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtc2lkZWJhci1uYXYsIGN1aS1zaWRlYmFyLW5hdicsXG4gIHRlbXBsYXRlVXJsOiAnLi9hcHAtc2lkZWJhci1uYXYuY29tcG9uZW50Lmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIEFwcFNpZGViYXJOYXZDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xuICBASW5wdXQoKSBuYXZJdGVtczogSU5hdkRhdGFbXSA9IFtdO1xuXG4gIEBIb3N0QmluZGluZygnY2xhc3Muc2lkZWJhci1uYXYnKSBfc2lkZWJhckJhdiA9IHRydWU7XG4gIEBIb3N0QmluZGluZygnYXR0ci5yb2xlJykgQElucHV0KCkgcm9sZSA9ICduYXYnO1xuXG4gIHB1YmxpYyBuYXZJdGVtc0FycmF5OiBJTmF2RGF0YVtdID0gW107XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIHJvdXRlcjogUm91dGVyLFxuICApIHsgfVxuXG4gIHB1YmxpYyBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgdGhpcy5uYXZJdGVtc0FycmF5ID0gQXJyYXkuaXNBcnJheSh0aGlzLm5hdkl0ZW1zKSA/IHRoaXMubmF2SXRlbXMuc2xpY2UoKSA6IFtdO1xuICB9XG59XG4iXX0=