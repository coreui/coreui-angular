import {Component, Input, HostBinding} from '@angular/core';

import { Positions } from '../../coreui.types';
type Container = boolean | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'fluid';

@Component({
  selector: 'c-header, [c-header]',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  /**
   * Defines optional container wrapping children elements.
   */
  @Input() container?: Container;
  /**
   * Place header in non-static positions.
   */
  @Input() position?: Positions;
  /**
   * Default role for header. [docs]
   * @type string
   * @default 'header'
   */
  @HostBinding('attr.role')
  @Input() role = 'header';

  @HostBinding('class')
  get getClasses(): any {
    return !!this.container ? this.containerClasses : this.headerClasses;
  }

  get headerClasses(): any {
    return {
      header: true,
      [`header-${this.position}`]: !!this.position,
    };
  }

  get containerClasses(): any {
    return {
      container: this.container === true,
      [`container-${this.container}`]: typeof this.container === 'string'
    };
  }
}
