import { AfterContentInit, Component, ContentChildren, HostBinding, Input, QueryList } from '@angular/core';

import { Colors } from '../../coreui.types';
import { TemplateIdDirective } from '../../shared';
import { CardBodyComponent } from '../../card';
import { NgClass, NgIf, NgTemplateOutlet } from '@angular/common';

@Component({
  selector: 'c-widget-stat-a',
  templateUrl: './widget-stat-a.component.html',
  exportAs: 'cWidgetStatA',
  imports: [CardBodyComponent, NgClass, NgIf, NgTemplateOutlet],
  standalone: true
})
export class WidgetStatAComponent implements AfterContentInit {
  /**
   * Sets the color context of the component to one of CoreUI’s themed colors.
   * @type Colors
   */
  @Input() color?: Colors;
  /**
   * Title of the widget to display
   * @type string
   */
  @Input() title?: string;
  /**
   * Value for your widget to display
   * @type string
   */
  @Input() value?: string;

  templates: any = {};

  @ContentChildren(TemplateIdDirective, { descendants: true }) contentTemplates!: QueryList<TemplateIdDirective>;

  @HostBinding('class')
  get hostClasses() {
    return {
      'card': true,
      [`bg-${this.color}`]: !!this.color,
      'text-high-emphasis-inverse': !!this.color
    };
  }

  get bodyClasses() {
    return {
      'pb-0': true,
      'd-flex': true,
      'justify-content-between': true,
      'align-items-start': true
    };
  }

  ngAfterContentInit(): void {
    this.contentTemplates.forEach((child: TemplateIdDirective) => {
      this.templates[child.id] = child.templateRef;
    });
  }
}
