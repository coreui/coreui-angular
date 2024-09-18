import { Component, computed, input } from '@angular/core';
import { NgClass } from '@angular/common';
import { CardBodyComponent, CardComponent } from '../../card';

@Component({
  selector: 'c-widget-stat-e',
  templateUrl: './widget-stat-e.component.html',
  exportAs: 'cWidgetStatE',
  standalone: true,
  imports: [CardBodyComponent, NgClass]
})
export class WidgetStatEComponent extends CardComponent {
  constructor() {
    super();
  }

  /**
   * Title of the widget to display
   * @type string
   */
  readonly title = input<string>();

  /**
   * Value for your widget to display
   * @type string | number
   */
  readonly value = input<string | number>();

  readonly titleClasses = computed(() => {
    const textColor = this.textColor();
    return {
      'text-body-secondary': !textColor,
      small: true,
      'text-uppercase': true,
      'fw-semibold': true,
      [`text-${textColor}`]: !!textColor
    } as Record<string, boolean>;
  });
}
