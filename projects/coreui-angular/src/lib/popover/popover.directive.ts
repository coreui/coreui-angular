import { booleanAttribute, Directive, inject, input, model, TemplateRef } from '@angular/core';
import { Options } from '@popperjs/core';

import { Triggers } from '../coreui.types';
import { ListenersService, UIDService } from '../services';
import { ElementRefDirective } from '../shared';
import { delayAttribute, TooltipDelay, TooltipDirectiveBase } from '../tooltip/tooltip-directive-base';
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
   * Fades the popover in and out.
   * @returns boolean
   * @default true
   * @since 5.7.45
   */
  readonly animation = input(true, { alias: 'cPopoverAnimation', transform: booleanAttribute });

  /**
   * Content of popover
   * @returns string | TemplateRef<any> | undefined
   */
  readonly content = input<string | TemplateRef<any> | undefined>(undefined, { alias: 'cPopover' });

  /**
   * Delay in ms: `show` before the popover appears, `hide` after its trigger ends. A number sets both.
   * @returns number | { show?: number; hide?: number }
   * @default { show: 150, hide: 0 }
   * @since 5.7.45
   */
  readonly delay = input<number | { show?: number; hide?: number }, TooltipDelay | string | null | undefined>(
    {},
    { alias: 'cPopoverDelay', transform: delayAttribute }
  );

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
