import { inputBinding } from '@angular/core';
import { DirectiveFixture, TestBed } from '@angular/core/testing';
import { TextBgColorDirective } from './text-bg-color.directive';

describe('TextBgColorDirective', () => {
  let fixture: DirectiveFixture<TextBgColorDirective>;

  beforeEach(async () => {
    fixture = TestBed.createDirective(TextBgColorDirective, {
      tagName: 'div',
      bindings: [inputBinding('cTextBgColor', () => 'primary')]
    });
    await fixture.whenStable();
  });

  it('should create an instance', () => {
    expect(fixture.directiveInstance).toBeTruthy();
  });

  it('should have css classes', () => {
    expect(fixture.nativeElement.classList.contains('text-bg-primary')).toBe(true);
  });
});
