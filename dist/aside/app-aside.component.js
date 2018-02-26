/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { asideMenuCssClasses } from './../shared';
var AppAsideComponent = /** @class */ (function () {
    function AppAsideComponent() {
    }
    /**
     * @return {?}
     */
    AppAsideComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.isFixed(this.fixed);
        this.displayBreakpoint(this.display);
    };
    /**
     * @param {?} fixed
     * @return {?}
     */
    AppAsideComponent.prototype.isFixed = /**
     * @param {?} fixed
     * @return {?}
     */
    function (fixed) {
        if (this.fixed) {
            document.querySelector('body').classList.add('aside-menu-fixed');
        }
    };
    /**
     * @param {?} offCanvas
     * @return {?}
     */
    AppAsideComponent.prototype.isOffCanvas = /**
     * @param {?} offCanvas
     * @return {?}
     */
    function (offCanvas) {
        if (this.offCanvas) {
            document.querySelector('body').classList.add('aside-menu-off-canvas');
        }
    };
    /**
     * @param {?} display
     * @return {?}
     */
    AppAsideComponent.prototype.displayBreakpoint = /**
     * @param {?} display
     * @return {?}
     */
    function (display) {
        var /** @type {?} */ cssClass;
        this.display ? cssClass = "aside-menu-" + this.display + "-show" : cssClass = asideMenuCssClasses[0];
        document.querySelector('body').classList.add(cssClass);
    };
    AppAsideComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-aside',
                    template: "\n    <aside class=\"aside-menu\">\n      <ng-content></ng-content>\n    </aside>\n  "
                },] },
    ];
    /** @nocollapse */
    AppAsideComponent.ctorParameters = function () { return []; };
    AppAsideComponent.propDecorators = {
        "display": [{ type: Input },],
        "fixed": [{ type: Input },],
        "offCanvas": [{ type: Input },],
    };
    return AppAsideComponent;
}());
export { AppAsideComponent };
function AppAsideComponent_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    AppAsideComponent.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    AppAsideComponent.ctorParameters;
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
    AppAsideComponent.propDecorators;
    /** @type {?} */
    AppAsideComponent.prototype.display;
    /** @type {?} */
    AppAsideComponent.prototype.fixed;
    /** @type {?} */
    AppAsideComponent.prototype.offCanvas;
}
//# sourceMappingURL=app-aside.component.js.map