import { TestBed } from '@angular/core/testing';
import { AlertLinkDirective } from './alert-link.directive';

describe('AlertLinkDirective', () => {
  it('should create an instance', () => {
    const fixture = TestBed.createDirective(AlertLinkDirective, { tagName: 'a' });
    expect(fixture.directiveInstance).toBeTruthy();
    expect(fixture.nativeElement.classList.contains('alert-link')).toBe(true);
  });
});
