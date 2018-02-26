/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, ElementRef } from '@angular/core';
import { Replace } from './../shared';
var AppSidebarFooterComponent = /** @class */ (function () {
    function AppSidebarFooterComponent(el) {
        this.el = el;
    }
    /**
     * @return {?}
     */
    AppSidebarFooterComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        Replace(this.el);
    };
    AppSidebarFooterComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-sidebar-footer',
                    template: "\n    <div class=\"sidebar-footer\">\n      <ng-content></ng-content>\n    </div>"
                },] },
    ];
    /** @nocollapse */
    AppSidebarFooterComponent.ctorParameters = function () { return [
        { type: ElementRef, },
    ]; };
    return AppSidebarFooterComponent;
}());
export { AppSidebarFooterComponent };
function AppSidebarFooterComponent_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    AppSidebarFooterComponent.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    AppSidebarFooterComponent.ctorParameters;
    /** @type {?} */
    AppSidebarFooterComponent.prototype.el;
}
//# sourceMappingURL=app-sidebar-footer.component.js.map