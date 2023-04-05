import { NgModule } from '@angular/core';

import { ContainerComponent } from './container.component';
import { RowComponent } from './row.component';
import { ColComponent } from './col.component';
import { RowDirective } from './row.directive';
import { ColDirective } from './col.directive';
import { GutterDirective } from './gutter.directive';

@NgModule({
  imports: [
    ColComponent,
    ColDirective,
    ContainerComponent,
    GutterDirective,
    RowComponent,
    RowDirective
  ],
  exports: [
    ColComponent,
    ColDirective,
    ContainerComponent,
    GutterDirective,
    RowComponent,
    RowDirective
  ]
})
export class GridModule {}
