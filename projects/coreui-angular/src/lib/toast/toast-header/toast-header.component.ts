import { Component, HostBinding, inject, Input } from '@angular/core';

import { ButtonCloseDirective } from '../../button';
import { ToastComponent } from '../toast/toast.component';
import { ToastCloseDirective } from '../toast-close.directive';

@Component({
  selector: 'c-toast-header',
  templateUrl: './toast-header.component.html',
  exportAs: 'cToastHeader',
  imports: [ToastCloseDirective, ButtonCloseDirective]
})
export class ToastHeaderComponent {
  toast? = inject(ToastComponent, { optional: true });

  /**
   * Add close button to a toast header
   * @type boolean
   */
  @Input() closeButton = true;

  @HostBinding('class.toast-header') toastHeaderClass = true;
}
