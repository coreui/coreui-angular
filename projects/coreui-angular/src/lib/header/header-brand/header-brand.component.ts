import { Component, input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'c-header-brand',
  template: '<ng-content />',
  exportAs: 'cHeaderBrand',
  changeDetection: ChangeDetectionStrategy.Eager,
  host: {
    '[attr.role]': 'role()',
    class: 'header-brand'
  }
})
export class HeaderBrandComponent {
  /**
   * Default role for header-brand. [docs]
   * @return string
   * @default 'button'
   */
  readonly role = input('button');
}
