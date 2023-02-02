import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableDirective } from './table.directive';
import { TableColorDirective } from './table-color.directive';
import { TableActiveDirective } from './table-active.directive';

@NgModule({
  declarations: [],
  exports: [
    TableDirective,
    TableColorDirective,
    TableActiveDirective
  ],
  imports: [
    CommonModule,
    TableDirective,
    TableColorDirective,
    TableActiveDirective
  ]
})
export class TableModule {}
