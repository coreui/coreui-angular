import { Binding, effect, inputBinding, outputBinding, signal, WritableSignal } from '@angular/core';
import { DirectiveFixture, TestBed } from '@angular/core/testing';
import { expect, vi } from 'vitest';
import { PopoverDirective } from '../popover/popover.directive';
import { TooltipDirective } from './tooltip.directive';

describe.each([
  { type: TooltipDirective, prefix: 'cTooltip', selector: '.tooltip' },
  { type: PopoverDirective, prefix: 'cPopover', selector: '.popover' }
])('$prefix delay and animation', ({ type, prefix, selector }) => {
  let content: WritableSignal<string>;
  let visible: WritableSignal<boolean>;
  let changes: boolean[];
  let fixture: DirectiveFixture<TooltipDirective | PopoverDirective>;
  let intersect: IntersectionObserverCallback;

  beforeEach(() => {
    (globalThis as any).IntersectionObserver = class {
      constructor(callback: IntersectionObserverCallback) {
        intersect = callback;
      }
      observe = vi.fn();
      unobserve = vi.fn();
      disconnect = vi.fn();
    };
    vi.useFakeTimers();
    content = signal('content');
    visible = signal(false);
    changes = [];
  });

  afterEach(() => {
    vi.restoreAllMocks();
    vi.useRealTimers();
  });

  const create = (...bindings: Binding[]) => {
    fixture = TestBed.createDirective<TooltipDirective | PopoverDirective>(type, {
      tagName: 'button',
      bindings: [
        inputBinding(prefix, content),
        inputBinding(`${prefix}Visible`, visible),
        outputBinding<boolean>(`${prefix}VisibleChange`, (value) => {
          visible.set(value);
          changes.push(value);
        }),
        ...bindings
      ]
    });
    fixture.autoDetectChanges();
  };

  const createOneWay = (change: (value: boolean) => unknown = vi.fn(), ...bindings: Binding[]) => {
    fixture = TestBed.createDirective<TooltipDirective | PopoverDirective>(type, {
      tagName: 'button',
      bindings: [
        inputBinding(prefix, content),
        inputBinding(`${prefix}Delay`, () => ({ hide: 400 })),
        inputBinding(`${prefix}Visible`, visible),
        outputBinding<boolean>(`${prefix}VisibleChange`, (value) => {
          changes.push(value);
          change(value);
        }),
        ...bindings
      ]
    });
    fixture.autoDetectChanges();
  };

  const fire = (name: string) => {
    fixture.nativeElement.dispatchEvent(new Event(name));
    fixture.detectChanges();
  };

  const wait = async (time: number) => {
    await vi.advanceTimersByTimeAsync(time);
    fixture.detectChanges();
  };

  const show = async (time = 1000) => {
    fire('mouseenter');
    await wait(time);
    changes.length = 0;
  };

  const bubble = () => document.querySelector(selector) as HTMLElement | null;

  const state = () => {
    const classes = bubble()?.classList;
    if (!classes) {
      return 'absent';
    }
    return classes.contains('d-none') ? 'waiting' : classes.contains('show') ? 'shown' : 'hiding';
  };

  it('should show 150 ms after its trigger and hide at once by default', async () => {
    create();
    fire('mouseenter');
    expect(changes).toEqual([true]);
    await wait(149);
    expect(state()).toBe('waiting');
    await wait(1);
    expect(state()).toBe('shown');
    fire('mouseleave');
    expect(changes).toEqual([true, false]);
    expect(state()).toBe('hiding');
    await wait(299);
    expect(state()).toBe('hiding');
    await wait(1);
    expect(state()).toBe('absent');
  });

  it.each([
    ['a number', 400, 400, 400],
    ['a numeric string', '400', 400, 400],
    ['an object', { show: 400, hide: 200 }, 400, 200],
    ['an object without hide', { show: 400 }, 400, 0],
    ['an object without show', { hide: 400 }, 150, 400],
    ['zero', 0, 0, 0],
    ['null', null, 150, 0],
    ['undefined', undefined, 150, 0],
    ['not a number', 'soon', 150, 0]
  ])('should delay showing and hiding by %s', async (_, delay, showDelay, hideDelay) => {
    create(inputBinding(`${prefix}Delay`, () => delay));
    fire('mouseenter');
    expect(changes).toEqual([true]);
    if (showDelay) {
      await wait(showDelay - 1);
      expect(state()).toBe('waiting');
    }
    await wait(1);
    expect(state()).toBe('shown');
    fire('mouseleave');
    if (hideDelay) {
      await wait(hideDelay - 1);
      expect(state()).toBe('shown');
      expect(changes).toEqual([true]);
      expect(fixture.nativeElement.hasAttribute('aria-describedby')).toBe(true);
      await wait(1);
    }
    expect(changes).toEqual([true, false]);
    expect(state()).toBe('hiding');
    expect(fixture.nativeElement.hasAttribute('aria-describedby')).toBe(false);
  });

  it('should drop the show at once when its trigger ends before the show delay', async () => {
    create(inputBinding(`${prefix}Delay`, () => ({ show: 400, hide: 1000 })));
    fire('mouseenter');
    await wait(399);
    fire('mouseleave');
    expect(changes).toEqual([true, false]);
    await wait(299);
    expect(state()).toBe('waiting');
    await wait(1);
    expect(state()).toBe('absent');
    await wait(1000);
    expect(state()).toBe('absent');
  });

  it('should drop the show at once when its trigger ends before change detection', async () => {
    create(inputBinding(`${prefix}Delay`, () => ({ show: 0, hide: 1000 })));
    fixture.nativeElement.dispatchEvent(new Event('mouseenter'));
    fixture.nativeElement.dispatchEvent(new Event('mouseleave'));
    expect(changes).toEqual([true, false]);
    fixture.detectChanges();
    await wait(1);
    expect(state()).toBe('absent');
  });

  it('should show again after its trigger starts and ends before change detection', async () => {
    create(inputBinding(`${prefix}Delay`, () => ({ hide: 400 })));
    await show();
    fire('mouseleave');
    await wait(1000);
    expect(state()).toBe('absent');
    fixture.nativeElement.dispatchEvent(new Event('mouseenter'));
    fixture.nativeElement.dispatchEvent(new Event('mouseleave'));
    await wait(100);
    fire('mouseenter');
    await wait(1000);
    expect(state()).toBe('shown');
  });

  it('should stay when its trigger starts again before the hide delay', async () => {
    create(inputBinding(`${prefix}Delay`, () => ({ hide: 400 })));
    await show();
    fire('mouseleave');
    await wait(399);
    expect(state()).toBe('shown');
    fire('mouseenter');
    await wait(1000);
    expect(state()).toBe('shown');
    expect(changes).toEqual([]);
  });

  it('should count the hide delay from the last end of a trigger', async () => {
    create(inputBinding(`${prefix}Delay`, () => ({ hide: 400 })));
    await show();
    fire('mouseleave');
    await wait(300);
    fire('mouseenter');
    fire('mouseleave');
    await wait(399);
    expect(state()).toBe('shown');
    await wait(1);
    expect(state()).toBe('hiding');
    expect(changes).toEqual([false]);
  });

  it('should delay both clicks of a click trigger', async () => {
    create(
      inputBinding(`${prefix}Trigger`, () => 'click'),
      inputBinding(`${prefix}Delay`, () => ({ show: 400, hide: 200 }))
    );
    fire('click');
    await wait(399);
    expect(state()).toBe('waiting');
    await wait(1);
    expect(state()).toBe('shown');
    fire('click');
    await wait(199);
    expect(state()).toBe('shown');
    await wait(1);
    expect(state()).toBe('hiding');
  });

  it.each([
    ['clicked', ['click', 'click', 'click']],
    ['clicked after blur', ['click', 'blur', 'click']]
  ])('should start the hide delay again when it is %s again inside it', async (_, events) => {
    create(
      inputBinding(`${prefix}Trigger`, () => 'click'),
      inputBinding(`${prefix}Delay`, () => ({ hide: 400 }))
    );
    fire(events[0]);
    await wait(1000);
    fire(events[1]);
    await wait(300);
    fire(events[2]);
    await wait(399);
    expect(state()).toBe('shown');
    expect(changes).toEqual([true]);
    await wait(1);
    expect(state()).toBe('hiding');
    expect(changes).toEqual([true, false]);
  });

  it('should hide when its trigger starts and ends again before change detection', async () => {
    create(inputBinding(`${prefix}Delay`, () => ({ hide: 400 })));
    await show();
    const host = fixture.nativeElement;
    host.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape', bubbles: true }));
    host.dispatchEvent(new Event('mouseenter'));
    host.dispatchEvent(new Event('mouseleave'));
    await wait(399);
    expect(state()).toBe('shown');
    await wait(1);
    expect(state()).toBe('hiding');
  });

  it('should keep the hide delay when another input changes', async () => {
    const delay = signal({ hide: 400 });
    create(inputBinding(`${prefix}Delay`, delay));
    await show();
    fire('mouseleave');
    await wait(100);
    delay.set({ hide: 1000 });
    content.set('other');
    fixture.detectChanges();
    await wait(299);
    expect(state()).toBe('shown');
    await wait(1);
    expect(state()).toBe('hiding');
  });

  it('should not stay after its trigger ends while the content is empty', async () => {
    create(inputBinding(`${prefix}Delay`, () => ({ hide: 400 })));
    await show();
    content.set('');
    fixture.detectChanges();
    fire('mouseleave');
    content.set('content');
    fixture.detectChanges();
    expect(state()).toBe('hiding');
  });

  it('should hide at once when the content empties inside the hide delay and for good when the delay ends', async () => {
    create(inputBinding(`${prefix}Delay`, () => ({ hide: 400 })));
    await show();
    fire('mouseleave');
    await wait(100);
    content.set('');
    fixture.detectChanges();
    expect(state()).toBe('hiding');
    content.set('content');
    fixture.detectChanges();
    expect(state()).toBe('shown');
    await wait(300);
    expect(state()).toBe('hiding');
    expect(changes).toEqual([false]);
    await wait(300);
    expect(state()).toBe('absent');
    expect(fixture.nativeElement.hasAttribute('aria-describedby')).toBe(false);
  });

  it('should hide at once on Escape inside the hide delay', async () => {
    create(inputBinding(`${prefix}Delay`, () => ({ hide: 400 })));
    await show();
    fire('mouseleave');
    await wait(100);
    const escape = new KeyboardEvent('keydown', { key: 'Escape', bubbles: true, cancelable: true });
    fixture.nativeElement.dispatchEvent(escape);
    fixture.detectChanges();
    expect(escape.defaultPrevented).toBe(true);
    expect(state()).toBe('hiding');
    await wait(1000);
    expect(changes).toEqual([false]);
  });

  it('should let Escape through and drop the show inside the show delay', async () => {
    create(inputBinding(`${prefix}Delay`, () => 400));
    fire('mouseenter');
    await wait(399);
    const reached = vi.fn();
    document.addEventListener('keydown', reached);
    const escape = new KeyboardEvent('keydown', { key: 'Escape', bubbles: true, cancelable: true });
    fixture.nativeElement.dispatchEvent(escape);
    document.removeEventListener('keydown', reached);
    fixture.detectChanges();
    expect(escape.defaultPrevented).toBe(false);
    expect(reached).toHaveBeenCalled();
    expect(changes).toEqual([true, false]);
    await wait(1000);
    expect(state()).toBe('absent');
  });

  it('should let a second Escape through before change detection', async () => {
    create();
    await show();
    const press = () => {
      const escape = new KeyboardEvent('keydown', { key: 'Escape', bubbles: true, cancelable: true });
      fixture.nativeElement.dispatchEvent(escape);
      return escape.defaultPrevented;
    };
    expect([press(), press()]).toEqual([true, false]);
  });

  it('should hide at once when the page hides it', async () => {
    create(inputBinding(`${prefix}Delay`, () => ({ hide: 400 })));
    await show();
    visible.set(false);
    fixture.detectChanges();
    expect(state()).toBe('hiding');
  });

  it('should hide at once when the page hides it inside the hide delay', async () => {
    create(inputBinding(`${prefix}Delay`, () => ({ hide: 400 })));
    await show();
    fire('mouseleave');
    await wait(100);
    visible.set(false);
    fixture.detectChanges();
    expect(state()).toBe('hiding');
    await wait(1000);
    expect(state()).toBe('absent');
    expect(changes).toEqual([]);
  });

  it('should hide at once when the page shows and hides it inside the hide delay', async () => {
    create(inputBinding(`${prefix}Delay`, () => ({ hide: 400 })));
    await show();
    fire('mouseleave');
    await wait(100);
    visible.set(true);
    fixture.detectChanges();
    expect(state()).toBe('shown');
    visible.set(false);
    fixture.detectChanges();
    expect(state()).toBe('hiding');
  });

  it('should hide after the hide delay when the page shows it inside the delay', async () => {
    createOneWay();
    await show();
    fire('mouseleave');
    await wait(100);
    visible.set(true);
    fixture.detectChanges();
    await wait(299);
    expect(state()).toBe('shown');
    await wait(1);
    expect(state()).toBe('hiding');
  });

  it('should stay when the page shows it again in the turn of Escape inside the hide delay', async () => {
    create(inputBinding(`${prefix}Delay`, () => ({ hide: 400 })));
    await show();
    fire('mouseleave');
    await wait(100);
    fixture.nativeElement.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape', bubbles: true }));
    fixture.directiveInstance.visible.set(true);
    await wait(1000);
    expect(state()).toBe('shown');
  });

  it('should stay when the page shows it again through its input on Escape inside the hide delay', async () => {
    createOneWay((value) => !value && visible.set(true));
    await show();
    fire('mouseleave');
    await wait(100);
    fixture.nativeElement.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape', bubbles: true }));
    fixture.detectChanges();
    await wait(1000);
    expect(state()).toBe('shown');
  });

  it('should stay when the page hides and shows it in one turn inside the hide delay', async () => {
    create(inputBinding(`${prefix}Delay`, () => ({ hide: 400 })));
    await show();
    fire('mouseleave');
    await wait(100);
    fixture.directiveInstance.visible.set(false);
    fixture.directiveInstance.visible.set(true);
    await wait(1000);
    expect(state()).toBe('shown');
  });

  it('should hide when the page accepts the changes late', async () => {
    createOneWay((value) => setTimeout(() => visible.set(value), 250));
    fire('mouseenter');
    await wait(200);
    fire('mouseleave');
    await wait(2000);
    expect(visible()).toBe(false);
    expect(state()).toBe('absent');
  });

  it('should hide on the next click after the page keeps it open past the hide delay', async () => {
    let busy = true;
    create(
      inputBinding(`${prefix}Trigger`, () => 'click'),
      inputBinding(`${prefix}Delay`, () => ({ hide: 400 })),
      outputBinding<boolean>(`${prefix}VisibleChange`, (value) => {
        if (!value && busy) {
          fixture.directiveInstance.visible.set(true);
        }
      })
    );
    fire('click');
    await wait(1000);
    fire('click');
    await wait(1000);
    expect(state()).toBe('shown');
    busy = false;
    fire('click');
    await wait(400);
    expect(state()).toBe('hiding');
  });

  it('should hide on the next click after the page keeps it open through its input past the hide delay', async () => {
    let busy = true;
    createOneWay(
      (value) => !value && busy && visible.set(true),
      inputBinding(`${prefix}Trigger`, () => 'click')
    );
    fire('click');
    await wait(1000);
    fire('click');
    await wait(1000);
    expect(state()).toBe('shown');
    busy = false;
    fire('click');
    await wait(399);
    expect(state()).toBe('shown');
    await wait(1);
    expect(state()).toBe('hiding');
  });

  it.each([
    ['hide', false],
    ['show', true]
  ])('should hide when its trigger ends in the %s listener of the page that shows it again', async (_, ending) => {
    let again = true;
    create(
      inputBinding(`${prefix}Trigger`, () => 'focus'),
      inputBinding(`${prefix}Delay`, () => ({ hide: 400 })),
      outputBinding<boolean>(`${prefix}VisibleChange`, (value) => {
        if (!value && again) {
          again = false;
          fixture.directiveInstance.visible.set(true);
        }
        if (value === ending && !again) {
          fixture.nativeElement.dispatchEvent(new Event('blur'));
        }
      })
    );
    fire('focus');
    await wait(1000);
    fixture.nativeElement.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape', bubbles: true }));
    await wait(399);
    expect(state()).toBe('shown');
    await wait(1);
    expect(state()).toBe('hiding');
  });

  it('should hide 100 ms after its reference leaves the viewport inside the hide delay', async () => {
    create(inputBinding(`${prefix}Delay`, () => ({ hide: 1000 })));
    await show();
    fire('mouseleave');
    intersect(
      [{ target: fixture.nativeElement, isIntersecting: false } as unknown as IntersectionObserverEntry],
      {} as IntersectionObserver
    );
    await wait(100);
    expect(state()).toBe('hiding');
    await wait(2000);
    expect(changes).toEqual([false]);
  });

  it('should leave no timer and report nothing when it is destroyed inside the hide delay', async () => {
    create(inputBinding(`${prefix}Delay`, () => ({ hide: 400 })));
    await show();
    fire('mouseleave');
    fixture.destroy();
    expect(state()).toBe('absent');
    await vi.advanceTimersByTimeAsync(100);
    expect(vi.getTimerCount()).toBe(0);
    expect(changes).toEqual([]);
  });

  it.each([
    ['starts', 'focus'],
    ['ends', 'blur'],
    ['toggles', 'click']
  ])('should not make an effect that %s its trigger depend on it', async (_, name) => {
    const delay = signal({ hide: 400 });
    create(
      inputBinding(`${prefix}Trigger`, () => ['focus', 'click']),
      inputBinding(`${prefix}Delay`, delay)
    );
    if (name !== 'focus') {
      fire('focus');
      await wait(1000);
    }
    const run = vi.fn(() => fixture.nativeElement.dispatchEvent(new Event(name)));
    TestBed.runInInjectionContext(() => effect(run));
    TestBed.tick();
    expect(run).toHaveBeenCalledTimes(1);
    delay.set({ hide: 500 });
    await wait(1000);
    expect(state()).toBe(name === 'focus' ? 'shown' : 'absent');
    expect(run).toHaveBeenCalledTimes(1);
  });

  it('should restart the show delay when it shows again inside the show delay', async () => {
    create(inputBinding(`${prefix}Delay`, () => ({ show: 400 })));
    fire('mouseenter');
    await wait(300);
    fire('mouseleave');
    await wait(100);
    fire('mouseenter');
    await wait(399);
    expect(state()).toBe('waiting');
    await wait(1);
    expect(state()).toBe('shown');
  });

  it('should leave Popper alone when the delay changes while shown', async () => {
    const delay = signal({ show: 100 });
    create(inputBinding(`${prefix}Delay`, delay));
    await show();
    const measure = vi.spyOn(fixture.nativeElement, 'getBoundingClientRect');
    delay.set({ show: 200 });
    fixture.detectChanges();
    await wait(0);
    expect(measure).not.toHaveBeenCalled();
  });

  it('should fade by default', async () => {
    create();
    await show();
    expect(bubble()?.classList.contains('fade')).toBe(true);
  });

  it('should neither fade nor wait for the fade without animation', async () => {
    create(inputBinding(`${prefix}Animation`, () => false));
    await show();
    expect(bubble()?.classList.contains('fade')).toBe(false);
    fire('mouseleave');
    await wait(0);
    expect(state()).toBe('absent');
  });

  it('should follow the animation while shown', async () => {
    const animation = signal(true);
    create(inputBinding(`${prefix}Animation`, animation));
    await show();
    animation.set(false);
    fixture.detectChanges();
    expect(bubble()?.classList.contains('fade')).toBe(false);
    expect(state()).toBe('shown');
    animation.set(true);
    fixture.detectChanges();
    fire('mouseleave');
    await wait(299);
    expect(state()).toBe('hiding');
    await wait(1);
    expect(state()).toBe('absent');
  });

  it('should show again after the animation changed while hidden', async () => {
    const animation = signal(true);
    create(inputBinding(`${prefix}Animation`, animation));
    await show();
    fire('mouseleave');
    await wait(1000);
    animation.set(false);
    fixture.detectChanges();
    fire('mouseenter');
    await wait(1000);
    expect(state()).toBe('shown');
  });
});
