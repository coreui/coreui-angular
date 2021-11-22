import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

// CoreUI Breadcrumb Component
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { BreadcrumbItemComponent } from './breadcrumb-item/breadcrumb-item.component';
import { BreadcrumbRouterComponent } from './breadcrumb-router/breadcrumb-router.component';
import { BreadcrumbRouterService } from './breadcrumb-router/breadcrumb-router.service';
import { SharedModule } from '../shared';

@NgModule({
  imports: [CommonModule, RouterModule, SharedModule],
  exports: [
    BreadcrumbComponent,
    BreadcrumbItemComponent,
    BreadcrumbRouterComponent,
  ],
  declarations: [
    BreadcrumbRouterComponent,
    BreadcrumbItemComponent,
    BreadcrumbComponent,
  ],
  providers: [BreadcrumbRouterService],
})
export class BreadcrumbModule { }
