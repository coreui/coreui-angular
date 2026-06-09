import { Component, input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'c-breadcrumb',
  template: '<ng-content />',
  changeDetection: ChangeDetectionStrategy.Eager,
  host: {
    class: 'breadcrumb',
    '[attr.aria-label]': 'ariaLabel()',
    '[attr.role]': 'role()'
  }
})
export class BreadcrumbComponent {
  /**
   * Default aria-label for breadcrumb. [docs]
   * @return string
   * @default 'breadcrumb'
   */
  readonly ariaLabel = input('breadcrumb');

  /**
   * Default role for breadcrumb. [docs]
   * @return string
   * @default 'navigation'
   */
  readonly role = input('navigation');
}
