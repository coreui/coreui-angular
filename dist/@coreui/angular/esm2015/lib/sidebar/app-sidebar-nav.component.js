/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ElementRef, HostBinding, Input, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
export class AppSidebarNavComponent {
    /**
     * @param {?} router
     * @param {?} renderer
     * @param {?} hostElement
     */
    constructor(router, renderer, hostElement) {
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
    { type: Router },
    { type: Renderer2 },
    { type: ElementRef }
];
AppSidebarNavComponent.propDecorators = {
    navItems: [{ type: Input }],
    role: [{ type: HostBinding, args: ['attr.role',] }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLXNpZGViYXItbmF2LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bjb3JldWkvYW5ndWxhci8iLCJzb3VyY2VzIjpbImxpYi9zaWRlYmFyL2FwcC1zaWRlYmFyLW5hdi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQWEsU0FBUyxFQUFpQixNQUFNLGVBQWUsQ0FBQztBQUMvRyxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFRekMsTUFBTSxPQUFPLHNCQUFzQjs7Ozs7O0lBT2pDLFlBQ1MsTUFBYyxFQUNiLFFBQW1CLEVBQ25CLFdBQXVCO1FBRnhCLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDYixhQUFRLEdBQVIsUUFBUSxDQUFXO1FBQ25CLGdCQUFXLEdBQVgsV0FBVyxDQUFZO1FBVHhCLGFBQVEsR0FBZSxFQUFFLENBQUM7UUFFVCxTQUFJLEdBQUcsS0FBSyxDQUFDO1FBRWhDLGtCQUFhLEdBQWUsRUFBRSxDQUFDO1FBT3BDLFFBQVEsQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLGFBQWEsRUFBRSxhQUFhLENBQUMsQ0FBQztJQUM5RCxDQUFDOzs7OztJQUVNLFdBQVcsQ0FBQyxPQUFzQjtRQUN2QyxJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7SUFDakYsQ0FBQzs7O1lBckJGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsa0NBQWtDO2dCQUM1Qyw2R0FBK0M7YUFDaEQ7Ozs7WUFQUSxNQUFNO1lBRGdELFNBQVM7WUFBcEQsVUFBVTs7O3VCQVUzQixLQUFLO21CQUVMLFdBQVcsU0FBQyxXQUFXOzs7O0lBRnhCLDBDQUFtQzs7SUFFbkMsc0NBQXVDOztJQUV2QywrQ0FBc0M7O0lBR3BDLHdDQUFxQjs7Ozs7SUFDckIsMENBQTJCOzs7OztJQUMzQiw2Q0FBK0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEVsZW1lbnRSZWYsIEhvc3RCaW5kaW5nLCBJbnB1dCwgT25DaGFuZ2VzLCBSZW5kZXJlcjIsIFNpbXBsZUNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuXHJcbmltcG9ydCB7IElOYXZEYXRhIH0gZnJvbSAnLi9hcHAtc2lkZWJhci1uYXYnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhcHAtc2lkZWJhci1uYXYsIGN1aS1zaWRlYmFyLW5hdicsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2FwcC1zaWRlYmFyLW5hdi5jb21wb25lbnQuaHRtbCdcclxufSlcclxuZXhwb3J0IGNsYXNzIEFwcFNpZGViYXJOYXZDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xyXG4gIEBJbnB1dCgpIG5hdkl0ZW1zOiBJTmF2RGF0YVtdID0gW107XHJcblxyXG4gIEBIb3N0QmluZGluZygnYXR0ci5yb2xlJykgcm9sZSA9ICduYXYnO1xyXG5cclxuICBwdWJsaWMgbmF2SXRlbXNBcnJheTogSU5hdkRhdGFbXSA9IFtdO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHB1YmxpYyByb3V0ZXI6IFJvdXRlcixcclxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcclxuICAgIHByaXZhdGUgaG9zdEVsZW1lbnQ6IEVsZW1lbnRSZWZcclxuICApIHtcclxuICAgIHJlbmRlcmVyLmFkZENsYXNzKGhvc3RFbGVtZW50Lm5hdGl2ZUVsZW1lbnQsICdzaWRlYmFyLW5hdicpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcclxuICAgIHRoaXMubmF2SXRlbXNBcnJheSA9IEFycmF5LmlzQXJyYXkodGhpcy5uYXZJdGVtcykgPyB0aGlzLm5hdkl0ZW1zLnNsaWNlKCkgOiBbXTtcclxuICB9XHJcbn1cclxuIl19