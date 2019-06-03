import * as tslib_1 from "tslib";
var _a, _b, _c, _d;
import { Component, ElementRef, HostBinding, Input, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
let AppSidebarNavComponent = class AppSidebarNavComponent {
    constructor(router, renderer, hostElement) {
        this.router = router;
        this.renderer = renderer;
        this.hostElement = hostElement;
        this.role = 'nav';
        renderer.addClass(hostElement.nativeElement, 'sidebar-nav');
    }
    ngOnChanges(changes) {
        this.navItemsArray = JSON.parse(JSON.stringify(this.navItems || []));
    }
};
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", typeof (_a = typeof Array !== "undefined" && Array) === "function" ? _a : Object)
], AppSidebarNavComponent.prototype, "navItems", void 0);
tslib_1.__decorate([
    HostBinding('attr.role'),
    tslib_1.__metadata("design:type", Object)
], AppSidebarNavComponent.prototype, "role", void 0);
AppSidebarNavComponent = tslib_1.__decorate([
    Component({
        selector: 'app-sidebar-nav',
        templateUrl: './app-sidebar-nav.component.html'
    }),
    tslib_1.__metadata("design:paramtypes", [typeof (_b = typeof Router !== "undefined" && Router) === "function" ? _b : Object, typeof (_c = typeof Renderer2 !== "undefined" && Renderer2) === "function" ? _c : Object, typeof (_d = typeof ElementRef !== "undefined" && ElementRef) === "function" ? _d : Object])
], AppSidebarNavComponent);
export { AppSidebarNavComponent };
//# sourceMappingURL=app-sidebar-nav.component.js.map