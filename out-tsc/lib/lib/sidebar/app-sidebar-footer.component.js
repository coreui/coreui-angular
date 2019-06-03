import * as tslib_1 from "tslib";
var _a, _b;
import { Component, ElementRef, Renderer2 } from '@angular/core';
let AppSidebarFooterComponent = class AppSidebarFooterComponent {
    constructor(renderer, hostElement) {
        this.renderer = renderer;
        this.hostElement = hostElement;
        renderer.addClass(hostElement.nativeElement, 'app-sidebar-footer');
    }
    ngOnInit() { }
};
AppSidebarFooterComponent = tslib_1.__decorate([
    Component({
        selector: 'app-sidebar-footer',
        template: `<ng-content></ng-content>`
    }),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof Renderer2 !== "undefined" && Renderer2) === "function" ? _a : Object, typeof (_b = typeof ElementRef !== "undefined" && ElementRef) === "function" ? _b : Object])
], AppSidebarFooterComponent);
export { AppSidebarFooterComponent };
//# sourceMappingURL=app-sidebar-footer.component.js.map