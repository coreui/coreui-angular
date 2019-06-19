/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ElementRef, Input, Inject, Renderer2 } from '@angular/core';
import { DOCUMENT } from '@angular/common';
export class AppHeaderComponent {
    /**
     * @param {?} document
     * @param {?} renderer
     * @param {?} hostElement
     */
    constructor(document, renderer, hostElement) {
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
                template: "<ng-template [ngIf]=\"mobileSidebarToggler != false\">\n  <button class=\"navbar-toggler {{sidebarTogglerMobileClass}}\" type=\"button\" appSidebarToggler>\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n</ng-template>\n<a class=\"navbar-brand\" [routerLink]=\"navbarBrandRouterLink\">\n  <ng-template [ngIf]=\"navbarBrandImg\">\n    <img *ngIf=\"navbarBrand\"\n         [appHtmlAttr]=\"navbarBrand\"\n         [ngClass]=\"'navbar-brand'\">\n    <img *ngIf=\"navbarBrandFull\"\n         [appHtmlAttr]=\"navbarBrandFull\"\n         [ngClass]=\"'navbar-brand-full'\">\n    <img *ngIf=\"navbarBrandMinimized\"\n         [appHtmlAttr]=\"navbarBrandMinimized\"\n         [ngClass]=\"'navbar-brand-minimized'\">\n  </ng-template>\n  <ng-template [ngIf]=\"!navbarBrandImg\">\n    <div class=\"navbar-brand-full\" [innerHTML]=\"navbarBrandText.text\"></div>\n    <div class=\"navbar-brand-minimized\" [innerHTML]=\"navbarBrandText.icon\"></div>\n  </ng-template>\n</a>\n<ng-template [ngIf]=\"sidebarToggler != false\">\n  <button class=\"navbar-toggler {{sidebarTogglerClass}}\" type=\"button\" [appSidebarToggler]=\"sidebarToggler\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n</ng-template>\n<ng-content></ng-content>\n<ng-template [ngIf]=\"asideMenuToggler != false\">\n  <button class=\"navbar-toggler {{asideTogglerClass}}\" type=\"button\" [appAsideMenuToggler]=\"asideMenuToggler\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n</ng-template>\n<ng-template [ngIf]=\"mobileAsideMenuToggler != false\">\n  <button class=\"navbar-toggler {{asideTogglerMobileClass}}\" type=\"button\" appAsideMenuToggler>\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n</ng-template>\n"
            }] }
];
/** @nocollapse */
AppHeaderComponent.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] },
    { type: Renderer2 },
    { type: ElementRef }
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
    mobileAsideMenuToggler: [{ type: Input }]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLWhlYWRlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY29yZXVpL2FuZ3VsYXIvIiwic291cmNlcyI6WyJsaWIvaGVhZGVyL2FwcC1oZWFkZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQXFCLE1BQU0sRUFBRSxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDakcsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBTTNDLE1BQU0sT0FBTyxrQkFBa0I7Ozs7OztJQTBCN0IsWUFDNEIsUUFBYSxFQUMvQixRQUFtQixFQUNuQixXQUF1QjtRQUZMLGFBQVEsR0FBUixRQUFRLENBQUs7UUFDL0IsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUNuQixnQkFBVyxHQUFYLFdBQVcsQ0FBWTtRQXRCeEIsb0JBQWUsR0FBUSxFQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBQyxDQUFDOztRQUV2RCwwQkFBcUIsR0FBbUIsRUFBRSxDQUFDO1FBUW5DLGVBQVUsR0FBRyxjQUFjLENBQUM7UUFHNUIsZ0JBQVcsR0FBRyxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztRQUM5RCx3QkFBbUIsR0FBRyxtQkFBbUIsQ0FBQztRQUMxQyw4QkFBeUIsR0FBRyxXQUFXLENBQUM7UUFDeEMsc0JBQWlCLEdBQUcsbUJBQW1CLENBQUM7UUFDeEMsNEJBQXVCLEdBQUcsV0FBVyxDQUFDO1FBT3BDLFFBQVEsQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLGFBQWEsRUFBRSxZQUFZLENBQUMsQ0FBQztRQUMzRCxRQUFRLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxhQUFhLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFDekQsQ0FBQzs7OztJQUVELFFBQVE7UUFDTixJ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SUFDMUMsdURBQXdDOztJQUN4QywrQ0FBd0M7O0lBQ3hDLHFEQUFzQzs7Ozs7SUFHcEMsc0NBQXVDOzs7OztJQUN2QyxzQ0FBMkI7Ozs7O0lBQzNCLHlDQUErQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBFbGVtZW50UmVmLCBJbnB1dCwgT25Jbml0LCBPbkRlc3Ryb3ksIEluamVjdCwgUmVuZGVyZXIyfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERPQ1VNRU5UIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLWhlYWRlciwgY3VpLWhlYWRlcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9hcHAtaGVhZGVyLmNvbXBvbmVudC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBBcHBIZWFkZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG5cbiAgQElucHV0KCkgZml4ZWQ6IGJvb2xlYW47XG5cbiAgQElucHV0KCkgbmF2YmFyQnJhbmQ6IGFueTtcbiAgQElucHV0KCkgbmF2YmFyQnJhbmRGdWxsOiBhbnk7XG4gIEBJbnB1dCgpIG5hdmJhckJyYW5kTWluaW1pemVkOiBhbnk7XG4gIEBJbnB1dCgpIG5hdmJhckJyYW5kVGV4dDogYW55ID0ge2ljb246ICfwn4WyJywgdGV4dDogJ/CfhbIgQ29yZVVJJ307XG4gIEBJbnB1dCgpIG5hdmJhckJyYW5kSHJlZjogJyc7IC8vIGRlcHJlY2F0ZWQsIHVzZSBuYXZiYXJCcmFuZFJvdXRlckxpbmsgaW5zdGVhZFxuICBASW5wdXQoKSBuYXZiYXJCcmFuZFJvdXRlckxpbms6IGFueVtdIHwgc3RyaW5nID0gJyc7XG5cbiAgQElucHV0KCkgc2lkZWJhclRvZ2dsZXI6IHN0cmluZyB8IGJvb2xlYW47XG4gIEBJbnB1dCgpIG1vYmlsZVNpZGViYXJUb2dnbGVyOiBib29sZWFuO1xuXG4gIEBJbnB1dCgpIGFzaWRlTWVudVRvZ2dsZXI6IHN0cmluZyB8IGJvb2xlYW47XG4gIEBJbnB1dCgpIG1vYmlsZUFzaWRlTWVudVRvZ2dsZXI6IGJvb2xlYW47XG5cbiAgcHJpdmF0ZSByZWFkb25seSBmaXhlZENsYXNzID0gJ2hlYWRlci1maXhlZCc7XG4gIG5hdmJhckJyYW5kSW1nOiBib29sZWFuO1xuXG4gIHByaXZhdGUgcmVhZG9ubHkgYnJlYWtwb2ludHMgPSBbJ3hsJywgJ2xnJywgJ21kJywgJ3NtJywgJ3hzJ107XG4gIHNpZGViYXJUb2dnbGVyQ2xhc3MgPSAnZC1ub25lIGQtbWQtYmxvY2snO1xuICBzaWRlYmFyVG9nZ2xlck1vYmlsZUNsYXNzID0gJ2QtbGctbm9uZSc7XG4gIGFzaWRlVG9nZ2xlckNsYXNzID0gJ2Qtbm9uZSBkLW1kLWJsb2NrJztcbiAgYXNpZGVUb2dnbGVyTW9iaWxlQ2xhc3MgPSAnZC1sZy1ub25lJztcblxuICBjb25zdHJ1Y3RvcihcbiAgICBASW5qZWN0KERPQ1VNRU5UKSBwcml2YXRlIGRvY3VtZW50OiBhbnksXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIHByaXZhdGUgaG9zdEVsZW1lbnQ6IEVsZW1lbnRSZWZcbiAgKSB7XG4gICAgcmVuZGVyZXIuYWRkQ2xhc3MoaG9zdEVsZW1lbnQubmF0aXZlRWxlbWVudCwgJ2FwcC1oZWFkZXInKTtcbiAgICByZW5kZXJlci5hZGRDbGFzcyhob3N0RWxlbWVudC5uYXRpdmVFbGVtZW50LCAnbmF2YmFyJyk7XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmlzRml4ZWQodGhpcy5maXhlZCk7XG4gICAgdGhpcy5uYXZiYXJCcmFuZEltZyA9IEJvb2xlYW4odGhpcy5uYXZiYXJCcmFuZCB8fCB0aGlzLm5hdmJhckJyYW5kRnVsbCB8fCB0aGlzLm5hdmJhckJyYW5kTWluaW1pemVkKTtcbiAgICB0aGlzLm5hdmJhckJyYW5kUm91dGVyTGluayA9IHRoaXMubmF2YmFyQnJhbmRSb3V0ZXJMaW5rWzBdID8gdGhpcy5uYXZiYXJCcmFuZFJvdXRlckxpbmsgOiB0aGlzLm5hdmJhckJyYW5kSHJlZjtcbiAgICB0aGlzLnNpZGViYXJUb2dnbGVyQ2xhc3MgPSB0aGlzLnNldFRvZ2dlckJyZWFrcG9pbnRDbGFzcyg8c3RyaW5nPnRoaXMuc2lkZWJhclRvZ2dsZXIpO1xuICAgIHRoaXMuc2lkZWJhclRvZ2dsZXJNb2JpbGVDbGFzcyA9IHRoaXMuc2V0VG9nZ2VyTW9iaWxlQnJlYWtwb2ludENsYXNzKDxzdHJpbmc+dGhpcy5zaWRlYmFyVG9nZ2xlcik7XG4gICAgdGhpcy5hc2lkZVRvZ2dsZXJDbGFzcyA9IHRoaXMuc2V0VG9nZ2VyQnJlYWtwb2ludENsYXNzKDxzdHJpbmc+dGhpcy5hc2lkZU1lbnVUb2dnbGVyKTtcbiAgICB0aGlzLmFzaWRlVG9nZ2xlck1vYmlsZUNsYXNzID0gdGhpcy5zZXRUb2dnZXJNb2JpbGVCcmVha3BvaW50Q2xhc3MoPHN0cmluZz50aGlzLmFzaWRlTWVudVRvZ2dsZXIpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5yZW5kZXJlci5yZW1vdmVDbGFzcyh0aGlzLmRvY3VtZW50LmJvZHksIHRoaXMuZml4ZWRDbGFzcyk7XG4gIH1cblxuICBpc0ZpeGVkKGZpeGVkOiBib29sZWFuID0gdGhpcy5maXhlZCk6IHZvaWQge1xuICAgIGlmIChmaXhlZCkge1xuICAgICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLmRvY3VtZW50LmJvZHksIHRoaXMuZml4ZWRDbGFzcyk7XG4gICAgfVxuICB9XG5cbiAgc2V0VG9nZ2VyQnJlYWtwb2ludENsYXNzKGJyZWFrcG9pbnQgPSAnbWQnKSB7XG4gICAgbGV0IHRvZ2dsZXJDbGFzcyA9ICdkLW5vbmUgZC1tZC1ibG9jayc7XG4gICAgaWYgKHRoaXMuYnJlYWtwb2ludHMuaW5jbHVkZXMoYnJlYWtwb2ludCkpIHtcbiAgICAgIGNvbnN0IGJyZWFrcG9pbnRJbmRleCA9IHRoaXMuYnJlYWtwb2ludHMuaW5kZXhPZihicmVha3BvaW50KTtcbiAgICAgIHRvZ2dsZXJDbGFzcyA9IGBkLW5vbmUgZC0ke2JyZWFrcG9pbnR9LWJsb2NrYDtcbiAgICB9XG4gICAgcmV0dXJuIHRvZ2dsZXJDbGFzcztcbiAgfVxuXG4gIHNldFRvZ2dlck1vYmlsZUJyZWFrcG9pbnRDbGFzcyhicmVha3BvaW50ID0gJ2xnJykge1xuICAgIGxldCB0b2dnbGVyQ2xhc3MgPSAnZC1sZy1ub25lJztcbiAgICBpZiAodGhpcy5icmVha3BvaW50cy5pbmNsdWRlcyhicmVha3BvaW50KSkge1xuICAgICAgdG9nZ2xlckNsYXNzID0gYGQtJHticmVha3BvaW50fS1ub25lYDtcbiAgICB9XG4gICAgcmV0dXJuIHRvZ2dsZXJDbGFzcztcbiAgfVxufVxuIl19