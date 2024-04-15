import { ModuleWithProviders, NgModule } from '@angular/core';

import { HtmlAttributesDirective } from './html-attr.directive';
import { TemplateIdDirective } from './template-id.directive';
import { ThemeDirective } from './theme.directive';

@NgModule({
  imports: [HtmlAttributesDirective, TemplateIdDirective, ThemeDirective],
  exports: [HtmlAttributesDirective, TemplateIdDirective, ThemeDirective]
})
export class SharedModule {

  static forRoot(): ModuleWithProviders<SharedModule> {
    return {
      ngModule: SharedModule
    };
  }
}
