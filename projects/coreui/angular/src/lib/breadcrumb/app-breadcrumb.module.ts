import { CommonModule} from '@angular/common';
import { NgModule, ModuleWithProviders} from '@angular/core';
import { RouterModule } from '@angular/router';

// App Breadcrumb Component
import { AppBreadcrumbService } from './app-breadcrumb.service';
import { AppBreadcrumbComponent } from './app-breadcrumb.component';

@NgModule({
  imports: [ CommonModule, RouterModule ],
  exports: [ AppBreadcrumbComponent ],
  declarations: [ AppBreadcrumbComponent ]
})
export class AppBreadcrumbModule {
  static forRoot(config?: any): ModuleWithProviders {
    return {
      ngModule: AppBreadcrumbModule,
      providers: [
        AppBreadcrumbService
      ]
    };
  }
}
