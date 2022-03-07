import { Directive, HostBinding, Input } from '@angular/core';
import { Colors } from '../coreui.types';

@Directive({
  selector: '[cPlaceholder]'
})
export class PlaceholderDirective {

  constructor() { }

  /**
   * Animation type for placeholder
   * @type 'glow' | 'wave'
   * @default undefined
   */
  @Input() animation?: 'glow' | 'wave';

  /**
   * Custom color for placeholder
   * @type Colors
   * @default undefined
   */
  @Input('cPlaceholderColor') color?: Colors;

  /**
   * Size the placeholder extra small, small, large.
   */
  @Input('cPlaceholderSize') size?: 'xs' | 'sm' | 'lg';

  @HostBinding('class')
  get hostClasses(): any {
    return {
      'placeholder': true,
      [`placeholder-${this.animation}`]: !!this.animation,
      [`placeholder-${this.size}`]: !!this.size,
      [`bg-${this.color}`]: !!this.color
    };
  }

}
