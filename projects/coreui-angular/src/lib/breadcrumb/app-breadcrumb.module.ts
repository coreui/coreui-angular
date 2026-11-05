import { NgModule, ModuleWithProviders } from '@angular/core';

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
  static forRoot(_config?: unknown): ModuleWithProviders<AppBreadcrumbModule> {
    return {
      ngModule: AppBreadcrumbModule,
      providers: [
        AppBreadcrumbService
      ]
    };
  }
}
