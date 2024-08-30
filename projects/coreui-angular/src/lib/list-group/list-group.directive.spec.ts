import { TestBed } from '@angular/core/testing';
import { ListGroupDirective } from './list-group.directive';

describe('ListGroupDirective', () => {
  it('should create an instance', () => {
    TestBed.runInInjectionContext(() => {
      const directive = new ListGroupDirective();
      expect(directive).toBeTruthy();
    });
  });
});
