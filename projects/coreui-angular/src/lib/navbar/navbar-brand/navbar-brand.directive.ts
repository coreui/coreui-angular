import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[cNavbarBrand]'
})
export class NavbarBrandDirective {

  @HostBinding('class.navbar-brand') navbarBrand = true;
  @HostBinding('attr.role') role = 'button';

}
