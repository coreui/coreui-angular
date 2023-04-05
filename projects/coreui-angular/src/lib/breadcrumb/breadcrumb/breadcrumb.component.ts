import { Component, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'c-breadcrumb',
  template: '<ng-content></ng-content>',
  standalone: true
})
export class BreadcrumbComponent {
  /**
   * Default aria-label for breadcrumb. [docs]
   * @type string
   * @default 'breadcrumb'
   */
  @HostBinding('attr.aria-label')
  @Input() ariaLabel = 'breadcrumb';

  /**
   * Default role for breadcrumb. [docs]
   * @type string
   * @default 'navigation'
   */
  @HostBinding('attr.role')
  @Input() role = 'navigation';

  @HostBinding('class')
  get hostClasses() {
    return {
      breadcrumb: true
    }
  }

  constructor() { }

}
