import { Component } from '@angular/core';

@Component({
  exportAs: 'cTabsContent',
  selector: 'c-tabs-content',
  standalone: true,
  template: '<ng-content />',
  host: {
    class: 'tab-content'
  }
})
export class TabsContentComponent {}
