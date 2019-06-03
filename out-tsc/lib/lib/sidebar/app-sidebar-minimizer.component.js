import * as tslib_1 from "tslib";
var _a, _b;
import { Component, ElementRef, HostBinding, HostListener, Inject, Renderer2 } from '@angular/core';
import { DOCUMENT } from '@angular/common';
let AppSidebarMinimizerComponent = class AppSidebarMinimizerComponent {
    constructor(document, renderer, hostElement) {
        this.document = document;
        this.renderer = renderer;
        this.hostElement = hostElement;
        this.role = 'button';
        renderer.addClass(hostElement.nativeElement, 'sidebar-minimizer');
    }
    toggleOpen($event) {
        $event.preventDefault();
        const body = this.document.body;
        body.classList.contains('sidebar-minimized') ?
            this.renderer.removeClass(body, 'sidebar-minimized') :
            this.renderer.addClass(body, 'sidebar-minimized');
        body.classList.contains('brand-minimized') ?
            this.renderer.removeClass(body, 'brand-minimized') :
            this.renderer.addClass(body, 'brand-minimized');
    }
    ngOnInit() { }
};
tslib_1.__decorate([
    HostBinding('attr.role'),
    tslib_1.__metadata("design:type", Object)
], AppSidebarMinimizerComponent.prototype, "role", void 0);
tslib_1.__decorate([
    HostListener('click', ['$event']),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", void 0)
], AppSidebarMinimizerComponent.prototype, "toggleOpen", null);
AppSidebarMinimizerComponent = tslib_1.__decorate([
    Component({
        selector: 'app-sidebar-minimizer',
        template: ``,
    }),
    tslib_1.__param(0, Inject(DOCUMENT)),
    tslib_1.__metadata("design:paramtypes", [Object, typeof (_a = typeof Renderer2 !== "undefined" && Renderer2) === "function" ? _a : Object, typeof (_b = typeof ElementRef !== "undefined" && ElementRef) === "function" ? _b : Object])
], AppSidebarMinimizerComponent);
export { AppSidebarMinimizerComponent };
//# sourceMappingURL=app-sidebar-minimizer.component.js.map