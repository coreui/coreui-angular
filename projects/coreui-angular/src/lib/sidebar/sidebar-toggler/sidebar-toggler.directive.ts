import { Directive, HostBinding, Input } from '@angular/core';
import { SidebarToggleDirective } from '../sidebar-toggle/sidebar-toggle.directive';

@Directive({
  selector: '[cSidebarToggler]',
  standalone: true,
  hostDirectives: [{ directive: SidebarToggleDirective, inputs: ['cSidebarToggle: cSidebarToggler', 'toggle'] }]
})
export class SidebarTogglerDirective {

  @HostBinding('attr.role')
  @Input() role = 'button';

  @HostBinding('class.sidebar-toggler') sidebarTogglerClass = true;

  @HostBinding('style')
  get getStyles(): any {
    return {
      appearance: 'button',
      'align-items': 'flex-start',
      cursor: 'pointer'
    };
  }

}
