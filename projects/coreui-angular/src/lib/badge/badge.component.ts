import { Component, HostBinding, Input } from '@angular/core';
import { BadgePositions, Colors, Shapes } from '../coreui.types';

@Component({
  selector: 'c-badge',
  template: '<ng-content></ng-content>',
  standalone: true
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
   * @type TextColors
   */
  @Input() textColor?: string;

  constructor() {}

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
        [`text-${this.textColor}`]: !!this.textColor,
        [`badge-${this.size}`]: !!this.size,
        [`${this.shape}`]: !!this.shape
      }, !!this.position ? positionClasses : {}
    );
  }
}
