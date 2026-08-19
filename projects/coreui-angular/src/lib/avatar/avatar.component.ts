import { Component, computed, input } from '@angular/core';

import { Colors, Shapes, Sizes, TextColors } from '../coreui.types';
import { TextColorDirective } from '../utilities';

@Component({
  selector: 'c-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss'],
  hostDirectives: [
    {
      directive: TextColorDirective,
      inputs: ['cTextColor: textColor']
    }
  ],
  host: { class: 'avatar', '[class]': 'hostClasses()' }
})
export class AvatarComponent {
  /**
   * Sets the background color context of the component to one of CoreUI’s themed colors.
   * @returns Colors
   */
  readonly color = input<Colors>();

  /**
   * Select the shape of the component.
   * @returns Shapes
   */
  readonly shape = input<Shapes>();

  /**
   * Size the component small, large, or extra large.
   * @returns Omit<Sizes, 'xxl'>
   * @default 'md'
   */
  readonly size = input<Omit<Sizes, 'xxl'>>('');

  /**
   * The alt attribute for the img element alternate text.
   * @returns string
   */
  readonly alt = input<string>('');

  /**
   * The src attribute for the img element.
   * @returns string
   */
  readonly src = input<string>();

  /**
   * Sets the color context of the status indicator to one of CoreUI’s themed colors.
   * @returns Colors
   */
  readonly status = input<Colors>();

  /**
   * Sets the text color of the component to one of CoreUI’s themed colors
   * via TextColorDirective
   * @returns TextColors
   */
  readonly textColor = input<TextColors>();

  readonly statusClass = computed(() => {
    const status = this.status();
    return {
      'avatar-status': true,
      [`bg-${status}`]: !!status
    } as Record<string, boolean>;
  });

  readonly hostClasses = computed(() => {
    const size = this.size();
    const color = this.color();
    const shape = this.shape();

    return {
      avatar: true,
      [`avatar-${size}`]: !!size,
      [`bg-${color}`]: !!color,
      [`${shape}`]: !!shape
    } as Record<string, boolean>;
  });
}
