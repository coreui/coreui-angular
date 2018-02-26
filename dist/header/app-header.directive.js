/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Directive, HostListener } from '@angular/core';
var BrandMinimizeDirective = /** @class */ (function () {
    function BrandMinimizeDirective() {
        console.log('asdasdas');
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    BrandMinimizeDirective.prototype.toggleOpen = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        $event.preventDefault();
        document.querySelector('body').classList.toggle('brand-minimized');
    };
    BrandMinimizeDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[appBrandMinimizer]'
                },] },
    ];
    /** @nocollapse */
    BrandMinimizeDirective.ctorParameters = function () { return []; };
    BrandMinimizeDirective.propDecorators = {
        "toggleOpen": [{ type: HostListener, args: ['click', ['$event'],] },],
    };
    return BrandMinimizeDirective;
}());
export { BrandMinimizeDirective };
function BrandMinimizeDirective_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    BrandMinimizeDirective.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    BrandMinimizeDirective.ctorParameters;
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
    BrandMinimizeDirective.propDecorators;
}
//# sourceMappingURL=app-header.directive.js.map