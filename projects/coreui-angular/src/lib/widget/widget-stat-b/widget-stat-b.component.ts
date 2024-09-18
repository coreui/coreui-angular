import { booleanAttribute, Component, computed, input, InputSignal, InputSignalWithTransform } from '@angular/core';
import { NgClass } from '@angular/common';

import { CardBodyComponent, CardComponent } from '../../card';

@Component({
  selector: 'c-widget-stat-b',
  templateUrl: './widget-stat-b.component.html',
  exportAs: 'cWidgetStatB',
  standalone: true,
  imports: [CardBodyComponent, NgClass],
  host: { class: 'card', '[class]': 'hostClasses()' }
})
export class WidgetStatBComponent extends CardComponent {
  constructor() {
    super();
  }

  /**
   * Sets the color context of the component to one of CoreUI themed colors.
   * @type Colors
   */
  // override readonly color: InputSignal<Colors | undefined> = input();

  /**
   * Sets the text-color context of the component to one of CoreUI themed colors.
   * via TextColorDirective
   * @type TextColors
   */
  // override readonly textColor: InputSignal<TextColors | undefined> = input();

  /**
   * Title of the widget to display
   * @type string
   */
  readonly title: InputSignal<string | undefined> = input<string>();

  /**
   * Helper text for your widget.
   * @type string
   */
  readonly text: InputSignal<string | undefined> = input<string>();

  /**
   * Value for your widget to display
   * @type string
   */
  readonly value: InputSignal<string | undefined> = input<string>();

  /**
   * Invert colors from their default dark shade.
   * @type boolean
   */
  readonly inverse: InputSignalWithTransform<boolean, unknown> = input(false, { transform: booleanAttribute });

  override readonly hostClasses = computed(() => {
    const color = this.color();
    const textColor = this.textColor();
    return {
      card: true,
      [`bg-${color}`]: !!color,
      [`text-${textColor}`]: !!textColor,
      'text-white': this.inverse()
    } as Record<string, boolean>;
  });
}
