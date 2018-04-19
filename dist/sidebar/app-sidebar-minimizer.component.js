import { Component, ElementRef } from '@angular/core';
import { Replace } from './../shared';
var AppSidebarMinimizerComponent = /** @class */ (function () {
    function AppSidebarMinimizerComponent(el) {
        this.el = el;
    }
    AppSidebarMinimizerComponent.prototype.ngOnInit = function () {
        Replace(this.el);
    };
    AppSidebarMinimizerComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-sidebar-minimizer',
                    template: "\n    <button class=\"sidebar-minimizer\" type=\"button\" appSidebarMinimizer appBrandMinimizer></button>\n  "
                },] },
    ];
    /** @nocollapse */
    AppSidebarMinimizerComponent.ctorParameters = function () { return [
        { type: ElementRef, },
    ]; };
    return AppSidebarMinimizerComponent;
}());
export { AppSidebarMinimizerComponent };
//# sourceMappingURL=app-sidebar-minimizer.component.js.map