import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[cAccordionButton]',
  standalone: true,
  host: { class: 'accordion-button' }
})
export class AccordionButtonDirective {
  /**
   * Toggles an accordion button collapsed state. Use in accordionHeaderTemplate. [docs]
   * @type boolean
   */
  @Input() collapsed!: boolean;

  /**
   * Default type for cAccordionButton. [docs]
   * @type string
   * @default 'button'
   */
  @HostBinding('attr.type')
  @Input()
  type: string = 'button';

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
