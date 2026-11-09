import { Directive, inject, input, model, TemplateRef } from '@angular/core';
import { Options } from '@popperjs/core';

import { Triggers } from '../coreui.types';
import { ListenersService, UIDService } from '../services';
import { ElementRefDirective } from '../shared';
import { TooltipDirectiveBase } from '../tooltip/tooltip-directive-base';
import { PopoverComponent } from './popover/popover.component';

@Directive({
  selector: '[cPopover]',
  exportAs: 'cPopover',
  providers: [ListenersService]
})
export class PopoverDirective extends TooltipDirectiveBase {
  protected readonly component = PopoverComponent;
  protected readonly offset = 9;
  protected readonly tooltipId = inject(UIDService).getUID('popover');

  /**
   * Content of popover
   * @returns string | TemplateRef<any> | undefined
   */
  readonly content = input<string | TemplateRef<any> | undefined>(undefined, { alias: 'cPopover' });

  /**
   * Describes the placement of your component after Popper.js has applied all the modifiers that may have flipped or altered the originally provided placement property.
   * @returns 'top' | 'bottom' | 'left' | 'right'
   * @default 'top'
   */
  readonly placement = input<'top' | 'bottom' | 'left' | 'right'>('top', { alias: 'cPopoverPlacement' });

  /**
   * Optional popper Options object, takes precedence over cPopoverPlacement prop
   * @returns Partial<Options>
   */
  readonly popperOptions = input<Partial<Options>>({}, { alias: 'cPopoverOptions' });

  /**
   * ElementRefDirective for positioning the popover on reference element
   * @returns ElementRefDirective | undefined
   * @default undefined
   * @since 5.7.27
   */
  readonly reference = input<ElementRefDirective | undefined>(undefined, { alias: 'cPopoverRef' });

  /**
   * Sets which event handlers you’d like provided to your toggle prop. You can specify one trigger or an array of them.
   * @returns Triggers | Triggers[]
   */
  readonly trigger = input<Triggers | Triggers[]>('hover', { alias: 'cPopoverTrigger' });

  /**
   * Toggle the visibility of popover component.
   * @returns boolean
   */
  readonly visible = model(false, { alias: 'cPopoverVisible' });
}
