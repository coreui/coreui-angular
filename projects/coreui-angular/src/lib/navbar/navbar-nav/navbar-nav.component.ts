import { Component, HostBinding, Input } from '@angular/core';
import { BooleanInput, coerceBooleanProperty } from '@angular/cdk/coercion';

@Component({
  selector: 'c-navbar-nav',
  template: '<ng-content></ng-content>',
  standalone: true
})
export class NavbarNavComponent {

  static ngAcceptInputType_scroll: BooleanInput;

  /**
   * Enable vertical scrolling of a collapsed navbar toggleable contents.
   * @type boolean
   */
  @Input()
  set scroll(value: boolean) {
    this._scroll = coerceBooleanProperty(value);
  };
  get scroll() {
    return this._scroll;
  }
  private _scroll = false;

  @HostBinding('class')
  get hostClasses(): any {
    return {
      'navbar-nav': true,
      'navbar-nav-scroll': this.scroll
    };
  }

}
