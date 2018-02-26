/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppBreadcrumbService } from './app-breadcrumb.service';
import { AppBreadcrumbComponent } from './app-breadcrumb.component';
var AppBreadcrumbModule = /** @class */ (function () {
    function AppBreadcrumbModule() {
    }
    /**
     * @param {?=} config
     * @return {?}
     */
    AppBreadcrumbModule.forRoot = /**
     * @param {?=} config
     * @return {?}
     */
    function (config) {
        return {
            ngModule: AppBreadcrumbModule,
            providers: [
                AppBreadcrumbService
            ]
        };
    };
    AppBreadcrumbModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule, RouterModule],
                    exports: [AppBreadcrumbComponent],
                    declarations: [AppBreadcrumbComponent]
                },] },
    ];
    /** @nocollapse */
    AppBreadcrumbModule.ctorParameters = function () { return []; };
    return AppBreadcrumbModule;
}());
export { AppBreadcrumbModule };
function AppBreadcrumbModule_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    AppBreadcrumbModule.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    AppBreadcrumbModule.ctorParameters;
}
//# sourceMappingURL=app-breadcrumb.module.js.map