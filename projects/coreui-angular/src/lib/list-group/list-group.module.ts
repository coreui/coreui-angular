import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListGroupDirective } from './list-group.directive';
import { ListGroupItemDirective } from './list-group-item.directive';

@NgModule({
  declarations: [ListGroupDirective, ListGroupItemDirective],
  exports: [
    ListGroupDirective,
    ListGroupItemDirective
  ],
  imports: [
    CommonModule
  ]
})
export class ListGroupModule { }
