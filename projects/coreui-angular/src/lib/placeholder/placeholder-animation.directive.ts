import { AfterContentInit, ContentChild, Directive, HostBinding, Input } from '@angular/core';
import { PlaceholderDirective } from './placeholder.directive';

@Directive({
  selector: '[cPlaceholderAnimation]',
  standalone: true
})
export class PlaceholderAnimationDirective implements AfterContentInit {

  constructor() { }

  /**
   * Animation type for placeholder
   * @type 'glow' | 'wave'
   * @default undefined
   */
  @Input('cPlaceholderAnimation') animation?: 'glow' | 'wave';
  @ContentChild(PlaceholderDirective) placeholder!: PlaceholderDirective;
  private animate: boolean = false;

  @HostBinding('class')
  get hostClasses(): any {
    return {
      [`placeholder-${this.animation}`]: this.animate && !!this.animation
    };
  }

  ngAfterContentInit() {
    this.animate = this.placeholder?.visible;
  }
}
