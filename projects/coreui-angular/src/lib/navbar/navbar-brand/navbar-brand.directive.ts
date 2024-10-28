import { Directive, input } from '@angular/core';

@Directive({
  selector: '[cNavbarBrand]',
  standalone: true,
  host: { class: 'navbar-brand', '[attr.role]': 'role()' }
})
export class NavbarBrandDirective {
  readonly role = input('button');
}
