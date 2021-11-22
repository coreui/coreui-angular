import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[cAccordionButton]'
})
export class AccordionButtonDirective {

  /**
   * Toggles an accordion button collapsed state. Use in accordionHeaderTemplate. [docs]
   * @type boolean
   */
  @Input() collapsed!: boolean;

  @HostBinding('class')
  get hostClasses(): any {
    return {
      'accordion-button': true,
      collapsed: this.collapsed
    };
  }

  @HostBinding('attr.aria-expanded') get ariaExpanded(): boolean {
    return !this.collapsed;
  }
}
