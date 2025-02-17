import { Directive, input } from '@angular/core';
import { SidebarToggleDirective } from '../sidebar-toggle/sidebar-toggle.directive';

@Directive({
  selector: '[cSidebarToggler]',
  hostDirectives: [{ directive: SidebarToggleDirective, inputs: ['cSidebarToggle: cSidebarToggler', 'toggle'] }],
  host: {
    '[attr.role]': 'role()',
    class: 'sidebar-toggler',
    '[style]': 'getStyles'
  }
})
export class SidebarTogglerDirective {
  readonly role = input('button');

  get getStyles(): any {
    return {
      appearance: 'button',
      'align-items': 'flex-start',
      cursor: 'pointer'
    };
  }
}
