import { TestBed } from '@angular/core/testing';
import { PageLinkDirective } from './page-link.directive';

describe('PageLinkDirective', () => {
  it('should create an instance', () => {
    TestBed.runInInjectionContext(() => {
      const directive = new PageLinkDirective();
      expect(directive).toBeTruthy();
    });
  });
});
