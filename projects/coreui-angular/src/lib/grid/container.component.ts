import { Component, HostBinding, Input } from '@angular/core';
import { BooleanInput, coerceBooleanProperty } from '@angular/cdk/coercion';

import { IContainer } from './container.type';
import { Breakpoints } from '../coreui.types';

@Component({
  selector: 'c-container, [cContainer]',
  template: '<ng-content></ng-content>',
  styleUrls: ['./container.component.scss'],
})
export class ContainerComponent implements IContainer{

  static ngAcceptInputType_fluid: BooleanInput;

  /**
   * Set container 100% wide until a breakpoint.
   */
  @Input() breakpoint: Exclude<Breakpoints, 'xs'> = '';
  /**
   * Set container 100% wide, spanning the entire width of the viewport.
   */
  @Input()
  set fluid(value: boolean) {
    this._fluid = coerceBooleanProperty(value);
  };
  get fluid(): boolean {
    return this._fluid;
  }
  private _fluid = false;

  @HostBinding('class')
  get hostClasses(): any {
    return {
      container: !this.fluid && !this.breakpoint,
      'container-fluid': this.fluid,
      [`container-${this.breakpoint}`]: !!this.breakpoint,
    };
  }
}
