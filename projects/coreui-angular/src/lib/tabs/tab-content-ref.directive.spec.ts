import { TabContentRefDirective } from './tab-content-ref.directive';
import { TestBed } from '@angular/core/testing';
import { ChangeDetectorRef } from '@angular/core';

describe('TabContentRefDirective', () => {
  it('should create an instance', () => {
    TestBed.configureTestingModule({
      providers: [ChangeDetectorRef]
    });
    TestBed.runInInjectionContext(() => {
      const directive = new TabContentRefDirective();
      expect(directive).toBeTruthy();
    });
  });
});
