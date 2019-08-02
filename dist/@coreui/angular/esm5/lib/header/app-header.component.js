/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ElementRef, Input, Inject, Renderer2 } from '@angular/core';
import { DOCUMENT } from '@angular/common';
var AppHeaderComponent = /** @class */ (function () {
    function AppHeaderComponent(document, renderer, hostElement) {
        this.document = document;
        this.renderer = renderer;
        this.hostElement = hostElement;
        this.navbarBrandText = { icon: '🅲', text: '🅲 CoreUI' };
        // deprecated, use navbarBrandRouterLink instead
        this.navbarBrandRouterLink = '';
        this.fixedClass = 'header-fixed';
        this.breakpoints = ['xl', 'lg', 'md', 'sm', 'xs'];
        this.sidebarTogglerClass = 'd-none d-md-block';
        this.sidebarTogglerMobileClass = 'd-lg-none';
        this.asideTogglerClass = 'd-none d-md-block';
        this.asideTogglerMobileClass = 'd-lg-none';
        renderer.addClass(hostElement.nativeElement, 'app-header');
        renderer.addClass(hostElement.nativeElement, 'navbar');
    }
    /**
     * @return {?}
     */
    AppHeaderComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.isFixed(this.fixed);
        this.navbarBrandImg = Boolean(this.navbarBrand || this.navbarBrandFull || this.navbarBrandMinimized);
        this.navbarBrandRouterLink = this.navbarBrandRouterLink[0] ? this.navbarBrandRouterLink : this.navbarBrandHref;
        this.sidebarTogglerClass = this.setToggerBreakpointClass((/** @type {?} */ (this.sidebarToggler)));
        this.sidebarTogglerMobileClass = this.setToggerMobileBreakpointClass((/** @type {?} */ (this.sidebarToggler)));
        this.asideTogglerClass = this.setToggerBreakpointClass((/** @type {?} */ (this.asideMenuToggler)));
        this.asideTogglerMobileClass = this.setToggerMobileBreakpointClass((/** @type {?} */ (this.asideMenuToggler)));
    };
    /**
     * @return {?}
     */
    AppHeaderComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.renderer.removeClass(this.document.body, this.fixedClass);
    };
    /**
     * @param {?=} fixed
     * @return {?}
     */
    AppHeaderComponent.prototype.isFixed = /**
     * @param {?=} fixed
     * @return {?}
     */
    function (fixed) {
        if (fixed === void 0) { fixed = this.fixed; }
        if (fixed) {
            this.renderer.addClass(this.document.body, this.fixedClass);
        }
    };
    /**
     * @param {?=} breakpoint
     * @return {?}
     */
    AppHeaderComponent.prototype.setToggerBreakpointClass = /**
     * @param {?=} breakpoint
     * @return {?}
     */
    function (breakpoint) {
        if (breakpoint === void 0) { breakpoint = 'md'; }
        /** @type {?} */
        var togglerClass = 'd-none d-md-block';
        if (this.breakpoints.includes(breakpoint)) {
            /** @type {?} */
            var breakpointIndex = this.breakpoints.indexOf(breakpoint);
            togglerClass = "d-none d-" + breakpoint + "-block";
        }
        return togglerClass;
    };
    /**
     * @param {?=} breakpoint
     * @return {?}
     */
    AppHeaderComponent.prototype.setToggerMobileBreakpointClass = /**
     * @param {?=} breakpoint
     * @return {?}
     */
    function (breakpoint) {
        if (breakpoint === void 0) { breakpoint = 'lg'; }
        /** @type {?} */
        var togglerClass = 'd-lg-none';
        if (this.breakpoints.includes(breakpoint)) {
            togglerClass = "d-" + breakpoint + "-none";
        }
        return togglerClass;
    };
    AppHeaderComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-header, cui-header',
                    template: "<ng-template [ngIf]=\"mobileSidebarToggler != false\">\r\n  <button class=\"navbar-toggler {{sidebarTogglerMobileClass}}\" type=\"button\" appSidebarToggler>\r\n    <span class=\"navbar-toggler-icon\"></span>\r\n  </button>\r\n</ng-template>\r\n<a class=\"navbar-brand\" [routerLink]=\"navbarBrandRouterLink\">\r\n  <ng-template [ngIf]=\"navbarBrandImg\">\r\n    <img *ngIf=\"navbarBrand\"\r\n         [appHtmlAttr]=\"navbarBrand\"\r\n         [ngClass]=\"'navbar-brand'\">\r\n    <img *ngIf=\"navbarBrandFull\"\r\n         [appHtmlAttr]=\"navbarBrandFull\"\r\n         [ngClass]=\"'navbar-brand-full'\">\r\n    <img *ngIf=\"navbarBrandMinimized\"\r\n         [appHtmlAttr]=\"navbarBrandMinimized\"\r\n         [ngClass]=\"'navbar-brand-minimized'\">\r\n  </ng-template>\r\n  <ng-template [ngIf]=\"!navbarBrandImg\">\r\n    <div class=\"navbar-brand-full\" [innerHTML]=\"navbarBrandText.text\"></div>\r\n    <div class=\"navbar-brand-minimized\" [innerHTML]=\"navbarBrandText.icon\"></div>\r\n  </ng-template>\r\n</a>\r\n<ng-template [ngIf]=\"sidebarToggler != false\">\r\n  <button class=\"navbar-toggler {{sidebarTogglerClass}}\" type=\"button\" [appSidebarToggler]=\"sidebarToggler\">\r\n    <span class=\"navbar-toggler-icon\"></span>\r\n  </button>\r\n</ng-template>\r\n<ng-content></ng-content>\r\n<ng-template [ngIf]=\"asideMenuToggler != false\">\r\n  <button class=\"navbar-toggler {{asideTogglerClass}}\" type=\"button\" [appAsideMenuToggler]=\"asideMenuToggler\">\r\n    <span class=\"navbar-toggler-icon\"></span>\r\n  </button>\r\n</ng-template>\r\n<ng-template [ngIf]=\"mobileAsideMenuToggler != false\">\r\n  <button class=\"navbar-toggler {{asideTogglerMobileClass}}\" type=\"button\" appAsideMenuToggler>\r\n    <span class=\"navbar-toggler-icon\"></span>\r\n  </button>\r\n</ng-template>\r\n"
                }] }
    ];
    /** @nocollapse */
    AppHeaderComponent.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] },
        { type: Renderer2 },
        { type: ElementRef }
    ]; };
    AppHeaderComponent.propDecorators = {
        fixed: [{ type: Input }],
        navbarBrand: [{ type: Input }],
        navbarBrandFull: [{ type: Input }],
        navbarBrandMinimized: [{ type: Input }],
        navbarBrandText: [{ type: Input }],
        navbarBrandHref: [{ type: Input }],
        navbarBrandRouterLink: [{ type: Input }],
        sidebarToggler: [{ type: Input }],
        mobileSidebarToggler: [{ type: Input }],
        asideMenuToggler: [{ type: Input }],
        mobileAsideMenuToggler: [{ type: Input }]
    };
    return AppHeaderComponent;
}());
export { AppHeaderComponent };
if (false) {
    /** @type {?} */
    AppHeaderComponent.prototype.fixed;
    /** @type {?} */
    AppHeaderComponent.prototype.navbarBrand;
    /** @type {?} */
    AppHeaderComponent.prototype.navbarBrandFull;
    /** @type {?} */
    AppHeaderComponent.prototype.navbarBrandMinimized;
    /** @type {?} */
    AppHeaderComponent.prototype.navbarBrandText;
    /** @type {?} */
    AppHeaderComponent.prototype.navbarBrandHref;
    /** @type {?} */
    AppHeaderComponent.prototype.navbarBrandRouterLink;
    /** @type {?} */
    AppHeaderComponent.prototype.sidebarToggler;
    /** @type {?} */
    AppHeaderComponent.prototype.mobileSidebarToggler;
    /** @type {?} */
    AppHeaderComponent.prototype.asideMenuToggler;
    /** @type {?} */
    AppHeaderComponent.prototype.mobileAsideMenuToggler;
    /**
     * @type {?}
     * @private
     */
    AppHeaderComponent.prototype.fixedClass;
    /** @type {?} */
    AppHeaderComponent.prototype.navbarBrandImg;
    /**
     * @type {?}
     * @private
     */
    AppHeaderComponent.prototype.breakpoints;
    /** @type {?} */
    AppHeaderComponent.prototype.sidebarTogglerClass;
    /** @type {?} */
    AppHeaderComponent.prototype.sidebarTogglerMobileClass;
    /** @type {?} */
    AppHeaderComponent.prototype.asideTogglerClass;
    /** @type {?} */
    AppHeaderComponent.prototype.asideTogglerMobileClass;
    /**
     * @type {?}
     * @private
     */
    AppHeaderComponent.prototype.document;
    /**
     * @type {?}
     * @private
     */
    AppHeaderComponent.prototype.renderer;
    /**
     * @type {?}
     * @private
     */
    AppHeaderComponent.prototype.hostElement;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLWhlYWRlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY29yZXVpL2FuZ3VsYXIvIiwic291cmNlcyI6WyJsaWIvaGVhZGVyL2FwcC1oZWFkZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQXFCLE1BQU0sRUFBRSxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDakcsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRTNDO0lBOEJFLDRCQUM0QixRQUFhLEVBQy9CLFFBQW1CLEVBQ25CLFdBQXVCO1FBRkwsYUFBUSxHQUFSLFFBQVEsQ0FBSztRQUMvQixhQUFRLEdBQVIsUUFBUSxDQUFXO1FBQ25CLGdCQUFXLEdBQVgsV0FBVyxDQUFZO1FBdEJ4QixvQkFBZSxHQUFRLEVBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFDLENBQUM7O1FBRXZELDBCQUFxQixHQUFtQixFQUFFLENBQUM7UUFRbkMsZUFBVSxHQUFHLGNBQWMsQ0FBQztRQUc1QixnQkFBVyxHQUFHLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQzlELHdCQUFtQixHQUFHLG1CQUFtQixDQUFDO1FBQzFDLDhCQUF5QixHQUFHLFdBQVcsQ0FBQztRQUN4QyxzQkFBaUIsR0FBRyxtQkFBbUIsQ0FBQztRQUN4Qyw0QkFBdUIsR0FBRyxXQUFXLENBQUM7UUFPcEMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsYUFBYSxFQUFFLFlBQVksQ0FBQyxDQUFDO1FBQzNELFFBQVEsQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLGFBQWEsRUFBRSxRQUFRLENBQUMsQ0FBQztJQUN6RCxDQUFDOzs7O0lBRUQscUNBQVE7OztJQUFSO1FBQ0UsSUFBSSxDQUFDLE9BQU8s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b0Q7O0lBRXBELDRDQUEwQzs7SUFDMUMsa0RBQXVDOztJQUV2Qyw4Q0FBNEM7O0lBQzVDLG9EQUF5Qzs7Ozs7SUFFekMsd0NBQTZDOztJQUM3Qyw0Q0FBd0I7Ozs7O0lBRXhCLHlDQUE4RDs7SUFDOUQsaURBQTBDOztJQUMxQyx1REFBd0M7O0lBQ3hDLCtDQUF3Qzs7SUFDeEMscURBQXNDOzs7OztJQUdwQyxzQ0FBdUM7Ozs7O0lBQ3ZDLHNDQUEyQjs7Ozs7SUFDM0IseUNBQStCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIEVsZW1lbnRSZWYsIElucHV0LCBPbkluaXQsIE9uRGVzdHJveSwgSW5qZWN0LCBSZW5kZXJlcjJ9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBET0NVTUVOVCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FwcC1oZWFkZXIsIGN1aS1oZWFkZXInLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9hcHAtaGVhZGVyLmNvbXBvbmVudC5odG1sJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgQXBwSGVhZGVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xyXG5cclxuICBASW5wdXQoKSBmaXhlZDogYm9vbGVhbjtcclxuXHJcbiAgQElucHV0KCkgbmF2YmFyQnJhbmQ6IGFueTtcclxuICBASW5wdXQoKSBuYXZiYXJCcmFuZEZ1bGw6IGFueTtcclxuICBASW5wdXQoKSBuYXZiYXJCcmFuZE1pbmltaXplZDogYW55O1xyXG4gIEBJbnB1dCgpIG5hdmJhckJyYW5kVGV4dDogYW55ID0ge2ljb246ICfwn4WyJywgdGV4dDogJ/CfhbIgQ29yZVVJJ307XHJcbiAgQElucHV0KCkgbmF2YmFyQnJhbmRIcmVmOiAnJzsgLy8gZGVwcmVjYXRlZCwgdXNlIG5hdmJhckJyYW5kUm91dGVyTGluayBpbnN0ZWFkXHJcbiAgQElucHV0KCkgbmF2YmFyQnJhbmRSb3V0ZXJMaW5rOiBhbnlbXSB8IHN0cmluZyA9ICcnO1xyXG5cclxuICBASW5wdXQoKSBzaWRlYmFyVG9nZ2xlcjogc3RyaW5nIHwgYm9vbGVhbjtcclxuICBASW5wdXQoKSBtb2JpbGVTaWRlYmFyVG9nZ2xlcjogYm9vbGVhbjtcclxuXHJcbiAgQElucHV0KCkgYXNpZGVNZW51VG9nZ2xlcjogc3RyaW5nIHwgYm9vbGVhbjtcclxuICBASW5wdXQoKSBtb2JpbGVBc2lkZU1lbnVUb2dnbGVyOiBib29sZWFuO1xyXG5cclxuICBwcml2YXRlIHJlYWRvbmx5IGZpeGVkQ2xhc3MgPSAnaGVhZGVyLWZpeGVkJztcclxuICBuYXZiYXJCcmFuZEltZzogYm9vbGVhbjtcclxuXHJcbiAgcHJpdmF0ZSByZWFkb25seSBicmVha3BvaW50cyA9IFsneGwnLCAnbGcnLCAnbWQnLCAnc20nLCAneHMnXTtcclxuICBzaWRlYmFyVG9nZ2xlckNsYXNzID0gJ2Qtbm9uZSBkLW1kLWJsb2NrJztcclxuICBzaWRlYmFyVG9nZ2xlck1vYmlsZUNsYXNzID0gJ2QtbGctbm9uZSc7XHJcbiAgYXNpZGVUb2dnbGVyQ2xhc3MgPSAnZC1ub25lIGQtbWQtYmxvY2snO1xyXG4gIGFzaWRlVG9nZ2xlck1vYmlsZUNsYXNzID0gJ2QtbGctbm9uZSc7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgQEluamVjdChET0NVTUVOVCkgcHJpdmF0ZSBkb2N1bWVudDogYW55LFxyXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLFxyXG4gICAgcHJpdmF0ZSBob3N0RWxlbWVudDogRWxlbWVudFJlZlxyXG4gICkge1xyXG4gICAgcmVuZGVyZXIuYWRkQ2xhc3MoaG9zdEVsZW1lbnQubmF0aXZlRWxlbWVudCwgJ2FwcC1oZWFkZXInKTtcclxuICAgIHJlbmRlcmVyLmFkZENsYXNzKGhvc3RFbGVtZW50Lm5hdGl2ZUVsZW1lbnQsICduYXZiYXInKTtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5pc0ZpeGVkKHRoaXMuZml4ZWQpO1xyXG4gICAgdGhpcy5uYXZiYXJCcmFuZEltZyA9IEJvb2xlYW4odGhpcy5uYXZiYXJCcmFuZCB8fCB0aGlzLm5hdmJhckJyYW5kRnVsbCB8fCB0aGlzLm5hdmJhckJyYW5kTWluaW1pemVkKTtcclxuICAgIHRoaXMubmF2YmFyQnJhbmRSb3V0ZXJMaW5rID0gdGhpcy5uYXZiYXJCcmFuZFJvdXRlckxpbmtbMF0gPyB0aGlzLm5hdmJhckJyYW5kUm91dGVyTGluayA6IHRoaXMubmF2YmFyQnJhbmRIcmVmO1xyXG4gICAgdGhpcy5zaWRlYmFyVG9nZ2xlckNsYXNzID0gdGhpcy5zZXRUb2dnZXJCcmVha3BvaW50Q2xhc3MoPHN0cmluZz50aGlzLnNpZGViYXJUb2dnbGVyKTtcclxuICAgIHRoaXMuc2lkZWJhclRvZ2dsZXJNb2JpbGVDbGFzcyA9IHRoaXMuc2V0VG9nZ2VyTW9iaWxlQnJlYWtwb2ludENsYXNzKDxzdHJpbmc+dGhpcy5zaWRlYmFyVG9nZ2xlcik7XHJcbiAgICB0aGlzLmFzaWRlVG9nZ2xlckNsYXNzID0gdGhpcy5zZXRUb2dnZXJCcmVha3BvaW50Q2xhc3MoPHN0cmluZz50aGlzLmFzaWRlTWVudVRvZ2dsZXIpO1xyXG4gICAgdGhpcy5hc2lkZVRvZ2dsZXJNb2JpbGVDbGFzcyA9IHRoaXMuc2V0VG9nZ2VyTW9iaWxlQnJlYWtwb2ludENsYXNzKDxzdHJpbmc+dGhpcy5hc2lkZU1lbnVUb2dnbGVyKTtcclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgdGhpcy5yZW5kZXJlci5yZW1vdmVDbGFzcyh0aGlzLmRvY3VtZW50LmJvZHksIHRoaXMuZml4ZWRDbGFzcyk7XHJcbiAgfVxyXG5cclxuICBpc0ZpeGVkKGZpeGVkOiBib29sZWFuID0gdGhpcy5maXhlZCk6IHZvaWQge1xyXG4gICAgaWYgKGZpeGVkKSB7XHJcbiAgICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5kb2N1bWVudC5ib2R5LCB0aGlzLmZpeGVkQ2xhc3MpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc2V0VG9nZ2VyQnJlYWtwb2ludENsYXNzKGJyZWFrcG9pbnQgPSAnbWQnKSB7XHJcbiAgICBsZXQgdG9nZ2xlckNsYXNzID0gJ2Qtbm9uZSBkLW1kLWJsb2NrJztcclxuICAgIGlmICh0aGlzLmJyZWFrcG9pbnRzLmluY2x1ZGVzKGJyZWFrcG9pbnQpKSB7XHJcbiAgICAgIGNvbnN0IGJyZWFrcG9pbnRJbmRleCA9IHRoaXMuYnJlYWtwb2ludHMuaW5kZXhPZihicmVha3BvaW50KTtcclxuICAgICAgdG9nZ2xlckNsYXNzID0gYGQtbm9uZSBkLSR7YnJlYWtwb2ludH0tYmxvY2tgO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRvZ2dsZXJDbGFzcztcclxuICB9XHJcblxyXG4gIHNldFRvZ2dlck1vYmlsZUJyZWFrcG9pbnRDbGFzcyhicmVha3BvaW50ID0gJ2xnJykge1xyXG4gICAgbGV0IHRvZ2dsZXJDbGFzcyA9ICdkLWxnLW5vbmUnO1xyXG4gICAgaWYgKHRoaXMuYnJlYWtwb2ludHMuaW5jbHVkZXMoYnJlYWtwb2ludCkpIHtcclxuICAgICAgdG9nZ2xlckNsYXNzID0gYGQtJHticmVha3BvaW50fS1ub25lYDtcclxuICAgIH1cclxuICAgIHJldHVybiB0b2dnbGVyQ2xhc3M7XHJcbiAgfVxyXG59XHJcbiJdfQ==