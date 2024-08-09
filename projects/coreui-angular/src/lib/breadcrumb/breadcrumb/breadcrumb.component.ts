import { Component, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'c-breadcrumb',
  template: '<ng-content />',
  standalone: true,
  host: { class: 'breadcrumb' }
})
export class BreadcrumbComponent {
  /**
   * Default aria-label for breadcrumb. [docs]
   * @type string
   * @default 'breadcrumb'
   */
  @HostBinding('attr.aria-label')
  @Input()
  ariaLabel = 'breadcrumb';

  /**
   * Default role for breadcrumb. [docs]
   * @type string
   * @default 'navigation'
   */
  @HostBinding('attr.role')
  @Input()
  role = 'navigation';
}
