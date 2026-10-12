import { inputBinding, outputBinding, signal, twoWayBinding, WritableSignal } from '@angular/core';
import { DirectiveFixture, TestBed } from '@angular/core/testing';
import { CollapseDirective } from './collapse.directive';

describe('CollapseDirective', () => {
  let horizontal: WritableSignal<boolean>;
  let visible: WritableSignal<boolean>;
  let collapseChange: string[];
  let fixture: DirectiveFixture<CollapseDirective>;

  beforeEach(() => {
    horizontal = signal(false);
    visible = signal(false);
    collapseChange = [];
    fixture = TestBed.createDirective(CollapseDirective, {
      tagName: 'div',
      bindings: [
        inputBinding('horizontal', horizontal),
        twoWayBinding('visible', visible),
        inputBinding('animate', () => false),
        outputBinding<string>('collapseChange', (state) => collapseChange.push(state))
      ]
    });
    fixture.detectChanges();
  });

  it('should create an instance', () => {
    expect(fixture.directiveInstance).toBeTruthy();
  });

  it('should have css classes', () => {
    const element = fixture.nativeElement as HTMLElement;
    expect(element.classList.contains('collapse-horizontal')).toBe(false);
    horizontal.set(true);
    visible.set(true);
    fixture.detectChanges();
    expect(element.classList.contains('collapse-horizontal')).toBe(true);
    expect(element.style.display).toBe('');
    horizontal.set(false);
    visible.set(false);
    fixture.detectChanges();
    expect(element.classList.contains('collapse-horizontal')).toBe(false);
  });

  it('should write visible back on toggle without animation', () => {
    fixture.directiveInstance.toggle();
    fixture.detectChanges();
    expect(visible()).toBe(true);
    expect(fixture.nativeElement.classList.contains('show')).toBe(true);
    fixture.directiveInstance.toggle();
    fixture.detectChanges();
    expect(visible()).toBe(false);
    expect(fixture.nativeElement.classList.contains('show')).toBe(false);
  });

  it('should emit collapseChange on toggle without animation', () => {
    fixture.directiveInstance.toggle();
    fixture.detectChanges();
    fixture.directiveInstance.toggle();
    fixture.detectChanges();
    expect(collapseChange).toEqual(['open', 'collapsed']);
  });

  it('should emit collapseChange without animation', () => {
    expect(collapseChange).toEqual([]);
    visible.set(true);
    fixture.detectChanges();
    visible.set(false);
    fixture.detectChanges();
    expect(collapseChange).toEqual(['open', 'collapsed']);
  });

  it('should not emit on the first render', () => {
    const emitted: boolean[] = [];
    const states: string[] = [];
    const openFixture = TestBed.createDirective(CollapseDirective, {
      tagName: 'div',
      bindings: [
        inputBinding('visible', () => true),
        inputBinding('animate', () => false),
        outputBinding<boolean>('visibleChange', (value) => emitted.push(value)),
        outputBinding<string>('collapseChange', (state) => states.push(state))
      ]
    });
    openFixture.detectChanges();
    expect(openFixture.nativeElement.classList.contains('show')).toBe(true);
    expect(emitted).toEqual([]);
    expect(states).toEqual([]);
  });

  it('should emit visibleChange for input changes without animation', () => {
    const shown = signal(false);
    const emitted: boolean[] = [];
    const inputFixture = TestBed.createDirective(CollapseDirective, {
      tagName: 'div',
      bindings: [
        inputBinding('visible', shown),
        inputBinding('animate', () => false),
        outputBinding<boolean>('visibleChange', (value) => emitted.push(value))
      ]
    });
    inputFixture.detectChanges();
    shown.set(true);
    inputFixture.detectChanges();
    expect(emitted).toEqual([true]);
  });

  it('should clear an interrupted transition when animation is switched off', () => {
    const animatedFixture = TestBed.createDirective(CollapseDirective, { tagName: 'div' });
    animatedFixture.detectChanges();
    const collapse = animatedFixture.directiveInstance;
    const element = animatedFixture.nativeElement as HTMLElement;
    collapse.toggle(true);
    animatedFixture.detectChanges();
    collapse.toggle(false);
    animatedFixture.detectChanges();
    expect(element.classList.contains('collapsing')).toBe(true);
    collapse.animate.set(false);
    collapse.toggle(true);
    animatedFixture.detectChanges();
    expect(element.classList.contains('collapsing')).toBe(false);
    expect(element.classList.contains('show')).toBe(true);
    expect(element.style.height).toBe('');
    element.dispatchEvent(Object.assign(new Event('transitionend'), { propertyName: 'height' }));
    expect(element.classList.contains('show')).toBe(true);
  });
});
