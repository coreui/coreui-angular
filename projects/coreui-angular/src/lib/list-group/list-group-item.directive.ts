import {
  booleanAttribute,
  computed,
  Directive,
  ElementRef,
  inject,
  input,
  InputSignal,
  InputSignalWithTransform
} from '@angular/core';
import { Colors } from '../coreui.types';

@Directive({
  selector: '[cListGroupItem], c-list-group-item',
  exportAs: 'cListGroupItem',
  standalone: true,
  host: {
    '[class]': 'hostClasses()',
    '[attr.aria-disabled]': 'ariaDisabled()',
    '[attr.aria-current]': 'ariaCurrent()',
    '[attr.disabled]': 'attrDisabled()',
    '[attr.tabindex]': 'tabIndex()'
  }
})
export class ListGroupItemDirective {
  readonly hostElement = inject(ElementRef);

  /**
   * Toggle the active state for the component.
   * @type InputSignal<boolean | undefined>
   */
  readonly active: InputSignal<boolean | undefined> = input();

  /**
   * Sets the color context of the component to one of CoreUI’s themed colors.
   * @type InputSignal<boolean | undefined>
   */
  readonly color: InputSignal<Colors | undefined> = input();

  /**
   * Set disabled attr for the host element. [docs]
   * @type boolean
   */
  readonly disabled: InputSignalWithTransform<boolean, unknown> = input(false, { transform: booleanAttribute });

  readonly hostClasses = computed(() => {
    const host: HTMLElement = this.hostElement.nativeElement;
    return {
      'list-group-item': true,
      'list-group-item-action': host.nodeName === 'A' || host.nodeName === 'BUTTON',
      active: !!this.active(),
      disabled: this._disabled(),
      [`list-group-item-${this.color()}`]: !!this.color()
    };
  });

  readonly _disabled = computed(() => this.disabled());

  readonly ariaDisabled = computed(() => {
    return this._disabled() ? true : null;
  });

  readonly attrDisabled = computed(() => {
    return this._disabled() ? '' : null;
  });

  readonly tabIndex = computed(() => {
    return this._disabled() ? '-1' : null;
  });

  readonly ariaCurrent = computed(() => {
    return <boolean>this.active() || null;
  });
}
