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
        this.appHeaderClass = true;
        this.navbarClass = true;
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
    return AppHeaderComponent;
}());
export { AppHeaderComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLWhlYWRlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY29yZXVpL2FuZ3VsYXIvIiwic291cmNlcyI6WyJsaWIvaGVhZGVyL2FwcC1oZWFkZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ2xHLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQU0zQztJQThCRSw0QkFDNEIsUUFBYSxFQUMvQixRQUFtQjtRQURELGFBQVEsR0FBUixRQUFRLENBQUs7UUFDL0IsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQXpCcEIsb0JBQWUsR0FBUSxFQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBQyxDQUFDO1FBRXZELDBCQUFxQixHQUFtQixFQUFFLENBQUM7UUFRbkMsZUFBVSxHQUFHLGNBQWMsQ0FBQztRQUVaLG1CQUFjLEdBQUcsSUFBSSxDQUFDO1FBQzFCLGdCQUFXLEdBQUcsSUFBSSxDQUFDO1FBSS9CLGdCQUFXLEdBQUcsQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDOUQsd0JBQW1CLEdBQUcsbUJBQW1CLENBQUM7UUFDMUMsOEJBQXlCLEdBQUcsV0FBVyxDQUFDO1FBQ3hDLHNCQUFpQixHQUFHLG1CQUFtQixDQUFDO1FBQ3hDLDRCQUF1QixHQUFHLFdBQVcsQ0FBQztJQUtsQyxDQUFDO0lBRUwscUNBQVEsR0FBUjtRQUNFLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3pCLElBQUksQ0FBQyxjQUFjLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxXQUFXLElBQUksSUFBSSxDQUFDLGVBQWUsSUFBSSxJQUFJLENBQUMsb0JBQW9CLENBQUMsQ0FBQztRQUNyRyxJQUFJLENBQUMscUJBQXFCLEdBQUcsSUFBSSxDQUFDLHFCQUFxQixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMscUJBQXFCLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUM7UUFDL0csSUFBSSxDQUFDLG1CQUFtQixHQUFHLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxJQUFJLENBQUMsY0FBd0IsQ0FBQyxDQUFDO1FBQ3hGLElBQUksQ0FBQyx5QkFBeUIsR0FBRyxJQUFJLENBQUMsOEJBQThCLENBQUMsSUFBSSxDQUFDLGNBQXdCLENBQUMsQ0FBQztRQUNwRyxJQUFJLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxDQUFDLHdCQUF3QixDQUFDLElBQUksQ0FBQyxnQkFBMEIsQ0FBQyxDQUFDO1FBQ3hGLElBQUksQ0FBQyx1QkFBdUIsR0FBRyxJQUFJLENBQUMsOEJBQThCLENBQUMsSUFBSSxDQUFDLGdCQUEwQixDQUFDLENBQUM7SUFDdEcsQ0FBQztJQUVELHdDQUFXLEdBQVg7UUFDRSxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDakUsQ0FBQztJQUVELG9DQUFPLEdBQVAsVUFBUSxLQUEyQjtRQUEzQixzQkFBQSxFQUFBLFFBQWlCLElBQUksQ0FBQyxLQUFLO1FBQ2pDLElBQUksS0FBSyxFQUFFO1lBQ1QsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1NBQzdEO0lBQ0gsQ0FBQztJQUVELHFEQUF3QixHQUF4QixVQUF5QixVQUFpQjtRQUFqQiwyQkFBQSxFQUFBLGlCQUFpQjtRQUN4QyxJQUFJLFlBQVksR0FBRyxtQkFBbUIsQ0FBQztRQUN2QyxJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxFQUFFO1lBQ3pDLElBQU0sZUFBZSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1lBQzdELFlBQVksR0FBRyxjQUFZLFVBQVUsV0FBUSxDQUFDO1NBQy9DO1FBQ0QsT0FBTyxZQUFZLENBQUM7SUFDdEIsQ0FBQztJQUVELDJEQUE4QixHQUE5QixVQUErQixVQUFpQjtRQUFqQiwyQkFBQSxFQUFBLGlCQUFpQjtRQUM5QyxJQUFJLFlBQVksR0FBRyxXQUFXLENBQUM7UUFDL0IsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsRUFBRTtZQUN6QyxZQUFZLEdBQUcsT0FBSyxVQUFVLFVBQU8sQ0FBQztTQUN2QztRQUNELE9BQU8sWUFBWSxDQUFDO0lBQ3RCLENBQUM7O2dEQXZDRSxNQUFNLFNBQUMsUUFBUTtnQkFDRSxTQUFTOztJQTlCcEI7UUFBUixLQUFLLEVBQUU7O3FEQUFnQjtJQUVmO1FBQVIsS0FBSyxFQUFFOzsyREFBa0I7SUFDakI7UUFBUixLQUFLLEVBQUU7OytEQUFzQjtJQUNyQjtRQUFSLEtBQUssRUFBRTs7b0VBQTJCO0lBQzFCO1FBQVIsS0FBSyxFQUFFOzsrREFBd0Q7SUFDdkQ7UUFBUixLQUFLLEVBQUU7OytEQUFxQjtJQUNwQjtRQUFSLEtBQUssRUFBRTs7cUVBQTRDO0lBRTNDO1FBQVIsS0FBSyxFQUFFOzs4REFBa0M7SUFDakM7UUFBUixLQUFLLEVBQUU7O29FQUErQjtJQUU5QjtRQUFSLEtBQUssRUFBRTs7Z0VBQW9DO0lBQ25DO1FBQVIsS0FBSyxFQUFFOztzRUFBaUM7SUFJUjtRQUFoQyxXQUFXLENBQUMsa0JBQWtCLENBQUM7OzhEQUF1QjtJQUMxQjtRQUE1QixXQUFXLENBQUMsY0FBYyxDQUFDOzsyREFBb0I7SUFwQnJDLGtCQUFrQjtRQUo5QixTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsd0JBQXdCO1lBQ2xDLDZ4REFBMEM7U0FDM0MsQ0FBQztRQWdDRyxXQUFBLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQTtpREFDQyxTQUFTO09BaENsQixrQkFBa0IsQ0F1RTlCO0lBQUQseUJBQUM7Q0FBQSxBQXZFRCxJQXVFQztTQXZFWSxrQkFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgSW5wdXQsIE9uSW5pdCwgT25EZXN0cm95LCBJbmplY3QsIFJlbmRlcmVyMiwgSG9zdEJpbmRpbmd9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBET0NVTUVOVCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FwcC1oZWFkZXIsIGN1aS1oZWFkZXInLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9hcHAtaGVhZGVyLmNvbXBvbmVudC5odG1sJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgQXBwSGVhZGVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xyXG5cclxuICBASW5wdXQoKSBmaXhlZDogYm9vbGVhbjtcclxuXHJcbiAgQElucHV0KCkgbmF2YmFyQnJhbmQ6IGFueTtcclxuICBASW5wdXQoKSBuYXZiYXJCcmFuZEZ1bGw6IGFueTtcclxuICBASW5wdXQoKSBuYXZiYXJCcmFuZE1pbmltaXplZDogYW55O1xyXG4gIEBJbnB1dCgpIG5hdmJhckJyYW5kVGV4dDogYW55ID0ge2ljb246ICfwn4WyJywgdGV4dDogJ/CfhbIgQ29yZVVJJ307XHJcbiAgQElucHV0KCkgbmF2YmFyQnJhbmRIcmVmOiAnJzsgLy8gZGVwcmVjYXRlZCwgdXNlIG5hdmJhckJyYW5kUm91dGVyTGluayBpbnN0ZWFkXHJcbiAgQElucHV0KCkgbmF2YmFyQnJhbmRSb3V0ZXJMaW5rOiBhbnlbXSB8IHN0cmluZyA9ICcnO1xyXG5cclxuICBASW5wdXQoKSBzaWRlYmFyVG9nZ2xlcjogc3RyaW5nIHwgYm9vbGVhbjtcclxuICBASW5wdXQoKSBtb2JpbGVTaWRlYmFyVG9nZ2xlcjogYm9vbGVhbjtcclxuXHJcbiAgQElucHV0KCkgYXNpZGVNZW51VG9nZ2xlcjogc3RyaW5nIHwgYm9vbGVhbjtcclxuICBASW5wdXQoKSBtb2JpbGVBc2lkZU1lbnVUb2dnbGVyOiBib29sZWFuO1xyXG5cclxuICBwcml2YXRlIHJlYWRvbmx5IGZpeGVkQ2xhc3MgPSAnaGVhZGVyLWZpeGVkJztcclxuXHJcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5hcHAtaGVhZGVyJykgYXBwSGVhZGVyQ2xhc3MgPSB0cnVlO1xyXG4gIEBIb3N0QmluZGluZygnY2xhc3MubmF2YmFyJykgbmF2YmFyQ2xhc3MgPSB0cnVlO1xyXG5cclxuICBuYXZiYXJCcmFuZEltZzogYm9vbGVhbjtcclxuXHJcbiAgcHJpdmF0ZSByZWFkb25seSBicmVha3BvaW50cyA9IFsneGwnLCAnbGcnLCAnbWQnLCAnc20nLCAneHMnXTtcclxuICBzaWRlYmFyVG9nZ2xlckNsYXNzID0gJ2Qtbm9uZSBkLW1kLWJsb2NrJztcclxuICBzaWRlYmFyVG9nZ2xlck1vYmlsZUNsYXNzID0gJ2QtbGctbm9uZSc7XHJcbiAgYXNpZGVUb2dnbGVyQ2xhc3MgPSAnZC1ub25lIGQtbWQtYmxvY2snO1xyXG4gIGFzaWRlVG9nZ2xlck1vYmlsZUNsYXNzID0gJ2QtbGctbm9uZSc7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgQEluamVjdChET0NVTUVOVCkgcHJpdmF0ZSBkb2N1bWVudDogYW55LFxyXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLFxyXG4gICkgeyB9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5pc0ZpeGVkKHRoaXMuZml4ZWQpO1xyXG4gICAgdGhpcy5uYXZiYXJCcmFuZEltZyA9IEJvb2xlYW4odGhpcy5uYXZiYXJCcmFuZCB8fCB0aGlzLm5hdmJhckJyYW5kRnVsbCB8fCB0aGlzLm5hdmJhckJyYW5kTWluaW1pemVkKTtcclxuICAgIHRoaXMubmF2YmFyQnJhbmRSb3V0ZXJMaW5rID0gdGhpcy5uYXZiYXJCcmFuZFJvdXRlckxpbmtbMF0gPyB0aGlzLm5hdmJhckJyYW5kUm91dGVyTGluayA6IHRoaXMubmF2YmFyQnJhbmRIcmVmO1xyXG4gICAgdGhpcy5zaWRlYmFyVG9nZ2xlckNsYXNzID0gdGhpcy5zZXRUb2dnZXJCcmVha3BvaW50Q2xhc3ModGhpcy5zaWRlYmFyVG9nZ2xlciBhcyBzdHJpbmcpO1xyXG4gICAgdGhpcy5zaWRlYmFyVG9nZ2xlck1vYmlsZUNsYXNzID0gdGhpcy5zZXRUb2dnZXJNb2JpbGVCcmVha3BvaW50Q2xhc3ModGhpcy5zaWRlYmFyVG9nZ2xlciBhcyBzdHJpbmcpO1xyXG4gICAgdGhpcy5hc2lkZVRvZ2dsZXJDbGFzcyA9IHRoaXMuc2V0VG9nZ2VyQnJlYWtwb2ludENsYXNzKHRoaXMuYXNpZGVNZW51VG9nZ2xlciBhcyBzdHJpbmcpO1xyXG4gICAgdGhpcy5hc2lkZVRvZ2dsZXJNb2JpbGVDbGFzcyA9IHRoaXMuc2V0VG9nZ2VyTW9iaWxlQnJlYWtwb2ludENsYXNzKHRoaXMuYXNpZGVNZW51VG9nZ2xlciBhcyBzdHJpbmcpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMuZG9jdW1lbnQuYm9keSwgdGhpcy5maXhlZENsYXNzKTtcclxuICB9XHJcblxyXG4gIGlzRml4ZWQoZml4ZWQ6IGJvb2xlYW4gPSB0aGlzLmZpeGVkKTogdm9pZCB7XHJcbiAgICBpZiAoZml4ZWQpIHtcclxuICAgICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLmRvY3VtZW50LmJvZHksIHRoaXMuZml4ZWRDbGFzcyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzZXRUb2dnZXJCcmVha3BvaW50Q2xhc3MoYnJlYWtwb2ludCA9ICdtZCcpIHtcclxuICAgIGxldCB0b2dnbGVyQ2xhc3MgPSAnZC1ub25lIGQtbWQtYmxvY2snO1xyXG4gICAgaWYgKHRoaXMuYnJlYWtwb2ludHMuaW5jbHVkZXMoYnJlYWtwb2ludCkpIHtcclxuICAgICAgY29uc3QgYnJlYWtwb2ludEluZGV4ID0gdGhpcy5icmVha3BvaW50cy5pbmRleE9mKGJyZWFrcG9pbnQpO1xyXG4gICAgICB0b2dnbGVyQ2xhc3MgPSBgZC1ub25lIGQtJHticmVha3BvaW50fS1ibG9ja2A7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdG9nZ2xlckNsYXNzO1xyXG4gIH1cclxuXHJcbiAgc2V0VG9nZ2VyTW9iaWxlQnJlYWtwb2ludENsYXNzKGJyZWFrcG9pbnQgPSAnbGcnKSB7XHJcbiAgICBsZXQgdG9nZ2xlckNsYXNzID0gJ2QtbGctbm9uZSc7XHJcbiAgICBpZiAodGhpcy5icmVha3BvaW50cy5pbmNsdWRlcyhicmVha3BvaW50KSkge1xyXG4gICAgICB0b2dnbGVyQ2xhc3MgPSBgZC0ke2JyZWFrcG9pbnR9LW5vbmVgO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRvZ2dsZXJDbGFzcztcclxuICB9XHJcbn1cclxuIl19