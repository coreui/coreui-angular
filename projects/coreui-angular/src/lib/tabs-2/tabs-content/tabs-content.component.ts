import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  exportAs: 'cTabsContent',
  selector: 'c-tabs-content',
  template: '<ng-content />',
  changeDetection: ChangeDetectionStrategy.Eager,
  host: {
    class: 'tab-content'
  }
})
export class TabsContentComponent {}
