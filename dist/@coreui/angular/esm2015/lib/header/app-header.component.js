/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Inject, Renderer2, HostBinding } from '@angular/core';
import { DOCUMENT } from '@angular/common';
export class AppHeaderComponent {
    /**
     * @param {?} document
     * @param {?} renderer
     */
    constructor(document, renderer) {
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
    ngOnInit() {
        this.isFixed(this.fixed);
        this.navbarBrandImg = Boolean(this.navbarBrand || this.navbarBrandFull || this.navbarBrandMinimized);
        this.navbarBrandRouterLink = this.navbarBrandRouterLink[0] ? this.navbarBrandRouterLink : this.navbarBrandHref;
        this.sidebarTogglerClass = this.setToggerBreakpointClass((/** @type {?} */ (this.sidebarToggler)));
        this.sidebarTogglerMobileClass = this.setToggerMobileBreakpointClass((/** @type {?} */ (this.sidebarToggler)));
        this.asideTogglerClass = this.setToggerBreakpointClass((/** @type {?} */ (this.asideMenuToggler)));
        this.asideTogglerMobileClass = this.setToggerMobileBreakpointClass((/** @type {?} */ (this.asideMenuToggler)));
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.renderer.removeClass(this.document.body, this.fixedClass);
    }
    /**
     * @param {?=} fixed
     * @return {?}
     */
    isFixed(fixed = this.fixed) {
        if (fixed) {
            this.renderer.addClass(this.document.body, this.fixedClass);
        }
    }
    /**
     * @param {?=} breakpoint
     * @return {?}
     */
    setToggerBreakpointClass(breakpoint = 'md') {
        /** @type {?} */
        let togglerClass = 'd-none d-md-block';
        if (this.breakpoints.includes(breakpoint)) {
            /** @type {?} */
            const breakpointIndex = this.breakpoints.indexOf(breakpoint);
            togglerClass = `d-none d-${breakpoint}-block`;
        }
        return togglerClass;
    }
    /**
     * @param {?=} breakpoint
     * @return {?}
     */
    setToggerMobileBreakpointClass(breakpoint = 'lg') {
        /** @type {?} */
        let togglerClass = 'd-lg-none';
        if (this.breakpoints.includes(breakpoint)) {
            togglerClass = `d-${breakpoint}-none`;
        }
        return togglerClass;
    }
}
AppHeaderComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-header, cui-header',
                template: "<ng-template [ngIf]=\"mobileSidebarToggler != false\">\r\n  <button class=\"navbar-toggler {{sidebarTogglerMobileClass}}\" type=\"button\" appSidebarToggler>\r\n    <span class=\"navbar-toggler-icon\"></span>\r\n  </button>\r\n</ng-template>\r\n<a class=\"navbar-brand\" [routerLink]=\"navbarBrandRouterLink\">\r\n  <ng-template [ngIf]=\"navbarBrandImg\">\r\n    <img *ngIf=\"navbarBrand\"\r\n         [appHtmlAttr]=\"navbarBrand\"\r\n         [ngClass]=\"'navbar-brand'\">\r\n    <img *ngIf=\"navbarBrandFull\"\r\n         [appHtmlAttr]=\"navbarBrandFull\"\r\n         [ngClass]=\"'navbar-brand-full'\">\r\n    <img *ngIf=\"navbarBrandMinimized\"\r\n         [appHtmlAttr]=\"navbarBrandMinimized\"\r\n         [ngClass]=\"'navbar-brand-minimized'\">\r\n  </ng-template>\r\n  <ng-template [ngIf]=\"!navbarBrandImg\">\r\n    <div class=\"navbar-brand-full\" [innerHTML]=\"navbarBrandText.text\"></div>\r\n    <div class=\"navbar-brand-minimized\" [innerHTML]=\"navbarBrandText.icon\"></div>\r\n  </ng-template>\r\n</a>\r\n<ng-template [ngIf]=\"sidebarToggler != false\">\r\n  <button class=\"navbar-toggler {{sidebarTogglerClass}}\" type=\"button\" [appSidebarToggler]=\"sidebarToggler\">\r\n    <span class=\"navbar-toggler-icon\"></span>\r\n  </button>\r\n</ng-template>\r\n<ng-content></ng-content>\r\n<ng-template [ngIf]=\"asideMenuToggler != false\">\r\n  <button class=\"navbar-toggler {{asideTogglerClass}}\" type=\"button\" [appAsideMenuToggler]=\"asideMenuToggler\">\r\n    <span class=\"navbar-toggler-icon\"></span>\r\n  </button>\r\n</ng-template>\r\n<ng-template [ngIf]=\"mobileAsideMenuToggler != false\">\r\n  <button class=\"navbar-toggler {{asideTogglerMobileClass}}\" type=\"button\" appAsideMenuToggler>\r\n    <span class=\"navbar-toggler-icon\"></span>\r\n  </button>\r\n</ng-template>\r\n"
            }] }
];
/** @nocollapse */
AppHeaderComponent.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] },
    { type: Renderer2 }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLWhlYWRlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY29yZXVpL2FuZ3VsYXIvIiwic291cmNlcyI6WyJsaWIvaGVhZGVyL2FwcC1oZWFkZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLEtBQUssRUFBcUIsTUFBTSxFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDbEcsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBTTNDLE1BQU0sT0FBTyxrQkFBa0I7Ozs7O0lBOEI3QixZQUM0QixRQUFhLEVBQy9CLFFBQW1CO1FBREQsYUFBUSxHQUFSLFFBQVEsQ0FBSztRQUMvQixhQUFRLEdBQVIsUUFBUSxDQUFXO1FBekJwQixvQkFBZSxHQUFRLEVBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFDLENBQUM7O1FBRXZELDBCQUFxQixHQUFtQixFQUFFLENBQUM7UUFRbkMsZUFBVSxHQUFHLGNBQWMsQ0FBQztRQUVaLFlBQU8sR0FBRyxJQUFJLENBQUM7UUFDbkIsWUFBTyxHQUFHLElBQUksQ0FBQztRQUkzQixnQkFBVyxHQUFHLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQzlELHdCQUFtQixHQUFHLG1CQUFtQixDQUFDO1FBQzFDLDhCQUF5QixHQUFHLFdBQVcsQ0FBQztRQUN4QyxzQkFBaUIsR0FBRyxtQkFBbUIsQ0FBQztRQUN4Qyw0QkFBdUIsR0FBRyxXQUFXLENBQUM7SUFLbEMsQ0FBQzs7OztJQUVMLFFBQVE7UUFDTixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN6QixJQUFJLENBQUMsY0FBYyxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsV0FBVyxJQUFJLElBQUksQ0FBQyxl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R3BDLHNDQUF1Qzs7Ozs7SUFDdkMsc0NBQTJCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIElucHV0LCBPbkluaXQsIE9uRGVzdHJveSwgSW5qZWN0LCBSZW5kZXJlcjIsIEhvc3RCaW5kaW5nfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERPQ1VNRU5UIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLWhlYWRlciwgY3VpLWhlYWRlcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9hcHAtaGVhZGVyLmNvbXBvbmVudC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBBcHBIZWFkZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG5cbiAgQElucHV0KCkgZml4ZWQ6IGJvb2xlYW47XG5cbiAgQElucHV0KCkgbmF2YmFyQnJhbmQ6IGFueTtcbiAgQElucHV0KCkgbmF2YmFyQnJhbmRGdWxsOiBhbnk7XG4gIEBJbnB1dCgpIG5hdmJhckJyYW5kTWluaW1pemVkOiBhbnk7XG4gIEBJbnB1dCgpIG5hdmJhckJyYW5kVGV4dDogYW55ID0ge2ljb246ICfwn4WyJywgdGV4dDogJ/CfhbIgQ29yZVVJJ307XG4gIEBJbnB1dCgpIG5hdmJhckJyYW5kSHJlZjogJyc7IC8vIGRlcHJlY2F0ZWQsIHVzZSBuYXZiYXJCcmFuZFJvdXRlckxpbmsgaW5zdGVhZFxuICBASW5wdXQoKSBuYXZiYXJCcmFuZFJvdXRlckxpbms6IGFueVtdIHwgc3RyaW5nID0gJyc7XG5cbiAgQElucHV0KCkgc2lkZWJhclRvZ2dsZXI6IHN0cmluZyB8IGJvb2xlYW47XG4gIEBJbnB1dCgpIG1vYmlsZVNpZGViYXJUb2dnbGVyOiBib29sZWFuO1xuXG4gIEBJbnB1dCgpIGFzaWRlTWVudVRvZ2dsZXI6IHN0cmluZyB8IGJvb2xlYW47XG4gIEBJbnB1dCgpIG1vYmlsZUFzaWRlTWVudVRvZ2dsZXI6IGJvb2xlYW47XG5cbiAgcHJpdmF0ZSByZWFkb25seSBmaXhlZENsYXNzID0gJ2hlYWRlci1maXhlZCc7XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5hcHAtaGVhZGVyJykgX2hlYWRlciA9IHRydWU7XG4gIEBIb3N0QmluZGluZygnY2xhc3MubmF2YmFyJykgX25hdmJhciA9IHRydWU7XG5cbiAgbmF2YmFyQnJhbmRJbWc6IGJvb2xlYW47XG5cbiAgcHJpdmF0ZSByZWFkb25seSBicmVha3BvaW50cyA9IFsneGwnLCAnbGcnLCAnbWQnLCAnc20nLCAneHMnXTtcbiAgc2lkZWJhclRvZ2dsZXJDbGFzcyA9ICdkLW5vbmUgZC1tZC1ibG9jayc7XG4gIHNpZGViYXJUb2dnbGVyTW9iaWxlQ2xhc3MgPSAnZC1sZy1ub25lJztcbiAgYXNpZGVUb2dnbGVyQ2xhc3MgPSAnZC1ub25lIGQtbWQtYmxvY2snO1xuICBhc2lkZVRvZ2dsZXJNb2JpbGVDbGFzcyA9ICdkLWxnLW5vbmUnO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIEBJbmplY3QoRE9DVU1FTlQpIHByaXZhdGUgZG9jdW1lbnQ6IGFueSxcbiAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICkgeyB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5pc0ZpeGVkKHRoaXMuZml4ZWQpO1xuICAgIHRoaXMubmF2YmFyQnJhbmRJbWcgPSBCb29sZWFuKHRoaXMubmF2YmFyQnJhbmQgfHwgdGhpcy5uYXZiYXJCcmFuZEZ1bGwgfHwgdGhpcy5uYXZiYXJCcmFuZE1pbmltaXplZCk7XG4gICAgdGhpcy5uYXZiYXJCcmFuZFJvdXRlckxpbmsgPSB0aGlzLm5hdmJhckJyYW5kUm91dGVyTGlua1swXSA/IHRoaXMubmF2YmFyQnJhbmRSb3V0ZXJMaW5rIDogdGhpcy5uYXZiYXJCcmFuZEhyZWY7XG4gICAgdGhpcy5zaWRlYmFyVG9nZ2xlckNsYXNzID0gdGhpcy5zZXRUb2dnZXJCcmVha3BvaW50Q2xhc3MoPHN0cmluZz50aGlzLnNpZGViYXJUb2dnbGVyKTtcbiAgICB0aGlzLnNpZGViYXJUb2dnbGVyTW9iaWxlQ2xhc3MgPSB0aGlzLnNldFRvZ2dlck1vYmlsZUJyZWFrcG9pbnRDbGFzcyg8c3RyaW5nPnRoaXMuc2lkZWJhclRvZ2dsZXIpO1xuICAgIHRoaXMuYXNpZGVUb2dnbGVyQ2xhc3MgPSB0aGlzLnNldFRvZ2dlckJyZWFrcG9pbnRDbGFzcyg8c3RyaW5nPnRoaXMuYXNpZGVNZW51VG9nZ2xlcik7XG4gICAgdGhpcy5hc2lkZVRvZ2dsZXJNb2JpbGVDbGFzcyA9IHRoaXMuc2V0VG9nZ2VyTW9iaWxlQnJlYWtwb2ludENsYXNzKDxzdHJpbmc+dGhpcy5hc2lkZU1lbnVUb2dnbGVyKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQ2xhc3ModGhpcy5kb2N1bWVudC5ib2R5LCB0aGlzLmZpeGVkQ2xhc3MpO1xuICB9XG5cbiAgaXNGaXhlZChmaXhlZDogYm9vbGVhbiA9IHRoaXMuZml4ZWQpOiB2b2lkIHtcbiAgICBpZiAoZml4ZWQpIHtcbiAgICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5kb2N1bWVudC5ib2R5LCB0aGlzLmZpeGVkQ2xhc3MpO1xuICAgIH1cbiAgfVxuXG4gIHNldFRvZ2dlckJyZWFrcG9pbnRDbGFzcyhicmVha3BvaW50ID0gJ21kJykge1xuICAgIGxldCB0b2dnbGVyQ2xhc3MgPSAnZC1ub25lIGQtbWQtYmxvY2snO1xuICAgIGlmICh0aGlzLmJyZWFrcG9pbnRzLmluY2x1ZGVzKGJyZWFrcG9pbnQpKSB7XG4gICAgICBjb25zdCBicmVha3BvaW50SW5kZXggPSB0aGlzLmJyZWFrcG9pbnRzLmluZGV4T2YoYnJlYWtwb2ludCk7XG4gICAgICB0b2dnbGVyQ2xhc3MgPSBgZC1ub25lIGQtJHticmVha3BvaW50fS1ibG9ja2A7XG4gICAgfVxuICAgIHJldHVybiB0b2dnbGVyQ2xhc3M7XG4gIH1cblxuICBzZXRUb2dnZXJNb2JpbGVCcmVha3BvaW50Q2xhc3MoYnJlYWtwb2ludCA9ICdsZycpIHtcbiAgICBsZXQgdG9nZ2xlckNsYXNzID0gJ2QtbGctbm9uZSc7XG4gICAgaWYgKHRoaXMuYnJlYWtwb2ludHMuaW5jbHVkZXMoYnJlYWtwb2ludCkpIHtcbiAgICAgIHRvZ2dsZXJDbGFzcyA9IGBkLSR7YnJlYWtwb2ludH0tbm9uZWA7XG4gICAgfVxuICAgIHJldHVybiB0b2dnbGVyQ2xhc3M7XG4gIH1cbn1cbiJdfQ==