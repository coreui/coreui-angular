import { TestBed } from '@angular/core/testing';
import { TableColorDirective } from './table-color.directive';

describe('TableColorDirective', () => {
  it('should create an instance', () => {
    TestBed.runInInjectionContext(() => {
      const directive = new TableColorDirective();
      expect(directive).toBeTruthy();
    });
  });
});
