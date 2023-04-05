import { Component, Input } from '@angular/core';
import { NgClass, NgIf } from '@angular/common';
import { CardBodyComponent, CardComponent } from '../../card';

@Component({
  selector: 'c-widget-stat-e',
  templateUrl: './widget-stat-e.component.html',
  exportAs: 'cWidgetStatE',
  standalone: true,
  imports: [CardBodyComponent, NgIf, NgClass]
})
export class WidgetStatEComponent extends CardComponent {

  constructor() {
    super();
  }

  /**
   * Title of the widget to display
   * @type string
   */
  @Input() title?: string;
  /**
   * Value for your widget to display
   * @type string | number
   */
  @Input() value?: string | number;

  get titleClasses() {
    return {
      'text-medium-emphasis': !this.textColor,
      'small': true,
      'text-uppercase': true,
      'fw-semibold': true,
      [`text-${this.textColor}`]: !!this.textColor
    };
  }

}
