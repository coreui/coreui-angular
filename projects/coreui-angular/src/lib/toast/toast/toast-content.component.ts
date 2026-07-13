import { Component } from '@angular/core';

@Component({
  selector: 'c-toast-content',
  template: `<ng-content />`,
  host: {
    class: 'toast-content'
  },
  styles: `
    .toast-content {
      min-height: 0;
    }
  `
})
export class ToastContentComponent {}
