import { Component, computed, input, InputSignal } from '@angular/core';
import { BadgePositions, Colors, Shapes, TextColors } from '../coreui.types';
import { TextBgColorDirective, TextColorDirective } from '../utilities';

@Component({
  selector: 'c-badge',
  template: '<ng-content />',
  standalone: true,
  hostDirectives: [
    { directive: TextColorDirective, inputs: ['cTextColor: textColor'] },
    { directive: TextBgColorDirective, inputs: ['cTextBgColor: textBgColor'] }
  ],
  host: {
    class: 'badge',
    '[class]': 'hostClasses()'
  }
})
export class BadgeComponent {
  /**
   * Sets the color context of the component to one of CoreUI’s themed colors.
   * @type Colors
   */
  readonly color: InputSignal<Colors | undefined> = input();
  /**
   * Position badge in one of the corners of a link or button.
   * @type BadgePositions
   */
  readonly position: InputSignal<BadgePositions | undefined> = input();

  /**
   * Select the shape of the component.
   * @type Shapes
   */
  readonly shape: InputSignal<Shapes | undefined> = input();

  /**
   * Size the component small.
   */
  readonly size: InputSignal<'sm' | undefined> = input();

  /**
   * Sets the text color of the component to one of CoreUI’s themed colors.
   * via TextColorDirective
   * @type TextColors
   */
  readonly textColor: InputSignal<TextColors | undefined> = input();

  /**
   * Sets the component's color scheme to one of CoreUI's themed colors, ensuring the text color contrast adheres to the WCAG 4.5:1 contrast ratio standard for accessibility.
   * via TextBgColorDirective
   * @type Colors
   * @since 5.0.0
   */
  readonly textBgColor: InputSignal<Colors | undefined> = input();

  readonly hostClasses = computed(() => {
    const position = this.position();
    const positionClasses = {
      'position-absolute': !!position,
      'translate-middle': !!position,
      'top-0': position?.includes('top'),
      'top-100': position?.includes('bottom'),
      'start-100': position?.includes('end'),
      'start-0': position?.includes('start')
    };

    return Object.assign(
      {
        badge: true,
        [`bg-${this.color()}`]: !!this.color(),
        [`badge-${this.size()}`]: !!this.size(),
        [`${this.shape()}`]: !!this.shape()
      },
      !!position ? positionClasses : {}
    ) as Record<string, boolean>;
  });
}
