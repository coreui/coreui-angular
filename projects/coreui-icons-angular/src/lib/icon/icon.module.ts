import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HtmlAttributesDirective } from '../shared/html-attr.directive';
import { IconComponent } from './icon.component';
import { IconDirective } from './icon.directive';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HtmlAttributesDirective,
    IconComponent,
    IconDirective
  ],
  exports: [
    IconComponent,
    IconDirective
  ]
})
export class IconModule {
}
