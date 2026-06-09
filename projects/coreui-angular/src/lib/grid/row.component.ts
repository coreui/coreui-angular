import { Component, ChangeDetectionStrategy } from '@angular/core';

import { RowDirective } from './row.directive';

@Component({
  selector: 'c-row',
  changeDetection: ChangeDetectionStrategy.Eager,
  template: '<ng-content />'
})
export class RowComponent extends RowDirective {}
