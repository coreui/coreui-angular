/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Directive, HostListener, Input } from '@angular/core';
import { sidebarCssClasses, asideMenuCssClasses } from './../classes';
import { ToggleClasses } from './../toggle-classes';
/**
 * Allows the sidebar to be toggled via click.
 */
var SidebarToggleDirective = /** @class */ (function () {
    function SidebarToggleDirective() {
    }
    /**
     * @return {?}
     */
    SidebarToggleDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.bp = this.breakpoint;
    };
    /**
     * @param {?} $event
     * @return {?}
     */
    SidebarToggleDirective.prototype.toggleOpen = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        $event.preventDefault();
        var /** @type {?} */ cssClass;
        this.bp ? cssClass = "sidebar-" + this.bp + "-show" : cssClass = sidebarCssClasses[0];
        ToggleClasses(cssClass, sidebarCssClasses);
    };
    SidebarToggleDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[appSidebarToggler]'
                },] },
    ];
    /** @nocollapse */
    SidebarToggleDirective.ctorParameters = function () { return []; };
    SidebarToggleDirective.propDecorators = {
        "breakpoint": [{ type: Input, args: ['appSidebarToggler',] },],
        "toggleOpen": [{ type: HostListener, args: ['click', ['$event'],] },],
    };
    return SidebarToggleDirective;
}());
export { SidebarToggleDirective };
function SidebarToggleDirective_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    SidebarToggleDirective.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    SidebarToggleDirective.ctorParameters;
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
    SidebarToggleDirective.propDecorators;
    /** @type {?} */
    SidebarToggleDirective.prototype.breakpoint;
    /** @type {?} */
    SidebarToggleDirective.prototype.bp;
}
var SidebarMinimizeDirective = /** @class */ (function () {
    function SidebarMinimizeDirective() {
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    SidebarMinimizeDirective.prototype.toggleOpen = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        $event.preventDefault();
        document.querySelector('body').classList.toggle('sidebar-minimized');
    };
    SidebarMinimizeDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[appSidebarMinimizer]'
                },] },
    ];
    /** @nocollapse */
    SidebarMinimizeDirective.ctorParameters = function () { return []; };
    SidebarMinimizeDirective.propDecorators = {
        "toggleOpen": [{ type: HostListener, args: ['click', ['$event'],] },],
    };
    return SidebarMinimizeDirective;
}());
export { SidebarMinimizeDirective };
function SidebarMinimizeDirective_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    SidebarMinimizeDirective.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    SidebarMinimizeDirective.ctorParameters;
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
    SidebarMinimizeDirective.propDecorators;
}
var MobileSidebarToggleDirective = /** @class */ (function () {
    function MobileSidebarToggleDirective() {
    }
    /**
     * @param {?} target
     * @param {?} elementClassName
     * @return {?}
     */
    MobileSidebarToggleDirective.prototype.hasClass = /**
     * @param {?} target
     * @param {?} elementClassName
     * @return {?}
     */
    function (target, elementClassName) {
        return new RegExp('(\\s|^)' + elementClassName + '(\\s|$)').test(target.className);
    };
    /**
     * @param {?} $event
     * @return {?}
     */
    MobileSidebarToggleDirective.prototype.toggleOpen = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        $event.preventDefault();
        document.querySelector('body').classList.toggle('sidebar-mobile-show');
    };
    MobileSidebarToggleDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[appMobileSidebarToggler]'
                },] },
    ];
    /** @nocollapse */
    MobileSidebarToggleDirective.ctorParameters = function () { return []; };
    MobileSidebarToggleDirective.propDecorators = {
        "toggleOpen": [{ type: HostListener, args: ['click', ['$event'],] },],
    };
    return MobileSidebarToggleDirective;
}());
export { MobileSidebarToggleDirective };
function MobileSidebarToggleDirective_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    MobileSidebarToggleDirective.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    MobileSidebarToggleDirective.ctorParameters;
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
    MobileSidebarToggleDirective.propDecorators;
}
/**
 * Allows the off-canvas sidebar to be closed via click.
 */
