import { inputBinding, signal } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { NavbarBrandDirective } from './navbar-brand.directive';

describe('NavbarBrandDirective', () => {
  it('should create an instance', () => {
    const fixture = TestBed.createDirective(NavbarBrandDirective, { tagName: 'a' });
    fixture.detectChanges();
    expect(fixture.directiveInstance).toBeTruthy();
    expect(fixture.nativeElement.classList.contains('navbar-brand')).toBe(true);
    expect(fixture.nativeElement.getAttribute('role')).toBe('button');
  });

  it('should bind role attribute', () => {
    const role = signal('link');
    const fixture = TestBed.createDirective(NavbarBrandDirective, {
      tagName: 'a',
      bindings: [inputBinding('role', role)]
    });
    fixture.detectChanges();
    expect(fixture.nativeElement.getAttribute('role')).toBe('link');
  });
});
