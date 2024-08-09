import { Component, HostBinding, Input } from '@angular/core';

import { Positions } from '../coreui.types';

@Component({
  selector: 'c-footer, [cFooter]',
  template: '<ng-content />',
  standalone: true,
  host: { class: 'footer' }
})
export class FooterComponent {
  /**
   * Place footer in non-static positions. [docs]
   * @type Positions
   */
  @Input() position?: Positions;

  /**
   * Default role for footer. [docs]
   * @type string
   * @default 'contentinfo'
   */
  @HostBinding('attr.role')
  @Input()
  role = 'contentinfo';

  @HostBinding('class')
  get getClasses(): any {
    return {
      footer: true,
      [`footer-${this.position}`]: !!this.position
    };
  }
}
