import { __decorate, __metadata, __param } from "tslib";
import { Component, Input, OnInit, OnDestroy, Inject, Renderer2, HostBinding } from '@angular/core';
import { DOCUMENT } from '@angular/common';
let AppHeaderComponent = class AppHeaderComponent {
    constructor(document, renderer) {
        this.document = document;
        this.renderer = renderer;
        this.navbarBrandText = { icon: '🅲', text: '🅲 CoreUI' };
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
    ngOnInit() {
        this.isFixed(this.fixed);
        this.navbarBrandImg = Boolean(this.navbarBrand || this.navbarBrandFull || this.navbarBrandMinimized);
        this.navbarBrandRouterLink = this.navbarBrandRouterLink[0] ? this.navbarBrandRouterLink : this.navbarBrandHref;
        this.sidebarTogglerClass = this.setToggerBreakpointClass(this.sidebarToggler);
        this.sidebarTogglerMobileClass = this.setToggerMobileBreakpointClass(this.sidebarToggler);
        this.asideTogglerClass = this.setToggerBreakpointClass(this.asideMenuToggler);
        this.asideTogglerMobileClass = this.setToggerMobileBreakpointClass(this.asideMenuToggler);
    }
    ngOnDestroy() {
        this.renderer.removeClass(this.document.body, this.fixedClass);
    }
    isFixed(fixed = this.fixed) {
        if (fixed) {
            this.renderer.addClass(this.document.body, this.fixedClass);
        }
    }
    setToggerBreakpointClass(breakpoint = 'md') {
        let togglerClass = 'd-none d-md-block';
        if (this.breakpoints.includes(breakpoint)) {
            const breakpointIndex = this.breakpoints.indexOf(breakpoint);
            togglerClass = `d-none d-${breakpoint}-block`;
        }
        return togglerClass;
    }
    setToggerMobileBreakpointClass(breakpoint = 'lg') {
        let togglerClass = 'd-lg-none';
        if (this.breakpoints.includes(breakpoint)) {
            togglerClass = `d-${breakpoint}-none`;
        }
        return togglerClass;
    }
};
AppHeaderComponent.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] },
    { type: Renderer2 }
];
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], AppHeaderComponent.prototype, "fixed", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], AppHeaderComponent.prototype, "navbarBrand", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], AppHeaderComponent.prototype, "navbarBrandFull", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], AppHeaderComponent.prototype, "navbarBrandMinimized", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], AppHeaderComponent.prototype, "navbarBrandText", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], AppHeaderComponent.prototype, "navbarBrandHref", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], AppHeaderComponent.prototype, "navbarBrandRouterLink", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], AppHeaderComponent.prototype, "sidebarToggler", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], AppHeaderComponent.prototype, "mobileSidebarToggler", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], AppHeaderComponent.prototype, "asideMenuToggler", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], AppHeaderComponent.prototype, "mobileAsideMenuToggler", void 0);
__decorate([
    HostBinding('class.app-header'),
    __metadata("design:type", Object)
], AppHeaderComponent.prototype, "_header", void 0);
__decorate([
    HostBinding('class.navbar'),
    __metadata("design:type", Object)
], AppHeaderComponent.prototype, "_navbar", void 0);
AppHeaderComponent = __decorate([
    Component({
        selector: 'app-header, cui-header',
        template: "<ng-template [ngIf]=\"mobileSidebarToggler != false\">\r\n  <button class=\"navbar-toggler {{sidebarTogglerMobileClass}}\" type=\"button\" appSidebarToggler>\r\n    <span class=\"navbar-toggler-icon\"></span>\r\n  </button>\r\n</ng-template>\r\n<a class=\"navbar-brand\" [routerLink]=\"navbarBrandRouterLink\">\r\n  <ng-template [ngIf]=\"navbarBrandImg\">\r\n    <img *ngIf=\"navbarBrand\"\r\n         [appHtmlAttr]=\"navbarBrand\"\r\n         [ngClass]=\"'navbar-brand'\">\r\n    <img *ngIf=\"navbarBrandFull\"\r\n         [appHtmlAttr]=\"navbarBrandFull\"\r\n         [ngClass]=\"'navbar-brand-full'\">\r\n    <img *ngIf=\"navbarBrandMinimized\"\r\n         [appHtmlAttr]=\"navbarBrandMinimized\"\r\n         [ngClass]=\"'navbar-brand-minimized'\">\r\n  </ng-template>\r\n  <ng-template [ngIf]=\"!navbarBrandImg\">\r\n    <div class=\"navbar-brand-full\" [innerHTML]=\"navbarBrandText.text\"></div>\r\n    <div class=\"navbar-brand-minimized\" [innerHTML]=\"navbarBrandText.icon\"></div>\r\n  </ng-template>\r\n</a>\r\n<ng-template [ngIf]=\"sidebarToggler != false\">\r\n  <button class=\"navbar-toggler {{sidebarTogglerClass}}\" type=\"button\" [appSidebarToggler]=\"sidebarToggler\">\r\n    <span class=\"navbar-toggler-icon\"></span>\r\n  </button>\r\n</ng-template>\r\n<ng-content></ng-content>\r\n<ng-template [ngIf]=\"asideMenuToggler != false\">\r\n  <button class=\"navbar-toggler {{asideTogglerClass}}\" type=\"button\" [appAsideMenuToggler]=\"asideMenuToggler\">\r\n    <span class=\"navbar-toggler-icon\"></span>\r\n  </button>\r\n</ng-template>\r\n<ng-template [ngIf]=\"mobileAsideMenuToggler != false\">\r\n  <button class=\"navbar-toggler {{asideTogglerMobileClass}}\" type=\"button\" appAsideMenuToggler>\r\n    <span class=\"navbar-toggler-icon\"></span>\r\n  </button>\r\n</ng-template>\r\n"
    }),
    __param(0, Inject(DOCUMENT)),
    __metadata("design:paramtypes", [Object, Renderer2])
], AppHeaderComponent);
export { AppHeaderComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLWhlYWRlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY29yZXVpL2FuZ3VsYXIvIiwic291cmNlcyI6WyJsaWIvaGVhZGVyL2FwcC1oZWFkZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ2xHLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQU0zQyxJQUFhLGtCQUFrQixHQUEvQixNQUFhLGtCQUFrQjtJQThCN0IsWUFDNEIsUUFBYSxFQUMvQixRQUFtQjtRQURELGFBQVEsR0FBUixRQUFRLENBQUs7UUFDL0IsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQXpCcEIsb0JBQWUsR0FBUSxFQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBQyxDQUFDO1FBRXZELDBCQUFxQixHQUFtQixFQUFFLENBQUM7UUFRbkMsZUFBVSxHQUFHLGNBQWMsQ0FBQztRQUVaLFlBQU8sR0FBRyxJQUFJLENBQUM7UUFDbkIsWUFBTyxHQUFHLElBQUksQ0FBQztRQUkzQixnQkFBVyxHQUFHLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQzlELHdCQUFtQixHQUFHLG1CQUFtQixDQUFDO1FBQzFDLDhCQUF5QixHQUFHLFdBQVcsQ0FBQztRQUN4QyxzQkFBaUIsR0FBRyxtQkFBbUIsQ0FBQztRQUN4Qyw0QkFBdUIsR0FBRyxXQUFXLENBQUM7SUFLbEMsQ0FBQztJQUVMLFFBQVE7UUFDTixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN6QixJQUFJLENBQUMsY0FBYyxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMs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a0JBQWtCLENBdUU5QjtTQXZFWSxrQkFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgSW5wdXQsIE9uSW5pdCwgT25EZXN0cm95LCBJbmplY3QsIFJlbmRlcmVyMiwgSG9zdEJpbmRpbmd9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBET0NVTUVOVCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FwcC1oZWFkZXIsIGN1aS1oZWFkZXInLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9hcHAtaGVhZGVyLmNvbXBvbmVudC5odG1sJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgQXBwSGVhZGVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xyXG5cclxuICBASW5wdXQoKSBmaXhlZDogYm9vbGVhbjtcclxuXHJcbiAgQElucHV0KCkgbmF2YmFyQnJhbmQ6IGFueTtcclxuICBASW5wdXQoKSBuYXZiYXJCcmFuZEZ1bGw6IGFueTtcclxuICBASW5wdXQoKSBuYXZiYXJCcmFuZE1pbmltaXplZDogYW55O1xyXG4gIEBJbnB1dCgpIG5hdmJhckJyYW5kVGV4dDogYW55ID0ge2ljb246ICfwn4WyJywgdGV4dDogJ/CfhbIgQ29yZVVJJ307XHJcbiAgQElucHV0KCkgbmF2YmFyQnJhbmRIcmVmOiAnJzsgLy8gZGVwcmVjYXRlZCwgdXNlIG5hdmJhckJyYW5kUm91dGVyTGluayBpbnN0ZWFkXHJcbiAgQElucHV0KCkgbmF2YmFyQnJhbmRSb3V0ZXJMaW5rOiBhbnlbXSB8IHN0cmluZyA9ICcnO1xyXG5cclxuICBASW5wdXQoKSBzaWRlYmFyVG9nZ2xlcjogc3RyaW5nIHwgYm9vbGVhbjtcclxuICBASW5wdXQoKSBtb2JpbGVTaWRlYmFyVG9nZ2xlcjogYm9vbGVhbjtcclxuXHJcbiAgQElucHV0KCkgYXNpZGVNZW51VG9nZ2xlcjogc3RyaW5nIHwgYm9vbGVhbjtcclxuICBASW5wdXQoKSBtb2JpbGVBc2lkZU1lbnVUb2dnbGVyOiBib29sZWFuO1xyXG5cclxuICBwcml2YXRlIHJlYWRvbmx5IGZpeGVkQ2xhc3MgPSAnaGVhZGVyLWZpeGVkJztcclxuXHJcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5hcHAtaGVhZGVyJykgX2hlYWRlciA9IHRydWU7XHJcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5uYXZiYXInKSBfbmF2YmFyID0gdHJ1ZTtcclxuXHJcbiAgbmF2YmFyQnJhbmRJbWc6IGJvb2xlYW47XHJcblxyXG4gIHByaXZhdGUgcmVhZG9ubHkgYnJlYWtwb2ludHMgPSBbJ3hsJywgJ2xnJywgJ21kJywgJ3NtJywgJ3hzJ107XHJcbiAgc2lkZWJhclRvZ2dsZXJDbGFzcyA9ICdkLW5vbmUgZC1tZC1ibG9jayc7XHJcbiAgc2lkZWJhclRvZ2dsZXJNb2JpbGVDbGFzcyA9ICdkLWxnLW5vbmUnO1xyXG4gIGFzaWRlVG9nZ2xlckNsYXNzID0gJ2Qtbm9uZSBkLW1kLWJsb2NrJztcclxuICBhc2lkZVRvZ2dsZXJNb2JpbGVDbGFzcyA9ICdkLWxnLW5vbmUnO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIEBJbmplY3QoRE9DVU1FTlQpIHByaXZhdGUgZG9jdW1lbnQ6IGFueSxcclxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcclxuICApIHsgfVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMuaXNGaXhlZCh0aGlzLmZpeGVkKTtcclxuICAgIHRoaXMubmF2YmFyQnJhbmRJbWcgPSBCb29sZWFuKHRoaXMubmF2YmFyQnJhbmQgfHwgdGhpcy5uYXZiYXJCcmFuZEZ1bGwgfHwgdGhpcy5uYXZiYXJCcmFuZE1pbmltaXplZCk7XHJcbiAgICB0aGlzLm5hdmJhckJyYW5kUm91dGVyTGluayA9IHRoaXMubmF2YmFyQnJhbmRSb3V0ZXJMaW5rWzBdID8gdGhpcy5uYXZiYXJCcmFuZFJvdXRlckxpbmsgOiB0aGlzLm5hdmJhckJyYW5kSHJlZjtcclxuICAgIHRoaXMuc2lkZWJhclRvZ2dsZXJDbGFzcyA9IHRoaXMuc2V0VG9nZ2VyQnJlYWtwb2ludENsYXNzKDxzdHJpbmc+dGhpcy5zaWRlYmFyVG9nZ2xlcik7XHJcbiAgICB0aGlzLnNpZGViYXJUb2dnbGVyTW9iaWxlQ2xhc3MgPSB0aGlzLnNldFRvZ2dlck1vYmlsZUJyZWFrcG9pbnRDbGFzcyg8c3RyaW5nPnRoaXMuc2lkZWJhclRvZ2dsZXIpO1xyXG4gICAgdGhpcy5hc2lkZVRvZ2dsZXJDbGFzcyA9IHRoaXMuc2V0VG9nZ2VyQnJlYWtwb2ludENsYXNzKDxzdHJpbmc+dGhpcy5hc2lkZU1lbnVUb2dnbGVyKTtcclxuICAgIHRoaXMuYXNpZGVUb2dnbGVyTW9iaWxlQ2xhc3MgPSB0aGlzLnNldFRvZ2dlck1vYmlsZUJyZWFrcG9pbnRDbGFzcyg8c3RyaW5nPnRoaXMuYXNpZGVNZW51VG9nZ2xlcik7XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQ2xhc3ModGhpcy5kb2N1bWVudC5ib2R5LCB0aGlzLmZpeGVkQ2xhc3MpO1xyXG4gIH1cclxuXHJcbiAgaXNGaXhlZChmaXhlZDogYm9vbGVhbiA9IHRoaXMuZml4ZWQpOiB2b2lkIHtcclxuICAgIGlmIChmaXhlZCkge1xyXG4gICAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMuZG9jdW1lbnQuYm9keSwgdGhpcy5maXhlZENsYXNzKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHNldFRvZ2dlckJyZWFrcG9pbnRDbGFzcyhicmVha3BvaW50ID0gJ21kJykge1xyXG4gICAgbGV0IHRvZ2dsZXJDbGFzcyA9ICdkLW5vbmUgZC1tZC1ibG9jayc7XHJcbiAgICBpZiAodGhpcy5icmVha3BvaW50cy5pbmNsdWRlcyhicmVha3BvaW50KSkge1xyXG4gICAgICBjb25zdCBicmVha3BvaW50SW5kZXggPSB0aGlzLmJyZWFrcG9pbnRzLmluZGV4T2YoYnJlYWtwb2ludCk7XHJcbiAgICAgIHRvZ2dsZXJDbGFzcyA9IGBkLW5vbmUgZC0ke2JyZWFrcG9pbnR9LWJsb2NrYDtcclxuICAgIH1cclxuICAgIHJldHVybiB0b2dnbGVyQ2xhc3M7XHJcbiAgfVxyXG5cclxuICBzZXRUb2dnZXJNb2JpbGVCcmVha3BvaW50Q2xhc3MoYnJlYWtwb2ludCA9ICdsZycpIHtcclxuICAgIGxldCB0b2dnbGVyQ2xhc3MgPSAnZC1sZy1ub25lJztcclxuICAgIGlmICh0aGlzLmJyZWFrcG9pbnRzLmluY2x1ZGVzKGJyZWFrcG9pbnQpKSB7XHJcbiAgICAgIHRvZ2dsZXJDbGFzcyA9IGBkLSR7YnJlYWtwb2ludH0tbm9uZWA7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdG9nZ2xlckNsYXNzO1xyXG4gIH1cclxufVxyXG4iXX0=