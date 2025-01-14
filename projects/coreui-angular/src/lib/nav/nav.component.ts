import { Component, computed, input } from '@angular/core';

@Component({
  selector: 'c-nav',
  template: '<ng-content />',
  styleUrls: ['./nav.component.scss'],
  host: { class: 'nav', '[class]': 'hostClasses()' }
})
export class NavComponent {
  /**
   * Specify a layout type for component.
   * @default undefined
   */
  readonly layout = input<'fill' | 'justified'>();

  /**
   * Set the nav variant to tabs or pills.
   * @default undefined
   */
  readonly variant = input<'tabs' | 'pills' | 'underline' | 'underline-border' | ''>();

  readonly hostClasses = computed(() => {
    const layout = this.layout();
    const variant = this.variant();
    return {
      nav: true,
      [`nav-${layout}`]: !!layout,
      [`nav-${variant}`]: !!variant
    };
  });
}
