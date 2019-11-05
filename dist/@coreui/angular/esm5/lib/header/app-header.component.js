import { __decorate, __metadata, __param } from "tslib";
import { Component, Input, OnInit, OnDestroy, Inject, Renderer2, HostBinding } from '@angular/core';
import { DOCUMENT } from '@angular/common';
var AppHeaderComponent = /** @class */ (function () {
    function AppHeaderComponent(document, renderer) {
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
    AppHeaderComponent.prototype.ngOnInit = function () {
        this.isFixed(this.fixed);
        this.navbarBrandImg = Boolean(this.navbarBrand || this.navbarBrandFull || this.navbarBrandMinimized);
        this.navbarBrandRouterLink = this.navbarBrandRouterLink[0] ? this.navbarBrandRouterLink : this.navbarBrandHref;
        this.sidebarTogglerClass = this.setToggerBreakpointClass(this.sidebarToggler);
        this.sidebarTogglerMobileClass = this.setToggerMobileBreakpointClass(this.sidebarToggler);
        this.asideTogglerClass = this.setToggerBreakpointClass(this.asideMenuToggler);
        this.asideTogglerMobileClass = this.setToggerMobileBreakpointClass(this.asideMenuToggler);
    };
    AppHeaderComponent.prototype.ngOnDestroy = function () {
        this.renderer.removeClass(this.document.body, this.fixedClass);
    };
    AppHeaderComponent.prototype.isFixed = function (fixed) {
        if (fixed === void 0) { fixed = this.fixed; }
        if (fixed) {
            this.renderer.addClass(this.document.body, this.fixedClass);
        }
    };
    AppHeaderComponent.prototype.setToggerBreakpointClass = function (breakpoint) {
        if (breakpoint === void 0) { breakpoint = 'md'; }
        var togglerClass = 'd-none d-md-block';
        if (this.breakpoints.includes(breakpoint)) {
            var breakpointIndex = this.breakpoints.indexOf(breakpoint);
            togglerClass = "d-none d-" + breakpoint + "-block";
        }
        return togglerClass;
    };
    AppHeaderComponent.prototype.setToggerMobileBreakpointClass = function (breakpoint) {
        if (breakpoint === void 0) { breakpoint = 'lg'; }
        var togglerClass = 'd-lg-none';
        if (this.breakpoints.includes(breakpoint)) {
            togglerClass = "d-" + breakpoint + "-none";
        }
        return togglerClass;
    };
    AppHeaderComponent.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] },
        { type: Renderer2 }
    ]; };
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
    return AppHeaderComponent;
}());
export { AppHeaderComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLWhlYWRlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY29yZXVpL2FuZ3VsYXIvIiwic291cmNlcyI6WyJsaWIvaGVhZGVyL2FwcC1oZWFkZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ2xHLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQU0zQztJQThCRSw0QkFDNEIsUUFBYSxFQUMvQixRQUFtQjtRQURELGFBQVEsR0FBUixRQUFRLENBQUs7UUFDL0IsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQXpCcEIsb0JBQWUsR0FBUSxFQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBQyxDQUFDO1FBRXZELDBCQUFxQixHQUFtQixFQUFFLENBQUM7UUFRbkMsZUFBVSxHQUFHLGNBQWMsQ0FBQztRQUVaLFlBQU8sR0FBRyxJQUFJLENBQUM7UUFDbkIsWUFBTyxHQUFHLElBQUksQ0FBQztRQUkzQixnQkFBVyxHQUFHLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQzlELHdCQUFtQixHQUFHLG1CQUFtQixDQUFDO1FBQzFDLDhCQUF5QixHQUFHLFdBQVcsQ0FBQztRQUN4QyxzQkFBaUIsR0FBRyxtQkFBbUIsQ0FBQztRQUN4Qyw0QkFBdUIsR0FBRyxXQUFXLENBQUM7SUFLbEMsQ0FBQztJQUVMLHFDQUFRLEdBQVI7UUFDRSxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN6QixJQUFJLENBQUMsY0FBYyxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsV0FBVyxJQUFJLElBQUksQ0FBQyxlQUFl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QUEsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFBO2lEQUNDLFNBQVM7T0FoQ2xCLGtCQUFrQixDQXVFOUI7SUFBRCx5QkFBQztDQUFBLEFBdkVELElBdUVDO1NBdkVZLGtCQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBJbnB1dCwgT25Jbml0LCBPbkRlc3Ryb3ksIEluamVjdCwgUmVuZGVyZXIyLCBIb3N0QmluZGluZ30gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IERPQ1VNRU5UIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYXBwLWhlYWRlciwgY3VpLWhlYWRlcicsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2FwcC1oZWFkZXIuY29tcG9uZW50Lmh0bWwnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBcHBIZWFkZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XHJcblxyXG4gIEBJbnB1dCgpIGZpeGVkOiBib29sZWFuO1xyXG5cclxuICBASW5wdXQoKSBuYXZiYXJCcmFuZDogYW55O1xyXG4gIEBJbnB1dCgpIG5hdmJhckJyYW5kRnVsbDogYW55O1xyXG4gIEBJbnB1dCgpIG5hdmJhckJyYW5kTWluaW1pemVkOiBhbnk7XHJcbiAgQElucHV0KCkgbmF2YmFyQnJhbmRUZXh0OiBhbnkgPSB7aWNvbjogJ/CfhbInLCB0ZXh0OiAn8J+FsiBDb3JlVUknfTtcclxuICBASW5wdXQoKSBuYXZiYXJCcmFuZEhyZWY6ICcnOyAvLyBkZXByZWNhdGVkLCB1c2UgbmF2YmFyQnJhbmRSb3V0ZXJMaW5rIGluc3RlYWRcclxuICBASW5wdXQoKSBuYXZiYXJCcmFuZFJvdXRlckxpbms6IGFueVtdIHwgc3RyaW5nID0gJyc7XHJcblxyXG4gIEBJbnB1dCgpIHNpZGViYXJUb2dnbGVyOiBzdHJpbmcgfCBib29sZWFuO1xyXG4gIEBJbnB1dCgpIG1vYmlsZVNpZGViYXJUb2dnbGVyOiBib29sZWFuO1xyXG5cclxuICBASW5wdXQoKSBhc2lkZU1lbnVUb2dnbGVyOiBzdHJpbmcgfCBib29sZWFuO1xyXG4gIEBJbnB1dCgpIG1vYmlsZUFzaWRlTWVudVRvZ2dsZXI6IGJvb2xlYW47XHJcblxyXG4gIHByaXZhdGUgcmVhZG9ubHkgZml4ZWRDbGFzcyA9ICdoZWFkZXItZml4ZWQnO1xyXG5cclxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmFwcC1oZWFkZXInKSBfaGVhZGVyID0gdHJ1ZTtcclxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLm5hdmJhcicpIF9uYXZiYXIgPSB0cnVlO1xyXG5cclxuICBuYXZiYXJCcmFuZEltZzogYm9vbGVhbjtcclxuXHJcbiAgcHJpdmF0ZSByZWFkb25seSBicmVha3BvaW50cyA9IFsneGwnLCAnbGcnLCAnbWQnLCAnc20nLCAneHMnXTtcclxuICBzaWRlYmFyVG9nZ2xlckNsYXNzID0gJ2Qtbm9uZSBkLW1kLWJsb2NrJztcclxuICBzaWRlYmFyVG9nZ2xlck1vYmlsZUNsYXNzID0gJ2QtbGctbm9uZSc7XHJcbiAgYXNpZGVUb2dnbGVyQ2xhc3MgPSAnZC1ub25lIGQtbWQtYmxvY2snO1xyXG4gIGFzaWRlVG9nZ2xlck1vYmlsZUNsYXNzID0gJ2QtbGctbm9uZSc7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgQEluamVjdChET0NVTUVOVCkgcHJpdmF0ZSBkb2N1bWVudDogYW55LFxyXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLFxyXG4gICkgeyB9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5pc0ZpeGVkKHRoaXMuZml4ZWQpO1xyXG4gICAgdGhpcy5uYXZiYXJCcmFuZEltZyA9IEJvb2xlYW4odGhpcy5uYXZiYXJCcmFuZCB8fCB0aGlzLm5hdmJhckJyYW5kRnVsbCB8fCB0aGlzLm5hdmJhckJyYW5kTWluaW1pemVkKTtcclxuICAgIHRoaXMubmF2YmFyQnJhbmRSb3V0ZXJMaW5rID0gdGhpcy5uYXZiYXJCcmFuZFJvdXRlckxpbmtbMF0gPyB0aGlzLm5hdmJhckJyYW5kUm91dGVyTGluayA6IHRoaXMubmF2YmFyQnJhbmRIcmVmO1xyXG4gICAgdGhpcy5zaWRlYmFyVG9nZ2xlckNsYXNzID0gdGhpcy5zZXRUb2dnZXJCcmVha3BvaW50Q2xhc3MoPHN0cmluZz50aGlzLnNpZGViYXJUb2dnbGVyKTtcclxuICAgIHRoaXMuc2lkZWJhclRvZ2dsZXJNb2JpbGVDbGFzcyA9IHRoaXMuc2V0VG9nZ2VyTW9iaWxlQnJlYWtwb2ludENsYXNzKDxzdHJpbmc+dGhpcy5zaWRlYmFyVG9nZ2xlcik7XHJcbiAgICB0aGlzLmFzaWRlVG9nZ2xlckNsYXNzID0gdGhpcy5zZXRUb2dnZXJCcmVha3BvaW50Q2xhc3MoPHN0cmluZz50aGlzLmFzaWRlTWVudVRvZ2dsZXIpO1xyXG4gICAgdGhpcy5hc2lkZVRvZ2dsZXJNb2JpbGVDbGFzcyA9IHRoaXMuc2V0VG9nZ2VyTW9iaWxlQnJlYWtwb2ludENsYXNzKDxzdHJpbmc+dGhpcy5hc2lkZU1lbnVUb2dnbGVyKTtcclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgdGhpcy5yZW5kZXJlci5yZW1vdmVDbGFzcyh0aGlzLmRvY3VtZW50LmJvZHksIHRoaXMuZml4ZWRDbGFzcyk7XHJcbiAgfVxyXG5cclxuICBpc0ZpeGVkKGZpeGVkOiBib29sZWFuID0gdGhpcy5maXhlZCk6IHZvaWQge1xyXG4gICAgaWYgKGZpeGVkKSB7XHJcbiAgICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5kb2N1bWVudC5ib2R5LCB0aGlzLmZpeGVkQ2xhc3MpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc2V0VG9nZ2VyQnJlYWtwb2ludENsYXNzKGJyZWFrcG9pbnQgPSAnbWQnKSB7XHJcbiAgICBsZXQgdG9nZ2xlckNsYXNzID0gJ2Qtbm9uZSBkLW1kLWJsb2NrJztcclxuICAgIGlmICh0aGlzLmJyZWFrcG9pbnRzLmluY2x1ZGVzKGJyZWFrcG9pbnQpKSB7XHJcbiAgICAgIGNvbnN0IGJyZWFrcG9pbnRJbmRleCA9IHRoaXMuYnJlYWtwb2ludHMuaW5kZXhPZihicmVha3BvaW50KTtcclxuICAgICAgdG9nZ2xlckNsYXNzID0gYGQtbm9uZSBkLSR7YnJlYWtwb2ludH0tYmxvY2tgO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRvZ2dsZXJDbGFzcztcclxuICB9XHJcblxyXG4gIHNldFRvZ2dlck1vYmlsZUJyZWFrcG9pbnRDbGFzcyhicmVha3BvaW50ID0gJ2xnJykge1xyXG4gICAgbGV0IHRvZ2dsZXJDbGFzcyA9ICdkLWxnLW5vbmUnO1xyXG4gICAgaWYgKHRoaXMuYnJlYWtwb2ludHMuaW5jbHVkZXMoYnJlYWtwb2ludCkpIHtcclxuICAgICAgdG9nZ2xlckNsYXNzID0gYGQtJHticmVha3BvaW50fS1ub25lYDtcclxuICAgIH1cclxuICAgIHJldHVybiB0b2dnbGVyQ2xhc3M7XHJcbiAgfVxyXG59XHJcbiJdfQ==