import { booleanAttribute, Directive, input } from '@angular/core';

@Directive({
  selector: '[cFormFloating]',
  host: { '[class.form-floating]': 'floating()' }
})
export class FormFloatingDirective {
  /**
   * Enable floating labels
   * @type boolean
   */
  readonly floating = input(true, { transform: booleanAttribute, alias: 'cFormFloating' });
}
