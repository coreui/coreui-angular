import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// import { OutClickService } from './out-click.service';
// import { OutClickDirective } from './out-click.directive';
import { HtmlAttributesDirective } from './html-attr.directive';
import { TemplateIdDirective } from './template-id.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    // OutClickDirective,
    HtmlAttributesDirective,
    TemplateIdDirective
  ],
  exports: [
    // OutClickDirective,
    HtmlAttributesDirective,
    TemplateIdDirective
  ],
  providers: []
})
export class SharedModule {

  static forRoot(): ModuleWithProviders<SharedModule> {
    return {
      ngModule: SharedModule,
      // providers: [
      //   {provide: OutClickService}
      // ]
    };
  }
}
