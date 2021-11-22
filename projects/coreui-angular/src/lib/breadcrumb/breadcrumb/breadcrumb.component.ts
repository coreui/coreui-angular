import { Component, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'c-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
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
