/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, Input, HostBinding } from '@angular/core';
import { sidebarCssClasses } from './../shared';
var AppSidebarComponent = /** @class */ (function () {
    function AppSidebarComponent() {
    }
    /**
     * @return {?}
     */
    AppSidebarComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.displayBreakpoint(this.display);
        this.isCompact(this.compact);
        this.isFixed(this.fixed);
        this.isMinimized(this.minimized);
        this.isOffCanvas(this.offCanvas);
    };
    /**
     * @param {?} compact
     * @return {?}
     */
    AppSidebarComponent.prototype.isCompact = /**
     * @param {?} compact
     * @return {?}
     */
    function (compact) {
        if (this.compact) {
            document.querySelector('body').classList.add('sidebar-compact');
        }
    };
    /**
     * @param {?} fixed
     * @return {?}
     */
    AppSidebarComponent.prototype.isFixed = /**
     * @param {?} fixed
     * @return {?}
     */
    function (fixed) {
        if (this.fixed) {
            document.querySelector('body').classList.add('sidebar-fixed');
        }
    };
    /**
     * @param {?} minimized
     * @return {?}
     */
    AppSidebarComponent.prototype.isMinimized = /**
     * @param {?} minimized
     * @return {?}
     */
    function (minimized) {
        if (this.minimized) {
            document.querySelector('body').classList.add('sidebar-minimized');
        }
    };
    /**
     * @param {?} offCanvas
     * @return {?}
     */
    AppSidebarComponent.prototype.isOffCanvas = /**
     * @param {?} offCanvas
     * @return {?}
     */
    function (offCanvas) {
        if (this.offCanvas) {
            document.querySelector('body').classList.add('sidebar-off-canvas');
        }
    };
    /**
     * @param {?} fixed
     * @return {?}
     */
    AppSidebarComponent.prototype.fixedPosition = /**
     * @param {?} fixed
     * @return {?}
     */
    function (fixed) {
        if (this.fixed) {
            document.querySelector('body').classList.add('sidebar-fixed');
        }
    };
    /**
     * @param {?} display
     * @return {?}
     */
    AppSidebarComponent.prototype.displayBreakpoint = /**
     * @param {?} display
     * @return {?}
     */
    function (display) {
        var /** @type {?} */ cssClass;
        this.display ? cssClass = "sidebar-" + this.display + "-show" : cssClass = sidebarCssClasses[0];
        document.querySelector('body').classList.add(cssClass);
    };
    AppSidebarComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-sidebar',
                    template: "<ng-content></ng-content>"
                },] },
    ];
    /** @nocollapse */
    AppSidebarComponent.ctorParameters = function () { return []; };
    AppSidebarComponent.propDecorators = {
        "compact": [{ type: Input },],
        "display": [{ type: Input },],
        "fixed": [{ type: Input },],
        "minimized": [{ type: Input },],
        "offCanvas": [{ type: Input },],
        "true": [{ type: HostBinding, args: ['class.sidebar',] },],
    };
    return AppSidebarComponent;
}());
export { AppSidebarComponent };
function AppSidebarComponent_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    AppSidebarComponent.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    AppSidebarComponent.ctorParameters;
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
    AppSidebarComponent.propDecorators;
    /** @type {?} */
    AppSidebarComponent.prototype.compact;
    /** @type {?} */
    AppSidebarComponent.prototype.display;
    /** @type {?} */
    AppSidebarComponent.prototype.fixed;
    /** @type {?} */
    AppSidebarComponent.prototype.minimized;
    /** @type {?} */
    AppSidebarComponent.prototype.offCanvas;
    /** @type {?} */
    AppSidebarComponent.prototype.true;
}
//# sourceMappingURL=app-sidebar.component.js.map