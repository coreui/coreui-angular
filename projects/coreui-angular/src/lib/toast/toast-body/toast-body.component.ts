import { Component, HostBinding, inject } from '@angular/core';
import { ToastComponent } from '../toast/toast.component';

@Component({
  selector: 'c-toast-body',
  template: '<ng-content />',
  styleUrls: ['./toast-body.component.scss'],
  exportAs: 'cToastBody'
})
export class ToastBodyComponent {
  toast? = inject(ToastComponent, { optional: true });

  @HostBinding('class.toast-body') toastBodyClass = true;
}
