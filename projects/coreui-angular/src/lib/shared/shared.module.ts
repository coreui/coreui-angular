import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HtmlAttributesDirective } from './html-attr.directive';
import { TemplateIdDirective } from './template-id.directive';

@NgModule({
  imports: [
    CommonModule,
    HtmlAttributesDirective,
    TemplateIdDirective
  ],
  declarations: [],
  exports: [
    HtmlAttributesDirective,
    TemplateIdDirective
  ],
  providers: []
})
export class SharedModule {

  static forRoot(): ModuleWithProviders<SharedModule> {
    return {
      ngModule: SharedModule
    };
  }
}
