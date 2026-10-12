import { TestBed } from '@angular/core/testing';
import { DropdownDividerDirective } from './dropdown-divider.directive';

describe('DropdownDividerDirective', () => {
  it('should create an instance', () => {
    const fixture = TestBed.createDirective(DropdownDividerDirective, { tagName: 'hr' });
    expect(fixture.directiveInstance).toBeTruthy();
    expect(fixture.nativeElement.classList.contains('dropdown-divider')).toBe(true);
  });
});
