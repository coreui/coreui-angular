import { AccordionButtonDirective } from './accordion-button.directive';
import { TestBed } from '@angular/core/testing';

describe('AccordionButtonDirective', () => {
  it('should create an instance', () => {
    TestBed.runInInjectionContext(() => {
      const directive = new AccordionButtonDirective();
      expect(directive).toBeTruthy();
    });
  });
});
