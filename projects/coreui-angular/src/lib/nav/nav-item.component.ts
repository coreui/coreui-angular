import { booleanAttribute, Component, input, numberAttribute } from '@angular/core';
import { NgTemplateOutlet } from '@angular/common';

import { BooleanInput, NumberInput } from '../coreui.types';
import { NavLinkDirective } from './nav-link.directive';

@Component({
  selector: 'c-nav-item',
  templateUrl: './nav-item.component.html',
  styleUrls: ['./nav-item.component.scss'],
  imports: [NavLinkDirective, NgTemplateOutlet],
  host: { class: 'nav-item' }
})
export class NavItemComponent {
  static ngAcceptInputType_active: BooleanInput;
  static ngAcceptInputType_disabled: BooleanInput;
  static ngAcceptInputType_tabindex: NumberInput;

  /**
   * Toggle the active state for the nav link rendered for `href`.
   * @returns boolean | undefined
   * @default undefined
   */
  readonly active = input<boolean | undefined, unknown>(undefined, { transform: booleanAttribute });

  /**
   * Set disabled attr for the nav link rendered for `href`.
   * @returns boolean
   * @default false
   */
  readonly disabled = input(false, { transform: booleanAttribute });

  /**
   * The href attribute of the nav link. Set it to render the nav link, otherwise the item projects its content as is.
   * @returns string
   */
  readonly href = input<string>();

  /**
   * The tabindex attribute of the nav link rendered for `href`.
   * @returns number | undefined
   */
  readonly tabindex = input(undefined, { transform: numberAttribute });
}
