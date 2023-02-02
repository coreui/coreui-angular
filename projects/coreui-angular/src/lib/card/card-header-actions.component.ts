import {Component, HostBinding} from '@angular/core';

@Component({
  selector: 'c-card-header-actions, [c-card-header-actions]',
  template: '<ng-content></ng-content>',
  standalone: true
})
export class CardHeaderActionsComponent {

  @HostBinding('class.card-header-actions') cardHeaderActions = true;

}
