import { booleanAttribute, Component, computed, contentChildren, effect, input, TemplateRef } from '@angular/core';
import { NgTemplateOutlet } from '@angular/common';

import { Colors } from '../../coreui.types';
import { TemplateIdDirective } from '../../shared';
import { CardBodyComponent, CardComponent, CardFooterComponent } from '../../card';

@Component({
  selector: 'c-widget-stat-f',
  templateUrl: './widget-stat-f.component.html',
  exportAs: 'cWidgetStatB',
  imports: [CardBodyComponent, CardFooterComponent, NgTemplateOutlet],
  host: { class: 'card', '[class]': 'hostClasses()' }
})
export class WidgetStatFComponent extends CardComponent {
  /**
   * Sets the color context of the component to one of CoreUI’s themed colors.
   * @returns Colors
   */
  // override readonly color = input<Colors>();

  /**
   * Sets the text-color context of the component to one of CoreUI’s themed colors.
   * @returns Colors
   */
  // override readonly textColor = input<TextColors | 'white' | 'muted'>();

  /**
   * Footer for your widget
   * @returns string
   */
  readonly footer = input<string>();

  /**
   * Icon for your widget
   * @returns string
   */
  readonly icon = input<string>();

  /**
   * Set padding of your component.
   * @returns boolean
   */
  readonly padding = input(false, { transform: booleanAttribute });

  /**
   * Title of the widget to display
   * @returns string
   */
  readonly title = input<string>();

  /**
   * Value for your widget to display
   * @returns string | number
   */
  readonly value = input<string | number>();

  readonly contentTemplates = contentChildren(TemplateIdDirective, { descendants: true });

  readonly templates = computed(() => {
    return this.contentTemplates().reduce(
      (acc, child) => {
        acc[child.id] = child.templateRef;
        return acc;
      },
      {} as Record<string, TemplateRef<any>>
    );
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
