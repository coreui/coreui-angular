import { Component } from '@angular/core';

@Component({
  selector: 'c-tabs-content',
  standalone: true,
  template: '<ng-content />',
  host: {
    class: 'tab-content'
  }
})
export class TabsContentComponent {}
