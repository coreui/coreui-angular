import { booleanAttribute, Component, HostBinding, Input } from '@angular/core';

import { IContainer } from './container.type';
import { Breakpoints } from '../coreui.types';

@Component({
  selector: 'c-container, [cContainer]',
  template: '<ng-content></ng-content>',
  styleUrls: ['./container.component.scss'],
  standalone: true
})
export class ContainerComponent implements IContainer {

  /**
   * Set container 100% wide until a breakpoint.
   */
  @Input() breakpoint: Exclude<Breakpoints, 'xs'> = '';

  /**
   * Set container 100% wide, spanning the entire width of the viewport.
   * @type boolean | string
   */
  @Input({ transform: booleanAttribute }) fluid: string | boolean = false;

  @HostBinding('class')
  get hostClasses(): any {
    return {
      container: !this.fluid && !this.breakpoint,
      'container-fluid': !!this.fluid,
      [`container-${this.breakpoint}`]: !!this.breakpoint
    };
  }
}
