import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CollapseDirective } from './collapse.directive';

@NgModule({
  declarations: [],
  exports: [CollapseDirective],
  imports: [
    CommonModule,
    CollapseDirective
  ]
})
export class CollapseModule {
  static forRoot(): ModuleWithProviders<CollapseModule> {
    return { ngModule: CollapseModule, providers: [] };
  }
}
