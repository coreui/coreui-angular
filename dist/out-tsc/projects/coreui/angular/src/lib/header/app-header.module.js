import * as tslib_1 from "tslib";
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LayoutModule } from '../shared/layout/layout.module';
import { AppHeaderComponent } from './app-header.component';
let AppHeaderModule = class AppHeaderModule {
};
AppHeaderModule = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule,
            RouterModule,
            LayoutModule
        ],
        exports: [
            AppHeaderComponent,
            LayoutModule
        ],
        declarations: [
            AppHeaderComponent
        ]
    })
], AppHeaderModule);
export { AppHeaderModule };
//# sourceMappingURL=app-header.module.js.map