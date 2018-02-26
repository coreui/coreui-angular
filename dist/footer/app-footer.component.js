/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, ElementRef, Input } from '@angular/core';
import { Replace } from './../shared';
var AppFooterComponent = /** @class */ (function () {
    function AppFooterComponent(el) {
        this.el = el;
    }
    /**
     * @return {?}
     */
    AppFooterComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        Replace(this.el);
        this.isFixed(this.fixed);
    };
    /**
     * @param {?} fixed
     * @return {?}
     */
    AppFooterComponent.prototype.isFixed = /**
     * @param {?} fixed
     * @return {?}
     */
    function (fixed) {
        if (this.fixed) {
            document.querySelector('body').classList.add('footer-fixed');
        }
    };
    AppFooterComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-footer',
                    template: "\n    <footer class=\"app-footer\">\n      <ng-content></ng-content>\n    </footer>\n  "
                },] },
    ];
    /** @nocollapse */
    AppFooterComponent.ctorParameters = function () { return [
        { type: ElementRef, },
    ]; };
    AppFooterComponent.propDecorators = {
        "fixed": [{ type: Input },],
    };
    return AppFooterComponent;
}());
export { AppFooterComponent };
function AppFooterComponent_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    AppFooterComponent.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    AppFooterComponent.ctorParameters;
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
    AppFooterComponent.propDecorators;
    /** @type {?} */
    AppFooterComponent.prototype.fixed;
    /** @type {?} */
    AppFooterComponent.prototype.el;
}
//# sourceMappingURL=app-footer.component.js.map