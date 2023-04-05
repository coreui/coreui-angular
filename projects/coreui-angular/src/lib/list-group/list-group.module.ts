import { NgModule } from '@angular/core';

import { ListGroupDirective } from './list-group.directive';
import { ListGroupItemDirective } from './list-group-item.directive';

@NgModule({
  exports: [ListGroupDirective, ListGroupItemDirective],
  imports: [ListGroupDirective, ListGroupItemDirective]
})
export class ListGroupModule {}
