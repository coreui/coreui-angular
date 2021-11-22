import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ContainerComponent } from './container.component';
import { RowComponent } from './row.component';
import { ColComponent } from './col.component';
import { RowDirective } from './row.directive';
import { ColDirective } from './col.directive';
import { GutterDirective } from './gutter.directive';

@NgModule({
  imports: [CommonModule],
  exports: [
    ContainerComponent,
    RowComponent,
    ColComponent,
    GutterDirective,
    RowDirective,
    ColDirective,
  ],
  declarations: [
    ContainerComponent,
    RowComponent,
    ColComponent,
    RowDirective,
    ColDirective,
    GutterDirective,
  ],
  providers: [],
})
export class GridModule {}
