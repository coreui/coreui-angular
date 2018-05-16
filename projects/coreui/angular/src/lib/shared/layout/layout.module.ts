import { CommonModule } from '@angular/common';
import { NgModule} from '@angular/core';
import {
  AsideToggleDirective,
  BrandMinimizeDirective,
  MobileSidebarToggleDirective,
  SidebarToggleDirective,
  SidebarMinimizeDirective,
  SidebarOffCanvasCloseDirective
} from './layout.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    AsideToggleDirective,
    BrandMinimizeDirective,
    MobileSidebarToggleDirective,
    SidebarToggleDirective,
    SidebarMinimizeDirective,
    SidebarOffCanvasCloseDirective
  ],
  declarations: [
    AsideToggleDirective,
    BrandMinimizeDirective,
    MobileSidebarToggleDirective,
    SidebarToggleDirective,
    SidebarMinimizeDirective,
    SidebarOffCanvasCloseDirective
  ]
})
export class LayoutModule { }
