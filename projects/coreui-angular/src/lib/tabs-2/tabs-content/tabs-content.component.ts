import { Component } from '@angular/core';

@Component({
  exportAs: 'cTabsContent',
  selector: 'c-tabs-content',
  template: '<ng-content />',
  host: {
    class: 'tab-content'
  }
})
export class TabsContentComponent {}
