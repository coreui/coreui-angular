import { Component } from '@angular/core';
import { PageItemDirective } from './page-item.directive';

@Component({
  selector: 'c-page-item',
  template: `<ng-content></ng-content>`,
  styleUrls: ['./page-item.component.scss']
})
export class PageItemComponent extends PageItemDirective { }

