import { Component, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'c-button-group',
  template: `<ng-content></ng-content>`,
})
export class ButtonGroupComponent {

  /**
   * Size the component small or large.
   * @type { 'sm' | 'lg' }
   */
  @Input() size?: 'sm' | 'lg';
  /**
   * Create a set of buttons that appear vertically stacked rather than horizontally. Split button dropdowns are not supported here.
   * @type boolean
   */
  @Input() vertical?: boolean;
  /**
   * Default role attr for ButtonGroup. [docs]
   * @type string
   * @default 'group'
   */
  @HostBinding('attr.role')
  @Input() role = 'group';

  @HostBinding('class')
  get hostClasses(): any {
    return {
      'btn-group': !this.vertical,
      'btn-group-vertical': this.vertical,
      [`btn-group-${this.size}`]: !!this.size,
    };
  }


  constructor() { }

}
