import { Component, HostBinding, Input, Optional } from '@angular/core';
import { ToastComponent } from '../toast/toast.component';

@Component({
  selector: 'c-toast-header',
  templateUrl: './toast-header.component.html',
  styleUrls: ['./toast-header.component.scss'],
  exportAs: 'cToastHeader'
})
export class ToastHeaderComponent {

  /**
   * Add close button to a toast header
   * @type boolean
   */
  @Input() closeButton = true;

  @HostBinding('class.toast-header') toastHeaderClass = true;

  constructor(
    @Optional() public toast?: ToastComponent
  ) { }

}
