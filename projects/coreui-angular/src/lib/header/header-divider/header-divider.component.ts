import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'c-header-divider, [cHeaderDivider]',
  template: ``,
  standalone: true
})
export class HeaderDividerComponent {

  @HostBinding('class.header-divider') headerDividerClass = true;

}
