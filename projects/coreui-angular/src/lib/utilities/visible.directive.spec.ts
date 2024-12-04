import { VisibleDirective } from './visible.directive';
import { TestBed } from '@angular/core/testing';
import { TemplateRef, ViewContainerRef } from '@angular/core';

describe('VisibleDirective', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TemplateRef, ViewContainerRef]
    });
  });
  it('should create an instance', () => {
    TestBed.runInInjectionContext(() => {
      const directive = new VisibleDirective();
      expect(directive).toBeTruthy();
    });
  });
});
