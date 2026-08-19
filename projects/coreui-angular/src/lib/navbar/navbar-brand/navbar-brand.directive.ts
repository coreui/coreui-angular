import { Directive, input } from '@angular/core';

@Directive({
  selector: '[cNavbarBrand]',
  host: { class: 'navbar-brand', '[attr.role]': 'role()' }
})
export class NavbarBrandDirective {
  /**
   * Default role for navbar-brand.
   * @returns string
   * @default 'button'
   */
  readonly role = input('button');
}
