import { Component, HostBinding, Input } from '@angular/core';
import { INavAttributes, INavLinkProps } from './breadcrumb-item';

@Component({
  selector: 'c-breadcrumb-item',
  templateUrl: './breadcrumb-item.component.html',
  styleUrls: ['./breadcrumb-item.component.scss']
})
export class BreadcrumbItemComponent {

  /**
   * Toggle the active state for the component. [docs]
   * @type boolean
   */
  @Input() active?: boolean;
  /**
   * The `url` prop for the inner `[routerLink]` directive. [docs]
   * @type string
   */
  @Input() url?: string | any[];
  /**
   * Additional html attributes for link. [docs]
   * @type INavAttributes
   */
  @Input() attributes?: INavAttributes;
  /**
   * Some `NavigationExtras` props for the inner `[routerLink]` directive and `routerLinkActiveOptions`. [docs]
   * @type INavLinkProps
   */
  @Input() linkProps?: INavLinkProps;

  @HostBinding('attr.aria-current') get ariaCurrent(): string | null {
    return this.active ? 'page' : null;
  }

  @HostBinding('class')
  get hostClasses(): any {
    return {
      'breadcrumb-item': true,
      active: this.active
    };
  }
}
