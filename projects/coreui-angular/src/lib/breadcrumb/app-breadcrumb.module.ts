import { CommonModule } from '@angular/common';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';

// App Breadcrumb Component
import { AppBreadcrumbService } from './app-breadcrumb.service';
import { AppBreadcrumbComponent } from './app-breadcrumb.component';
import { CuiBreadcrumbComponent } from './cui-breadcrumb.component';

// @dynamic
@NgModule({
  imports: [AppBreadcrumbComponent, CuiBreadcrumbComponent],
  exports: [AppBreadcrumbComponent, CuiBreadcrumbComponent],
})
export class AppBreadcrumbModule {
  static forRoot(config?: any): ModuleWithProviders<AppBreadcrumbModule> {
    return {
      ngModule: AppBreadcrumbModule,
      providers: [
        AppBreadcrumbService
      ]
    };
  }
}
