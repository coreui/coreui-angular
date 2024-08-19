import { NgClass, NgOptimizedImage } from '@angular/common';
import { Component, computed, input, InputSignal } from '@angular/core';

import { Colors, Shapes, Sizes, TextColors } from '../coreui.types';
import { TextColorDirective } from '../utilities';

@Component({
  selector: 'c-avatar',
  templateUrl: './avatar.component.html',
  standalone: true,
  imports: [NgClass, NgOptimizedImage],
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
   * @type Colors
   */
  readonly color: InputSignal<Colors | undefined> = input();

  /**
   * Select the shape of the component.
   * @type Shapes
   */
  readonly shape: InputSignal<Shapes | undefined> = input();

  /**
   * Size the component small, large, or extra large.
   * @default 'md'
   */
  readonly size: InputSignal<Omit<Sizes, 'xxl'>> = input<Omit<Sizes, 'xxl'>>('md');

  /**
   * The alt attribute for the img element alternate text.
   * @type string
   */
  readonly alt: InputSignal<string> = input('');

  /**
   * The src attribute for the img element.
   * @type string
   */
  readonly src: InputSignal<string | undefined> = input();

  /**
   * Sets the color context of the status indicator to one of CoreUI’s themed colors.
   * @type Colors
   */
  readonly status: InputSignal<Colors | undefined> = input();

  /**
   * Sets the text color of the component to one of CoreUI’s themed colors.
   * via TextColorDirective
   * @type TextColors
   */
  readonly textColor: InputSignal<TextColors | undefined> = input();

  readonly statusClass = computed(() => {
    return {
      'avatar-status': true,
      [`bg-${this.status()}`]: !!this.status()
    } as Record<string, boolean>;
  });

  readonly hostClasses = computed(() => {
    return {
      avatar: true,
      [`avatar-${this.size()}`]: !!this.size(),
      [`bg-${this.color()}`]: !!this.color(),
      [`${this.shape()}`]: !!this.shape()
    } as Record<string, boolean>;
  });
}
