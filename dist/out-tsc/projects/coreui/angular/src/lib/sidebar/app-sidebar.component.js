import * as tslib_1 from "tslib";
import { Component, Input, Inject, Renderer2, ElementRef } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { sidebarCssClasses } from '../shared';
let AppSidebarComponent = class AppSidebarComponent {
    constructor(document, renderer, hostElement) {
        this.document = document;
        this.renderer = renderer;
        this.hostElement = hostElement;
        renderer.addClass(hostElement.nativeElement, 'sidebar');
    }
    ngOnInit() {
        this.displayBreakpoint(this.display);
        this.isCompact(this.compact);
        this.isFixed(this.fixed);
        this.isMinimized(this.minimized);
        this.isOffCanvas(this.offCanvas);
    }
    ngOnDestroy() {
        this.renderer.removeClass(this.document.body, 'sidebar-fixed');
    }
    isCompact(compact = this.compact) {
        if (compact) {
            this.renderer.addClass(this.document.body, 'sidebar-compact');
        }
    }
    isFixed(fixed = this.fixed) {
        if (fixed) {
            this.renderer.addClass(this.document.body, 'sidebar-fixed');
        }
    }
    isMinimized(minimized = this.minimized) {
        if (minimized) {
            this.renderer.addClass(this.document.body, 'sidebar-minimized');
        }
    }
    isOffCanvas(offCanvas = this.offCanvas) {
        if (offCanvas) {
            this.renderer.addClass(this.document.body, 'sidebar-off-canvas');
        }
    }
    displayBreakpoint(display = this.display) {
        if (display !== false) {
            const cssClass = display ? `sidebar-${display}-show` : sidebarCssClasses[0];
            this.renderer.addClass(this.document.body, cssClass);
        }
    }
};
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Boolean)
], AppSidebarComponent.prototype, "compact", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Object)
], AppSidebarComponent.prototype, "display", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Boolean)
], AppSidebarComponent.prototype, "fixed", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Boolean)
], AppSidebarComponent.prototype, "minimized", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Boolean)
], AppSidebarComponent.prototype, "offCanvas", void 0);
AppSidebarComponent = tslib_1.__decorate([
    Component({
        selector: 'app-sidebar',
        template: `<ng-content></ng-content>`
    }),
    tslib_1.__param(0, Inject(DOCUMENT)),
    tslib_1.__metadata("design:paramtypes", [Object, Renderer2,
        ElementRef])
], AppSidebarComponent);
export { AppSidebarComponent };
//# sourceMappingURL=app-sidebar.component.js.map