import {
  Binding,
  ChangeDetectorRef,
  Component,
  DOCUMENT,
  ElementRef,
  inject,
  input,
  inputBinding,
  PLATFORM_ID,
  signal,
  twoWayBinding,
  Type,
  WritableSignal
} from '@angular/core';
import { DirectiveFixture, TestBed } from '@angular/core/testing';
import { expect, vi } from 'vitest';
import type { Options } from '@popperjs/core';
import { PopoverDirective } from './popover.directive';
import { Triggers } from '../coreui.types';
import { ElementRefDirective } from '../shared';

describe('PopoverDirective', () => {
  let visible: WritableSignal<boolean>;
  let fixture: DirectiveFixture<PopoverDirective>;
  let document: Document;
  let intersect: IntersectionObserverCallback;

  beforeEach(() => {
    // Mock IntersectionObserver
    (globalThis as any).IntersectionObserver = class IntersectionObserver {
      constructor(callback: IntersectionObserverCallback) {
        intersect = callback;
      }
      observe = vi.fn();
      unobserve = vi.fn();
      disconnect = vi.fn();
      takeRecords = vi.fn(() => []);
      root = null;
      rootMargin = '';
      thresholds = [];
    };

    vi.useFakeTimers();

    document = TestBed.inject(DOCUMENT);
    visible = signal(false);
    fixture = TestBed.createDirective(PopoverDirective, {
      tagName: 'button',
      bindings: [
        inputBinding('cPopover', () => 'content'),
        twoWayBinding('cPopoverVisible', visible),
        inputBinding('cPopoverTrigger', () => ['hover', 'click'] as Triggers[])
      ]
    });
    fixture.autoDetectChanges();
  });

  afterEach(() => {
    vi.restoreAllMocks();
    vi.useRealTimers();
  });

  const resizeCalls = (spy: { mock: { calls: unknown[][] } }) =>
    spy.mock.calls.filter((call) => call[0] === 'resize').length;

  const createWithContent = (...bindings: Binding[]) => {
    fixture.destroy();
    const content = signal('content');
    fixture = TestBed.createDirective(PopoverDirective, {
      tagName: 'button',
      bindings: [inputBinding('cPopover', content), twoWayBinding('cPopoverVisible', visible), ...bindings]
    });
    fixture.autoDetectChanges();
    return content;
  };

  const showPopover = async () => {
    visible.set(true);
    fixture.detectChanges();
    await vi.runAllTimersAsync();
    return document.querySelector('.popover') as HTMLElement;
  };

  const hidePopover = async () => {
    visible.set(false);
    fixture.detectChanges();
    await vi.runAllTimersAsync();
  };

  const innerText = (popover: HTMLElement) => popover.querySelector('.popover-body')?.textContent?.trim();

  it('should create an instance', () => {
    expect(fixture.directiveInstance).toBeTruthy();
  });

  it('should have css classes', async () => {
    expect(document.querySelector('.popover.show')).toBeNull();
    visible.set(true);
    fixture.detectChanges();
    await vi.runAllTimersAsync();
    expect(document.querySelector('.popover.show')).toBeTruthy();
    visible.set(false);
    fixture.detectChanges();
    await vi.runAllTimersAsync();
    expect(document.querySelector('.popover.show')).toBeNull();
  });

  it('should describe the host by the popover id', async () => {
    visible.set(true);
    fixture.detectChanges();
    await vi.runAllTimersAsync();
    const popover = document.querySelector('.popover') as HTMLElement;
    expect(popover.id).toMatch(/^popover-/);
    expect(fixture.nativeElement.getAttribute('aria-describedby')).toBe(popover.id);
    visible.set(false);
    fixture.detectChanges();
    await vi.runAllTimersAsync();
    expect(fixture.nativeElement.hasAttribute('aria-describedby')).toBe(false);
  });

  it('should describe the host as soon as the popover is inserted', () => {
    visible.set(true);
    fixture.detectChanges();
    const popover = document.querySelector('.popover') as HTMLElement;
    expect(popover.id).toMatch(/^popover-/);
    expect(fixture.nativeElement.getAttribute('aria-describedby')).toBe(popover.id);
  });

  it('should describe the host by the same popover id when shown again', async () => {
    visible.set(true);
    fixture.detectChanges();
    await vi.runAllTimersAsync();
    const id = fixture.nativeElement.getAttribute('aria-describedby');
    visible.set(false);
    fixture.detectChanges();
    await vi.runAllTimersAsync();
    visible.set(true);
    fixture.detectChanges();
    await vi.runAllTimersAsync();
    const popover = document.querySelector('.popover.show') as HTMLElement;
    expect(popover.id).toBe(id);
    expect(fixture.nativeElement.getAttribute('aria-describedby')).toBe(id);
  });

  it('should give popovers shown together distinct ids', async () => {
    vi.spyOn(Math, 'random').mockReturnValueOnce(0.5).mockReturnValueOnce(0.5).mockReturnValue(0.7);
    const shown = signal(false);
    const hosts = ['first', 'second'].map((content) => {
      const host = TestBed.createDirective(PopoverDirective, {
        tagName: 'button',
        bindings: [inputBinding('cPopover', () => content), inputBinding('cPopoverVisible', shown)]
      });
      host.autoDetectChanges();
      return host;
    });
    shown.set(true);
    await vi.runAllTimersAsync();
    const [firstId, secondId] = hosts.map((host) => host.nativeElement.getAttribute('aria-describedby') ?? '');
    expect(secondId).not.toBe(firstId);
    expect(document.getElementById(firstId)?.textContent).toContain('first');
    expect(document.getElementById(secondId)?.textContent).toContain('second');
  });

  it('should not describe the host on the server', () => {
    TestBed.resetTestingModule();
    TestBed.configureTestingModule({ providers: [{ provide: PLATFORM_ID, useValue: 'server' }] });
    const server = TestBed.createDirective(PopoverDirective, {
      tagName: 'button',
      bindings: [inputBinding('cPopover', () => 'content'), inputBinding('cPopoverVisible', () => true)]
    });
    server.detectChanges();
    expect(server.nativeElement.hasAttribute('aria-describedby')).toBe(false);
  });

  it('should not describe the host when hidden before the popover shows', async () => {
    visible.set(true);
    fixture.detectChanges();
    await vi.advanceTimersByTimeAsync(50);
    visible.set(false);
    fixture.detectChanges();
    await vi.advanceTimersByTimeAsync(1000);
    fixture.detectChanges();
    expect(fixture.nativeElement.hasAttribute('aria-describedby')).toBe(false);
    expect(document.querySelector('.popover')).toBeNull();
  });

  it('should not run the show timer when destroyed before the popover shows', async () => {
    visible.set(true);
    fixture.detectChanges();
    const popover = document.getElementById(
      fixture.nativeElement.getAttribute('aria-describedby') ?? ''
    ) as HTMLElement;
    await vi.advanceTimersByTimeAsync(50);
    fixture.destroy();
    await vi.advanceTimersByTimeAsync(150);
    expect(popover.classList.contains('d-none')).toBe(true);
  });

  it('should cancel the hide timer when destroyed while the popover hides', async () => {
    visible.set(true);
    fixture.detectChanges();
    await vi.runAllTimersAsync();
    const setTimeoutSpy = vi.spyOn(globalThis, 'setTimeout');
    const clearTimeoutSpy = vi.spyOn(globalThis, 'clearTimeout');
    visible.set(false);
    fixture.detectChanges();
    await vi.advanceTimersByTimeAsync(50);
    const hideTimer =
      setTimeoutSpy.mock.results[setTimeoutSpy.mock.calls.findIndex(([, delay]) => delay === 300)]?.value;
    expect(hideTimer).toBeDefined();
    fixture.destroy();
    expect(clearTimeoutSpy).toHaveBeenCalledWith(hideTimer);
  });

  it('should destroy Popper when the popover hides', async () => {
    const resize = (spy: { mock: { calls: unknown[][] } }) =>
      spy.mock.calls.filter((call) => call[0] === 'resize').length;
    const add = vi.spyOn(window, 'addEventListener');
    const remove = vi.spyOn(window, 'removeEventListener');
    visible.set(true);
    fixture.detectChanges();
    await vi.runAllTimersAsync();
    expect(resize(add)).toBe(1);
    expect(resize(remove)).toBe(0);

    const popover = document.querySelector('.popover') as HTMLElement;
    visible.set(false);
    fixture.detectChanges();
    await vi.advanceTimersByTimeAsync(150);
    expect(resize(remove)).toBe(0);
    expect(popover.hasAttribute('data-popper-placement')).toBe(true);

    await vi.runAllTimersAsync();
    expect(resize(remove)).toBe(resize(add));
  });

  it('should keep Popper when the popover shows again before the hide finishes', async () => {
    visible.set(true);
    fixture.detectChanges();
    await vi.runAllTimersAsync();
    visible.set(false);
    fixture.detectChanges();
    await vi.advanceTimersByTimeAsync(100);
    const add = vi.spyOn(window, 'addEventListener');
    const remove = vi.spyOn(window, 'removeEventListener');
    visible.set(true);
    fixture.detectChanges();
    await vi.runAllTimersAsync();

    expect(resizeCalls(add)).toBe(0);
    expect(resizeCalls(remove)).toBe(0);
    expect(document.querySelector('.popover.show')).toBeTruthy();
  });

  it.each(['visible', 'content'])(
    'should restart the show delay when the popover shows again after hiding inside the show window (%s)',
    async (path) => {
      const content = createWithContent();
      visible.set(true);
      fixture.detectChanges();
      await vi.advanceTimersByTimeAsync(50);
      if (path === 'visible') {
        visible.set(false);
      } else {
        content.set('');
      }
      fixture.detectChanges();
      await vi.advanceTimersByTimeAsync(50);
      if (path === 'visible') {
        visible.set(true);
      } else {
        content.set('back');
      }
      fixture.detectChanges();
      const popover = document.querySelector('.popover') as HTMLElement;
      expect(popover.classList.contains('d-none')).toBe(true);

      await vi.advanceTimersByTimeAsync(149);
      expect(popover.classList.contains('d-none')).toBe(true);

      await vi.advanceTimersByTimeAsync(1);
      fixture.detectChanges();
      expect(document.querySelectorAll('.popover').length).toBe(1);
      expect(document.querySelector('.popover')).toBe(popover);
      expect(popover.classList.contains('show')).toBe(true);
      expect(popover.classList.contains('d-none')).toBe(false);
    }
  );

  it.each([
    ['before', 50],
    ['after', 1000]
  ])('should not describe the host when the content empties %s the popover shows', async (_, elapsed) => {
    fixture.destroy();
    const content = signal('content');
    fixture = TestBed.createDirective(PopoverDirective, {
      tagName: 'button',
      bindings: [inputBinding('cPopover', content), twoWayBinding('cPopoverVisible', visible)]
    });
    fixture.autoDetectChanges();
    visible.set(true);
    fixture.detectChanges();
    await vi.advanceTimersByTimeAsync(elapsed);
    content.set('');
    fixture.detectChanges();
    await vi.advanceTimersByTimeAsync(1000);
    fixture.detectChanges();
    expect(fixture.nativeElement.hasAttribute('aria-describedby')).toBe(false);
    expect(document.querySelector('.popover')).toBeNull();
  });

  it('should set popover on and off', async () => {
    fixture.autoDetectChanges();
    visible.set(false);
    expect(document.querySelector('.popover.show')).toBeNull();
    fixture.nativeElement.dispatchEvent(new Event('mouseenter'));
    await vi.runAllTimersAsync();
    expect(document.querySelector('.popover.show')).toBeTruthy();
    fixture.nativeElement.dispatchEvent(new Event('mouseleave'));
    await vi.runAllTimersAsync();
    expect(document.querySelector('.popover.show')).toBeNull();
  });

  it('should toggle popover', async () => {
    fixture.autoDetectChanges();
    visible.set(false);
    expect(document.querySelector('.popover.show')).toBeNull();
    fixture.nativeElement.dispatchEvent(new Event('click'));
    await vi.runAllTimersAsync();
    expect(document.querySelector('.popover.show')).toBeTruthy();
    fixture.nativeElement.dispatchEvent(new Event('click'));
    await vi.runAllTimersAsync();
    expect(document.querySelector('.popover.show')).toBeNull();
  });

  it('should close the popover when Escape is pressed while visible', async () => {
    visible.set(true);
    fixture.detectChanges();
    await vi.runAllTimersAsync();
    expect(visible()).toBe(true);
    expect(document.querySelector('.popover.show')).toBeTruthy();

    document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape' }));
    fixture.detectChanges();
    await vi.runAllTimersAsync();

    expect(visible()).toBe(false);
    expect(document.querySelector('.popover.show')).toBeNull();
  });

  it('should let Escape through and drop the pending popover when there is no content', async () => {
    fixture.destroy();
    fixture = TestBed.createDirective(PopoverDirective, {
      tagName: 'button',
      bindings: [inputBinding('cPopover', () => ''), twoWayBinding('cPopoverVisible', visible)]
    });
    fixture.autoDetectChanges();
    visible.set(true);
    fixture.detectChanges();
    await vi.runAllTimersAsync();

    const reached = vi.fn();
    document.addEventListener('keydown', reached);
    const escape = new KeyboardEvent('keydown', { key: 'Escape', bubbles: true, cancelable: true });
    fixture.nativeElement.dispatchEvent(escape);
    document.removeEventListener('keydown', reached);

    expect(escape.defaultPrevented).toBe(false);
    expect(reached).toHaveBeenCalled();
    expect(visible()).toBe(false);
  });

  it('should catch Escape once content arrives while visible', async () => {
    fixture.destroy();
    const content = signal('');
    fixture = TestBed.createDirective(PopoverDirective, {
      tagName: 'button',
      bindings: [inputBinding('cPopover', content), twoWayBinding('cPopoverVisible', visible)]
    });
    fixture.autoDetectChanges();
    visible.set(true);
    fixture.detectChanges();
    await vi.runAllTimersAsync();
    content.set('content');
    fixture.detectChanges();
    await vi.runAllTimersAsync();
    expect(document.querySelector('.popover.show')).toBeTruthy();

    const escape = new KeyboardEvent('keydown', { key: 'Escape', bubbles: true, cancelable: true });
    fixture.nativeElement.dispatchEvent(escape);

    expect(escape.defaultPrevented).toBe(true);
    expect(visible()).toBe(false);
  });

  it('should let Escape through once the content empties after the popover shows', async () => {
    fixture.destroy();
    const content = signal('content');
    fixture = TestBed.createDirective(PopoverDirective, {
      tagName: 'button',
      bindings: [inputBinding('cPopover', content), twoWayBinding('cPopoverVisible', visible)]
    });
    fixture.autoDetectChanges();
    visible.set(true);
    fixture.detectChanges();
    await vi.runAllTimersAsync();
    content.set('');
    fixture.detectChanges();
    await vi.runAllTimersAsync();

    const escape = new KeyboardEvent('keydown', { key: 'Escape', bubbles: true, cancelable: true });
    fixture.nativeElement.dispatchEvent(escape);

    expect(escape.defaultPrevented).toBe(false);
    expect(visible()).toBe(false);
  });
  it('should not show the popover when content arrives after Escape', async () => {
    fixture.destroy();
    const content = signal('');
    fixture = TestBed.createDirective(PopoverDirective, {
      tagName: 'button',
      bindings: [inputBinding('cPopover', content), twoWayBinding('cPopoverVisible', visible)]
    });
    fixture.autoDetectChanges();
    visible.set(true);
    fixture.detectChanges();
    await vi.runAllTimersAsync();

    fixture.nativeElement.dispatchEvent(
      new KeyboardEvent('keydown', { key: 'Escape', bubbles: true, cancelable: true })
    );
    content.set('content');
    fixture.detectChanges();
    await vi.runAllTimersAsync();

    expect(visible()).toBe(false);
    expect(document.querySelector('.popover.show')).toBeNull();
  });

  it('should hide the popover when the content empties while visible', async () => {
    const content = createWithContent();
    const popover = await showPopover();

    content.set('');
    fixture.detectChanges();
    expect(popover.isConnected).toBe(true);
    expect(popover.classList.contains('show')).toBe(false);
    expect(fixture.nativeElement.hasAttribute('aria-describedby')).toBe(false);

    await vi.advanceTimersByTimeAsync(300);
    expect(document.querySelector('.popover')).toBeNull();
  });

  it('should keep the same popover element when the content changes while shown', async () => {
    const content = createWithContent();
    const popover = await showPopover();

    content.set('changed');
    fixture.detectChanges();
    expect(document.querySelector('.popover')).toBe(popover);
    expect(popover.classList.contains('show')).toBe(true);
    expect(popover.classList.contains('d-none')).toBe(false);
    expect(innerText(popover)).toBe('changed');

    await vi.runAllTimersAsync();
    expect(document.querySelectorAll('.popover').length).toBe(1);
    expect(popover.classList.contains('show')).toBe(true);
  });

  it('should keep Popper and reposition when the content changes while shown', async () => {
    const content = createWithContent();
    const add = vi.spyOn(window, 'addEventListener');
    const remove = vi.spyOn(window, 'removeEventListener');
    const popover = await showPopover();
    const measuredTexts: (string | undefined)[] = [];
    const getBoundingClientRect = popover.getBoundingClientRect.bind(popover);
    vi.spyOn(popover, 'getBoundingClientRect').mockImplementation(() => {
      measuredTexts.push(innerText(popover));
      return getBoundingClientRect();
    });

    content.set('changed');
    fixture.detectChanges();
    await vi.advanceTimersByTimeAsync(0);

    expect(measuredTexts.length).toBeGreaterThan(0);
    expect(measuredTexts.every((text) => text === 'changed')).toBe(true);
    expect(resizeCalls(add)).toBe(1);
    expect(resizeCalls(remove)).toBe(0);
  });

  it('should show the new content at the original show time when it changes before the show timer fires', async () => {
    const content = createWithContent();
    visible.set(true);
    fixture.detectChanges();
    await vi.advanceTimersByTimeAsync(50);

    content.set('changed');
    fixture.detectChanges();
    const popover = document.querySelector('.popover') as HTMLElement;
    await vi.advanceTimersByTimeAsync(99);
    expect(popover.classList.contains('d-none')).toBe(true);

    await vi.advanceTimersByTimeAsync(1);
    fixture.detectChanges();
    expect(popover.classList.contains('d-none')).toBe(false);
    expect(popover.classList.contains('show')).toBe(true);
    expect(innerText(popover)).toBe('changed');
  });

  it('should fade back in at once when the content returns while the popover hides', async () => {
    const content = createWithContent();
    const remove = vi.spyOn(window, 'removeEventListener');
    const popover = await showPopover();

    content.set('');
    fixture.detectChanges();
    await vi.advanceTimersByTimeAsync(100);
    content.set('back');
    fixture.detectChanges();
    expect(document.querySelector('.popover')).toBe(popover);
    expect(popover.classList.contains('show')).toBe(true);

    await vi.runAllTimersAsync();
    expect(popover.isConnected).toBe(true);
    expect(document.querySelectorAll('.popover').length).toBe(1);
    expect(resizeCalls(remove)).toBe(0);
  });

  it('should reposition after the new content renders when it returns while the popover hides', async () => {
    const content = createWithContent();
    const popover = await showPopover();
    content.set('');
    fixture.detectChanges();
    await vi.advanceTimersByTimeAsync(100);
    const measuredTexts: (string | undefined)[] = [];
    const getBoundingClientRect = popover.getBoundingClientRect.bind(popover);
    vi.spyOn(popover, 'getBoundingClientRect').mockImplementation(() => {
      measuredTexts.push(innerText(popover));
      return getBoundingClientRect();
    });

    content.set('back');
    fixture.detectChanges();
    await vi.advanceTimersByTimeAsync(0);

    expect(measuredTexts.length).toBeGreaterThan(0);
    expect(measuredTexts.every((text) => text === 'back')).toBe(true);
  });

  it('should let the fade finish when the content changes while the popover hides', async () => {
    const content = createWithContent();
    const popover = await showPopover();

    visible.set(false);
    fixture.detectChanges();
    await vi.advanceTimersByTimeAsync(50);
    content.set('changed');
    fixture.detectChanges();
    await vi.advanceTimersByTimeAsync(100);
    expect(popover.isConnected).toBe(true);
    expect(popover.classList.contains('show')).toBe(false);

    await vi.advanceTimersByTimeAsync(200);
    expect(document.querySelector('.popover')).toBeNull();
  });

  it('should show the new content when the popover shows again after it changed while hidden', async () => {
    const content = createWithContent();
    const popover = await showPopover();
    await hidePopover();

    content.set('changed');
    fixture.detectChanges();
    await showPopover();

    expect(document.querySelector('.popover')).toBe(popover);
    expect(popover.classList.contains('show')).toBe(true);
    expect(innerText(popover)).toBe('changed');
  });

  it('should destroy the popover only when the directive is destroyed', async () => {
    const content = createWithContent();
    const popover = await showPopover();

    content.set('changed');
    fixture.detectChanges();
    await vi.runAllTimersAsync();
    expect(document.querySelector('.popover')).toBe(popover);

    content.set('');
    fixture.detectChanges();
    await vi.runAllTimersAsync();
    content.set('back');
    fixture.detectChanges();
    await vi.runAllTimersAsync();
    expect(document.querySelector('.popover')).toBe(popover);
    expect(document.querySelectorAll('.popover').length).toBe(1);

    fixture.destroy();
    expect(document.querySelector('.popover')).toBeNull();
  });

  it('should apply a new placement while shown', async () => {
    const placement = signal<'top' | 'bottom'>('top');
    createWithContent(inputBinding('cPopoverPlacement', placement));
    const popover = await showPopover();
    expect(popover.getAttribute('data-popper-placement')).toBe('top');

    placement.set('bottom');
    fixture.detectChanges();
    expect(popover.classList.contains('d-none')).toBe(false);

    await vi.runAllTimersAsync();
    expect(document.querySelector('.popover')).toBe(popover);
    expect(popover.getAttribute('data-popper-placement')).toBe('bottom');
  });

  it('should move Popper to a new reference element while shown', async () => {
    const first = document.createElement('span');
    const second = document.createElement('span');
    document.body.append(first, second);
    const reference = signal({ elementRef: new ElementRef(first) } as ElementRefDirective);
    createWithContent(inputBinding('cPopoverRef', reference));
    const popover = await showPopover();
    const measured = vi.spyOn(second, 'getBoundingClientRect');

    const removedNodes: Node[] = [];
    const observer = new MutationObserver((records) =>
      records.forEach((record) => removedNodes.push(...record.removedNodes))
    );
    observer.observe(document.body, { childList: true });
    reference.set({ elementRef: new ElementRef(second) } as ElementRefDirective);
    fixture.detectChanges();
    const hiddenAtOnce = popover.classList.contains('d-none');
    await vi.runAllTimersAsync();
    observer.disconnect();

    expect(hiddenAtOnce).toBe(false);
    expect(removedNodes).not.toContain(popover);
    expect(measured).toHaveBeenCalled();
    expect(document.querySelector('.popover')).toBe(popover);
    expect(popover.classList.contains('show')).toBe(true);
    expect(popover.classList.contains('d-none')).toBe(false);
    first.remove();
    second.remove();
  });

  it('should move Popper to a new reference element when the popover shows again inside the hide window', async () => {
    const first = document.createElement('span');
    const second = document.createElement('span');
    document.body.append(first, second);
    const reference = signal({ elementRef: new ElementRef(first) } as ElementRefDirective);
    createWithContent(inputBinding('cPopoverRef', reference));
    const popover = await showPopover();
    visible.set(false);
    fixture.detectChanges();
    await vi.advanceTimersByTimeAsync(100);
    const measured = vi.spyOn(second, 'getBoundingClientRect');

    const removedNodes: Node[] = [];
    const observer = new MutationObserver((records) =>
      records.forEach((record) => removedNodes.push(...record.removedNodes))
    );
    observer.observe(document.body, { childList: true });
    reference.set({ elementRef: new ElementRef(second) } as ElementRefDirective);
    visible.set(true);
    fixture.detectChanges();
    const hiddenAtOnce = popover.classList.contains('d-none');
    await vi.runAllTimersAsync();
    observer.disconnect();

    expect(hiddenAtOnce).toBe(false);
    expect(removedNodes).not.toContain(popover);
    expect(measured).toHaveBeenCalled();
    expect(document.querySelector('.popover')).toBe(popover);
    expect(popover.classList.contains('show')).toBe(true);
    expect(popover.classList.contains('d-none')).toBe(false);
    first.remove();
    second.remove();
  });

  it('should move Popper to a new reference element and reveal at the original time inside the show window', async () => {
    const first = document.createElement('span');
    const second = document.createElement('span');
    document.body.append(first, second);
    const reference = signal({ elementRef: new ElementRef(first) } as ElementRefDirective);
    createWithContent(inputBinding('cPopoverRef', reference));
    visible.set(true);
    fixture.detectChanges();
    await vi.advanceTimersByTimeAsync(50);
    const measured = vi.spyOn(second, 'getBoundingClientRect');

    reference.set({ elementRef: new ElementRef(second) } as ElementRefDirective);
    fixture.detectChanges();
    await vi.advanceTimersByTimeAsync(99);
    const popover = document.querySelector('.popover') as HTMLElement;
    expect(popover.classList.contains('d-none')).toBe(true);

    await vi.advanceTimersByTimeAsync(1);
    fixture.detectChanges();
    expect(measured).toHaveBeenCalled();
    expect(popover.classList.contains('d-none')).toBe(false);
    expect(popover.classList.contains('show')).toBe(true);
    first.remove();
    second.remove();
  });

  it('should apply popper options changed after the popover showed on the next show', async () => {
    const options = signal<Partial<Options>>({});
    createWithContent(inputBinding('cPopoverOptions', options));
    expect((await showPopover()).style.position).toBe('absolute');
    await hidePopover();

    options.set({ strategy: 'fixed' });
    fixture.detectChanges();
    expect((await showPopover()).style.position).toBe('fixed');
  });

  it('should leave Popper alone when the popper options change while shown', async () => {
    const options = signal<Partial<Options>>({});
    createWithContent(inputBinding('cPopoverOptions', options));
    const popover = await showPopover();
    const add = vi.spyOn(window, 'addEventListener');
    const remove = vi.spyOn(window, 'removeEventListener');

    options.set({ strategy: 'fixed' });
    fixture.detectChanges();
    await vi.runAllTimersAsync();

    expect(document.querySelector('.popover')).toBe(popover);
    expect(popover.style.position).toBe('absolute');
    expect(resizeCalls(add)).toBe(0);
    expect(resizeCalls(remove)).toBe(0);
  });

  it('should apply a placement from the popper options while shown', async () => {
    const options = signal<Partial<Options>>({ placement: 'left' });
    createWithContent(inputBinding('cPopoverOptions', options));
    const popover = await showPopover();
    expect(popover.getAttribute('data-popper-placement')).toBe('left');

    options.set({ placement: 'right' });
    fixture.detectChanges();
    await vi.runAllTimersAsync();

    expect(document.querySelector('.popover')).toBe(popover);
    expect(popover.getAttribute('data-popper-placement')).toBe('right');
  });

  it('should drop a popper option removed from the options', async () => {
    const options = signal<Partial<Options>>({ strategy: 'fixed' });
    createWithContent(inputBinding('cPopoverOptions', options));
    expect((await showPopover()).style.position).toBe('fixed');
    await hidePopover();

    options.set({});
    fixture.detectChanges();
    expect((await showPopover()).style.position).toBe('absolute');
  });

  it('should let the placement in the options win over the placement input', async () => {
    createWithContent(
      inputBinding('cPopoverPlacement', () => 'bottom'),
      inputBinding('cPopoverOptions', () => ({ placement: 'left' }) as Partial<Options>)
    );
    const popover = await showPopover();

    expect(popover.getAttribute('data-popper-placement')).toBe('left');
  });

  it('should not close the popover when a non-Escape key is pressed', async () => {
    visible.set(true);
    fixture.detectChanges();
    await vi.runAllTimersAsync();
    expect(document.querySelector('.popover.show')).toBeTruthy();

    document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Enter' }));
    document.dispatchEvent(new KeyboardEvent('keydown', { key: 'a' }));
    document.dispatchEvent(new KeyboardEvent('keydown', { key: ' ' }));
    fixture.detectChanges();
    await vi.runAllTimersAsync();

    expect(visible()).toBe(true);
    expect(document.querySelector('.popover.show')).toBeTruthy();
  });

  it('should add the document keydown listener while visible and remove it when hidden', async () => {
    const addSpy = vi.spyOn(document, 'addEventListener');
    const removeSpy = vi.spyOn(document, 'removeEventListener');

    visible.set(true);
    fixture.detectChanges();
    await vi.runAllTimersAsync();

    expect(addSpy).toHaveBeenCalledWith('keydown', expect.any(Function), true);

    visible.set(false);
    fixture.detectChanges();
    await vi.runAllTimersAsync();

    expect(removeSpy).toHaveBeenCalledWith('keydown', expect.any(Function), true);

    // no lingering listener: pressing Escape after hiding does nothing
    removeSpy.mockClear();
    document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape' }));
    fixture.detectChanges();
    await vi.runAllTimersAsync();
    expect(visible()).toBe(false);
  });

  it('should remove the document keydown listener when the directive is destroyed while visible', async () => {
    visible.set(true);
    fixture.detectChanges();
    await vi.runAllTimersAsync();

    const removeSpy = vi.spyOn(document, 'removeEventListener');

    fixture.destroy();

    expect(removeSpy).toHaveBeenCalledWith('keydown', expect.any(Function), true);

    // the handler is gone: an Escape keypress no longer flips the model
    visible.set(true);
    document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape' }));
    await vi.runAllTimersAsync();
    expect(visible()).toBe(true);
  });

  it('should hide the popover when its host leaves the viewport', async () => {
    visible.set(true);
    fixture.detectChanges();
    await vi.runAllTimersAsync();

    intersect([{ isIntersecting: true }] as IntersectionObserverEntry[], {} as IntersectionObserver);
    await vi.runAllTimersAsync();
    expect(visible()).toBe(true);

    intersect([{ isIntersecting: false }] as IntersectionObserverEntry[], {} as IntersectionObserver);
    await vi.runAllTimersAsync();
    expect(visible()).toBe(false);
  });

  it('should not render a popover without content', async () => {
    const empty = TestBed.createDirective(PopoverDirective, {
      tagName: 'button',
      bindings: [inputBinding('cPopover', () => ''), inputBinding('cPopoverVisible', () => true)]
    });
    empty.autoDetectChanges();
    await vi.runAllTimersAsync();
    expect(document.querySelector('.popover')).toBeNull();
    empty.destroy();
  });
});

