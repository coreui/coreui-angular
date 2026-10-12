import { inputBinding, signal, WritableSignal } from '@angular/core';
import { DirectiveFixture, TestBed } from '@angular/core/testing';
import { FormCheckInputDirective } from './form-check-input.directive';

describe('FormCheckInputDirective', () => {
  let indeterminate: WritableSignal<boolean>;
  let fixture: DirectiveFixture<FormCheckInputDirective>;
  let input: HTMLInputElement;

  beforeEach(() => {
    indeterminate = signal(false);
    fixture = TestBed.createDirective(FormCheckInputDirective, {
      bindings: [inputBinding('indeterminate', indeterminate)]
    });
    input = fixture.nativeElement as HTMLInputElement;
    input.checked = true;
    fixture.detectChanges();
  });

  it('should create an instance', () => {
    expect(fixture.directiveInstance).toBeTruthy();
  });

  it('should have css classes', () => {
    expect(input.classList.contains('form-check-input')).toBe(true);
  });

  it('should have indeterminate state', () => {
    indeterminate.set(true);
    fixture.detectChanges();
    expect(input.checked).toBe(false);
    expect(input.indeterminate).toBe(true);
  });
});
