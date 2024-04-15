import { Component, HostBinding, Input } from '@angular/core';
import { Colors, TextColors } from '../coreui.types';
import { TextBgColorDirective, TextColorDirective } from '../utilities';

@Component({
  selector: 'c-card, [c-card]',
  template: '<ng-content />',
  standalone: true,
  hostDirectives: [
    { directive: TextColorDirective, inputs: ['cTextColor: textColor'] },
    { directive: TextBgColorDirective, inputs: ['cTextBgColor: textBgColor'] }
  ]
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

  /**
   * Sets the component's color scheme to one of CoreUI's themed colors, ensuring the text color contrast adheres to the WCAG 4.5:1 contrast ratio standard for accessibility.
   * via TextBgColorDirective
   * @type Colors
   * @since 5.0.0
   */
  @Input() textBgColor?: Colors;

  @HostBinding('class')
  get hostClasses(): any {
    return {
      card: true,
      [`bg-${this.color}`]: !!this.color
    };
  }
}
