import { booleanAttribute, Component, HostBinding, inject, Input } from '@angular/core';

import { AccordionService } from '../accordion.service';

@Component({
  selector: 'c-accordion',
  template: '<ng-content />',
  styleUrls: ['./accordion.component.scss'],
  exportAs: 'cAccordionItem',
  providers: [AccordionService],
  standalone: true,
  host: { class: 'accordion' }
})
export class AccordionComponent {
  #accordionService = inject(AccordionService);

  /**
   * Removes the default background-color, some borders, and some rounded corners to render accordions edge-to-edge with their parent container.
   * @type boolean
   */
  @Input({ transform: booleanAttribute }) flush: boolean = false;

  /**
   * Make accordion items stay open when another item is opened
   * @type boolean
   */
  @Input({ transform: booleanAttribute })
  set alwaysOpen(value: boolean) {
    this.#accordionService.alwaysOpen = value;
  }

  get alwaysOpen(): boolean {
    return this.#accordionService.alwaysOpen;
  }

  @HostBinding('class')
  get hostClasses(): any {
    return {
      accordion: true,
      'accordion-flush': this.flush
    };
  }
}
