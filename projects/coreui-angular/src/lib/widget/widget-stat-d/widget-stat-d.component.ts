import { Component, HostBinding, Input } from '@angular/core';
import { Colors } from '../../coreui.types';
import { CardBodyComponent, CardHeaderComponent } from '../../card';
import { ColComponent, RowDirective } from '../../grid';
import { NgClass, NgForOf, NgIf } from '@angular/common';

export type WidgetStatDValue = {
  title?: string,
  value?: number | string,
}

@Component({
  selector: 'c-widget-stat-d',
  templateUrl: './widget-stat-d.component.html',
  exportAs: 'cWidgetStatD',
  standalone: true,
  imports: [CardHeaderComponent, CardBodyComponent, ColComponent, RowDirective, NgClass, NgForOf, NgIf]
})
export class WidgetStatDComponent {
  constructor() { }

  /**
   * Sets the color context of the component to one of CoreUI’s themed colors.
   * @type Colors
   */
  @Input() color?: Colors;
  /**
   * Values and subtitles for your component.
   * @type WidgetStatDValue
   */
  @Input() values?: WidgetStatDValue[];

  @HostBinding('class')
  get hostClasses() {
    return {
      'card': true
    };
  }

  get headerClasses() {
    return {
      'position-relative': true,
      'd-flex': true,
      'justify-content-center': true,
      'align-items-center': true,
      [`bg-${this.color}`]: this.color
    };
  }

}
