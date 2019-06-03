import * as tslib_1 from "tslib";
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AsideToggleDirective, BrandMinimizeDirective, MobileSidebarToggleDirective, SidebarToggleDirective, SidebarMinimizeDirective, SidebarOffCanvasCloseDirective, HtmlAttributesDirective } from './layout.directive';
import { ClassToggler } from '../toggle-classes';
let LayoutModule = class LayoutModule {
};
LayoutModule = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule
        ],
        exports: [
            AsideToggleDirective,
            BrandMinimizeDirective,
            MobileSidebarToggleDirective,
            SidebarToggleDirective,
            SidebarMinimizeDirective,
            SidebarOffCanvasCloseDirective,
            HtmlAttributesDirective
        ],
        declarations: [
            AsideToggleDirective,
            BrandMinimizeDirective,
            MobileSidebarToggleDirective,
            SidebarToggleDirective,
            SidebarMinimizeDirective,
            SidebarOffCanvasCloseDirective,
            HtmlAttributesDirective
        ],
        providers: [
            ClassToggler
        ]
    })
], LayoutModule);
export { LayoutModule };
//# sourceMappingURL=layout.module.js.map