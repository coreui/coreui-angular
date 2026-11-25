import { Component, Directive, inputBinding, signal, WritableSignal } from '@angular/core';
import { ComponentFixture, DirectiveFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { ButtonCloseDirective } from './button-close.directive';

@Component({
  selector: 'c-named-button-close',
  template: `
    <button cButtonClose aria-label="Fechar"></button>
    <button cButtonClose [attr.aria-label]="label()"></button>
    <button cButtonClose [aria-label]="label()"></button>
  `,
  imports: [ButtonCloseDirective]
})
class NamedButtonCloseComponent {
  readonly label = signal<string | null>('Fechar');
}

@Directive({
  selector: '[cComposedButtonClose]',
  hostDirectives: [ButtonCloseDirective],
  host: { 'aria-label': 'Fechar' }
})
class ComposedButtonCloseDirective {}

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

  it('should be named Close by default, before the first render', () => {
    const unrenderedFixture = TestBed.createDirective(ButtonCloseDirective, { tagName: 'button' });
    expect(unrenderedFixture.nativeElement.getAttribute('aria-label')).toBe('Close');
  });

  it('should keep the aria-label of a composing directive', async () => {
    const composedFixture = TestBed.createDirective(ComposedButtonCloseDirective, { tagName: 'button' });
    await composedFixture.whenStable();
    expect(composedFixture.nativeElement.classList.contains('btn-close')).toBe(true);
    expect(composedFixture.nativeElement.getAttribute('aria-label')).toBe('Fechar');
  });
});

describe('ButtonCloseDirective named by the page', () => {
  let fixture: ComponentFixture<NamedButtonCloseComponent>;

  const names = () =>
    fixture.debugElement
      .queryAll(By.directive(ButtonCloseDirective))
      .map(({ nativeElement }) => nativeElement.getAttribute('aria-label'));

  beforeEach(async () => {
    fixture = TestBed.createComponent(NamedButtonCloseComponent);
    await fixture.whenStable();
  });

  it('should keep the aria-label of the page', async () => {
    expect(names()).toEqual(['Fechar', 'Fechar', 'Fechar']);
    fixture.componentInstance.label.set('Cerrar');
    await fixture.whenStable();
    expect(names()).toEqual(['Fechar', 'Cerrar', 'Cerrar']);
  });

  it('should drop the default when the page binds null', async () => {
    fixture.componentInstance.label.set(null);
    await fixture.whenStable();
    expect(names()).toEqual(['Fechar', null, null]);
  });
});
