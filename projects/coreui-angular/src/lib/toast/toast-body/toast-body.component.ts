import { Component, HostBinding, Optional } from '@angular/core';
import { ToastComponent } from '../toast/toast.component';

@Component({
  selector: 'c-toast-body',
  template: '<ng-content></ng-content>',
  styleUrls: ['./toast-body.component.scss'],
  exportAs: 'cToastBody'
})
export class ToastBodyComponent {

  @HostBinding('class.toast-body') toastBodyClass = true;

  constructor(
    @Optional() public toast?: ToastComponent
  ) { }

}
