import { inputBinding, signal, WritableSignal } from '@angular/core';
import { DirectiveFixture, TestBed } from '@angular/core/testing';
import { BorderDirective } from './border.directive';
import { Border } from './border.type';

describe('BorderDirective', () => {
  let border: WritableSignal<Border>;
  let fixture: DirectiveFixture<BorderDirective>;

  beforeEach(() => {
    border = signal<Border>(1);
    fixture = TestBed.createDirective(BorderDirective, {
      tagName: 'div',
      bindings: [inputBinding('cBorder', border)]
    });
    fixture.detectChanges();
  });

  it('should create an instance', () => {
    expect(fixture.directiveInstance).toBeTruthy();
  });

  it('should have css classes', () => {
    const classList = fixture.nativeElement.classList;
    expect(classList.contains('border-1')).toBe(true);
    border.set(true);
    fixture.detectChanges();
    expect(classList.contains('border')).toBe(true);
    border.set({
      top: 1,
      end: true,
      color: 'primary',
      start: { color: 'success', width: 2 }
    });
    fixture.detectChanges();
    expect(classList.contains('border-top-1')).toBe(true);
    expect(classList.contains('border-end')).toBe(true);
    expect(classList.contains('border-color-primary')).toBe(true);
    expect(classList.contains('border-start-2')).toBe(true);
    expect(classList.contains('border-start-success')).toBe(true);
    expect(classList.length).toBe(5);
    border.set({});
    fixture.detectChanges();
    expect(classList.length).toBe(0);
    border.set(1234n as unknown as Border);
    fixture.detectChanges();
    expect(classList.length).toBe(0);
  });
});
