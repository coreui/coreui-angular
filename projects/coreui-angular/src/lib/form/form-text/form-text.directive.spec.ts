import { TestBed } from '@angular/core/testing';
import { FormTextDirective } from './form-text.directive';

describe('FormTextDirective', () => {
  it('should create an instance', () => {
    const fixture = TestBed.createDirective(FormTextDirective, { tagName: 'div' });
    expect(fixture.directiveInstance).toBeTruthy();
    expect(fixture.nativeElement.classList.contains('form-text')).toBe(true);
  });
});
