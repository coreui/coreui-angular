import { booleanAttribute, Component, computed, effect, input } from '@angular/core';
import { NgTemplateOutlet } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HtmlAttributesDirective } from '../../shared';
import { INavAttributes, INavLinkProps } from './breadcrumb-item';

@Component({
  selector: 'c-breadcrumb-item',
  templateUrl: './breadcrumb-item.component.html',
  styleUrls: ['./breadcrumb-item.component.scss'],
  imports: [RouterModule, NgTemplateOutlet, HtmlAttributesDirective],
  exportAs: 'breadcrumbItem',
  host: {
    '[attr.aria-current]': 'ariaCurrent()',
    '[class]': 'hostClasses()'
  }
})
export class BreadcrumbItemComponent {
  /**
   * Toggle the active state for the component. [docs]
   * @return boolean
   */
  readonly active = input<boolean, unknown>(undefined, { transform: booleanAttribute });

  /**
   * The `url` prop for the inner `[routerLink]` directive. [docs]
   * @return string
   */
  readonly url = input<string | any[]>();

  /**
   * Additional html attributes for link. [docs]
   * @return INavAttributes
   */
  readonly attribs = input<INavAttributes>();
  protected readonly _attributes = input<INavAttributes>(undefined, { alias: 'attributes' });

  readonly #attributesEffect = effect(() => {
    if (this._attributes()) {
      console.error('c-breadcrumb-item: [attributes] prop is removed, use [attribs] instead:', this._attributes());
    }
  });

  /**
   * Some `NavigationExtras` props for the inner `[routerLink]` directive and `routerLinkActiveOptions`. [docs]
   * @return INavLinkProps
   */
  readonly linkProps = input<INavLinkProps>();

  readonly ariaCurrent = computed((): string | null => {
    return this.active() ? 'page' : null;
  });

  readonly hostClasses = computed(() => {
    return {
      'breadcrumb-item': true,
      active: this.active()
    } as Record<string, boolean>;
  });
}
