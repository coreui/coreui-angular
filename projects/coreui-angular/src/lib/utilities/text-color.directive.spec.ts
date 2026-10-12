import { inputBinding } from '@angular/core';
import { DirectiveFixture, TestBed } from '@angular/core/testing';
import { TextColorDirective } from './text-color.directive';

describe('TextColorDirective', () => {
  let fixture: DirectiveFixture<TextColorDirective>;

  beforeEach(() => {
    fixture = TestBed.createDirective(TextColorDirective, {
      tagName: 'div',
      bindings: [inputBinding('cTextColor', () => 'primary')]
    });
    fixture.detectChanges();
  });

  it('should create an instance', () => {
    expect(fixture.directiveInstance).toBeTruthy();
  });

  it('should have css classes', () => {
    expect(fixture.nativeElement.classList.contains('text-primary')).toBe(true);
  });
});
