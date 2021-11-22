import { Component, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'c-header-brand',
  template: `<ng-content></ng-content>`
})
export class HeaderBrandComponent {
  /**
   * Default role for header-brand. [docs]
   * @type string
   * @default 'button'
   */
  @HostBinding('attr.role')
  @Input() role = 'button';

  @HostBinding('class.header-brand') headerBrandClass = true;
}
