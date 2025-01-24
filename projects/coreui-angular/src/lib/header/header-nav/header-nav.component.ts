import { Component, input } from '@angular/core';

@Component({
  selector: 'c-header-nav',
  template: '<ng-content />',
  styleUrls: ['./header-nav.component.scss'],
  exportAs: 'cHeaderNav',
  host: {
    '[attr.role]': 'role()',
    class: 'header-nav'
  }
})
export class HeaderNavComponent {
  /**
   * Default role for header-nav. [docs]
   * @return string
   * @default 'navigation'
   */
  readonly role = input('navigation');
}
