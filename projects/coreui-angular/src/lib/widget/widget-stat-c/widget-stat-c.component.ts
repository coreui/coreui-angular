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
  @Input({ transform: booleanAttribute }) inverse: boolean = false;

  templates: any = {};
  @ContentChildren(TemplateIdDirective, { descendants: true }) contentTemplates!: QueryList<TemplateIdDirective>;

  @HostBinding('class')
  get hostExtendedClass() {
    return {
      'text-white': this.inverse
    };
  }

  get titleClasses() {
    return {
      'text-body-secondary': !this.inverse,
      'text-white': this.inverse,
      'text-opacity-75': this.inverse,
      [`text-${this.textColor}`]: !!this.textColor
    };
  }

  get valueClasses() {
    return {
      'fs-4': !this.textColor,
      'fw-semibold': true,
      ...this.titleClasses,
      'text-opacity-75': false
    };
  }

  get iconClasses() {
    return {
      'mb-4': !this.textColor,
      'text-end': true,
      ...this.titleClasses
    };
  }

  ngAfterContentInit(): void {
    this.contentTemplates.forEach((child: TemplateIdDirective) => {
      this.templates[child.id] = child.templateRef;
    });
  }
}
