import * as tslib_1 from "tslib";
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
    tslib_1.__metadata("design:paramtypes", [Renderer2,
        ElementRef])
], AppSidebarFooterComponent);
export { AppSidebarFooterComponent };
//# sourceMappingURL=app-sidebar-footer.component.js.map