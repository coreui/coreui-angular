import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListGroupDirective } from './list-group.directive';
import { ListGroupItemDirective } from './list-group-item.directive';

@NgModule({
  declarations: [],
  exports: [ListGroupDirective, ListGroupItemDirective],
  imports: [CommonModule, ListGroupDirective, ListGroupItemDirective]
})
export class ListGroupModule {}
