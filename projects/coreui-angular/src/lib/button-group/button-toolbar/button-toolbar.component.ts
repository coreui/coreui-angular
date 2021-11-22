import { Component, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'c-button-toolbar',
  template: `<ng-content></ng-content>`,
})
export class ButtonToolbarComponent {
  /**
   * Default role attr for ButtonToolbar. [docs]
   * @type string
   * @default 'toolbar'
   */
  @HostBinding('attr.role')
  @Input() role = 'toolbar';

  @HostBinding('class')
  get hostClasses(): any {
    return {
      'btn-toolbar': true,
    };
  }

  constructor() { }

}
