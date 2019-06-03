import * as tslib_1 from "tslib";
var _a;
import { Component, Inject, Input, Renderer2 } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { AppBreadcrumbService } from './app-breadcrumb.service';
let CuiBreadcrumbComponent = class CuiBreadcrumbComponent {
    constructor(document, renderer, service) {
        this.document = document;
        this.renderer = renderer;
        this.service = service;
        this.fixedClass = 'breadcrumb-fixed';
    }
    ngOnInit() {
        this.isFixed(this.fixed);
        this.breadcrumbs = this.service.breadcrumbs;
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
], CuiBreadcrumbComponent.prototype, "fixed", void 0);
CuiBreadcrumbComponent = tslib_1.__decorate([
    Component({
        selector: 'cui-breadcrumb',
        templateUrl: './cui-breadcrumb.component.html'
    }),
    tslib_1.__param(0, Inject(DOCUMENT)),
    tslib_1.__metadata("design:paramtypes", [Object, typeof (_a = typeof Renderer2 !== "undefined" && Renderer2) === "function" ? _a : Object, AppBreadcrumbService])
], CuiBreadcrumbComponent);
export { CuiBreadcrumbComponent };
//# sourceMappingURL=cui-breadcrumb.component.js.map