import { inputBinding, signal, WritableSignal } from '@angular/core';
import { DirectiveFixture, TestBed } from '@angular/core/testing';
import { ButtonCloseDirective } from './button-close.directive';

describe('ButtonCloseDirective', () => {
  let disabled: WritableSignal<boolean>;
  let tabindex: WritableSignal<number | undefined>;
  let fixture: DirectiveFixture<ButtonCloseDirective>;

  beforeEach(async () => {
    disabled = signal(false);
    tabindex = signal<number | undefined>(undefined);
    fixture = TestBed.createDirective(ButtonCloseDirective, {
      tagName: 'button',
      bindings: [inputBinding('disabled', disabled), inputBinding('tabindex', tabindex)]
    });
    await fixture.whenStable();
  });

  it('should create an instance', () => {
    expect(fixture.directiveInstance).toBeTruthy();
  });

  it('should have css classes', () => {
    expect(fixture.nativeElement.classList.contains('btn')).toBe(true);
    expect(fixture.nativeElement.classList.contains('btn-close')).toBe(true);
  });

  it('should not set tabindex when not given', async () => {
    const unboundFixture = TestBed.createDirective(ButtonCloseDirective, { tagName: 'button' });
    await unboundFixture.whenStable();
    expect(unboundFixture.nativeElement.getAttribute('tabindex')).toBeNull();
  });

  it('should not set tabindex when bound to undefined', () => {
    expect(fixture.nativeElement.getAttribute('tabindex')).toBeNull();
  });

  it('should pass tabindex to the host', async () => {
    tabindex.set(2);
    await fixture.whenStable();
    expect(fixture.nativeElement.getAttribute('tabindex')).toBe('2');
  });

  it('should set tabindex to -1 when disabled', async () => {
    tabindex.set(2);
    disabled.set(true);
    await fixture.whenStable();
    expect(fixture.nativeElement.getAttribute('tabindex')).toBe('-1');
  });
});
