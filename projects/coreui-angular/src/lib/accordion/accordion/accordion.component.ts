import { Component, HostBinding, Input } from '@angular/core';
import { BooleanInput, coerceBooleanProperty } from '@angular/cdk/coercion';

import { AccordionService } from '../accordion.service';

@Component({
  selector: 'c-accordion',
  template: `<ng-content></ng-content>`,
  styleUrls: ['./accordion.component.scss'],
  exportAs: 'cAccordionItem',
  providers: [AccordionService],
  standalone: true
})
export class AccordionComponent {

  static ngAcceptInputType_alwaysOpen: BooleanInput;

  /**
   * Removes the default background-color, some borders, and some rounded corners to render accordions edge-to-edge with their parent container.
   * @type boolean
   */
  @Input() flush?: boolean;
  /**
   * Make accordion items stay open when another item is opened
   * @type boolean
   */
  @Input()
  set alwaysOpen(value: boolean) {
    this.accordionService.alwaysOpen = coerceBooleanProperty(value);
  }
  get alwaysOpen(): boolean {
    return this.accordionService.alwaysOpen;
  }

  @HostBinding('class')
  get hostClasses(): any {
    return {
      accordion: true,
      'accordion-flush': !!this.flush
    };
  }

  constructor(
    private accordionService: AccordionService
  ) {}

}
