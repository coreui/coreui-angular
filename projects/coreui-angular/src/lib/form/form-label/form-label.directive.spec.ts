import { FormLabelDirective } from './form-label.directive';
import { TestBed } from '@angular/core/testing';

describe('LabelDirective', () => {
  it('should create an instance', () => {
    TestBed.runInInjectionContext(() => {
      const directive = new FormLabelDirective();
      expect(directive).toBeTruthy();
    });
  });
});
