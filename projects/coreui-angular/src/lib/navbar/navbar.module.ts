import { NgModule } from '@angular/core';

import { NavbarComponent } from './navbar.component';
import { NavbarBrandDirective } from './navbar-brand/navbar-brand.directive';
import { NavbarNavComponent } from './navbar-nav/navbar-nav.component';
import { NavbarTextComponent } from './navbar-text/navbar-text.component';
import { NavbarTogglerDirective } from './navbar-toggler/navbar-toggler.directive';

@NgModule({
  exports: [
    NavbarBrandDirective,
    NavbarComponent,
    NavbarNavComponent,
    NavbarTextComponent,
    NavbarTogglerDirective
  ],
  imports: [
    NavbarBrandDirective,
    NavbarComponent,
    NavbarNavComponent,
    NavbarTextComponent,
    NavbarTogglerDirective
  ]
})
export class NavbarModule {}
