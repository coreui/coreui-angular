import { Component } from '@angular/core';

@Component({
  selector: 'c-card-body, [c-card-body]',
  template: '<ng-content />',
  standalone: true,
  host: { class: 'card-body' }
})
export class CardBodyComponent {}
