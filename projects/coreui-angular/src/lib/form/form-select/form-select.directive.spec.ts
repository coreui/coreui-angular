import { FormSelectDirective } from './form-select.directive';
import { TestBed } from '@angular/core/testing';

describe('FormSelectDirective', () => {
  it('should create an instance', () => {
    TestBed.runInInjectionContext(() => {
      const directive = new FormSelectDirective();
      expect(directive).toBeTruthy();
    });
  });
});
