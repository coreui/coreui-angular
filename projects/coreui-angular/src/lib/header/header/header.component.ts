import { Component, computed, input, InputSignal } from '@angular/core';
import { NgClass } from '@angular/common';

import { Positions } from '../../coreui.types';

type Container = boolean | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'fluid';

@Component({
  selector: 'c-header, [c-header]',
  templateUrl: './header.component.html',
  standalone: true,
  imports: [NgClass],
  host: { '[attr.role]': 'role()', '[class]': 'hostClasses()' }
})
export class HeaderComponent {
  /**
   * Defines optional container wrapping children elements.
   */
  readonly container = input<Container>();
  /**
   * Place header in non-static positions.
   */
  readonly position = input<Positions>();
  /**
   * Default role for header. [docs]
   * @type string
   * @default 'banner'
   */
  readonly role: InputSignal<string> = input('banner');

  readonly hostClasses = computed(() => {
    return !!this.container() ? this.containerClasses() : this.headerClasses();
  });

  readonly headerClasses = computed(() => {
    const position = this.position();
    return {
      header: true,
      [`header-${position}`]: !!position
    } as Record<string, boolean>;
  });

  readonly containerClasses = computed(() => {
    const container = this.container();
    return {
      container: container === true,
      [`container-${container}`]: typeof container === 'string'
    } as Record<string, boolean>;
  });
}
