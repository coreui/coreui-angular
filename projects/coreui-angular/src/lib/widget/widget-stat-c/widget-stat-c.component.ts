import {
  AfterContentInit,
  booleanAttribute,
  Component,
  ContentChildren,
  HostBinding,
  Input,
  QueryList
} from '@angular/core';

import { CardBodyComponent, CardComponent } from '../../card';
import { TemplateIdDirective } from '../../shared';
import { NgClass, NgTemplateOutlet } from '@angular/common';

@Component({
  selector: 'c-widget-stat-c',
  templateUrl: './widget-stat-c.component.html',
  exportAs: 'cWidgetStatC',
  standalone: true,
  imports: [CardBodyComponent, NgClass, NgTemplateOutlet]
})
export class WidgetStatCComponent extends CardComponent implements AfterContentInit {

  constructor() {
    super();
  }

  /**
   * Icon for your component.
   * @type string
   */
  @Input() icon?: string;
  /**
   * Title of the widget to display
   * @type string
   */
  @Input() title?: string;
  /**
   * Value for your widget to display
   * @type string
   */
  @Input() value?: string | number;

  /**
   * Invert colors from their default dark shade.
   * @type boolean
   */
  @Input({ transform: booleanAttribute }) inverse: string | boolean = false;

  templates: any = {};
  @ContentChildren(TemplateIdDirective, { descendants: true }) contentTemplates!: QueryList<TemplateIdDirective>;

  @HostBinding('class')
  get hostExtendedClass() {
    return {
      'high-emphasis-inverse': this.inverse
    };
  }

  get iconClasses() {
    return {
      'mb-4': !this.textColor,
      'text-end': true,
      'text-medium-emphasis': !this.inverse,
      'text-medium-emphasis-inverse': this.inverse,
      [`text-${this.textColor}`]: !!this.textColor
    };
  }

  get titleClasses() {
    return {
      'text-medium-emphasis': !this.inverse,
      'text-medium-emphasis-inverse': this.inverse,
      [`text-${this.textColor}`]: !!this.textColor
    };
  }

  get valueClasses() {
    return {
      'fs-4': !this.textColor,
      'fw-semibold': true,
      'text-high-emphasis': !this.inverse,
      'text-high-emphasis-inverse': this.inverse,
      [`text-${this.textColor}`]: !!this.textColor
    };
  }

  ngAfterContentInit(): void {
    this.contentTemplates.forEach((child: TemplateIdDirective) => {
      this.templates[child.id] = child.templateRef;
    });
  }
}
