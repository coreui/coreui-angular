import * as tslib_1 from "tslib";
var _a, _b;
import { Component, ElementRef, Renderer2 } from '@angular/core';
let AppSidebarFormComponent = class AppSidebarFormComponent {
    constructor(renderer, hostElement) {
        this.renderer = renderer;
        this.hostElement = hostElement;
        renderer.addClass(hostElement.nativeElement, 'sidebar-form');
    }
    ngOnInit() { }
};
AppSidebarFormComponent = tslib_1.__decorate([
    Component({
        selector: 'app-sidebar-form',
        template: `<ng-content></ng-content>`
    }),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof Renderer2 !== "undefined" && Renderer2) === "function" ? _a : Object, typeof (_b = typeof ElementRef !== "undefined" && ElementRef) === "function" ? _b : Object])
], AppSidebarFormComponent);
export { AppSidebarFormComponent };
//# sourceMappingURL=app-sidebar-form.component.js.map