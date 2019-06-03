import * as tslib_1 from "tslib";
var _a, _b;
import { Component, ElementRef, Input, Inject, Renderer2 } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { asideMenuCssClasses } from '../shared';
let AppAsideComponent = class AppAsideComponent {
    constructor(document, renderer, hostElement) {
        this.document = document;
        this.renderer = renderer;
        this.hostElement = hostElement;
        this.fixedClass = 'aside-menu-fixed';
        renderer.addClass(hostElement.nativeElement, 'aside-menu');
    }
    ngOnInit() {
        this.isFixed(this.fixed);
        this.isOffCanvas(this.offCanvas);
        this.displayBreakpoint(this.display);
    }
    ngOnDestroy() {
        this.renderer.removeClass(this.document.body, this.fixedClass);
    }
    isFixed(fixed = this.fixed) {
        if (fixed) {
            this.renderer.addClass(this.document.body, this.fixedClass);
        }
    }
    isOffCanvas(offCanvas = this.offCanvas) {
        if (offCanvas) {
            this.renderer.addClass(this.document.body, 'aside-menu-off-canvas');
        }
    }
    displayBreakpoint(display = this.display) {
        if (display !== false) {
            const cssClass = this.display ? `aside-menu-${this.display}-show` : asideMenuCssClasses[0];
            this.renderer.addClass(this.document.body, cssClass);
        }
    }
};
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Object)
], AppAsideComponent.prototype, "display", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Boolean)
], AppAsideComponent.prototype, "fixed", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Boolean)
], AppAsideComponent.prototype, "offCanvas", void 0);
AppAsideComponent = tslib_1.__decorate([
    Component({
        selector: 'app-aside, cui-aside',
        template: `<ng-content></ng-content>`
    }),
    tslib_1.__param(0, Inject(DOCUMENT)),
    tslib_1.__metadata("design:paramtypes", [Object, typeof (_a = typeof Renderer2 !== "undefined" && Renderer2) === "function" ? _a : Object, typeof (_b = typeof ElementRef !== "undefined" && ElementRef) === "function" ? _b : Object])
], AppAsideComponent);
export { AppAsideComponent };
//# sourceMappingURL=app-aside.component.js.map