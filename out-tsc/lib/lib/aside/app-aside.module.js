import * as tslib_1 from "tslib";
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LayoutModule } from './../shared/layout/layout.module';
import { AppAsideComponent } from './app-aside.component';
let AppAsideModule = class AppAsideModule {
};
AppAsideModule = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule,
            LayoutModule
        ],
        exports: [
            AppAsideComponent,
            LayoutModule
        ],
        declarations: [
            AppAsideComponent
        ]
    })
], AppAsideModule);
export { AppAsideModule };
//# sourceMappingURL=app-aside.module.js.map