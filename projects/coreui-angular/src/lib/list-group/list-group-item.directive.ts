import {
  booleanAttribute,
  computed,
  Directive,
  ElementRef,
  inject,
  input,
  InputSignal,
  InputSignalWithTransform,
  numberAttribute
} from '@angular/core';
import { BooleanInput, Colors } from '../coreui.types';

@Directive({
  selector: '[cListGroupItem], c-list-group-item',
  exportAs: 'cListGroupItem',
  host: {
    '[class]': 'hostClasses()',
    '[attr.aria-disabled]': 'ariaDisabled()',
    '[attr.aria-current]': 'ariaCurrent()',
    '[attr.disabled]': 'attrDisabled()',
    '[attr.tabindex]': 'tabIndex()'
  }
})
export class ListGroupItemDirective {
  static ngAcceptInputType_active: BooleanInput;
  static ngAcceptInputType_disabled: BooleanInput;

  readonly hostElement = inject(ElementRef);

  /**
   * Toggle the active state for the component.
   * @returns boolean
   */
  readonly active = input(false, { transform: booleanAttribute });

  /**
   * Sets the color context of the component to one of CoreUI’s themed colors.
   * @returns InputSignal<Colors | undefined>
   */
  readonly color = input<Colors | undefined>();

  /**
   * Set disabled attr for the host element
   * @returns boolean
   */
  readonly disabled = input(false, { transform: booleanAttribute });

  /**
   * The tabindex attribute specifies the tab order of an element (when the "tab" button is used for navigating).
   * @returns number | undefined
   */
  readonly tabindex = input(undefined, { transform: numberAttribute });

  readonly hostClasses = computed(() => {
    const host: HTMLElement = this.hostElement.nativeElement;
    const color = this.color();

    return {
      'list-group-item': true,
      'list-group-item-action': host.nodeName === 'A' || host.nodeName === 'BUTTON',
      active: this.active(),
      disabled: this._disabled(),
      [`list-group-item-${color}`]: !!color
    } as Record<string, boolean>;
  });

  readonly _disabled = computed(() => this.disabled());

  readonly ariaDisabled = computed(() => {
    return this._disabled() ? true : null;
  });

  readonly attrDisabled = computed(() => {
    return this._disabled() ? '' : null;
  });

  readonly tabIndex = computed(() => {
    return this._disabled() ? '-1' : (this.tabindex() ?? null);
  });

  readonly ariaCurrent = computed(() => {
    return this.active() || null;
  });
}
