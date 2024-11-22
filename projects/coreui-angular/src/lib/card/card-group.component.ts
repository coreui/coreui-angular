import { Component } from '@angular/core';

@Component({
  selector: 'c-card-group, [c-card-group]',
  template: '<ng-content />',
  host: { class: 'card-group' }
})
export class CardGroupComponent {}
