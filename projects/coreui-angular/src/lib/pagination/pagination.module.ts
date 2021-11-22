import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginationComponent } from './pagination/pagination.component';
import { PageItemComponent } from './page-item/page-item.component';
import { PageItemDirective } from './page-item/page-item.directive';
import { PageLinkDirective } from './page-link/page-link.directive';

@NgModule({
  declarations: [
    PaginationComponent,
    PageItemComponent,
    PageItemDirective,
    PageLinkDirective
  ],
  exports: [
    PaginationComponent,
    PageItemComponent,
    PageItemDirective,
    PageLinkDirective
  ],
  imports: [
    CommonModule
  ]
})
export class PaginationModule {}
