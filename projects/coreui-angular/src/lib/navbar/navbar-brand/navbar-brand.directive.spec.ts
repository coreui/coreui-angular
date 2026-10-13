import { inputBinding, signal } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { NavbarBrandDirective } from './navbar-brand.directive';

describe('NavbarBrandDirective', () => {
  it('should create an instance', async () => {
    const fixture = TestBed.createDirective(NavbarBrandDirective, { tagName: 'a' });
    await fixture.whenStable();
    expect(fixture.directiveInstance).toBeTruthy();
    expect(fixture.nativeElement.classList.contains('navbar-brand')).toBe(true);
    expect(fixture.nativeElement.getAttribute('role')).toBe('button');
  });

  it('should bind role attribute', async () => {
    const role = signal('link');
    const fixture = TestBed.createDirective(NavbarBrandDirective, {
      tagName: 'a',
      bindings: [inputBinding('role', role)]
    });
    await fixture.whenStable();
    expect(fixture.nativeElement.getAttribute('role')).toBe('link');
  });
});
