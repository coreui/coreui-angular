import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'c-card-footer, [c-card-footer]',
  template: '<ng-content />',
  changeDetection: ChangeDetectionStrategy.Eager,
  host: { class: 'card-footer' }
})
export class CardFooterComponent {}
