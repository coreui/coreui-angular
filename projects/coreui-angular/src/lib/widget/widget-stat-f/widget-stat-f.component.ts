import {
  AfterContentInit,
  booleanAttribute,
  Component,
  ContentChildren,
  HostBinding,
  Input,
  QueryList
} from '@angular/core';
import { NgClass, NgTemplateOutlet } from '@angular/common';

import { Colors } from '../../coreui.types';
import { TemplateIdDirective } from '../../shared';
import { CardBodyComponent, CardFooterComponent } from '../../card';

@Component({
  selector: 'c-widget-stat-f',
  templateUrl: './widget-stat-f.component.html',
  exportAs: 'cWidgetStatB',
  standalone: true,
  imports: [CardBodyComponent, CardFooterComponent, NgClass, NgTemplateOutlet]
})
export class WidgetStatFComponent implements AfterContentInit {

  /**
   * Sets the color context of the component to one of CoreUI’s themed colors.
   * @type Colors
   */
  @Input() color?: Colors;

  /**
   * Sets the text-color context of the component to one of CoreUI’s themed colors.
   * @type Colors
   */
  @Input() textColor?: Colors | 'white' | 'muted';

  /**
   * Footer for your widget
   * @type string
   */
  @Input() footer?: string;

  /**
   * Icon for your widget
   * @type string
   */
  @Input() icon?: string;

  /**
   * Set padding of your component.
   * @type boolean
   */
  @Input({ transform: booleanAttribute }) padding: string | boolean = false;

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

  templates: any = {};
  @ContentChildren(TemplateIdDirective, { descendants: true }) contentTemplates!: QueryList<TemplateIdDirective>;

  @HostBinding('class')
  get hostClasses() {
    return {
      card: true
    };
  }

  get cardBodyClasses() {
    return {
      'd-flex': true,
      'align-items-center': true,
      'p-0': !this.padding
    };
  }

  get iconClasses() {
    return {
      'me-3': !this.textColor,
      'text-white': true,
      [`bg-${this.color}`]: !!this.color,
      'p-3': this.padding,
      'p-4': !this.padding
    };
  }

  get titleClasses() {
    return {
      'text-medium-emphasis': !this.textColor,
      'small': true,
      'text-uppercase': true,
      'fw-semibold': true,
      [`text-${this.textColor}`]: !!this.textColor
    };
  }

  get valueClasses() {
    return {
      'fs-6': !this.textColor,
      'fw-semibold': true,
      [`text-${this.textColor}`]: !!this.textColor
    };
  }

  ngAfterContentInit(): void {
    this.contentTemplates.forEach((child: TemplateIdDirective) => {
      this.templates[child.id] = child.templateRef;
    });
  }
}
