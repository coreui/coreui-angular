import { booleanAttribute, computed, Directive, input } from '@angular/core';

@Directive({
  selector: '[cFormFloating]',
  host: { '[class]': 'hostClasses()' }
})
export class FormFloatingDirective {
  /**
   * Enable floating labels
   * @type boolean
   */
  readonly floating = input(true, { transform: booleanAttribute, alias: 'cFormFloating' });

  readonly hostClasses = computed(() => {
    return {
      'form-floating': this.floating()
    };
  });
}
