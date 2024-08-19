import { booleanAttribute, computed, Directive, input, InputSignalWithTransform } from '@angular/core';
import { ThemeDirective } from '../shared/theme.directive';
import { ButtonDirective } from './button.directive';

@Directive({
  selector: '[cButtonClose]',
  standalone: true,
  hostDirectives: [{ directive: ThemeDirective, inputs: ['dark'] }],
  host: {
    class: 'btn btn-close',
    '[class]': 'hostClasses()',
    '[attr.aria-disabled]': 'ariaDisabled()',
    '[attr.aria-pressed]': 'isActive()',
    '[attr.disabled]': 'attrDisabled()',
    '[attr.tabindex]': 'tabIndex()',
    '[attr.type]': 'type()'
  }
})
export class ButtonCloseDirective extends ButtonDirective {
  /**
   * Change the default color to white.
   * @type boolean
   * @deprecated 5.0.0. Use `cButtonClose.dark` instead.
   */
  readonly white: InputSignalWithTransform<boolean, unknown> = input(false, { transform: booleanAttribute });

  override readonly hostClasses = computed(() => {
    return {
      btn: true,
      'btn-close': true,
      'btn-close-white': this.white(),
      [`btn-${this.size()}`]: !!this.size(),
      active: this.active(),
      disabled: this._disabled()
    } as Record<string, boolean>;
  });
}
