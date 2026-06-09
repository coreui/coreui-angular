import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'c-card-body, [c-card-body]',
  template: '<ng-content />',
  changeDetection: ChangeDetectionStrategy.Eager,
  host: { class: 'card-body' }
})
export class CardBodyComponent {}
