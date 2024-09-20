import { booleanAttribute, Component, computed, contentChildren, effect, input, TemplateRef } from '@angular/core';
import { NgClass, NgTemplateOutlet } from '@angular/common';

import { Colors } from '../../coreui.types';
import { TemplateIdDirective } from '../../shared';
import { CardBodyComponent, CardComponent, CardFooterComponent } from '../../card';

@Component({
  selector: 'c-widget-stat-f',
  templateUrl: './widget-stat-f.component.html',
  exportAs: 'cWidgetStatB',
  standalone: true,
  imports: [CardBodyComponent, CardFooterComponent, NgClass, NgTemplateOutlet],
  host: { class: 'card', '[class]': 'hostClasses()' }
})
export class WidgetStatFComponent extends CardComponent {
  /**
   * Sets the color context of the component to one of CoreUI’s themed colors.
   * @type Colors
   */
  // override readonly color = input<Colors>();

  /**
   * Sets the text-color context of the component to one of CoreUI’s themed colors.
   * @type Colors
   */
  // override readonly textColor = input<TextColors | 'white' | 'muted'>();

  /**
   * Footer for your widget
   * @type string
   */
  readonly footer = input<string>();

  /**
   * Icon for your widget
   * @type string
   */
  readonly icon = input<string>();

  /**
   * Set padding of your component.
   * @type boolean
   */
  readonly padding = input(false, { transform: booleanAttribute });

  /**
   * Title of the widget to display
   * @type string
   */
  readonly title = input<string>();

  /**
   * Value for your widget to display
   * @type string
   */
  readonly value = input<string | number>();

  templates: Record<string, TemplateRef<any>> = {};
  readonly contentTemplates = contentChildren(TemplateIdDirective, { descendants: true });

  readonly contentTemplatesEffect = effect(() => {
    this.contentTemplates().forEach((child: TemplateIdDirective) => {
      this.templates[child.id] = child.templateRef;
    });
  });

  readonly cardBodyClasses = computed(() => {
    return {
      'd-flex': true,
      'align-items-center': true,
      'p-0': !this.padding()
    } as Record<string, boolean>;
  });

  readonly iconClasses = computed(() => {
    const color = this.color();
    const padding = this.padding();

    return {
      'me-3': !this.textColor(),
      'text-white': true,
      [`bg-${color}`]: !!color,
      'p-3': padding,
      'p-4': !padding,
      'rounded-start-1': !padding
    } as Record<string, boolean>;
  });

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

  readonly valueClasses = computed(() => {
    const textColor = this.textColor();
    return {
      'fs-6': !textColor,
      'fw-semibold': true,
      [`text-${textColor}`]: !!textColor
    } as Record<string, boolean>;
  });
}
