import { Component } from '@angular/core';

import { RowDirective } from './row.directive';

@Component({
  selector: 'c-row',
  template: '<ng-content></ng-content>',
  styleUrls: ['./row.component.scss'],
  standalone: true
})
export class RowComponent extends RowDirective {}
