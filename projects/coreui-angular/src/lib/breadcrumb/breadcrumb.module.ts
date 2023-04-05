import { NgModule } from '@angular/core';

// CoreUI Breadcrumb Component
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { BreadcrumbItemComponent } from './breadcrumb-item/breadcrumb-item.component';
import { BreadcrumbRouterComponent } from './breadcrumb-router/breadcrumb-router.component';
import { BreadcrumbRouterService } from './breadcrumb-router/breadcrumb-router.service';

@NgModule({
  imports: [
    BreadcrumbComponent,
    BreadcrumbItemComponent,
    BreadcrumbRouterComponent
  ],
  exports: [
    BreadcrumbComponent,
    BreadcrumbItemComponent,
    BreadcrumbRouterComponent
  ],
  providers: [BreadcrumbRouterService]
})
export class BreadcrumbModule {}
