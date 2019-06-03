import * as tslib_1 from "tslib";
import { Component, ElementRef, Input, Inject, Renderer2 } from '@angular/core';
import { DOCUMENT } from '@angular/common';
let AppHeaderComponent = class AppHeaderComponent {
    constructor(document, renderer, hostElement) {
        this.document = document;
        this.renderer = renderer;
        this.hostElement = hostElement;
        this.navbarBrandText = { icon: '🅲', text: '🅲 CoreUI' };
        this.navbarBrandHref = ''; // deprecated, use navbarBrandRouterLink instead
        this.navbarBrandRouterLink = '';
        this.fixedClass = 'header-fixed';
        renderer.addClass(hostElement.nativeElement, 'app-header');
        renderer.addClass(hostElement.nativeElement, 'navbar');
    }
    ngOnInit() {
        this.isFixed(this.fixed);
        this.navbarBrandImg = Boolean(this.navbarBrand || this.navbarBrandFull || this.navbarBrandMinimized);
        this.navbarBrandRouterLink = this.navbarBrandRouterLink[0] ? this.navbarBrandRouterLink : this.navbarBrandHref;
    }
    ngOnDestroy() {
        this.renderer.removeClass(this.document.body, this.fixedClass);
    }
    isFixed(fixed = this.fixed) {
        if (fixed) {
            this.renderer.addClass(this.document.body, this.fixedClass);
        }
    }
};
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Boolean)
], AppHeaderComponent.prototype, "fixed", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Object)
], AppHeaderComponent.prototype, "navbarBrand", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Object)
], AppHeaderComponent.prototype, "navbarBrandFull", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Object)
], AppHeaderComponent.prototype, "navbarBrandMinimized", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Object)
], AppHeaderComponent.prototype, "navbarBrandText", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", String)
], AppHeaderComponent.prototype, "navbarBrandHref", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Object)
], AppHeaderComponent.prototype, "navbarBrandRouterLink", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Object)
], AppHeaderComponent.prototype, "sidebarToggler", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Boolean)
], AppHeaderComponent.prototype, "mobileSidebarToggler", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Object)
], AppHeaderComponent.prototype, "asideMenuToggler", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Boolean)
], AppHeaderComponent.prototype, "mobileAsideMenuToggler", void 0);
AppHeaderComponent = tslib_1.__decorate([
    Component({
        selector: 'app-header, cui-header',
        templateUrl: './app-header.component.html'
    }),
    tslib_1.__param(0, Inject(DOCUMENT)),
    tslib_1.__metadata("design:paramtypes", [Object, Renderer2,
        ElementRef])
], AppHeaderComponent);
export { AppHeaderComponent };
//# sourceMappingURL=app-header.component.js.map