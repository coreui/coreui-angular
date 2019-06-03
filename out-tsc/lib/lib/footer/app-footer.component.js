import * as tslib_1 from "tslib";
var _a, _b;
import { Component, ElementRef, Inject, Input, Renderer2 } from '@angular/core';
import { DOCUMENT } from '@angular/common';
let AppFooterComponent = class AppFooterComponent {
    constructor(document, renderer, hostElement) {
        this.document = document;
        this.renderer = renderer;
        this.hostElement = hostElement;
        this.fixedClass = 'footer-fixed';
        renderer.addClass(hostElement.nativeElement, 'app-footer');
    }
    ngOnInit() {
        this.isFixed(this.fixed);
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
], AppFooterComponent.prototype, "fixed", void 0);
AppFooterComponent = tslib_1.__decorate([
    Component({
        selector: 'app-footer, cui-footer',
        template: `<ng-content></ng-content>`
    }),
    tslib_1.__param(0, Inject(DOCUMENT)),
    tslib_1.__metadata("design:paramtypes", [Object, typeof (_a = typeof Renderer2 !== "undefined" && Renderer2) === "function" ? _a : Object, typeof (_b = typeof ElementRef !== "undefined" && ElementRef) === "function" ? _b : Object])
], AppFooterComponent);
export { AppFooterComponent };
//# sourceMappingURL=app-footer.component.js.map