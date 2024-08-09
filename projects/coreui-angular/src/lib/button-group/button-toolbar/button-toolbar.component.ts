import { Component, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'c-button-toolbar',
  template: '<ng-content />',
  standalone: true,
  host: { class: 'btn-toolbar' }
})
export class ButtonToolbarComponent {
  /**
   * Default role attr for ButtonToolbar. [docs]
   * @type string
   * @default 'toolbar'
   */
  @HostBinding('attr.role')
  @Input()
  role = 'toolbar';
}
