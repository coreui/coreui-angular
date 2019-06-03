import * as tslib_1 from "tslib";
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
    tslib_1.__metadata("design:paramtypes", [Renderer2,
        ElementRef])
], AppSidebarHeaderComponent);
export { AppSidebarHeaderComponent };
//# sourceMappingURL=app-sidebar-header.component.js.map