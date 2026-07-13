import { Component } from '@angular/core';

@Component({
  selector: 'c-card-header, [c-card-header]',
  template: '<ng-content />',
  host: { class: 'card-header' }
})
export class CardHeaderComponent {}
