import { Component, inputBinding, signal, WritableSignal } from '@angular/core';
import { DirectiveFixture, TestBed } from '@angular/core/testing';
import { FormCheckInputDirective } from './form-check-input.directive';

describe('FormCheckInputDirective', () => {
  let indeterminate: WritableSignal<boolean>;
  let fixture: DirectiveFixture<FormCheckInputDirective>;
  let input: HTMLInputElement;

  beforeEach(async () => {
    indeterminate = signal(false);
    fixture = TestBed.createDirective(FormCheckInputDirective, {
      bindings: [inputBinding('indeterminate', indeterminate)]
    });
    input = fixture.nativeElement as HTMLInputElement;
    input.checked = true;
    await fixture.whenStable();
  });

  it('should create an instance', () => {
    expect(fixture.directiveInstance).toBeTruthy();
  });

  it('should have css classes', () => {
    expect(input.classList.contains('form-check-input')).toBe(true);
  });

  it('should have indeterminate state', async () => {
    indeterminate.set(true);
    await fixture.whenStable();
    expect(input.checked).toBe(false);
    expect(input.indeterminate).toBe(true);
  });

  it.each(['checkbox', 'radio'] as const)('should set aria-invalid on a %s while invalid', async (type) => {
    const valid = signal<boolean | undefined>(false);
    const check = TestBed.createDirective(FormCheckInputDirective, {
      bindings: [inputBinding('type', signal(type)), inputBinding('valid', valid)]
    });
    await check.whenStable();
    expect(check.nativeElement.getAttribute('aria-invalid')).toBe('true');
    valid.set(true);
    await check.whenStable();
    expect(check.nativeElement.getAttribute('aria-invalid')).toBeNull();
  });

  it('should set aria-invalid on a radio with a static type', async () => {
    const host = TestBed.createComponent(TestRadioHostComponent);
    await host.whenStable();
    expect(host.nativeElement.querySelector('input').getAttribute('aria-invalid')).toBe('true');
  });

  it('should keep aria-invalid set in the template', async () => {
    const host = TestBed.createComponent(TestAriaInvalidHostComponent);
    await host.whenStable();
    const check: HTMLInputElement = host.nativeElement.querySelector('input');
    host.componentInstance.valid.set(false);
    await host.whenStable();
    expect(check.getAttribute('aria-invalid')).toBe('true');
    host.componentInstance.valid.set(true);
    await host.whenStable();
    expect(check.getAttribute('aria-invalid')).toBe('true');
  });
});

@Component({
  imports: [FormCheckInputDirective],
  template: '<input cFormCheckInput aria-invalid="true" [valid]="valid()" />'
})
class TestAriaInvalidHostComponent {
  readonly valid = signal<boolean | undefined>(undefined);
}

@Component({
  imports: [FormCheckInputDirective],
  template: '<input cFormCheckInput type="radio" [valid]="false" />'
})
class TestRadioHostComponent {}
