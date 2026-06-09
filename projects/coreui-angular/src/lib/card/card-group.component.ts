import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'c-card-group, [c-card-group]',
  template: '<ng-content />',
  changeDetection: ChangeDetectionStrategy.Eager,
  host: { class: 'card-group' }
})
export class CardGroupComponent {}
