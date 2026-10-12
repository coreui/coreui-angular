import { inputBinding } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { RowDirective } from './row.directive';

describe('RowDirective', () => {
  it('should create an instance', () => {
    const fixture = TestBed.createDirective(RowDirective, { tagName: 'div' });
    expect(fixture.directiveInstance).toBeTruthy();
  });

  it('should have css class', () => {
    const fixture = TestBed.createDirective(RowDirective, {
      tagName: 'div',
      bindings: [inputBinding('xs', () => 'auto'), inputBinding('md', () => 7)]
    });
    fixture.detectChanges();
    expect(fixture.nativeElement.classList.contains('row')).toBe(true);
    expect(fixture.nativeElement.classList.contains('row-cols-auto')).toBe(true);
    expect(fixture.nativeElement.classList.contains('row-cols-md-7')).toBe(true);
  });
});
