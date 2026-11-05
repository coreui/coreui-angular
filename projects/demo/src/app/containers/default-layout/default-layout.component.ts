import {Component, signal} from '@angular/core';

import { navItems } from '../../_nav';
import { AppHeaderComponent } from '../../../../../coreui-angular/src/lib/header';
import { AppSidebarComponent } from '../../../../../coreui-angular/src/lib/sidebar/app-sidebar.component';
import { AppSidebarNavComponent } from '../../../../../coreui-angular/src/lib/sidebar/app-sidebar-nav.component';
import { AppSidebarMinimizerComponent } from '../../../../../coreui-angular/src/lib/sidebar/app-sidebar-minimizer.component';
import { CuiBreadcrumbComponent } from '../../../../../coreui-angular/src/lib/breadcrumb/cui-breadcrumb.component';
import { RouterOutlet } from '@angular/router';
import { AppAsideComponent } from '../../../../../coreui-angular/src/lib/aside/app-aside.component';
import { AppFooterComponent } from '../../../../../coreui-angular/src/lib/footer/app-footer.component';

@Component({
    selector: 'app-dashboard',
    templateUrl: './default-layout.component.html',
    imports: [AppHeaderComponent, AppSidebarComponent, AppSidebarNavComponent, AppSidebarMinimizerComponent, CuiBreadcrumbComponent, RouterOutlet, AppAsideComponent, AppFooterComponent]
})
export class DefaultLayoutComponent {
  readonly minimized = signal(false);
  public navItems = [...navItems];

  toggleMinimize(e: boolean) {
    this.minimized.set(e);
  }
}
