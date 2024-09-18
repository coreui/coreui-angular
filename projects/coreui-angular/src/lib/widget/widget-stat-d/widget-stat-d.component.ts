import { Component, computed, input } from '@angular/core';
import { Colors } from '../../coreui.types';
import { CardBodyComponent, CardComponent, CardHeaderComponent } from '../../card';
import { ColComponent, RowDirective } from '../../grid';
import { NgClass } from '@angular/common';

export type WidgetStatDValue = {
  title?: string;
  value?: number | string;
};

@Component({
  selector: 'c-widget-stat-d',
  templateUrl: './widget-stat-d.component.html',
  exportAs: 'cWidgetStatD',
  standalone: true,
  imports: [CardHeaderComponent, CardBodyComponent, ColComponent, RowDirective, NgClass],
  host: { class: 'card' }
})
export class WidgetStatDComponent extends CardComponent {
  /**
   * Sets the color context of the component to one of CoreUI’s themed colors.
   * @type Colors
   */
  // override readonly color = input<Colors>();

  /**
   * Values and subtitles for your component.
   * @type WidgetStatDValue
   */
  readonly values = input<WidgetStatDValue[]>();

  readonly headerClasses = computed(() => {
    return {
      'position-relative': true,
      'd-flex': true,
      'justify-content-center': true,
      'align-items-center': true,
      [`bg-${this.color()}`]: this.color()
    } as Record<string, boolean>;
  });
}
