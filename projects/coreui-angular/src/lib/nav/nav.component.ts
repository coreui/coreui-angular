import { Component, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'c-nav',
  template: '<ng-content />',
  styleUrls: ['./nav.component.scss'],
  standalone: true,
  host: { class: 'nav' }
})
export class NavComponent {
  /**
   * Specify a layout type for component.
   * @type {'fill' | 'justified'}
   */
  @Input() layout?: 'fill' | 'justified';
  /**
   * Set the nav variant to tabs or pills.
   * @type 'tabs' | 'pills' | 'underline' | 'underline-border'
   */
  @Input() variant?: '' | 'tabs' | 'pills' | 'underline' | 'underline-border';

  @HostBinding('class')
  get hostClasses(): any {
    return {
      nav: true,
      [`nav-${this.layout}`]: !!this.layout,
      [`nav-${this.variant}`]: !!this.variant
    };
  }
}
