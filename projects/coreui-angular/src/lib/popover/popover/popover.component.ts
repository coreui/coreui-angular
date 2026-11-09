import { booleanAttribute, Component, input, TemplateRef } from '@angular/core';

import { TooltipComponentBase } from '../../tooltip/tooltip/tooltip-component-base';

@Component({
  selector: 'c-popover',
  templateUrl: './popover.component.html',
  host: {
    class: 'popover fade bs-popover-auto',
    '[class]': 'hostClasses()',
    '[attr.role]': 'role()',
    '[attr.id]': 'id()'
  }
})
export class PopoverComponent extends TooltipComponentBase {
  protected readonly prefix = 'popover';

  /**
   * Content of popover
   * @returns string | TemplateRef<any>
   */
  readonly content = input<string | TemplateRef<any>>('');

  /**
   * The `id` HTML attribute of the popover.
   * @returns string
   */
  readonly id = input<string>();

  /**
   * Default role for popover.
   * @returns string
   * @default 'tooltip'
   */
  readonly role = input('tooltip');

  /**
   * Toggle the visibility of popover component.
   * @returns boolean
   */
  readonly visible = input(false, { transform: booleanAttribute });

  protected override createTextNode(content: string): Node {
    const body = this.renderer.createElement('div');
    this.renderer.addClass(body, 'popover-body');
    this.renderer.appendChild(body, this.renderer.createText(content));
    return body;
  }
}
