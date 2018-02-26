/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, ElementRef } from '@angular/core';
import { Replace } from './../shared';
var AppSidebarFormComponent = /** @class */ (function () {
    function AppSidebarFormComponent(el) {
        this.el = el;
    }
    /**
     * @return {?}
     */
    AppSidebarFormComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
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
function AppSidebarFormComponent_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    AppSidebarFormComponent.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    AppSidebarFormComponent.ctorParameters;
    /** @type {?} */
    AppSidebarFormComponent.prototype.el;
}
//# sourceMappingURL=app-sidebar-form.component.js.map