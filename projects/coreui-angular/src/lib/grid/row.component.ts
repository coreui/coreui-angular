import { Component } from '@angular/core';

import { RowDirective } from './row.directive';

@Component({
  selector: 'c-row',
  template: '<ng-content />',
  standalone: true
})
export class RowComponent extends RowDirective {}
