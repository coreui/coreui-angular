import { TestBed } from '@angular/core/testing';
import { DropdownHeaderDirective } from './dropdown-header.directive';

describe('DropdownHeaderDirective', () => {
  it('should create an instance', () => {
    const fixture = TestBed.createDirective(DropdownHeaderDirective, { tagName: 'h6' });
    expect(fixture.directiveInstance).toBeTruthy();
    expect(fixture.nativeElement.classList.contains('dropdown-header')).toBe(true);
  });
});
