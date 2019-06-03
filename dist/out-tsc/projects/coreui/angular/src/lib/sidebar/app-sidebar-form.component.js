import * as tslib_1 from "tslib";
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
    tslib_1.__metadata("design:paramtypes", [Renderer2,
        ElementRef])
], AppSidebarFormComponent);
export { AppSidebarFormComponent };
//# sourceMappingURL=app-sidebar-form.component.js.map