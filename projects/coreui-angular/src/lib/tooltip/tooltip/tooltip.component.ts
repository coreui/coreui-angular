import { booleanAttribute, Component, input, TemplateRef } from '@angular/core';

import { TooltipComponentBase } from './tooltip-component-base';

@Component({
  selector: 'c-tooltip',
  templateUrl: './tooltip.component.html',
  host: {
    class: 'tooltip fade bs-tooltip-auto',
    '[class]': 'hostClasses()',
    '[attr.role]': 'role()',
    '[attr.id]': 'id()'
  }
})
export class TooltipComponent extends TooltipComponentBase {
  protected readonly prefix = 'tooltip';

  /**
   * Content of tooltip
   * @returns string | TemplateRef<any>
   */
  readonly content = input<string | TemplateRef<any>>('');

  /**
   * The `id` HTML attribute of the tooltip.
   * @returns string
   */
  readonly id = input<string>();

  /**
   * Default role for tooltip.
   * @returns string
   * @default 'tooltip'
   */
  readonly role = input('tooltip');

  /**
   * Toggle the visibility of popover component.
   * @returns boolean
   */
  readonly visible = input(false, { transform: booleanAttribute });
}
