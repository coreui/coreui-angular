import { Component } from '@angular/core';

import { ColDirective } from './col.directive';

@Component({
  selector: 'c-col',
  template: '<ng-content></ng-content>',
  styleUrls: ['./col.component.scss'],
  standalone: true
})
export class ColComponent extends ColDirective {}
