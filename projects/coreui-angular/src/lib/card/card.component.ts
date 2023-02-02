import { Component, HostBinding, Input } from '@angular/core';
import { Colors, TextColors } from '../coreui.types';

@Component({
  selector: 'c-card, [c-card]',
  template: `<ng-content></ng-content>`,
  standalone: true
})
export class CardComponent {

  /**
   * Sets the color context of the component to one of CoreUI’s themed colors.
   * @type Colors
   */
  @Input() color?: Colors;
  /**
   * Sets the text color context of the component to one of CoreUI’s themed colors.
   * @type TextColors
   */
  @Input() textColor?: TextColors;

  @HostBinding('class')
  get hostClasses(): any {
    return {
      card: true,
      [`bg-${this.color}`]: !!this.color,
      [`text-${this.textColor}`]: !!this.textColor,
    };
  }

  constructor() { }

}
