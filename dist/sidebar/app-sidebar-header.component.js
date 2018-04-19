import { Component, ElementRef } from '@angular/core';
import { Replace } from './../shared';
var AppSidebarHeaderComponent = /** @class */ (function () {
    function AppSidebarHeaderComponent(el) {
        this.el = el;
    }
    AppSidebarHeaderComponent.prototype.ngOnInit = function () {
        Replace(this.el);
    };
    AppSidebarHeaderComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-sidebar-header',
                    template: "\n    <div class=\"sidebar-header\">\n      <ng-content></ng-content>\n    </div>\n  "
                },] },
    ];
    /** @nocollapse */
    AppSidebarHeaderComponent.ctorParameters = function () { return [
        { type: ElementRef, },
    ]; };
    return AppSidebarHeaderComponent;
}());
export { AppSidebarHeaderComponent };
//# sourceMappingURL=app-sidebar-header.component.js.map