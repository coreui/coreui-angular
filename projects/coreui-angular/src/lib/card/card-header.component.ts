import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'c-card-header, [c-card-header]',
  template: '<ng-content />',
  changeDetection: ChangeDetectionStrategy.Eager,
  host: { class: 'card-header' }
})
export class CardHeaderComponent {}
