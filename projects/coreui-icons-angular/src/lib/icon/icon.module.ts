import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IconComponent } from './icon.component';
import { IconDirective } from './icon.directive';
import { HtmlAttributesDirective } from '../shared/html-attr.directive';

@NgModule({
  declarations: [
    IconComponent,
    HtmlAttributesDirective,
    IconDirective
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    IconComponent,
    IconDirective
  ],
})
export class IconModule {
}
