/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
                    template: "<ng-template [ngIf]=\"mobileSidebarToggler != false\">\n  <button class=\"navbar-toggler {{sidebarTogglerMobileClass}}\" type=\"button\" appSidebarToggler>\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n</ng-template>\n<a class=\"navbar-brand\" [routerLink]=\"navbarBrandRouterLink\">\n  <ng-template [ngIf]=\"navbarBrandImg\">\n    <img *ngIf=\"navbarBrand\"\n         [appHtmlAttr]=\"navbarBrand\"\n         [ngClass]=\"'navbar-brand'\">\n    <img *ngIf=\"navbarBrandFull\"\n         [appHtmlAttr]=\"navbarBrandFull\"\n         [ngClass]=\"'navbar-brand-full'\">\n    <img *ngIf=\"navbarBrandMinimized\"\n         [appHtmlAttr]=\"navbarBrandMinimized\"\n         [ngClass]=\"'navbar-brand-minimized'\">\n  </ng-template>\n  <ng-template [ngIf]=\"!navbarBrandImg\">\n    <div class=\"navbar-brand-full\" [innerHTML]=\"navbarBrandText.text\"></div>\n    <div class=\"navbar-brand-minimized\" [innerHTML]=\"navbarBrandText.icon\"></div>\n  </ng-template>\n</a>\n<ng-template [ngIf]=\"sidebarToggler != false\">\n  <button class=\"navbar-toggler {{sidebarTogglerClass}}\" type=\"button\" [appSidebarToggler]=\"sidebarToggler\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n</ng-template>\n<ng-content></ng-content>\n<ng-template [ngIf]=\"asideMenuToggler != false\">\n  <button class=\"navbar-toggler {{asideTogglerClass}}\" type=\"button\" [appAsideMenuToggler]=\"asideMenuToggler\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n</ng-template>\n<ng-template [ngIf]=\"mobileAsideMenuToggler != false\">\n  <button class=\"navbar-toggler {{asideTogglerMobileClass}}\" type=\"button\" appAsideMenuToggler>\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n</ng-template>\n"
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLWhlYWRlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY29yZXVpL2FuZ3VsYXIvIiwic291cmNlcyI6WyJsaWIvaGVhZGVyL2FwcC1oZWFkZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQXFCLE1BQU0sRUFBRSxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDakcsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRTNDO0lBOEJFLDRCQUM0QixRQUFhLEVBQy9CLFFBQW1CLEVBQ25CLFdBQXVCO1FBRkwsYUFBUSxHQUFSLFFBQVEsQ0FBSztRQUMvQixhQUFRLEdBQVIsUUFBUSxDQUFXO1FBQ25CLGdCQUFXLEdBQVgsV0FBVyxDQUFZO1FBdEJ4QixvQkFBZSxHQUFRLEVBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFDLENBQUM7O1FBRXZELDBCQUFxQixHQUFtQixFQUFFLENBQUM7UUFRbkMsZUFBVSxHQUFHLGNBQWMsQ0FBQztRQUc1QixnQkFBVyxHQUFHLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQzlELHdCQUFtQixHQUFHLG1CQUFtQixDQUFDO1FBQzFDLDhCQUF5QixHQUFHLFdBQVcsQ0FBQztRQUN4QyxzQkFBaUIsR0FBRyxtQkFBbUIsQ0FBQztRQUN4Qyw0QkFBdUIsR0FBRyxXQUFXLENBQUM7UUFPcEMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsYUFBYSxFQUFFLFlBQVksQ0FBQyxDQUFDO1FBQzNELFFBQVEsQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLGFBQWEsRUFBRSxRQUFRLENBQUMsQ0FBQztJQUN6RCxDQUFDOzs7O0lBRUQscUNBQVE7OztJQUFSO1FBQ0UsSUFBSSxDQUFDLE9BQU8s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b0Q7O0lBRXBELDRDQUEwQzs7SUFDMUMsa0RBQXVDOztJQUV2Qyw4Q0FBNEM7O0lBQzVDLG9EQUF5Qzs7Ozs7SUFFekMsd0NBQTZDOztJQUM3Qyw0Q0FBd0I7Ozs7O0lBRXhCLHlDQUE4RDs7SUFDOUQsaURBQTBDOztJQUMxQyx1REFBd0M7O0lBQ3hDLCtDQUF3Qzs7SUFDeEMscURBQXNDOzs7OztJQUdwQyxzQ0FBdUM7Ozs7O0lBQ3ZDLHNDQUEyQjs7Ozs7SUFDM0IseUNBQStCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIEVsZW1lbnRSZWYsIElucHV0LCBPbkluaXQsIE9uRGVzdHJveSwgSW5qZWN0LCBSZW5kZXJlcjJ9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRE9DVU1FTlQgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtaGVhZGVyLCBjdWktaGVhZGVyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2FwcC1oZWFkZXIuY29tcG9uZW50Lmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIEFwcEhlYWRlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcblxuICBASW5wdXQoKSBmaXhlZDogYm9vbGVhbjtcblxuICBASW5wdXQoKSBuYXZiYXJCcmFuZDogYW55O1xuICBASW5wdXQoKSBuYXZiYXJCcmFuZEZ1bGw6IGFueTtcbiAgQElucHV0KCkgbmF2YmFyQnJhbmRNaW5pbWl6ZWQ6IGFueTtcbiAgQElucHV0KCkgbmF2YmFyQnJhbmRUZXh0OiBhbnkgPSB7aWNvbjogJ/CfhbInLCB0ZXh0OiAn8J+FsiBDb3JlVUknfTtcbiAgQElucHV0KCkgbmF2YmFyQnJhbmRIcmVmOiAnJzsgLy8gZGVwcmVjYXRlZCwgdXNlIG5hdmJhckJyYW5kUm91dGVyTGluayBpbnN0ZWFkXG4gIEBJbnB1dCgpIG5hdmJhckJyYW5kUm91dGVyTGluazogYW55W10gfCBzdHJpbmcgPSAnJztcblxuICBASW5wdXQoKSBzaWRlYmFyVG9nZ2xlcjogc3RyaW5nIHwgYm9vbGVhbjtcbiAgQElucHV0KCkgbW9iaWxlU2lkZWJhclRvZ2dsZXI6IGJvb2xlYW47XG5cbiAgQElucHV0KCkgYXNpZGVNZW51VG9nZ2xlcjogc3RyaW5nIHwgYm9vbGVhbjtcbiAgQElucHV0KCkgbW9iaWxlQXNpZGVNZW51VG9nZ2xlcjogYm9vbGVhbjtcblxuICBwcml2YXRlIHJlYWRvbmx5IGZpeGVkQ2xhc3MgPSAnaGVhZGVyLWZpeGVkJztcbiAgbmF2YmFyQnJhbmRJbWc6IGJvb2xlYW47XG5cbiAgcHJpdmF0ZSByZWFkb25seSBicmVha3BvaW50cyA9IFsneGwnLCAnbGcnLCAnbWQnLCAnc20nLCAneHMnXTtcbiAgc2lkZWJhclRvZ2dsZXJDbGFzcyA9ICdkLW5vbmUgZC1tZC1ibG9jayc7XG4gIHNpZGViYXJUb2dnbGVyTW9iaWxlQ2xhc3MgPSAnZC1sZy1ub25lJztcbiAgYXNpZGVUb2dnbGVyQ2xhc3MgPSAnZC1ub25lIGQtbWQtYmxvY2snO1xuICBhc2lkZVRvZ2dsZXJNb2JpbGVDbGFzcyA9ICdkLWxnLW5vbmUnO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIEBJbmplY3QoRE9DVU1FTlQpIHByaXZhdGUgZG9jdW1lbnQ6IGFueSxcbiAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgcHJpdmF0ZSBob3N0RWxlbWVudDogRWxlbWVudFJlZlxuICApIHtcbiAgICByZW5kZXJlci5hZGRDbGFzcyhob3N0RWxlbWVudC5uYXRpdmVFbGVtZW50LCAnYXBwLWhlYWRlcicpO1xuICAgIHJlbmRlcmVyLmFkZENsYXNzKGhvc3RFbGVtZW50Lm5hdGl2ZUVsZW1lbnQsICduYXZiYXInKTtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuaXNGaXhlZCh0aGlzLmZpeGVkKTtcbiAgICB0aGlzLm5hdmJhckJyYW5kSW1nID0gQm9vbGVhbih0aGlzLm5hdmJhckJyYW5kIHx8IHRoaXMubmF2YmFyQnJhbmRGdWxsIHx8IHRoaXMubmF2YmFyQnJhbmRNaW5pbWl6ZWQpO1xuICAgIHRoaXMubmF2YmFyQnJhbmRSb3V0ZXJMaW5rID0gdGhpcy5uYXZiYXJCcmFuZFJvdXRlckxpbmtbMF0gPyB0aGlzLm5hdmJhckJyYW5kUm91dGVyTGluayA6IHRoaXMubmF2YmFyQnJhbmRIcmVmO1xuICAgIHRoaXMuc2lkZWJhclRvZ2dsZXJDbGFzcyA9IHRoaXMuc2V0VG9nZ2VyQnJlYWtwb2ludENsYXNzKDxzdHJpbmc+dGhpcy5zaWRlYmFyVG9nZ2xlcik7XG4gICAgdGhpcy5zaWRlYmFyVG9nZ2xlck1vYmlsZUNsYXNzID0gdGhpcy5zZXRUb2dnZXJNb2JpbGVCcmVha3BvaW50Q2xhc3MoPHN0cmluZz50aGlzLnNpZGViYXJUb2dnbGVyKTtcbiAgICB0aGlzLmFzaWRlVG9nZ2xlckNsYXNzID0gdGhpcy5zZXRUb2dnZXJCcmVha3BvaW50Q2xhc3MoPHN0cmluZz50aGlzLmFzaWRlTWVudVRvZ2dsZXIpO1xuICAgIHRoaXMuYXNpZGVUb2dnbGVyTW9iaWxlQ2xhc3MgPSB0aGlzLnNldFRvZ2dlck1vYmlsZUJyZWFrcG9pbnRDbGFzcyg8c3RyaW5nPnRoaXMuYXNpZGVNZW51VG9nZ2xlcik7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMuZG9jdW1lbnQuYm9keSwgdGhpcy5maXhlZENsYXNzKTtcbiAgfVxuXG4gIGlzRml4ZWQoZml4ZWQ6IGJvb2xlYW4gPSB0aGlzLmZpeGVkKTogdm9pZCB7XG4gICAgaWYgKGZpeGVkKSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMuZG9jdW1lbnQuYm9keSwgdGhpcy5maXhlZENsYXNzKTtcbiAgICB9XG4gIH1cblxuICBzZXRUb2dnZXJCcmVha3BvaW50Q2xhc3MoYnJlYWtwb2ludCA9ICdtZCcpIHtcbiAgICBsZXQgdG9nZ2xlckNsYXNzID0gJ2Qtbm9uZSBkLW1kLWJsb2NrJztcbiAgICBpZiAodGhpcy5icmVha3BvaW50cy5pbmNsdWRlcyhicmVha3BvaW50KSkge1xuICAgICAgY29uc3QgYnJlYWtwb2ludEluZGV4ID0gdGhpcy5icmVha3BvaW50cy5pbmRleE9mKGJyZWFrcG9pbnQpO1xuICAgICAgdG9nZ2xlckNsYXNzID0gYGQtbm9uZSBkLSR7YnJlYWtwb2ludH0tYmxvY2tgO1xuICAgIH1cbiAgICByZXR1cm4gdG9nZ2xlckNsYXNzO1xuICB9XG5cbiAgc2V0VG9nZ2VyTW9iaWxlQnJlYWtwb2ludENsYXNzKGJyZWFrcG9pbnQgPSAnbGcnKSB7XG4gICAgbGV0IHRvZ2dsZXJDbGFzcyA9ICdkLWxnLW5vbmUnO1xuICAgIGlmICh0aGlzLmJyZWFrcG9pbnRzLmluY2x1ZGVzKGJyZWFrcG9pbnQpKSB7XG4gICAgICB0b2dnbGVyQ2xhc3MgPSBgZC0ke2JyZWFrcG9pbnR9LW5vbmVgO1xuICAgIH1cbiAgICByZXR1cm4gdG9nZ2xlckNsYXNzO1xuICB9XG59XG4iXX0=