@Component({
  template: `
    <button [cPopover]="content" [cPopoverVisible]="true">Open</button>
    <ng-template #content><b id="templateContent">Template content</b></ng-template>
  `,
  imports: [PopoverDirective]
})
class TemplatePopoverComponent {}

@Component({
  template: `
    <button [cPopover]="useTemplate() ? content : 'text'" [cPopoverVisible]="true">Open</button>
    <ng-template #content><b id="templateContent">Template content</b></ng-template>
  `,
  imports: [PopoverDirective]
})
class TemplateSwapPopoverComponent {
  readonly useTemplate = signal(false);
}

describe('PopoverDirective with template content', () => {
  beforeEach(() => {
    (globalThis as any).IntersectionObserver = class IntersectionObserver {
      observe = vi.fn();
      unobserve = vi.fn();
      disconnect = vi.fn();
    };
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it('should render the template in the popover', async () => {
    const fixture = TestBed.createComponent(TemplatePopoverComponent);
    fixture.autoDetectChanges();
    await vi.runAllTimersAsync();
    expect(document.querySelector('.popover.show #templateContent')).not.toBeNull();
    expect(document.querySelector('.popover .popover-body')).toBeNull();
    fixture.destroy();
  });

  it('should swap between text and template content while shown', async () => {
    const fixture = TestBed.createComponent(TemplateSwapPopoverComponent);
    fixture.autoDetectChanges();
    await vi.runAllTimersAsync();
    const popover = document.querySelector('.popover') as HTMLElement;
    expect(popover.querySelector('.popover-body')?.textContent?.trim()).toBe('text');

    fixture.componentInstance.useTemplate.set(true);
    fixture.detectChanges();
    await vi.runAllTimersAsync();
    expect(document.querySelector('.popover')).toBe(popover);
    expect(popover.querySelector('#templateContent')).not.toBeNull();
    expect(popover.querySelector('.popover-body')).toBeNull();

    fixture.componentInstance.useTemplate.set(false);
    fixture.detectChanges();
    await vi.runAllTimersAsync();
    expect(popover.querySelector('#templateContent')).toBeNull();
    expect(popover.querySelectorAll('.popover-body').length).toBe(1);
    expect(popover.querySelector('.popover-body')?.textContent?.trim()).toBe('text');
    fixture.destroy();
  });
});

@Component({
  template: `<button cPopover="tip" aria-describedby="hint" [cPopoverVisible]="shown()">Open</button>`,
  imports: [PopoverDirective]
})
class StaticDescribedByPopoverComponent {
  readonly shown = signal(false);
}

@Component({
  template: `<button cPopover="tip" [attr.aria-describedby]="'hint'" [cPopoverVisible]="shown()">Open</button>`,
  imports: [PopoverDirective]
})
class BoundDescribedByPopoverComponent {
  readonly shown = signal(false);
}

@Component({
  selector: 'c-hint-field',
  template: '',
  host: { '[attr.aria-describedby]': 'hint()' }
})
class HintFieldPopoverComponent {
  readonly hint = input<string | null>('hint');
}

@Component({
  template: `<c-hint-field cPopover="tip" [cPopoverVisible]="true" />`,
  imports: [HintFieldPopoverComponent, PopoverDirective]
})
class HostBindingDescribedByPopoverComponent {}

@Component({
  selector: 'c-changing-hint-popover',
  template: `<button cPopover="tip" [attr.aria-describedby]="hint()" [cPopoverVisible]="shown()">Open</button>`,
  imports: [PopoverDirective]
})
class ChangingBoundDescribedByPopoverComponent {
  readonly hint = signal<string | null>('hint');
  readonly shown = signal(false);
}

@Component({
  template: `<c-hint-field cPopover="tip" [hint]="hint()" [cPopoverVisible]="shown()" />`,
  imports: [HintFieldPopoverComponent, PopoverDirective]
})
class ChangingHostBindingDescribedByPopoverComponent {
  readonly hint = signal<string | null>('hint');
  readonly shown = signal(false);
}

@Component({
  selector: 'c-detect-changes-hint-popover',
  template: `<button cPopover="tip" [attr.aria-describedby]="hint" [cPopoverVisible]="shown()">Open</button>`,
  imports: [PopoverDirective]
})
class DetectChangesDescribedByPopoverComponent {
  readonly changeDetectorRef = inject(ChangeDetectorRef);
  readonly shown = signal(false);
  hint: string | null = 'hint';
}

@Component({
  template: `<button cPopover="tip" aria-describedby="hint  extra">Open</button>`,
  imports: [PopoverDirective]
})
class SpacedDescribedByPopoverComponent {}

@Component({
  template: `<button cPopover="tip" cPopoverTrigger="focus">Open</button>`,
  imports: [PopoverDirective]
})
class FocusPopoverComponent {}

describe("PopoverDirective with the author's aria-describedby", () => {
  beforeEach(() => {
    (globalThis as any).IntersectionObserver = class IntersectionObserver {
      observe = vi.fn();
      unobserve = vi.fn();
      disconnect = vi.fn();
    };
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it.each([
    ['a static attribute', StaticDescribedByPopoverComponent],
    ['an attribute binding', BoundDescribedByPopoverComponent]
  ] as [string, Type<{ shown: WritableSignal<boolean> }>][])(
    'should keep %s and add only the popover id',
    async (_, type) => {
      const fixture = TestBed.createComponent(type);
      fixture.autoDetectChanges();
      await vi.runAllTimersAsync();
      const host = fixture.nativeElement.querySelector('button') as HTMLButtonElement;
      expect(host.getAttribute('aria-describedby')).toBe('hint');

      fixture.componentInstance.shown.set(true);
      fixture.detectChanges();
      await vi.runAllTimersAsync();
      const popover = document.querySelector('.popover') as HTMLElement;
      expect(host.getAttribute('aria-describedby')).toBe(`hint ${popover.id}`);

      fixture.componentInstance.shown.set(false);
      fixture.detectChanges();
      await vi.runAllTimersAsync();
      expect(host.getAttribute('aria-describedby')).toBe('hint');

      fixture.componentInstance.shown.set(true);
      fixture.detectChanges();
      await vi.runAllTimersAsync();
      fixture.destroy();
      expect(host.getAttribute('aria-describedby')).toBe('hint');
    }
  );

  it('should add its id after a host binding on the trigger writes aria-describedby', async () => {
    const fixture = TestBed.createComponent(HostBindingDescribedByPopoverComponent);
    fixture.autoDetectChanges();
    await vi.runAllTimersAsync();
    const host = fixture.nativeElement.querySelector('c-hint-field') as HTMLElement;
    const popover = document.querySelector('.popover') as HTMLElement;
    expect(host.getAttribute('aria-describedby')).toBe(`hint ${popover.id}`);
    fixture.destroy();
  });

  it.each([
    ['an attribute binding', ChangingBoundDescribedByPopoverComponent, 'button'],
    ['a host binding', ChangingHostBindingDescribedByPopoverComponent, 'c-hint-field']
  ] as [string, Type<{ hint: WritableSignal<string | null>; shown: WritableSignal<boolean> }>, string][])(
    'should keep its id when %s rewrites aria-describedby while shown',
    async (_, type, selector) => {
      const fixture = TestBed.createComponent(type);
      fixture.autoDetectChanges();
      await vi.runAllTimersAsync();
      const host = fixture.nativeElement.querySelector(selector) as HTMLElement;

      fixture.componentInstance.shown.set(true);
      fixture.detectChanges();
      await vi.runAllTimersAsync();
      const popover = document.querySelector('.popover') as HTMLElement;
      expect(host.getAttribute('aria-describedby')).toBe(`hint ${popover.id}`);

      fixture.componentInstance.hint.set('error');
      fixture.detectChanges();
      await vi.runAllTimersAsync();
      expect(host.getAttribute('aria-describedby')).toBe(`error ${popover.id}`);

      fixture.componentInstance.hint.set(null);
      fixture.detectChanges();
      await vi.runAllTimersAsync();
      expect(host.getAttribute('aria-describedby')).toBe(popover.id);

      fixture.componentInstance.shown.set(false);
      fixture.detectChanges();
      await vi.runAllTimersAsync();
      expect(host.getAttribute('aria-describedby')).toBeNull();
      fixture.destroy();
    }
  );

  it('should keep its id when a local detectChanges rewrites aria-describedby while shown', async () => {
    const fixture = TestBed.createComponent(DetectChangesDescribedByPopoverComponent);
    fixture.autoDetectChanges();
    await vi.runAllTimersAsync();
    const host = fixture.nativeElement.querySelector('button') as HTMLButtonElement;

    fixture.componentInstance.shown.set(true);
    fixture.detectChanges();
    await vi.runAllTimersAsync();
    const popover = document.querySelector('.popover') as HTMLElement;
    expect(host.getAttribute('aria-describedby')).toBe(`hint ${popover.id}`);

    fixture.componentInstance.hint = 'error';
    fixture.componentInstance.changeDetectorRef.detectChanges();
    expect(host.getAttribute('aria-describedby')).toBe(`error ${popover.id}`);
    fixture.destroy();
  });

  it('should drop its id when local detectChanges show and hide it before a tick', async () => {
    const fixture = TestBed.createComponent(DetectChangesDescribedByPopoverComponent);
    fixture.autoDetectChanges();
    await vi.runAllTimersAsync();
    const host = fixture.nativeElement.querySelector('button') as HTMLButtonElement;
    const { changeDetectorRef, shown } = fixture.componentInstance;

    shown.set(true);
    changeDetectorRef.detectChanges();
    expect(host.getAttribute('aria-describedby')).toMatch(/^hint popover-/);
    shown.set(false);
    changeDetectorRef.detectChanges();
    expect(host.getAttribute('aria-describedby')).toBe('hint');
    await vi.runAllTimersAsync();
    expect(host.getAttribute('aria-describedby')).toBe('hint');
    fixture.destroy();
  });

  it("should leave the author's value untouched while hidden", async () => {
    const fixture = TestBed.createComponent(SpacedDescribedByPopoverComponent);
    fixture.autoDetectChanges();
    await vi.runAllTimersAsync();
    fixture.detectChanges();
    const host = fixture.nativeElement.querySelector('button') as HTMLButtonElement;
    expect(host.getAttribute('aria-describedby')).toBe('hint  extra');
    fixture.destroy();
  });

  it('should describe the host as soon as a trigger event shows the popover again', async () => {
    const fixture = TestBed.createComponent(FocusPopoverComponent);
    fixture.autoDetectChanges();
    await vi.runAllTimersAsync();
    const host = fixture.nativeElement.querySelector('button') as HTMLButtonElement;

    host.dispatchEvent(new Event('focus'));
    await vi.runAllTimersAsync();
    host.dispatchEvent(new Event('blur'));
    await vi.runAllTimersAsync();
    host.dispatchEvent(new Event('focus'));
    await vi.advanceTimersByTimeAsync(20);
    expect(host.getAttribute('aria-describedby')).toMatch(/^popover-/);
    fixture.destroy();
  });
});
