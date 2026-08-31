import { NgModule } from '@angular/core';
import { NavComponent } from './nav.component';
import { NavGroupComponent } from './nav-group.component';
import { NavGroupItemsComponent } from './nav-group-items.component';
import { NavItemComponent } from './nav-item.component';
import { NavLinkDirective } from './nav-link.directive';
import { NavTitleComponent } from './nav-title.component';

@NgModule({
  imports: [
    NavComponent,
    NavGroupComponent,
    NavGroupItemsComponent,
    NavItemComponent,
    NavLinkDirective,
    NavTitleComponent
  ],
  exports: [
    NavComponent,
    NavGroupComponent,
    NavGroupItemsComponent,
    NavItemComponent,
    NavLinkDirective,
    NavTitleComponent
  ]
})
export class NavModule {}
