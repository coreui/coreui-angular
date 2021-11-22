import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { Colors } from '../../coreui.types';

export type WidgetStatDValue = {
  title?: string,
  value?: number | string,
}

@Component({
  selector: 'c-widget-stat-d',
  templateUrl: './widget-stat-d.component.html',
  styleUrls: ['./widget-stat-d.component.scss'],
  exportAs: 'cWidgetStatD'
})
export class WidgetStatDComponent {
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

  constructor() {
  }

  @HostBinding('class')
  get hostClasses() {
    return {
      'card': true
    }
  }

  get headerClasses() {
    return {
      'position-relative': true,
      'd-flex': true,
      'justify-content-center': true,
      'align-items-center': true,
      [`bg-${this.color}`]: this.color,
    }
  }

}
