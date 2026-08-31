import { Component, computed, input } from '@angular/core';

@Component({
  selector: 'c-nav',
  template: '<ng-content />',
  styleUrls: ['./nav.component.scss'],
  host: { class: 'nav', '[class]': 'hostClasses()', '[attr.role]': 'role()' }
})
export class NavComponent {
  /**
   * Specify a layout type for component.
   * @default undefined
   */
  readonly layout = input<'fill' | 'justified'>();

  /**
   * Default role for nav.
   * @returns string
   * @default 'navigation'
   */
  readonly role = input('navigation');

  /**
   * Set the nav variant to tabs or pills.
   * @default undefined
   */
  readonly variant = input<'enclosed' | 'enclosed-pills' | 'pills' | 'tabs' | 'underline' | 'underline-border'>();

  readonly hostClasses = computed(() => {
    const layout = this.layout();
    const variant = this.variant();
    return {
      nav: true,
      [`nav-${layout}`]: !!layout,
      'nav-enclosed': variant === 'enclosed' || variant === 'enclosed-pills',
      [`nav-${variant}`]: !!variant
    } as Record<string, boolean>;
  });
}
