import { TestBed } from '@angular/core/testing';
import { DropdownItemPlainDirective } from './dropdown-item-plain.directive';

describe('DropdownItemPlainDirective', () => {
  it('should create an instance', () => {
    const fixture = TestBed.createDirective(DropdownItemPlainDirective, { tagName: 'span' });
    expect(fixture.directiveInstance).toBeTruthy();
    expect(fixture.nativeElement.classList.contains('dropdown-item-text')).toBe(true);
  });
});
