import * as tslib_1 from "tslib";
var _a, _b;
import { Component, ElementRef, Renderer2 } from '@angular/core';
let AppSidebarHeaderComponent = class AppSidebarHeaderComponent {
    constructor(renderer, hostElement) {
        this.renderer = renderer;
        this.hostElement = hostElement;
        renderer.addClass(hostElement.nativeElement, 'sidebar-header');
    }
    ngOnInit() { }
};
AppSidebarHeaderComponent = tslib_1.__decorate([
    Component({
        selector: 'app-sidebar-header',
        template: `<ng-content></ng-content>`
    }),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof Renderer2 !== "undefined" && Renderer2) === "function" ? _a : Object, typeof (_b = typeof ElementRef !== "undefined" && ElementRef) === "function" ? _b : Object])
], AppSidebarHeaderComponent);
export { AppSidebarHeaderComponent };
//# sourceMappingURL=app-sidebar-header.component.js.map