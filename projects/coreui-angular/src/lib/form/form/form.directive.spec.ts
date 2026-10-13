import { inputBinding, signal, WritableSignal } from '@angular/core';
import { DirectiveFixture, TestBed } from '@angular/core/testing';
import { FormDirective } from './form.directive';

describe('FormDirective', () => {
  let validated: WritableSignal<boolean>;
  let fixture: DirectiveFixture<FormDirective>;

  beforeEach(async () => {
    validated = signal(false);
    fixture = TestBed.createDirective(FormDirective, {
      bindings: [inputBinding('validated', validated)]
    });
    await fixture.whenStable();
  });

  it('should create an instance', () => {
    expect(fixture.directiveInstance).toBeTruthy();
  });

  it('should have css classes', async () => {
    expect(fixture.nativeElement.classList.contains('was-validated')).toBe(false);
    validated.set(true);
    await fixture.whenStable();
    expect(fixture.nativeElement.classList.contains('was-validated')).toBe(true);
    validated.set(false);
    await fixture.whenStable();
    expect(fixture.nativeElement.classList.contains('was-validated')).toBe(false);
  });
});
