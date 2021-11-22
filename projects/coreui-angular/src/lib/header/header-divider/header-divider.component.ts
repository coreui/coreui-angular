import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'c-header-divider, [cHeaderDivider]',
  template: ``
})
export class HeaderDividerComponent {

  @HostBinding('class.header-divider') headerDividerClass = true;

}
