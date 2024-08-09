import { Component } from '@angular/core';

@Component({
  selector: 'c-card-footer, [c-card-footer]',
  template: '<ng-content />',
  standalone: true,
  host: { class: 'card-footer' }
})
export class CardFooterComponent {}
