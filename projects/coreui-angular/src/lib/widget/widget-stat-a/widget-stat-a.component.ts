import { Component, computed, contentChildren, effect, input, InputSignal, TemplateRef } from '@angular/core';

import { Colors } from '../../coreui.types';
import { TemplateIdDirective } from '../../shared';
import { CardBodyComponent, CardComponent } from '../../card';
import { NgTemplateOutlet } from '@angular/common';

@Component({
  selector: 'c-widget-stat-a',
  templateUrl: './widget-stat-a.component.html',
  exportAs: 'cWidgetStatA',
  imports: [CardBodyComponent, NgTemplateOutlet],
  host: { class: 'card', '[class]': 'hostClasses()' }
})
export class WidgetStatAComponent extends CardComponent {
  /**
   * Sets the color context of the component to one of CoreUI’s themed colors.
   * @returns Colors
   */
  // override readonly color = input<Colors>();

  /**
   * Title of the widget to display
   * @returns string
   */
  readonly title: InputSignal<string | undefined> = input();

  /**
   * Value for your widget to display
   * @returns string
   */
  readonly value: InputSignal<string | undefined> = input<string>();

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

  override readonly hostClasses = computed(() => {
    const color = this.color();
    return {
      card: true,
      [`bg-${color}`]: !!color,
      'text-white': !!color
    } as Record<string, boolean>;
  });

  get bodyClasses() {
    return {
      'pb-0': true,
      'd-flex': true,
      'justify-content-between': true,
      'align-items-start': true
    };
  }
}
