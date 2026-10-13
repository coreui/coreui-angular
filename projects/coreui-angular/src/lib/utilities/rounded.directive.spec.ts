import { inputBinding, signal, WritableSignal } from '@angular/core';
import { DirectiveFixture, TestBed } from '@angular/core/testing';
import { RoundedDirective } from './rounded.directive';
import { Rounded } from './rounded.type';

describe('RoundedDirective', () => {
  let rounded: WritableSignal<Rounded>;
  let fixture: DirectiveFixture<RoundedDirective>;

  beforeEach(async () => {
    rounded = signal<Rounded>(1);
    fixture = TestBed.createDirective(RoundedDirective, {
      tagName: 'div',
      bindings: [inputBinding('cRounded', rounded)]
    });
    await fixture.whenStable();
  });

  it('should create an instance', () => {
    expect(fixture.directiveInstance).toBeTruthy();
  });

  it('should have css classes', async () => {
    const classList = fixture.nativeElement.classList;
    expect(classList.contains('rounded-1')).toBe(true);
    rounded.set(true);
    await fixture.whenStable();
    expect(classList.contains('rounded')).toBe(true);
    rounded.set({
      top: false,
      end: true,
      circle: true,
      pill: true,
      size: 3
    });
    await fixture.whenStable();
    expect(classList.contains('rounded-3')).toBe(true);
    expect(classList.contains('rounded-end')).toBe(true);
    expect(classList.contains('rounded-circle')).toBe(true);
    expect(classList.contains('rounded-pill')).toBe(true);
    expect(classList.length).toBe(4);
    rounded.set({});
    await fixture.whenStable();
    expect(classList.length).toBe(0);
    rounded.set(1234n as unknown as Rounded);
    await fixture.whenStable();
    expect(classList.length).toBe(0);
  });
});
