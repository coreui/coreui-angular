import { NgModule } from '@angular/core';

import { SidebarComponent } from './sidebar/sidebar.component';
import { SidebarService } from './sidebar.service';
import { SidebarBrandComponent } from './sidebar-brand/sidebar-brand.component';
import { SidebarToggleDirective } from './sidebar-toggle/sidebar-toggle.directive';
import { SidebarTogglerDirective } from './sidebar-toggler/sidebar-toggler.directive';
import { SidebarHeaderComponent } from './sidebar-header/sidebar-header.component';
import { SidebarFooterComponent } from './sidebar-footer/sidebar-footer.component';
import { SidebarNavGroupService } from './sidebar-nav/sidebar-nav-group.service';

import {
  SidebarNavBadgePipe,
  SidebarNavComponent,
  SidebarNavDividerComponent,
  SidebarNavGroupComponent,
  SidebarNavHelper,
  SidebarNavIconPipe,
  SidebarNavItemClassPipe,
  SidebarNavLabelComponent,
  SidebarNavLinkComponent,
  SidebarNavLinkContentComponent,
  SidebarNavLinkPipe,
  SidebarNavTitleComponent
} from './sidebar-nav';

@NgModule({
  imports: [
    SidebarComponent,
    SidebarBrandComponent,
    SidebarFooterComponent,
    SidebarHeaderComponent,
    SidebarNavComponent,
    SidebarNavBadgePipe,
    SidebarNavDividerComponent,
    SidebarNavGroupComponent,
    SidebarNavIconPipe,
    SidebarNavItemClassPipe,
    SidebarNavLabelComponent,
    SidebarNavLinkComponent,
    SidebarNavLinkContentComponent,
    SidebarNavLinkPipe,
    SidebarNavTitleComponent,
    SidebarToggleDirective,
    SidebarTogglerDirective
  ],
  exports: [
    SidebarComponent,
    SidebarToggleDirective,
    SidebarTogglerDirective,
    SidebarBrandComponent,
    SidebarNavComponent,
    SidebarHeaderComponent,
    SidebarFooterComponent
  ],
  providers: [
    SidebarService,
    SidebarNavHelper,
    SidebarNavGroupService
  ]
})
export class SidebarModule {}
