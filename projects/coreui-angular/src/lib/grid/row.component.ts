import { Component } from '@angular/core';

import { RowDirective } from './row.directive';

@Component({
  selector: 'c-row',
  template: '<ng-content />'
})
export class RowComponent extends RowDirective {}