var SidebarOffCanvasCloseDirective = /** @class */ (function () {
    function SidebarOffCanvasCloseDirective() {
    }
    /**
     * @param {?} target
     * @param {?} elementClassName
     * @return {?}
     */
    SidebarOffCanvasCloseDirective.prototype.hasClass = /**
     * @param {?} target
     * @param {?} elementClassName
     * @return {?}
     */
    function (target, elementClassName) {
        return new RegExp('(\\s|^)' + elementClassName + '(\\s|$)').test(target.className);
    };
    /**
     * @param {?} elem
     * @param {?} elementClassName
     * @return {?}
     */
    SidebarOffCanvasCloseDirective.prototype.toggleClass = /**
     * @param {?} elem
     * @param {?} elementClassName
     * @return {?}
     */
    function (elem, elementClassName) {
        var /** @type {?} */ newClass = ' ' + elem.className.replace(/[\t\r\n]/g, ' ') + ' ';
        if (this.hasClass(elem, elementClassName)) {
            while (newClass.indexOf(' ' + elementClassName + ' ') >= 0) {
                newClass = newClass.replace(' ' + elementClassName + ' ', ' ');
            }
            elem.className = newClass.replace(/^\s+|\s+$/g, '');
        }
        else {
            elem.className += ' ' + elementClassName;
        }
    };
    /**
     * @param {?} $event
     * @return {?}
     */
    SidebarOffCanvasCloseDirective.prototype.toggleOpen = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        $event.preventDefault();
        if (this.hasClass(document.querySelector('body'), 'sidebar-off-canvas')) {
            this.toggleClass(document.querySelector('body'), 'sidebar-opened');
        }
    };
    SidebarOffCanvasCloseDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[appSidebarClose]'
                },] },
    ];
    /** @nocollapse */
    SidebarOffCanvasCloseDirective.ctorParameters = function () { return []; };
    SidebarOffCanvasCloseDirective.propDecorators = {
        "toggleOpen": [{ type: HostListener, args: ['click', ['$event'],] },],
    };
    return SidebarOffCanvasCloseDirective;
}());
export { SidebarOffCanvasCloseDirective };
function SidebarOffCanvasCloseDirective_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    SidebarOffCanvasCloseDirective.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    SidebarOffCanvasCloseDirective.ctorParameters;
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
    SidebarOffCanvasCloseDirective.propDecorators;
}
var BrandMinimizeDirective = /** @class */ (function () {
    function BrandMinimizeDirective() {
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
/**
 * Allows the aside to be toggled via click.
 */
var AsideToggleDirective = /** @class */ (function () {
    function AsideToggleDirective() {
    }
    /**
     * @return {?}
     */
    AsideToggleDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.bp = this.breakpoint;
    };
    /**
     * @param {?} $event
     * @return {?}
     */
    AsideToggleDirective.prototype.toggleOpen = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        $event.preventDefault();
        var /** @type {?} */ cssClass;
        this.bp ? cssClass = "aside-menu-" + this.bp + "-show" : cssClass = asideMenuCssClasses[0];
        ToggleClasses(cssClass, asideMenuCssClasses);
    };
    AsideToggleDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[appAsideMenuToggler]',
                },] },
    ];
    /** @nocollapse */
    AsideToggleDirective.ctorParameters = function () { return []; };
    AsideToggleDirective.propDecorators = {
        "breakpoint": [{ type: Input, args: ['appAsideMenuToggler',] },],
        "toggleOpen": [{ type: HostListener, args: ['click', ['$event'],] },],
    };
    return AsideToggleDirective;
}());
export { AsideToggleDirective };
function AsideToggleDirective_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    AsideToggleDirective.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    AsideToggleDirective.ctorParameters;
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
    AsideToggleDirective.propDecorators;
    /** @type {?} */
    AsideToggleDirective.prototype.breakpoint;
    /** @type {?} */
    AsideToggleDirective.prototype.bp;
}
//# sourceMappingURL=layout.directive.js.map