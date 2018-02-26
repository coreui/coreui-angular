/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, ElementRef } from '@angular/core';
import { Replace } from './../shared';
var AppSidebarMinimizerComponent = /** @class */ (function () {
    function AppSidebarMinimizerComponent(el) {
        this.el = el;
    }
    /**
     * @return {?}
     */
    AppSidebarMinimizerComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
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
function AppSidebarMinimizerComponent_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    AppSidebarMinimizerComponent.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    AppSidebarMinimizerComponent.ctorParameters;
    /** @type {?} */
    AppSidebarMinimizerComponent.prototype.el;
}
//# sourceMappingURL=app-sidebar-minimizer.component.js.map