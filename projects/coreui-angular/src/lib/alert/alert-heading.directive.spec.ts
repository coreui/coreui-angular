import { TestBed } from '@angular/core/testing';
import { AlertHeadingDirective } from './alert-heading.directive';

describe('AlertHeadingDirective', () => {
  it('should create an instance', () => {
    const fixture = TestBed.createDirective(AlertHeadingDirective, { tagName: 'h4' });
    expect(fixture.directiveInstance).toBeTruthy();
    expect(fixture.nativeElement.classList.contains('alert-heading')).toBe(true);
  });
});
