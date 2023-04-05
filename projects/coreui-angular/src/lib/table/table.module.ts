import { NgModule } from '@angular/core';
import { TableDirective } from './table.directive';
import { TableColorDirective } from './table-color.directive';
import { TableActiveDirective } from './table-active.directive';

@NgModule({
  exports: [
    TableDirective,
    TableColorDirective,
    TableActiveDirective
  ],
  imports: [
    TableDirective,
    TableColorDirective,
    TableActiveDirective
  ]
})
export class TableModule {}
