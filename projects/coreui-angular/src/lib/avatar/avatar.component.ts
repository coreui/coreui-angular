import { Component, HostBinding, Input } from '@angular/core';
import { NgClass, NgTemplateOutlet } from '@angular/common';

import { Colors, Shapes, Sizes, TextColors } from '../coreui.types';
import { TextColorDirective } from '../utilities';

@Component({
  selector: 'c-avatar',
  templateUrl: './avatar.component.html',
  standalone: true,
  imports: [
    NgTemplateOutlet,
    NgClass
  ],
  hostDirectives: [{
    directive: TextColorDirective, inputs: ['cTextColor: textColor']
  }]
})
export class AvatarComponent {
  /**
   * Sets the background color context of the component to one of CoreUI’s themed colors.
   * @type Colors
   */
  @Input() color?: Colors;
  /**
   * Select the shape of the component.
   * @type Shapes
   */
  @Input() shape?: Shapes;
  /**
   * Size the component small, large, or extra large.
   * @default 'md'
   */
  @Input() size?: Omit<Sizes, 'xxl'> = 'md';
  /**
   * The src attribute for the img element.
   * @type string
   */
  @Input() src?: string;
  /**
   * Sets the color context of the status indicator to one of CoreUI’s themed colors.
   * @type Colors
   */
  @Input() status?: Colors;

  /**
   * Sets the text color of the component to one of CoreUI’s themed colors.
   * via TextColorDirective
   * @type TextColors
   */
  @Input() textColor?: TextColors;

  constructor() { }

  get statusClass(): any {
    return {
      'avatar-status': true,
      [`bg-${this.status}`]: !!this.status
    };
  }

  @HostBinding('class')
  get hostClasses(): any {
    return {
      avatar: true,
      [`avatar-${this.size}`]: !!this.size,
      [`bg-${this.color}`]: !!this.color,
      [`${this.shape}`]: !!this.shape
    };
  }
}
