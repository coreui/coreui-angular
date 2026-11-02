import { inputBinding, outputBinding, PLATFORM_ID, signal, twoWayBinding, WritableSignal } from '@angular/core';
import { DirectiveFixture, TestBed } from '@angular/core/testing';
import { CollapseDirective } from './collapse.directive';

describe('CollapseDirective', () => {
  let horizontal: WritableSignal<boolean>;
  let visible: WritableSignal<boolean>;
  let collapseChange: string[];
  let fixture: DirectiveFixture<CollapseDirective>;

  beforeEach(async () => {
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
    await fixture.whenStable();
  });

  it('should create an instance', () => {
    expect(fixture.directiveInstance).toBeTruthy();
  });

  it('should have css classes', async () => {
    const element = fixture.nativeElement as HTMLElement;
    expect(element.classList.contains('collapse-horizontal')).toBe(false);
    horizontal.set(true);
    visible.set(true);
    await fixture.whenStable();
    expect(element.classList.contains('collapse-horizontal')).toBe(true);
    expect(element.style.display).toBe('');
    horizontal.set(false);
    visible.set(false);
    await fixture.whenStable();
    expect(element.classList.contains('collapse-horizontal')).toBe(false);
  });

  it('should write visible back on toggle without animation', async () => {
    fixture.directiveInstance.toggle();
    await fixture.whenStable();
    expect(visible()).toBe(true);
    expect(fixture.nativeElement.classList.contains('show')).toBe(true);
    fixture.directiveInstance.toggle();
    await fixture.whenStable();
    expect(visible()).toBe(false);
    expect(fixture.nativeElement.classList.contains('show')).toBe(false);
  });

  it('should emit collapseChange on toggle without animation', async () => {
    fixture.directiveInstance.toggle();
    await fixture.whenStable();
    fixture.directiveInstance.toggle();
    await fixture.whenStable();
    expect(collapseChange).toEqual(['open', 'collapsed']);
  });

  it('should emit collapseChange without animation', async () => {
    expect(collapseChange).toEqual([]);
    visible.set(true);
    await fixture.whenStable();
    visible.set(false);
    await fixture.whenStable();
    expect(collapseChange).toEqual(['open', 'collapsed']);
  });

  it('should not emit on the first render', async () => {
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
    await openFixture.whenStable();
    expect(openFixture.nativeElement.classList.contains('show')).toBe(true);
    expect(emitted).toEqual([]);
    expect(states).toEqual([]);
  });

  it('should emit visibleChange for input changes without animation', async () => {
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
    await inputFixture.whenStable();
    shown.set(true);
    await inputFixture.whenStable();
    expect(emitted).toEqual([true]);
  });

  it('should finish a transition that ends without transitionend', async () => {
    const animatedFixture = TestBed.createDirective(CollapseDirective, { tagName: 'div' });
    await animatedFixture.whenStable();
    const element = animatedFixture.nativeElement as HTMLElement;
    element.style.transitionDuration = '0.05s';
    animatedFixture.directiveInstance.toggle(true);
    await animatedFixture.whenStable();
    expect(element.classList.contains('collapsing')).toBe(true);
    await new Promise((resolve) => setTimeout(resolve, 120));
    expect(element.classList.contains('collapsing')).toBe(false);
    expect(element.classList.contains('show')).toBe(true);
  });

  it('should wait for the transition duration of the element before the fallback', async () => {
    const animatedFixture = TestBed.createDirective(CollapseDirective, { tagName: 'div' });
    await animatedFixture.whenStable();
    const element = animatedFixture.nativeElement as HTMLElement;
    element.style.transitionDuration = '1s';
    animatedFixture.directiveInstance.toggle(true);
    await animatedFixture.whenStable();
    await new Promise((resolve) => setTimeout(resolve, 20));
    expect(element.classList.contains('collapsing')).toBe(true);
  });

  it('should run each transition to its end once, whichever ends it', async () => {
    const changes: string[] = [];
    const animatedFixture = TestBed.createDirective(CollapseDirective, {
      tagName: 'div',
      bindings: [outputBinding<string>('collapseChange', (state) => changes.push(state))]
    });
    await animatedFixture.whenStable();
    const collapse = animatedFixture.directiveInstance;
    const element = animatedFixture.nativeElement as HTMLElement;
    element.style.transitionDuration = '0.05s';

    collapse.toggle(true);
    await animatedFixture.whenStable();
    collapse.toggle(false);
    await animatedFixture.whenStable();
    await new Promise((resolve) => setTimeout(resolve, 120));
    expect(element.classList.contains('show')).toBe(false);
    expect(changes).toEqual(['opening', 'collapsing', 'collapsed']);

    collapse.toggle(true);
    await animatedFixture.whenStable();
    element.dispatchEvent(Object.assign(new Event('transitionend'), { propertyName: 'height' }));
    expect(changes).toEqual(['opening', 'collapsing', 'collapsed', 'opening', 'open']);
    await new Promise((resolve) => setTimeout(resolve, 120));
    expect(changes).toEqual(['opening', 'collapsing', 'collapsed', 'opening', 'open']);
  });

  it('should finish a change at once on the server', async () => {
    TestBed.resetTestingModule();
    TestBed.configureTestingModule({ providers: [{ provide: PLATFORM_ID, useValue: 'server' }] });
    const serverFixture = TestBed.createDirective(CollapseDirective, { tagName: 'div' });
    await serverFixture.whenStable();
    serverFixture.directiveInstance.toggle(true);
    await serverFixture.whenStable();
    const element = serverFixture.nativeElement as HTMLElement;
    expect(element.classList.contains('collapsing')).toBe(false);
    expect(element.classList.contains('show')).toBe(true);
  });

  it('should clear an interrupted transition when animation is switched off', async () => {
    const animatedFixture = TestBed.createDirective(CollapseDirective, { tagName: 'div' });
    await animatedFixture.whenStable();
    const collapse = animatedFixture.directiveInstance;
    const element = animatedFixture.nativeElement as HTMLElement;
    element.style.transitionDuration = '1s';
    collapse.toggle(true);
    await animatedFixture.whenStable();
    collapse.toggle(false);
    await animatedFixture.whenStable();
    expect(element.classList.contains('collapsing')).toBe(true);
    collapse.animate.set(false);
    collapse.toggle(true);
    await animatedFixture.whenStable();
    expect(element.classList.contains('collapsing')).toBe(false);
    expect(element.classList.contains('show')).toBe(true);
    expect(element.style.height).toBe('');
    element.dispatchEvent(Object.assign(new Event('transitionend'), { propertyName: 'height' }));
    expect(element.classList.contains('show')).toBe(true);
  });
});
