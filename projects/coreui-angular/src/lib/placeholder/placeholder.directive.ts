import { booleanAttribute, computed, Directive, input, InputSignalWithTransform } from '@angular/core';

@Directive({
  selector: '[cPlaceholder]',
  exportAs: 'cPlaceholder',
  standalone: true,
  host: {
    '[class]': 'hostClasses()',
    '[attr.aria-hidden]': 'ariaHidden()'
  }
})
export class PlaceholderDirective {
  /**
   * placeholder toggler
   * @type boolean
   * @default false
   */
  readonly visible: InputSignalWithTransform<boolean, unknown> = input<boolean, unknown>(false, {
    transform: booleanAttribute,
    alias: 'cPlaceholder'
  });

  /**
   * Size the placeholder xs, small, large.
   */
  readonly size = input<'xs' | 'sm' | 'lg' | undefined>(undefined, { alias: 'cPlaceholderSize' });

  readonly ariaHidden = computed(() => {
    return this.visible() ? null : true;
  });

  readonly hostClasses = computed(() => {
    return {
      placeholder: this.visible(),
      [`placeholder-${this.size()}`]: !!this.size()
    };
  });
}
