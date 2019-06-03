import * as tslib_1 from "tslib";
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
    tslib_1.__metadata("design:type", Array)
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
    tslib_1.__metadata("design:paramtypes", [Router,
        Renderer2,
        ElementRef])
], AppSidebarNavComponent);
export { AppSidebarNavComponent };
//# sourceMappingURL=app-sidebar-nav.component.js.map