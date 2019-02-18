/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ElementRef, HostBinding, Input, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
var AppSidebarNavComponent = /** @class */ (function () {
    function AppSidebarNavComponent(router, renderer, hostElement) {
        this.router = router;
        this.renderer = renderer;
        this.hostElement = hostElement;
        this.role = 'nav';
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
        this.navItemsArray = JSON.parse(JSON.stringify(this.navItems || []));
    };
    AppSidebarNavComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-sidebar-nav',
                    template: "<app-sidebar-nav-items\r\n  class=\"nav\"\r\n  [items]=\"navItemsArray\">\r\n</app-sidebar-nav-items>\r\n"
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLXNpZGViYXItbmF2LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bjb3JldWkvYW5ndWxhci8iLCJzb3VyY2VzIjpbImxpYi9zaWRlYmFyL2FwcC1zaWRlYmFyLW5hdi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQWEsU0FBUyxFQUFpQixNQUFNLGVBQWUsQ0FBQztBQUMvRyxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFekM7SUFXRSxnQ0FDUyxNQUFjLEVBQ2IsUUFBbUIsRUFDbkIsV0FBdUI7UUFGeEIsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNiLGFBQVEsR0FBUixRQUFRLENBQVc7UUFDbkIsZ0JBQVcsR0FBWCxXQUFXLENBQVk7UUFQUCxTQUFJLEdBQUcsS0FBSyxDQUFDO1FBU3JDLFFBQVEsQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLGFBQWEsRUFBRSxhQUFhLENBQUMsQ0FBQztJQUM5RCxDQUFDOzs7OztJQUVNLDRDQUFXOzs7O0lBQWxCLFVBQW1CLE9BQXNCO1FBQ3ZDLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQztJQUN2RSxDQUFDOztnQkFyQkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxpQkFBaUI7b0JBQzNCLHFIQUErQztpQkFDaEQ7Ozs7Z0JBTFEsTUFBTTtnQkFEZ0QsU0FBUztnQkFBcEQsVUFBVTs7OzJCQVEzQixLQUFLO3VCQUVMLFdBQVcsU0FBQyxXQUFXOztJQWUxQiw2QkFBQztDQUFBLEFBdEJELElBc0JDO1NBbEJZLHNCQUFzQjs7O0lBQ2pDLDBDQUE4Qjs7SUFFOUIsc0NBQXVDOztJQUV2QywrQ0FBaUM7O0lBRy9CLHdDQUFxQjs7Ozs7SUFDckIsMENBQTJCOzs7OztJQUMzQiw2Q0FBK0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEVsZW1lbnRSZWYsIEhvc3RCaW5kaW5nLCBJbnB1dCwgT25DaGFuZ2VzLCBSZW5kZXJlcjIsIFNpbXBsZUNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYXBwLXNpZGViYXItbmF2JyxcclxuICB0ZW1wbGF0ZVVybDogJy4vYXBwLXNpZGViYXItbmF2LmNvbXBvbmVudC5odG1sJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgQXBwU2lkZWJhck5hdkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XHJcbiAgQElucHV0KCkgbmF2SXRlbXM6IEFycmF5PGFueT47XHJcblxyXG4gIEBIb3N0QmluZGluZygnYXR0ci5yb2xlJykgcm9sZSA9ICduYXYnO1xyXG5cclxuICBwdWJsaWMgbmF2SXRlbXNBcnJheTogQXJyYXk8YW55PjtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwdWJsaWMgcm91dGVyOiBSb3V0ZXIsXHJcbiAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsXHJcbiAgICBwcml2YXRlIGhvc3RFbGVtZW50OiBFbGVtZW50UmVmXHJcbiAgKSB7XHJcbiAgICByZW5kZXJlci5hZGRDbGFzcyhob3N0RWxlbWVudC5uYXRpdmVFbGVtZW50LCAnc2lkZWJhci1uYXYnKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XHJcbiAgICB0aGlzLm5hdkl0ZW1zQXJyYXkgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHRoaXMubmF2SXRlbXMgfHwgW10pKTtcclxuICB9XHJcbn1cclxuIl19