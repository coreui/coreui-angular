import { booleanAttribute, Component, computed, contentChildren, effect, input, TemplateRef } from '@angular/core';

import { CardBodyComponent, CardComponent } from '../../card';
import { TemplateIdDirective } from '../../shared';
import { NgClass, NgTemplateOutlet } from '@angular/common';

@Component({
  selector: 'c-widget-stat-c',
  templateUrl: './widget-stat-c.component.html',
  exportAs: 'cWidgetStatC',
  standalone: true,
  imports: [CardBodyComponent, NgClass, NgTemplateOutlet],
  host: { '[class]': 'hostExtendedClass()' }
})
export class WidgetStatCComponent extends CardComponent {
  constructor() {
    super();
  }

  /**
   * Icon for your component.
   * @type string
   */
  readonly icon = input<string>();

  /**
   * Title of the widget to display
   * @type string
   */
  readonly title = input<string>();

  /**
   * Value for your widget to display
   * @type string|number
   */
  readonly value = input<string | number>();

  /**
   * Invert colors from their default dark shade.
   * @type boolean
   */
  readonly inverse = input(false, { transform: booleanAttribute });

  templates: Record<string, TemplateRef<any>> = {};
  readonly contentTemplates = contentChildren(TemplateIdDirective, { descendants: true });

  readonly contentTemplatesEffect = effect(() => {
    this.contentTemplates().forEach((child: TemplateIdDirective) => {
      this.templates[child.id] = child.templateRef;
    });
  });

  readonly hostExtendedClass = computed(() => {
    return { ...this.hostClasses(), 'text-white': this.inverse() } as Record<string, boolean>;
  });

  readonly titleClasses = computed(() => {
    const inverse = this.inverse();
    return {
      'text-body-secondary': !inverse,
      'text-white': inverse,
      'text-opacity-75': inverse,
      [`text-${this.textColor()}`]: !!this.textColor()
    } as Record<string, boolean>;
  });

  readonly valueClasses = computed(() => {
    return {
      'fs-4': !this.textColor(),
      'fw-semibold': true,
      ...this.titleClasses(),
      'text-opacity-75': false
    } as Record<string, boolean>;
  });

  readonly iconClasses = computed(() => {
    return {
      'mb-4': !this.textColor(),
      'text-end': true,
      ...this.titleClasses()
    } as Record<string, boolean>;
  });
}
