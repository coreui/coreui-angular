import { booleanAttribute, Component, HostBinding, Input } from '@angular/core';
import { NgClass } from '@angular/common';

import { Colors } from '../../coreui.types';
import { CardBodyComponent, CardComponent } from '../../card';

@Component({
  selector: 'c-widget-stat-b',
  templateUrl: './widget-stat-b.component.html',
  exportAs: 'cWidgetStatB',
  standalone: true,
  imports: [CardBodyComponent, NgClass]
})
export class WidgetStatBComponent extends CardComponent {

  constructor() {
    super();
  }

  /**
   * Sets the color context of the component to one of CoreUI’s themed colors.
   * @type Colors
   */
  @Input() override color?: Colors;
  /**
   * Sets the text-color context of the component to one of CoreUI’s themed colors.
   * @type Colors
   */
  @Input() override textColor?: Colors | 'white' | 'muted';
  /**
   * Title of the widget to display
   * @type string
   */
  @Input() title?: string;
  /**
   * Helper text for your widget.
   * @type string
   */
  @Input() text?: string;
  /**
   * Value for your widget to display
   * @type string
   */
  @Input() value?: string;

  /**
   * Invert colors from their default dark shade.
   * @type boolean
   */
  @Input({ transform: booleanAttribute }) inverse: string | boolean = false;

  @HostBinding('class')
  override get hostClasses() {
    return {
      'card': true,
      [`bg-${this.color}`]: !!this.color,
      [`text-${this.textColor}`]: !!this.textColor,
      'text-high-emphasis-inverse': !!this.color
    };
  }

}
