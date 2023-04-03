import { NgModule } from '@angular/core';
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
    AsideToggleDirective,
    BrandMinimizeDirective,
    SidebarToggleDirective,
    SidebarMinimizeDirective,
    SidebarOffCanvasCloseDirective,
    MobileSidebarToggleDirective,
    HtmlAttributesDirective
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
  providers: [
    ClassToggler
  ]
})
export class LayoutModule { }
