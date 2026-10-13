import { inputBinding, signal } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { PageLinkDirective } from './page-link.directive';

describe('PageLinkDirective', () => {
  it('should create an instance', () => {
    const fixture = TestBed.createDirective(PageLinkDirective, { tagName: 'a' });
    expect(fixture.directiveInstance).toBeTruthy();
  });

  it('should have css classes', async () => {
    const disabled = signal(false);
    const fixture = TestBed.createDirective(PageLinkDirective, {
      tagName: 'a',
      bindings: [inputBinding('disabled', disabled)]
    });
    await fixture.whenStable();
    expect(fixture.nativeElement.classList.contains('page-link')).toBe(true);
    expect(fixture.nativeElement.classList.contains('disabled')).toBe(false);
    disabled.set(true);
    await fixture.whenStable();
    expect(fixture.nativeElement.classList.contains('page-link')).toBe(true);
    expect(fixture.nativeElement.classList.contains('disabled')).toBe(true);
  });
});
