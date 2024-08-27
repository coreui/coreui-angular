import { computed, contentChild, Directive, input, InputSignal } from '@angular/core';
import { PlaceholderDirective } from './placeholder.directive';

@Directive({
  selector: '[cPlaceholderAnimation]',
  standalone: true,
  host: {
    '[class]': 'hostClasses()'
  }
})
export class PlaceholderAnimationDirective {
  /**
   * Animation type for placeholder
   * @type 'glow' | 'wave'
   * @default undefined
   */
  readonly animation: InputSignal<'glow' | 'wave' | undefined> = input<'glow' | 'wave' | undefined>(undefined, {
    alias: 'cPlaceholderAnimation'
  });

  readonly placeholder = contentChild(PlaceholderDirective);

  readonly hostClasses = computed(() => {
    return {
      [`placeholder-${this.animation()}`]: this.placeholder()?.visible() && !!this.animation()
    };
  });
}
