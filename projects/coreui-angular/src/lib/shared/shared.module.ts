import { ModuleWithProviders, NgModule } from '@angular/core';

import { ElementRefDirective } from './element-ref.directive';
import { HtmlAttributesDirective } from './html-attr.directive';
import { TemplateIdDirective } from './template-id.directive';
import { ThemeDirective } from './theme.directive';

@NgModule({
  imports: [ElementRefDirective, HtmlAttributesDirective, TemplateIdDirective, ThemeDirective],
  exports: [ElementRefDirective, HtmlAttributesDirective, TemplateIdDirective, ThemeDirective],
})
export class SharedModule {
  static forRoot(): ModuleWithProviders<SharedModule> {
    return {
      ngModule: SharedModule,
    };
  }
}
