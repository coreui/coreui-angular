import { Component } from '@angular/core';

@Component({
  selector: 'c-card-body, [c-card-body]',
  template: '<ng-content />',
  host: { class: 'card-body' }
})
export class CardBodyComponent {}
