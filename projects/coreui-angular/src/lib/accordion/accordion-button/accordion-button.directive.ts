import { computed, Directive, input } from '@angular/core';

@Directive({
  selector: '[cAccordionButton]',
  host: { '[class]': 'hostClasses()', '[attr.type]': 'type()', '[attr.aria-expanded]': 'ariaExpanded()' }
})
export class AccordionButtonDirective {
  /**
   * Toggles an accordion button collapsed state. Use in accordionHeaderTemplate. [docs]
   * @type boolean
   */
  readonly collapsed = input<boolean | undefined>(undefined);

  /**
   * Default type for cAccordionButton. [docs]
   * @type string
   * @default 'button'
   */
  readonly type = input('button');

  readonly hostClasses = computed(() => {
    return {
      'accordion-button': true,
      collapsed: this.collapsed()
    };
  });

  readonly ariaExpanded = computed(() => !this.collapsed());
}
