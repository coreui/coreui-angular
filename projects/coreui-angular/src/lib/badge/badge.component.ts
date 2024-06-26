import { Component, HostBinding, Input } from '@angular/core';
import { BadgePositions, Colors, Shapes, TextColors } from '../coreui.types';
import { TextBgColorDirective, TextColorDirective } from '../utilities';

@Component({
  selector: 'c-badge',
  template: '<ng-content />',
  standalone: true,
  hostDirectives: [
    { directive: TextColorDirective, inputs: ['cTextColor: textColor'] },
    { directive: TextBgColorDirective, inputs: ['cTextBgColor: textBgColor'] }
  ]
})
export class BadgeComponent {
  /**
   * Sets the color context of the component to one of CoreUI’s themed colors.
   * @type Colors
   */
  @Input() color?: Colors;
  /**
   * Position badge in one of the corners of a link or button.
   * @type BadgePositions
   */
  @Input() position?: BadgePositions;
  /**
   * Select the shape of the component.
   * @type Shapes
   */
  @Input() shape?: Shapes;
  /**
   * Size the component small.
   */
  @Input() size?: 'sm';

  /**
   * Sets the text color of the component to one of CoreUI’s themed colors.
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
    const positionClasses = {
      'position-absolute': !!this.position,
      'translate-middle': !!this.position,
      'top-0': this.position?.includes('top'),
      'top-100': this.position?.includes('bottom'),
      'start-100': this.position?.includes('end'),
      'start-0': this.position?.includes('start')
    };

    return Object.assign({
        badge: true,
        [`bg-${this.color}`]: !!this.color,
        [`badge-${this.size}`]: !!this.size,
        [`${this.shape}`]: !!this.shape
      }, !!this.position ? positionClasses : {}
    );
  }
}
