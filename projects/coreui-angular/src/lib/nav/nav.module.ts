import { NgModule } from '@angular/core';
import { NavComponent } from './nav.component';
import { NavItemComponent } from './nav-item.component';
import { NavLinkDirective } from './nav-link.directive';

@NgModule({
  imports: [
    NavComponent,
    NavItemComponent,
    NavLinkDirective
  ],
  exports: [
    NavComponent,
    NavItemComponent,
    NavLinkDirective
  ]
})
export class NavModule {}
