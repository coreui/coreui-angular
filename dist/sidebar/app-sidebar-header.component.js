/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, ElementRef } from '@angular/core';
import { Replace } from './../shared';
var AppSidebarHeaderComponent = /** @class */ (function () {
    function AppSidebarHeaderComponent(el) {
        this.el = el;
    }
    /**
     * @return {?}
     */
    AppSidebarHeaderComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
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
function AppSidebarHeaderComponent_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    AppSidebarHeaderComponent.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    AppSidebarHeaderComponent.ctorParameters;
    /** @type {?} */
    AppSidebarHeaderComponent.prototype.el;
}
//# sourceMappingURL=app-sidebar-header.component.js.map