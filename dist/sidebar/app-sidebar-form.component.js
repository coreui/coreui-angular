import { Component, ElementRef } from '@angular/core';
import { Replace } from './../shared';
var AppSidebarFormComponent = /** @class */ (function () {
    function AppSidebarFormComponent(el) {
        this.el = el;
    }
    AppSidebarFormComponent.prototype.ngOnInit = function () {
        Replace(this.el);
    };
    AppSidebarFormComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-sidebar-form',
                    template: "\n    <form class=\"sidebar-form\">\n      <ng-content></ng-content>\n    </form>\n  "
                },] },
    ];
    /** @nocollapse */
    AppSidebarFormComponent.ctorParameters = function () { return [
        { type: ElementRef, },
    ]; };
    return AppSidebarFormComponent;
}());
export { AppSidebarFormComponent };
//# sourceMappingURL=app-sidebar-form.component.js.map