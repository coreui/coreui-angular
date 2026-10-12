import { TestBed } from '@angular/core/testing';
import { InputGroupTextDirective } from './input-group-text.directive';

describe('InputGroupTextDirective', () => {
  it('should create an instance', () => {
    const fixture = TestBed.createDirective(InputGroupTextDirective, { tagName: 'span' });
    expect(fixture.directiveInstance).toBeTruthy();
    expect(fixture.nativeElement.classList.contains('input-group-text')).toBe(true);
  });
});
