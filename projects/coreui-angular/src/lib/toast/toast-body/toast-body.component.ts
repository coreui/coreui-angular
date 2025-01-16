import { Component, inject } from '@angular/core';
import { ToastComponent } from '../toast/toast.component';

@Component({
  selector: 'c-toast-body',
  template: '<ng-content />',
  styleUrls: ['./toast-body.component.scss'],
  exportAs: 'cToastBody',
  host: {
    class: 'toast-body',
  }
})
export class ToastBodyComponent {
  readonly toast? = inject(ToastComponent, { optional: true });

}
