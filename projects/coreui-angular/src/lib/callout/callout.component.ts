import { Component, HostBinding, Input } from '@angular/core';
import { Colors } from '../coreui.types';

@Component({
  selector: 'c-callout, [cCallout]',
  template: `<ng-content></ng-content>`,
  styleUrls: ['./callout.component.scss']
})
export class CalloutComponent {

  /**
   * Sets the color context of the component to one of CoreUI’s themed colors.
   * @type Colors
   */
  @Input() color?: Colors;

  @HostBinding('class')
  get hostClasses(): any {

    return {
      callout: true,
      [`callout-${this.color}`]: !!this.color
    };
  }

  constructor() { }

}
