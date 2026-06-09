import { Component, ChangeDetectionStrategy } from '@angular/core';

import { ColDirective } from './col.directive';

@Component({
  selector: 'c-col',
  template: '<ng-content />',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./col.component.scss']
})
export class ColComponent extends ColDirective {}
