import { TabContentRefDirective } from './tab-content-ref.directive';
import { TabService } from './tab.service';
import { ChangeDetectorRef } from '@angular/core';

describe('TabContentRefDirective', () => {
  let changeDetectorRef: ChangeDetectorRef;
  it('should create an instance', () => {
    const tabService = new TabService();
    const directive = new TabContentRefDirective(changeDetectorRef, tabService);
    expect(directive).toBeTruthy();
  });
});
