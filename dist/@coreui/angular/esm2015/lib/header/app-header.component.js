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
        this.appHeaderClass = true;
        this.navbarClass = true;
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
], AppHeaderComponent.prototype, "appHeaderClass", void 0);
__decorate([
    HostBinding('class.navbar'),
    __metadata("design:type", Object)
], AppHeaderComponent.prototype, "navbarClass", void 0);
AppHeaderComponent = __decorate([
    Component({
        selector: 'app-header, cui-header',
        template: "<ng-template [ngIf]=\"mobileSidebarToggler != false\">\r\n  <button class=\"navbar-toggler {{sidebarTogglerMobileClass}}\" type=\"button\" appSidebarToggler>\r\n    <span class=\"navbar-toggler-icon\"></span>\r\n  </button>\r\n</ng-template>\r\n<a class=\"navbar-brand\" [routerLink]=\"navbarBrandRouterLink\">\r\n  <ng-template [ngIf]=\"navbarBrandImg\">\r\n    <img *ngIf=\"navbarBrand\"\r\n         [appHtmlAttr]=\"navbarBrand\"\r\n         [ngClass]=\"'navbar-brand'\">\r\n    <img *ngIf=\"navbarBrandFull\"\r\n         [appHtmlAttr]=\"navbarBrandFull\"\r\n         [ngClass]=\"'navbar-brand-full'\">\r\n    <img *ngIf=\"navbarBrandMinimized\"\r\n         [appHtmlAttr]=\"navbarBrandMinimized\"\r\n         [ngClass]=\"'navbar-brand-minimized'\">\r\n  </ng-template>\r\n  <ng-template [ngIf]=\"!navbarBrandImg\">\r\n    <div class=\"navbar-brand-full\" [innerHTML]=\"navbarBrandText.text\"></div>\r\n    <div class=\"navbar-brand-minimized\" [innerHTML]=\"navbarBrandText.icon\"></div>\r\n  </ng-template>\r\n</a>\r\n<ng-template [ngIf]=\"sidebarToggler != false\">\r\n  <button class=\"navbar-toggler {{sidebarTogglerClass}}\" type=\"button\" [appSidebarToggler]=\"sidebarToggler\">\r\n    <span class=\"navbar-toggler-icon\"></span>\r\n  </button>\r\n</ng-template>\r\n<ng-content></ng-content>\r\n<ng-template [ngIf]=\"asideMenuToggler != false\">\r\n  <button class=\"navbar-toggler {{asideTogglerClass}}\" type=\"button\" [appAsideMenuToggler]=\"asideMenuToggler\">\r\n    <span class=\"navbar-toggler-icon\"></span>\r\n  </button>\r\n</ng-template>\r\n<ng-template [ngIf]=\"mobileAsideMenuToggler != false\">\r\n  <button class=\"navbar-toggler {{asideTogglerMobileClass}}\" type=\"button\" appAsideMenuToggler>\r\n    <span class=\"navbar-toggler-icon\"></span>\r\n  </button>\r\n</ng-template>\r\n"
    }),
    __param(0, Inject(DOCUMENT)),
    __metadata("design:paramtypes", [Object, Renderer2])
], AppHeaderComponent);
export { AppHeaderComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLWhlYWRlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY29yZXVpL2FuZ3VsYXIvIiwic291cmNlcyI6WyJsaWIvaGVhZGVyL2FwcC1oZWFkZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ2xHLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQU0zQyxJQUFhLGtCQUFrQixHQUEvQixNQUFhLGtCQUFrQjtJQThCN0IsWUFDNEIsUUFBYSxFQUMvQixRQUFtQjtRQURELGFBQVEsR0FBUixRQUFRLENBQUs7UUFDL0IsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQXpCcEIsb0JBQWUsR0FBUSxFQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBQyxDQUFDO1FBRXZELDBCQUFxQixHQUFtQixFQUFFLENBQUM7UUFRbkMsZUFBVSxHQUFHLGNBQWMsQ0FBQztRQUVaLG1CQUFjLEdBQUcsSUFBSSxDQUFDO1FBQzFCLGdCQUFXLEdBQUcsSUFBSSxDQUFDO1FBSS9CLGdCQUFXLEdBQUcsQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDOUQsd0JBQW1CLEdBQUcsbUJBQW1CLENBQUM7UUFDMUMsOEJBQXlCLEdBQUcsV0FBVyxDQUFDO1FBQ3hDLHNCQUFpQixHQUFHLG1CQUFtQixDQUFDO1FBQ3hDLDRCQUF1QixHQUFHLFdBQVcsQ0FBQztJQUtsQyxDQUFDO0lBRUwsUUFBUTtRQUNOLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3pCLElBQUksQ0FBQyxjQUFjLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FB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Q2xCLGtCQUFrQixDQXVFOUI7U0F2RVksa0JBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIElucHV0LCBPbkluaXQsIE9uRGVzdHJveSwgSW5qZWN0LCBSZW5kZXJlcjIsIEhvc3RCaW5kaW5nfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRE9DVU1FTlQgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhcHAtaGVhZGVyLCBjdWktaGVhZGVyJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vYXBwLWhlYWRlci5jb21wb25lbnQuaHRtbCdcclxufSlcclxuZXhwb3J0IGNsYXNzIEFwcEhlYWRlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcclxuXHJcbiAgQElucHV0KCkgZml4ZWQ6IGJvb2xlYW47XHJcblxyXG4gIEBJbnB1dCgpIG5hdmJhckJyYW5kOiBhbnk7XHJcbiAgQElucHV0KCkgbmF2YmFyQnJhbmRGdWxsOiBhbnk7XHJcbiAgQElucHV0KCkgbmF2YmFyQnJhbmRNaW5pbWl6ZWQ6IGFueTtcclxuICBASW5wdXQoKSBuYXZiYXJCcmFuZFRleHQ6IGFueSA9IHtpY29uOiAn8J+FsicsIHRleHQ6ICfwn4WyIENvcmVVSSd9O1xyXG4gIEBJbnB1dCgpIG5hdmJhckJyYW5kSHJlZjogJyc7IC8vIGRlcHJlY2F0ZWQsIHVzZSBuYXZiYXJCcmFuZFJvdXRlckxpbmsgaW5zdGVhZFxyXG4gIEBJbnB1dCgpIG5hdmJhckJyYW5kUm91dGVyTGluazogYW55W10gfCBzdHJpbmcgPSAnJztcclxuXHJcbiAgQElucHV0KCkgc2lkZWJhclRvZ2dsZXI6IHN0cmluZyB8IGJvb2xlYW47XHJcbiAgQElucHV0KCkgbW9iaWxlU2lkZWJhclRvZ2dsZXI6IGJvb2xlYW47XHJcblxyXG4gIEBJbnB1dCgpIGFzaWRlTWVudVRvZ2dsZXI6IHN0cmluZyB8IGJvb2xlYW47XHJcbiAgQElucHV0KCkgbW9iaWxlQXNpZGVNZW51VG9nZ2xlcjogYm9vbGVhbjtcclxuXHJcbiAgcHJpdmF0ZSByZWFkb25seSBmaXhlZENsYXNzID0gJ2hlYWRlci1maXhlZCc7XHJcblxyXG4gIEBIb3N0QmluZGluZygnY2xhc3MuYXBwLWhlYWRlcicpIGFwcEhlYWRlckNsYXNzID0gdHJ1ZTtcclxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLm5hdmJhcicpIG5hdmJhckNsYXNzID0gdHJ1ZTtcclxuXHJcbiAgbmF2YmFyQnJhbmRJbWc6IGJvb2xlYW47XHJcblxyXG4gIHByaXZhdGUgcmVhZG9ubHkgYnJlYWtwb2ludHMgPSBbJ3hsJywgJ2xnJywgJ21kJywgJ3NtJywgJ3hzJ107XHJcbiAgc2lkZWJhclRvZ2dsZXJDbGFzcyA9ICdkLW5vbmUgZC1tZC1ibG9jayc7XHJcbiAgc2lkZWJhclRvZ2dsZXJNb2JpbGVDbGFzcyA9ICdkLWxnLW5vbmUnO1xyXG4gIGFzaWRlVG9nZ2xlckNsYXNzID0gJ2Qtbm9uZSBkLW1kLWJsb2NrJztcclxuICBhc2lkZVRvZ2dsZXJNb2JpbGVDbGFzcyA9ICdkLWxnLW5vbmUnO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIEBJbmplY3QoRE9DVU1FTlQpIHByaXZhdGUgZG9jdW1lbnQ6IGFueSxcclxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcclxuICApIHsgfVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMuaXNGaXhlZCh0aGlzLmZpeGVkKTtcclxuICAgIHRoaXMubmF2YmFyQnJhbmRJbWcgPSBCb29sZWFuKHRoaXMubmF2YmFyQnJhbmQgfHwgdGhpcy5uYXZiYXJCcmFuZEZ1bGwgfHwgdGhpcy5uYXZiYXJCcmFuZE1pbmltaXplZCk7XHJcbiAgICB0aGlzLm5hdmJhckJyYW5kUm91dGVyTGluayA9IHRoaXMubmF2YmFyQnJhbmRSb3V0ZXJMaW5rWzBdID8gdGhpcy5uYXZiYXJCcmFuZFJvdXRlckxpbmsgOiB0aGlzLm5hdmJhckJyYW5kSHJlZjtcclxuICAgIHRoaXMuc2lkZWJhclRvZ2dsZXJDbGFzcyA9IHRoaXMuc2V0VG9nZ2VyQnJlYWtwb2ludENsYXNzKHRoaXMuc2lkZWJhclRvZ2dsZXIgYXMgc3RyaW5nKTtcclxuICAgIHRoaXMuc2lkZWJhclRvZ2dsZXJNb2JpbGVDbGFzcyA9IHRoaXMuc2V0VG9nZ2VyTW9iaWxlQnJlYWtwb2ludENsYXNzKHRoaXMuc2lkZWJhclRvZ2dsZXIgYXMgc3RyaW5nKTtcclxuICAgIHRoaXMuYXNpZGVUb2dnbGVyQ2xhc3MgPSB0aGlzLnNldFRvZ2dlckJyZWFrcG9pbnRDbGFzcyh0aGlzLmFzaWRlTWVudVRvZ2dsZXIgYXMgc3RyaW5nKTtcclxuICAgIHRoaXMuYXNpZGVUb2dnbGVyTW9iaWxlQ2xhc3MgPSB0aGlzLnNldFRvZ2dlck1vYmlsZUJyZWFrcG9pbnRDbGFzcyh0aGlzLmFzaWRlTWVudVRvZ2dsZXIgYXMgc3RyaW5nKTtcclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgdGhpcy5yZW5kZXJlci5yZW1vdmVDbGFzcyh0aGlzLmRvY3VtZW50LmJvZHksIHRoaXMuZml4ZWRDbGFzcyk7XHJcbiAgfVxyXG5cclxuICBpc0ZpeGVkKGZpeGVkOiBib29sZWFuID0gdGhpcy5maXhlZCk6IHZvaWQge1xyXG4gICAgaWYgKGZpeGVkKSB7XHJcbiAgICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5kb2N1bWVudC5ib2R5LCB0aGlzLmZpeGVkQ2xhc3MpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc2V0VG9nZ2VyQnJlYWtwb2ludENsYXNzKGJyZWFrcG9pbnQgPSAnbWQnKSB7XHJcbiAgICBsZXQgdG9nZ2xlckNsYXNzID0gJ2Qtbm9uZSBkLW1kLWJsb2NrJztcclxuICAgIGlmICh0aGlzLmJyZWFrcG9pbnRzLmluY2x1ZGVzKGJyZWFrcG9pbnQpKSB7XHJcbiAgICAgIGNvbnN0IGJyZWFrcG9pbnRJbmRleCA9IHRoaXMuYnJlYWtwb2ludHMuaW5kZXhPZihicmVha3BvaW50KTtcclxuICAgICAgdG9nZ2xlckNsYXNzID0gYGQtbm9uZSBkLSR7YnJlYWtwb2ludH0tYmxvY2tgO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRvZ2dsZXJDbGFzcztcclxuICB9XHJcblxyXG4gIHNldFRvZ2dlck1vYmlsZUJyZWFrcG9pbnRDbGFzcyhicmVha3BvaW50ID0gJ2xnJykge1xyXG4gICAgbGV0IHRvZ2dsZXJDbGFzcyA9ICdkLWxnLW5vbmUnO1xyXG4gICAgaWYgKHRoaXMuYnJlYWtwb2ludHMuaW5jbHVkZXMoYnJlYWtwb2ludCkpIHtcclxuICAgICAgdG9nZ2xlckNsYXNzID0gYGQtJHticmVha3BvaW50fS1ub25lYDtcclxuICAgIH1cclxuICAgIHJldHVybiB0b2dnbGVyQ2xhc3M7XHJcbiAgfVxyXG59XHJcbiJdfQ==