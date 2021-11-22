import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'c-header-text, [cHeaderText]',
  template: `<ng-content></ng-content>`,
})
export class HeaderTextComponent {
  @HostBinding('class.header-text') headerTextClass = true;
}
