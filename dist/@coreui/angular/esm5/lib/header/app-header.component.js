/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Inject, Renderer2, HostBinding } from '@angular/core';
import { DOCUMENT } from '@angular/common';
var AppHeaderComponent = /** @class */ (function () {
    function AppHeaderComponent(document, renderer) {
        this.document = document;
        this.renderer = renderer;
        this.navbarBrandText = { icon: '🅲', text: '🅲 CoreUI' };
        // deprecated, use navbarBrandRouterLink instead
        this.navbarBrandRouterLink = '';
        this.fixedClass = 'header-fixed';
        this._header = true;
        this._navbar = true;
        this.breakpoints = ['xl', 'lg', 'md', 'sm', 'xs'];
        this.sidebarTogglerClass = 'd-none d-md-block';
        this.sidebarTogglerMobileClass = 'd-lg-none';
        this.asideTogglerClass = 'd-none d-md-block';
        this.asideTogglerMobileClass = 'd-lg-none';
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
        { type: Renderer2 }
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
        mobileAsideMenuToggler: [{ type: Input }],
        _header: [{ type: HostBinding, args: ['class.app-header',] }],
        _navbar: [{ type: HostBinding, args: ['class.navbar',] }]
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
    AppHeaderComponent.prototype._header;
    /** @type {?} */
    AppHeaderComponent.prototype._navbar;
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
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLWhlYWRlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY29yZXVpL2FuZ3VsYXIvIiwic291cmNlcyI6WyJsaWIvaGVhZGVyL2FwcC1oZWFkZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLEtBQUssRUFBcUIsTUFBTSxFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDbEcsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRTNDO0lBa0NFLDRCQUM0QixRQUFhLEVBQy9CLFFBQW1CO1FBREQsYUFBUSxHQUFSLFFBQVEsQ0FBSztRQUMvQixhQUFRLEdBQVIsUUFBUSxDQUFXO1FBekJwQixvQkFBZSxHQUFRLEVBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFDLENBQUM7O1FBRXZELDBCQUFxQixHQUFtQixFQUFFLENBQUM7UUFRbkMsZUFBVSxHQUFHLGNBQWMsQ0FBQztRQUVaLFlBQU8sR0FBRyxJQUFJLENBQUM7UUFDbkIsWUFBTyxHQUFHLElBQUksQ0FBQztRQUkzQixnQkFBVyxHQUFHLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQzlELHdCQUFtQixHQUFHLG1CQUFtQixDQUFDO1FBQzFDLDhCQUF5QixHQUFHLFdBQVcsQ0FBQztRQUN4QyxzQkFBaUIsR0FBRyxtQkFBbUIsQ0FBQztRQUN4Qyw0QkFBdUIsR0FBRyxXQUFXLENBQUM7SUFLbEMsQ0FBQzs7OztJQUVMLHFDQUFROzs7SUFBUjtRQUNFLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3pCLElBQUksQ0FBQyxjQUFjLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxXQUFXLElBQUksSUFBSSxDQUFDLGVBQWUsSUFBSSxJQUFJ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O0lBRTdDLHFDQUFnRDs7SUFDaEQscUNBQTRDOztJQUU1Qyw0Q0FBd0I7Ozs7O0lBRXhCLHlDQUE4RDs7SUFDOUQsaURBQTBDOztJQUMxQyx1REFBd0M7O0lBQ3hDLCtDQUF3Qzs7SUFDeEMscURBQXNDOzs7OztJQUdwQyxzQ0FBdUM7Ozs7O0lBQ3ZDLHNDQUEyQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBJbnB1dCwgT25Jbml0LCBPbkRlc3Ryb3ksIEluamVjdCwgUmVuZGVyZXIyLCBIb3N0QmluZGluZ30gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBET0NVTUVOVCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC1oZWFkZXIsIGN1aS1oZWFkZXInLFxuICB0ZW1wbGF0ZVVybDogJy4vYXBwLWhlYWRlci5jb21wb25lbnQuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgQXBwSGVhZGVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuXG4gIEBJbnB1dCgpIGZpeGVkOiBib29sZWFuO1xuXG4gIEBJbnB1dCgpIG5hdmJhckJyYW5kOiBhbnk7XG4gIEBJbnB1dCgpIG5hdmJhckJyYW5kRnVsbDogYW55O1xuICBASW5wdXQoKSBuYXZiYXJCcmFuZE1pbmltaXplZDogYW55O1xuICBASW5wdXQoKSBuYXZiYXJCcmFuZFRleHQ6IGFueSA9IHtpY29uOiAn8J+FsicsIHRleHQ6ICfwn4WyIENvcmVVSSd9O1xuICBASW5wdXQoKSBuYXZiYXJCcmFuZEhyZWY6ICcnOyAvLyBkZXByZWNhdGVkLCB1c2UgbmF2YmFyQnJhbmRSb3V0ZXJMaW5rIGluc3RlYWRcbiAgQElucHV0KCkgbmF2YmFyQnJhbmRSb3V0ZXJMaW5rOiBhbnlbXSB8IHN0cmluZyA9ICcnO1xuXG4gIEBJbnB1dCgpIHNpZGViYXJUb2dnbGVyOiBzdHJpbmcgfCBib29sZWFuO1xuICBASW5wdXQoKSBtb2JpbGVTaWRlYmFyVG9nZ2xlcjogYm9vbGVhbjtcblxuICBASW5wdXQoKSBhc2lkZU1lbnVUb2dnbGVyOiBzdHJpbmcgfCBib29sZWFuO1xuICBASW5wdXQoKSBtb2JpbGVBc2lkZU1lbnVUb2dnbGVyOiBib29sZWFuO1xuXG4gIHByaXZhdGUgcmVhZG9ubHkgZml4ZWRDbGFzcyA9ICdoZWFkZXItZml4ZWQnO1xuXG4gIEBIb3N0QmluZGluZygnY2xhc3MuYXBwLWhlYWRlcicpIF9oZWFkZXIgPSB0cnVlO1xuICBASG9zdEJpbmRpbmcoJ2NsYXNzLm5hdmJhcicpIF9uYXZiYXIgPSB0cnVlO1xuXG4gIG5hdmJhckJyYW5kSW1nOiBib29sZWFuO1xuXG4gIHByaXZhdGUgcmVhZG9ubHkgYnJlYWtwb2ludHMgPSBbJ3hsJywgJ2xnJywgJ21kJywgJ3NtJywgJ3hzJ107XG4gIHNpZGViYXJUb2dnbGVyQ2xhc3MgPSAnZC1ub25lIGQtbWQtYmxvY2snO1xuICBzaWRlYmFyVG9nZ2xlck1vYmlsZUNsYXNzID0gJ2QtbGctbm9uZSc7XG4gIGFzaWRlVG9nZ2xlckNsYXNzID0gJ2Qtbm9uZSBkLW1kLWJsb2NrJztcbiAgYXNpZGVUb2dnbGVyTW9iaWxlQ2xhc3MgPSAnZC1sZy1ub25lJztcblxuICBjb25zdHJ1Y3RvcihcbiAgICBASW5qZWN0KERPQ1VNRU5UKSBwcml2YXRlIGRvY3VtZW50OiBhbnksXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLFxuICApIHsgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuaXNGaXhlZCh0aGlzLmZpeGVkKTtcbiAgICB0aGlzLm5hdmJhckJyYW5kSW1nID0gQm9vbGVhbih0aGlzLm5hdmJhckJyYW5kIHx8IHRoaXMubmF2YmFyQnJhbmRGdWxsIHx8IHRoaXMubmF2YmFyQnJhbmRNaW5pbWl6ZWQpO1xuICAgIHRoaXMubmF2YmFyQnJhbmRSb3V0ZXJMaW5rID0gdGhpcy5uYXZiYXJCcmFuZFJvdXRlckxpbmtbMF0gPyB0aGlzLm5hdmJhckJyYW5kUm91dGVyTGluayA6IHRoaXMubmF2YmFyQnJhbmRIcmVmO1xuICAgIHRoaXMuc2lkZWJhclRvZ2dsZXJDbGFzcyA9IHRoaXMuc2V0VG9nZ2VyQnJlYWtwb2ludENsYXNzKDxzdHJpbmc+dGhpcy5zaWRlYmFyVG9nZ2xlcik7XG4gICAgdGhpcy5zaWRlYmFyVG9nZ2xlck1vYmlsZUNsYXNzID0gdGhpcy5zZXRUb2dnZXJNb2JpbGVCcmVha3BvaW50Q2xhc3MoPHN0cmluZz50aGlzLnNpZGViYXJUb2dnbGVyKTtcbiAgICB0aGlzLmFzaWRlVG9nZ2xlckNsYXNzID0gdGhpcy5zZXRUb2dnZXJCcmVha3BvaW50Q2xhc3MoPHN0cmluZz50aGlzLmFzaWRlTWVudVRvZ2dsZXIpO1xuICAgIHRoaXMuYXNpZGVUb2dnbGVyTW9iaWxlQ2xhc3MgPSB0aGlzLnNldFRvZ2dlck1vYmlsZUJyZWFrcG9pbnRDbGFzcyg8c3RyaW5nPnRoaXMuYXNpZGVNZW51VG9nZ2xlcik7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMuZG9jdW1lbnQuYm9keSwgdGhpcy5maXhlZENsYXNzKTtcbiAgfVxuXG4gIGlzRml4ZWQoZml4ZWQ6IGJvb2xlYW4gPSB0aGlzLmZpeGVkKTogdm9pZCB7XG4gICAgaWYgKGZpeGVkKSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMuZG9jdW1lbnQuYm9keSwgdGhpcy5maXhlZENsYXNzKTtcbiAgICB9XG4gIH1cblxuICBzZXRUb2dnZXJCcmVha3BvaW50Q2xhc3MoYnJlYWtwb2ludCA9ICdtZCcpIHtcbiAgICBsZXQgdG9nZ2xlckNsYXNzID0gJ2Qtbm9uZSBkLW1kLWJsb2NrJztcbiAgICBpZiAodGhpcy5icmVha3BvaW50cy5pbmNsdWRlcyhicmVha3BvaW50KSkge1xuICAgICAgY29uc3QgYnJlYWtwb2ludEluZGV4ID0gdGhpcy5icmVha3BvaW50cy5pbmRleE9mKGJyZWFrcG9pbnQpO1xuICAgICAgdG9nZ2xlckNsYXNzID0gYGQtbm9uZSBkLSR7YnJlYWtwb2ludH0tYmxvY2tgO1xuICAgIH1cbiAgICByZXR1cm4gdG9nZ2xlckNsYXNzO1xuICB9XG5cbiAgc2V0VG9nZ2VyTW9iaWxlQnJlYWtwb2ludENsYXNzKGJyZWFrcG9pbnQgPSAnbGcnKSB7XG4gICAgbGV0IHRvZ2dsZXJDbGFzcyA9ICdkLWxnLW5vbmUnO1xuICAgIGlmICh0aGlzLmJyZWFrcG9pbnRzLmluY2x1ZGVzKGJyZWFrcG9pbnQpKSB7XG4gICAgICB0b2dnbGVyQ2xhc3MgPSBgZC0ke2JyZWFrcG9pbnR9LW5vbmVgO1xuICAgIH1cbiAgICByZXR1cm4gdG9nZ2xlckNsYXNzO1xuICB9XG59XG4iXX0=