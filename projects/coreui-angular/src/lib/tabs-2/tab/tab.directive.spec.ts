import { ElementRef } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { TabsService } from '../tabs.service';
import { TabDirective } from './tab.directive';

class MockElementRef extends ElementRef {}

describe('TabDirective', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TabsService, { provide: ElementRef, useClass: MockElementRef }]
    });
  });

  it('should create an instance', () => {
    TestBed.runInInjectionContext(() => {
      const directive = new TabDirective();
      expect(directive).toBeTruthy();
    });
  });
});
