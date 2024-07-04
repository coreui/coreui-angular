import { booleanAttribute, Component, HostBinding, input, InputSignal, InputSignalWithTransform } from '@angular/core';
import { NgClass } from '@angular/common';

import { CardBodyComponent, CardComponent } from '../../card';

@Component({
  selector: 'c-widget-stat-b',
  templateUrl: './widget-stat-b.component.html',
  exportAs: 'cWidgetStatB',
  standalone: true,
  imports: [CardBodyComponent, NgClass]
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
  readonly title: InputSignal<string | undefined> = input();

  /**
   * Helper text for your widget.
   * @type string
   */
  readonly text: InputSignal<string | undefined> = input();

  /**
   * Value for your widget to display
   * @type string
   */
  readonly value: InputSignal<string | undefined> = input();

  /**
   * Invert colors from their default dark shade.
   * @type boolean
   */
  readonly inverse: InputSignalWithTransform<boolean, unknown> = input(false, { transform: booleanAttribute });

  @HostBinding('class')
  override get hostClasses() {
    return {
      card: true,
      [`bg-${this.color()}`]: !!this.color(),
      [`text-${this.textColor()}`]: !!this.textColor(),
      'text-white': this.inverse()
    };
  }
}
