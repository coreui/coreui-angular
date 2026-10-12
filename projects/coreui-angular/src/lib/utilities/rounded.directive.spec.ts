import { inputBinding, signal, WritableSignal } from '@angular/core';
import { DirectiveFixture, TestBed } from '@angular/core/testing';
import { RoundedDirective } from './rounded.directive';
import { Rounded } from './rounded.type';

describe('RoundedDirective', () => {
  let rounded: WritableSignal<Rounded>;
  let fixture: DirectiveFixture<RoundedDirective>;

  beforeEach(() => {
    rounded = signal<Rounded>(1);
    fixture = TestBed.createDirective(RoundedDirective, {
      tagName: 'div',
      bindings: [inputBinding('cRounded', rounded)]
    });
    fixture.detectChanges();
  });

  it('should create an instance', () => {
    expect(fixture.directiveInstance).toBeTruthy();
  });

  it('should have css classes', () => {
    const classList = fixture.nativeElement.classList;
    expect(classList.contains('rounded-1')).toBe(true);
    rounded.set(true);
    fixture.detectChanges();
    expect(classList.contains('rounded')).toBe(true);
    rounded.set({
      top: false,
      end: true,
      circle: true,
      pill: true,
      size: 3
    });
    fixture.detectChanges();
    expect(classList.contains('rounded-3')).toBe(true);
    expect(classList.contains('rounded-end')).toBe(true);
    expect(classList.contains('rounded-circle')).toBe(true);
    expect(classList.contains('rounded-pill')).toBe(true);
    expect(classList.length).toBe(4);
    rounded.set({});
    fixture.detectChanges();
    expect(classList.length).toBe(0);
    rounded.set(1234n as unknown as Rounded);
    fixture.detectChanges();
    expect(classList.length).toBe(0);
  });
});
