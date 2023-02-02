import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'c-header-text, [cHeaderText]',
  template: `<ng-content></ng-content>`,
  standalone: true
})
export class HeaderTextComponent {
  @HostBinding('class.header-text') headerTextClass = true;
}
