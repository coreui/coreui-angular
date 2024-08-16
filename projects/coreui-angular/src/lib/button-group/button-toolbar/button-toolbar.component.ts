import { Component, input, InputSignal } from '@angular/core';

@Component({
  selector: 'c-button-toolbar',
  template: '<ng-content />',
  standalone: true,
  host: { class: 'btn-toolbar', '[attr.role]': 'role()' }
})
export class ButtonToolbarComponent {
  /**
   * Default role attr for ButtonToolbar. [docs]
   * @type InputSignal<string>
   * @default 'toolbar'
   */
  role: InputSignal<string> = input('toolbar');
}
