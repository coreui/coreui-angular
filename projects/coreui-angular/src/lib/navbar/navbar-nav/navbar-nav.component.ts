import { booleanAttribute, Component, computed, input } from '@angular/core';

@Component({
  selector: 'c-navbar-nav',
  template: '<ng-content />',
  host: { '[class]': 'hostClasses()' }
})
export class NavbarNavComponent {
  /**
   * Enable vertical scrolling of a collapsed navbar toggleable contents.
   * @type boolean
   */
  readonly scroll = input(false, { transform: booleanAttribute });

  readonly hostClasses = computed(() => {
    return {
      'navbar-nav': true,
      'navbar-nav-scroll': this.scroll()
    } as Record<string, boolean>;
  });
}
