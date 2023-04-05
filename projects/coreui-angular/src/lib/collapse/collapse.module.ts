import { ModuleWithProviders, NgModule } from '@angular/core';
import { CollapseDirective } from './collapse.directive';

@NgModule({
  exports: [CollapseDirective],
  imports: [CollapseDirective]
})
export class CollapseModule {
  static forRoot(): ModuleWithProviders<CollapseModule> {
    return { ngModule: CollapseModule, providers: [] };
  }
}
