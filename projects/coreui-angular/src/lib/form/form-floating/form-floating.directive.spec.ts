import { TestBed } from '@angular/core/testing';
import { FormFloatingDirective } from './form-floating.directive';

describe('FormFloatingDirective', () => {
  it('should create an instance', () => {
    TestBed.runInInjectionContext(() => {
      const directive = new FormFloatingDirective();
      expect(directive).toBeTruthy();
    });
  });
});
