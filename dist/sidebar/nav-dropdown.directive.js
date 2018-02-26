/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Directive, HostListener, ElementRef } from '@angular/core';
var NavDropdownDirective = /** @class */ (function () {
    function NavDropdownDirective(el) {
        this.el = el;
    }
    /**
     * @return {?}
     */
    NavDropdownDirective.prototype.toggle = /**
     * @return {?}
     */
    function () {
        this.el.nativeElement.classList.toggle('open');
    };
    NavDropdownDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[appNavDropdown]'
                },] },
    ];
    /** @nocollapse */
    NavDropdownDirective.ctorParameters = function () { return [
        { type: ElementRef, },
    ]; };
    return NavDropdownDirective;
}());
export { NavDropdownDirective };
function NavDropdownDirective_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    NavDropdownDirective.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    NavDropdownDirective.ctorParameters;
    /** @type {?} */
    NavDropdownDirective.prototype.el;
}
/**
 * Allows the dropdown to be toggled via click.
 */
var NavDropdownToggleDirective = /** @class */ (function () {
    function NavDropdownToggleDirective(dropdown) {
        this.dropdown = dropdown;
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    NavDropdownToggleDirective.prototype.toggleOpen = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        $event.preventDefault();
        this.dropdown.toggle();
    };
    NavDropdownToggleDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[appNavDropdownToggle]'
                },] },
    ];
    /** @nocollapse */
    NavDropdownToggleDirective.ctorParameters = function () { return [
        { type: NavDropdownDirective, },
    ]; };
    NavDropdownToggleDirective.propDecorators = {
        "toggleOpen": [{ type: HostListener, args: ['click', ['$event'],] },],
    };
    return NavDropdownToggleDirective;
}());
export { NavDropdownToggleDirective };
function NavDropdownToggleDirective_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    NavDropdownToggleDirective.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    NavDropdownToggleDirective.ctorParameters;
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
    NavDropdownToggleDirective.propDecorators;
    /** @type {?} */
    NavDropdownToggleDirective.prototype.dropdown;
}
export var /** @type {?} */ NAV_DROPDOWN_DIRECTIVES = [NavDropdownDirective, NavDropdownToggleDirective];
//# sourceMappingURL=nav-dropdown.directive.js.map