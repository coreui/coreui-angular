import { booleanAttribute, Component, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'c-navbar-nav',
  template: '<ng-content />',
  standalone: true,
  host: { class: 'navbar-nav' }
})
export class NavbarNavComponent {
  /**
   * Enable vertical scrolling of a collapsed navbar toggleable contents.
   * @type boolean
   */
  @Input({ transform: booleanAttribute }) scroll: string | boolean = false;

  @HostBinding('class')
  get hostClasses(): any {
    return {
      'navbar-nav': true,
      'navbar-nav-scroll': this.scroll
    };
  }
}
