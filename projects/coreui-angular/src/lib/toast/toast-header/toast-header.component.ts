import { Component, inject, input, signal } from '@angular/core';

import { ButtonCloseDirective } from '../../button';
import { ToastComponent } from '../toast/toast.component';
import { ToastCloseDirective } from '../toast-close.directive';

@Component({
  selector: 'c-toast-header',
  templateUrl: './toast-header.component.html',
  exportAs: 'cToastHeader',
  imports: [ToastCloseDirective, ButtonCloseDirective],
  host: {
    class: 'toast-header'
  }
})
export class ToastHeaderComponent {
  readonly #toast = inject(ToastComponent, { optional: true });

  readonly toast = signal(this.#toast ?? undefined);

  /**
   * Add close button to a toast header
   * @return boolean
   */
  readonly closeButton = input(true);
}
