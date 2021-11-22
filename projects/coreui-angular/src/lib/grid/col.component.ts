import { Component } from '@angular/core';

import { ColDirective } from './col.directive';

@Component({
  selector: 'c-col',
  template: '<ng-content></ng-content>',
  styleUrls: ['./col.component.scss'],
})
export class ColComponent extends ColDirective {}
