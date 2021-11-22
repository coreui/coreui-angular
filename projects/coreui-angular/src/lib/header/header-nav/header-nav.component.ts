import { Component, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'c-header-nav',
  template: `<ng-content></ng-content>`,
  styleUrls: ['./header-nav.component.scss']
})
export class HeaderNavComponent {
  /**
   * Default role for header-nav. [docs]
   * @type string
   * @default 'navigation'
   */
  @HostBinding('attr.role')
  @Input() role = 'navigation';

  @HostBinding('class.header-nav') headerNavClass = true;
}
