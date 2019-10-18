/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ElementRef, HostBinding, Input, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
var AppSidebarNavComponent = /** @class */ (function () {
    function AppSidebarNavComponent(router, renderer, hostElement) {
        this.router = router;
        this.renderer = renderer;
        this.hostElement = hostElement;
        this.navItems = [];
        this.role = 'nav';
        this.navItemsArray = [];
        renderer.addClass(hostElement.nativeElement, 'sidebar-nav');
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
        { type: Router },
        { type: Renderer2 },
        { type: ElementRef }
    ]; };
    AppSidebarNavComponent.propDecorators = {
        navItems: [{ type: Input }],
        role: [{ type: HostBinding, args: ['attr.role',] }]
    };
    return AppSidebarNavComponent;
}());
export { AppSidebarNavComponent };
if (false) {
    /** @type {?} */
    AppSidebarNavComponent.prototype.navItems;
    /** @type {?} */
    AppSidebarNavComponent.prototype.role;
    /** @type {?} */
    AppSidebarNavComponent.prototype.navItemsArray;
    /** @type {?} */
    AppSidebarNavComponent.prototype.router;
    /**
     * @type {?}
     * @private
     */
    AppSidebarNavComponent.prototype.renderer;
    /**
     * @type {?}
     * @private
     */
    AppSidebarNavComponent.prototype.hostElement;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLXNpZGViYXItbmF2LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bjb3JldWkvYW5ndWxhci8iLCJzb3VyY2VzIjpbImxpYi9zaWRlYmFyL2FwcC1zaWRlYmFyLW5hdi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQWEsU0FBUyxFQUFpQixNQUFNLGVBQWUsQ0FBQztBQUMvRyxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFJekM7SUFXRSxnQ0FDUyxNQUFjLEVBQ2IsUUFBbUIsRUFDbkIsV0FBdUI7UUFGeEIsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNiLGFBQVEsR0FBUixRQUFRLENBQVc7UUFDbkIsZ0JBQVcsR0FBWCxXQUFXLENBQVk7UUFUeEIsYUFBUSxHQUFlLEVBQUUsQ0FBQztRQUVULFNBQUksR0FBRyxLQUFLLENBQUM7UUFFaEMsa0JBQWEsR0FBZSxFQUFFLENBQUM7UUFPcEMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsYUFBYSxFQUFFLGFBQWEsQ0FBQyxDQUFDO0lBQzlELENBQUM7Ozs7O0lBRU0sNENBQVc7Ozs7SUFBbEIsVUFBbUIsT0FBc0I7UUFDdkMsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO0lBQ2pGLENBQUM7O2dCQXJCRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGtDQUFrQztvQkFDNUMsNkdBQStDO2lCQUNoRDs7OztnQkFQUSxNQUFNO2dCQURnRCxTQUFTO2dCQUFwRCxVQUFVOzs7MkJBVTNCLEtBQUs7dUJBRUwsV0FBVyxTQUFDLFdBQVc7O0lBZTFCLDZCQUFDO0NBQUEsQUF0QkQsSUFzQkM7U0FsQlksc0JBQXNCOzs7SUFDakMsMENBQW1DOztJQUVuQyxzQ0FBdUM7O0lBRXZDLCtDQUFzQzs7SUFHcEMsd0NBQXFCOzs7OztJQUNyQiwwQ0FBMkI7Ozs7O0lBQzNCLDZDQUErQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgSG9zdEJpbmRpbmcsIElucHV0LCBPbkNoYW5nZXMsIFJlbmRlcmVyMiwgU2ltcGxlQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5cclxuaW1wb3J0IHsgSU5hdkRhdGEgfSBmcm9tICcuL2FwcC1zaWRlYmFyLW5hdic7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FwcC1zaWRlYmFyLW5hdiwgY3VpLXNpZGViYXItbmF2JyxcclxuICB0ZW1wbGF0ZVVybDogJy4vYXBwLXNpZGViYXItbmF2LmNvbXBvbmVudC5odG1sJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgQXBwU2lkZWJhck5hdkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XHJcbiAgQElucHV0KCkgbmF2SXRlbXM6IElOYXZEYXRhW10gPSBbXTtcclxuXHJcbiAgQEhvc3RCaW5kaW5nKCdhdHRyLnJvbGUnKSByb2xlID0gJ25hdic7XHJcblxyXG4gIHB1YmxpYyBuYXZJdGVtc0FycmF5OiBJTmF2RGF0YVtdID0gW107XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHVibGljIHJvdXRlcjogUm91dGVyLFxyXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLFxyXG4gICAgcHJpdmF0ZSBob3N0RWxlbWVudDogRWxlbWVudFJlZlxyXG4gICkge1xyXG4gICAgcmVuZGVyZXIuYWRkQ2xhc3MoaG9zdEVsZW1lbnQubmF0aXZlRWxlbWVudCwgJ3NpZGViYXItbmF2Jyk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xyXG4gICAgdGhpcy5uYXZJdGVtc0FycmF5ID0gQXJyYXkuaXNBcnJheSh0aGlzLm5hdkl0ZW1zKSA/IHRoaXMubmF2SXRlbXMuc2xpY2UoKSA6IFtdO1xyXG4gIH1cclxufVxyXG4iXX0=