import { booleanAttribute, computed, Directive, input } from '@angular/core';
import { BooleanInput } from '@angular/cdk/coercion';

@Directive({
  selector: '[cPageLink]',
  host: { class: 'page-link', '[class]': 'hostClasses()' }
})
export class PageLinkDirective {
  static ngAcceptInputType_disabled: BooleanInput;

  readonly disabled = input(false, { transform: booleanAttribute });

  readonly hostClasses = computed(() => {
    return {
      'page-link': true,
      disabled: this.disabled()
    } as Record<string, boolean>;
  });
}
