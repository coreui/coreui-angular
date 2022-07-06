import { CommonModule } from '@angular/common';
import { NgModule} from '@angular/core';
import {
  AsideToggleDirective,
  BrandMinimizeDirective,
  MobileSidebarToggleDirective,
  SidebarToggleDirective,
  SidebarMinimizeDirective,
  SidebarOffCanvasCloseDirective,
  HtmlAttributesDirective
} from './layout.directive';
import { ClassToggler } from '../toggle-classes';

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
export class LayoutModule { }
