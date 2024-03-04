import { Component, HostBinding, Input } from '@angular/core';
import { Colors, TextColors } from '../coreui.types';
import { TextColorDirective } from '../utilities';

@Component({
  selector: 'c-card, [c-card]',
  template: '<ng-content />',
  standalone: true,
  hostDirectives: [{
    directive: TextColorDirective, inputs: ['cTextColor: textColor']
  }]
})
export class CardComponent {

  /**
   * Sets the color context of the component to one of CoreUI’s themed colors.
   * @type Colors
   */
  @Input() color?: Colors;

  /**
   * Sets the text color context of the component to one of CoreUI’s themed colors.
   * via TextColorDirective
   * @type TextColors
   */
  @Input() textColor?: TextColors;

  @HostBinding('class')
  get hostClasses(): any {
    return {
      card: true,
      [`bg-${this.color}`]: !!this.color
    };
  }
}
