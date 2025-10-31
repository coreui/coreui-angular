import { computed, contentChild, Directive, input, InputSignal } from '@angular/core';
import { PlaceholderDirective } from './placeholder.directive';

@Directive({
  selector: '[cPlaceholderAnimation]',
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
    const animation = this.animation();
    return {
      [`placeholder-${animation}`]: this.placeholder()?.visible() && !!animation
    } as Record<string, boolean>;
  });
}
