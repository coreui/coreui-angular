import { Directive, inject, input, model, TemplateRef } from '@angular/core';
import { Options } from '@popperjs/core';

import { Triggers } from '../coreui.types';
import { IntersectionService, ListenersService, UIDService } from '../services';
import { ElementRefDirective } from '../shared';
import { TooltipComponent } from './tooltip/tooltip.component';
import { TooltipDirectiveBase } from './tooltip-directive-base';

@Directive({
  selector: '[cTooltip]',
  exportAs: 'cTooltip',
  providers: [ListenersService, IntersectionService]
})
export class TooltipDirective extends TooltipDirectiveBase {
  protected readonly component = TooltipComponent;
  protected readonly offset = 5;
  protected readonly tooltipId = inject(UIDService).getUID('tooltip');

  /**
   * Content of tooltip
   * @returns string | TemplateRef<any> | undefined
   */
  readonly content = input<string | TemplateRef<any> | undefined>(undefined, { alias: 'cTooltip' });

  /**
   * Describes the placement of your component after Popper.js has applied all the modifiers that may have flipped or altered the originally provided placement property.
   * @returns 'top' | 'bottom' | 'left' | 'right'
   * @default 'top'
   */
  readonly placement = input<'top' | 'bottom' | 'left' | 'right'>('top', { alias: 'cTooltipPlacement' });

  /**
   * Optional popper Options object, takes precedence over cPopoverPlacement prop
   * @returns Partial<Options>
   */
  readonly popperOptions = input<Partial<Options>>({}, { alias: 'cTooltipOptions' });

  /**
   * ElementRefDirective for positioning the tooltip on reference element
   * @returns ElementRefDirective | undefined
   * @default undefined
   * @since 5.1.0
   */
  readonly reference = input<ElementRefDirective | undefined>(undefined, { alias: 'cTooltipRef' });

  /**
   * Sets which event handlers you’d like provided to your toggle prop. You can specify one trigger or an array of them.
   * @returns Triggers | Triggers[]
   */
  readonly trigger = input<Triggers | Triggers[]>('hover', { alias: 'cTooltipTrigger' });

  /**
   * Toggle the visibility of tooltip component.
   * @returns boolean
   */
  readonly visible = model(false, { alias: 'cTooltipVisible' });
}
