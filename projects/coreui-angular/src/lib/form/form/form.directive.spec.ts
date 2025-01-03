import { FormDirective } from './form.directive';
import { TestBed } from '@angular/core/testing';

describe('FormDirective', () => {
  it('should create an instance', () => {
    TestBed.runInInjectionContext(() => {
      const directive = new FormDirective();
      expect(directive).toBeTruthy();
    });
  });
});
