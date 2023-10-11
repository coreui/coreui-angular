import { ModuleWithProviders, NgModule } from '@angular/core';

import { HtmlAttributesDirective } from './html-attr.directive';
import { TemplateIdDirective } from './template-id.directive';

@NgModule({
  imports: [
    HtmlAttributesDirective,
    TemplateIdDirective
  ],
  exports: [
    HtmlAttributesDirective,
    TemplateIdDirective
  ],
})
export class SharedModule {

  static forRoot(): ModuleWithProviders<SharedModule> {
    return {
      ngModule: SharedModule
    };
  }
}
