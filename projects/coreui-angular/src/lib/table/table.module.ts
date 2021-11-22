import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableDirective } from './table.directive';
import { TableColorDirective } from './table-color.directive';
import { TableActiveDirective } from './table-active.directive';

@NgModule({
  declarations: [
    TableDirective,
    TableColorDirective,
    TableActiveDirective
  ],
  exports: [
    TableDirective,
    TableColorDirective,
    TableActiveDirective
  ],
  imports: [
    CommonModule
  ]
})
export class TableModule { }
