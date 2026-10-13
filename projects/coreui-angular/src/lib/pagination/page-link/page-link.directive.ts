import { booleanAttribute, computed, Directive, input } from '@angular/core';

@Directive({
  selector: '[cPageLink]',
  host: { class: 'page-link', '[class]': 'hostClasses()' }
})
export class PageLinkDirective {
  /**
   * Toggle the disabled state for the component.
   * @returns boolean
   */
  readonly disabled = input(false, { transform: booleanAttribute });

  readonly hostClasses = computed(() => {
    return {
      'page-link': true,
      disabled: this.disabled()
    } as Record<string, boolean>;
  });
}
