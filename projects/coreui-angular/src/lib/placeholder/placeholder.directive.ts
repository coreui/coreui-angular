import { booleanAttribute, Directive, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[cPlaceholder]',
  exportAs: 'cPlaceholder',
  standalone: true
})
export class PlaceholderDirective {

  /**
   * placeholder toggler
   * @type boolean
   * @default false
   */
  @Input({ alias: 'cPlaceholder', transform: booleanAttribute }) visible: boolean = false;

  /**
   * Size the placeholder extremely small, small, large.
   */
  @Input('cPlaceholderSize') size?: 'xs' | 'sm' | 'lg';

  @HostBinding('attr.aria-hidden')
  get ariaHidden(): boolean | null {
    return this.visible ? null : true;
  };

  @HostBinding('class')
  get hostClasses(): any {
    return {
      'placeholder': this.visible,
      [`placeholder-${this.size}`]: !!this.size
    };
  }
}
