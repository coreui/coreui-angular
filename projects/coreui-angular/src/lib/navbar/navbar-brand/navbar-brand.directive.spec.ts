import { NavbarBrandDirective } from './navbar-brand.directive';
import { TestBed } from '@angular/core/testing';

describe('NavbarBrandDirective', () => {
  it('should create an instance', () => {
    TestBed.runInInjectionContext(() => {
      const directive = new NavbarBrandDirective();
      expect(directive).toBeTruthy();
    });
  });
});
