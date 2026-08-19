import { Component, input } from '@angular/core';

@Component({
  selector: 'c-header-brand',
  template: '<ng-content />',
  exportAs: 'cHeaderBrand',
  host: {
    '[attr.role]': 'role()',
    class: 'header-brand'
  }
})
export class HeaderBrandComponent {
  /**
   * Default role for header-brand
   * @returns string
   * @default 'button'
   */
  readonly role = input('button');
}
