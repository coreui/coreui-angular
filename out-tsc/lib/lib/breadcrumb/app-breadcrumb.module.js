import * as tslib_1 from "tslib";
var AppBreadcrumbModule_1;
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
// App Breadcrumb Component
import { AppBreadcrumbService } from './app-breadcrumb.service';
import { AppBreadcrumbComponent } from './app-breadcrumb.component';
import { CuiBreadcrumbComponent } from './cui-breadcrumb.component';
// @dynamic
let AppBreadcrumbModule = AppBreadcrumbModule_1 = class AppBreadcrumbModule {
    static forRoot(config) {
        return {
            ngModule: AppBreadcrumbModule_1,
            providers: [
                AppBreadcrumbService
            ]
        };
    }
};
AppBreadcrumbModule = AppBreadcrumbModule_1 = tslib_1.__decorate([
    NgModule({
        imports: [CommonModule, RouterModule],
        exports: [AppBreadcrumbComponent, CuiBreadcrumbComponent],
        declarations: [AppBreadcrumbComponent, CuiBreadcrumbComponent]
    })
], AppBreadcrumbModule);
export { AppBreadcrumbModule };
//# sourceMappingURL=app-breadcrumb.module.js.map