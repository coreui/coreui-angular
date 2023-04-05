import { Component, HostBinding, Input, Optional } from '@angular/core';
import { NgIf } from '@angular/common';

import { ButtonCloseDirective } from '../../button';
import { ToastComponent } from '../toast/toast.component';
import { ToastCloseDirective } from '../toast-close.directive';

@Component({
  selector: 'c-toast-header',
  templateUrl: './toast-header.component.html',
  exportAs: 'cToastHeader',
  standalone: true,
  imports: [ToastCloseDirective, ButtonCloseDirective, NgIf]
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
