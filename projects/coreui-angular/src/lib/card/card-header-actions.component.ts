import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'c-card-header-actions, [c-card-header-actions]',
  template: '<ng-content />',
  changeDetection: ChangeDetectionStrategy.Eager,
  host: { class: 'card-header-actions' }
})
export class CardHeaderActionsComponent {}
