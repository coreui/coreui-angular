import { Component } from '@angular/core';

@Component({
  selector: 'c-nav-title',
  template: '<ng-content />',
  styleUrls: ['./nav-title.component.scss'],
  host: { class: 'nav-title' }
})
export class NavTitleComponent {}
