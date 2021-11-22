import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { NavbarComponent } from './navbar.component';
import { NavbarBrandDirective } from './navbar-brand/navbar-brand.directive';
import { NavbarNavComponent } from './navbar-nav/navbar-nav.component';
import { NavbarTextComponent } from './navbar-text/navbar-text.component';
import { NavbarTogglerDirective } from './navbar-toggler/navbar-toggler.directive';

@NgModule({
  declarations: [
    NavbarComponent,
    NavbarNavComponent,
    NavbarTextComponent,
    NavbarBrandDirective,
    NavbarTogglerDirective
  ],
  exports: [
    NavbarComponent,
    NavbarNavComponent,
    NavbarTextComponent,
    NavbarBrandDirective,
    NavbarTogglerDirective
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class NavbarModule { }
