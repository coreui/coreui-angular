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
import { TooltipDirective } from './tooltip.directive';
import { PopoverDirective } from '../popover/popover.directive';
import { Triggers } from '../coreui.types';
import { ElementRefDirective } from '../shared';

describe('TooltipDirective', () => {
  let visible: WritableSignal<boolean>;
  let fixture: DirectiveFixture<TooltipDirective>;
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
    fixture = TestBed.createDirective(TooltipDirective, {
      tagName: 'button',
      bindings: [
        inputBinding('cTooltip', () => 'content'),
        twoWayBinding('cTooltipVisible', visible),
        inputBinding('cTooltipTrigger', () => ['hover', 'click'] as Triggers[])
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
    fixture = TestBed.createDirective(TooltipDirective, {
      tagName: 'button',
      bindings: [inputBinding('cTooltip', content), twoWayBinding('cTooltipVisible', visible), ...bindings]
    });
    fixture.autoDetectChanges();
    return content;
  };

  const showTooltip = async () => {
    visible.set(true);
    fixture.detectChanges();
    await vi.runAllTimersAsync();
    return document.querySelector('.tooltip') as HTMLElement;
  };

  const hideTooltip = async () => {
    visible.set(false);
    fixture.detectChanges();
    await vi.runAllTimersAsync();
  };

  const innerText = (tooltip: HTMLElement) => tooltip.querySelector('.tooltip-inner')?.textContent?.trim();

  it('should create an instance', () => {
    expect(fixture.directiveInstance).toBeTruthy();
  });

  it('should have css classes', async () => {
    expect(document.querySelector('.tooltip.show')).toBeNull();
    visible.set(true);
    fixture.detectChanges();
    await vi.runAllTimersAsync();
    expect(document.querySelector('.tooltip.show')).toBeTruthy();
    visible.set(false);
    fixture.detectChanges();
    await vi.runAllTimersAsync();
    expect(document.querySelector('.tooltip.show')).toBeNull();
  });

  it('should describe the host by the tooltip id', async () => {
    visible.set(true);
    fixture.detectChanges();
    await vi.runAllTimersAsync();
    const tooltip = document.querySelector('.tooltip') as HTMLElement;
    expect(tooltip.id).toMatch(/^tooltip-/);
    expect(fixture.nativeElement.getAttribute('aria-describedby')).toBe(tooltip.id);
    visible.set(false);
    fixture.detectChanges();
    await vi.runAllTimersAsync();
    expect(fixture.nativeElement.hasAttribute('aria-describedby')).toBe(false);
  });

  it('should describe the host as soon as the tooltip is inserted', () => {
    visible.set(true);
    fixture.detectChanges();
    const tooltip = document.querySelector('.tooltip') as HTMLElement;
    expect(tooltip.id).toMatch(/^tooltip-/);
    expect(fixture.nativeElement.getAttribute('aria-describedby')).toBe(tooltip.id);
  });

  it('should describe the host by the same tooltip id when shown again', async () => {
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
    const tooltip = document.querySelector('.tooltip.show') as HTMLElement;
    expect(tooltip.id).toBe(id);
    expect(fixture.nativeElement.getAttribute('aria-describedby')).toBe(id);
  });

  it('should give tooltips shown together distinct ids', async () => {
    vi.spyOn(Math, 'random').mockReturnValueOnce(0.5).mockReturnValueOnce(0.5).mockReturnValue(0.7);
    const shown = signal(false);
    const hosts = ['first', 'second'].map((content) => {
      const host = TestBed.createDirective(TooltipDirective, {
        tagName: 'button',
        bindings: [inputBinding('cTooltip', () => content), inputBinding('cTooltipVisible', shown)]
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
    const server = TestBed.createDirective(TooltipDirective, {
      tagName: 'button',
      bindings: [inputBinding('cTooltip', () => 'content'), inputBinding('cTooltipVisible', () => true)]
    });
    server.detectChanges();
    expect(server.nativeElement.hasAttribute('aria-describedby')).toBe(false);
  });

  it('should not describe the host when hidden before the tooltip shows', async () => {
    visible.set(true);
    fixture.detectChanges();
    await vi.advanceTimersByTimeAsync(50);
    visible.set(false);
    fixture.detectChanges();
    await vi.advanceTimersByTimeAsync(1000);
    fixture.detectChanges();
    expect(fixture.nativeElement.hasAttribute('aria-describedby')).toBe(false);
    expect(document.querySelector('.tooltip')).toBeNull();
  });

  it('should not run the show timer when destroyed before the tooltip shows', async () => {
    visible.set(true);
    fixture.detectChanges();
    const tooltip = document.getElementById(
      fixture.nativeElement.getAttribute('aria-describedby') ?? ''
    ) as HTMLElement;
    await vi.advanceTimersByTimeAsync(50);
    fixture.destroy();
    await vi.advanceTimersByTimeAsync(150);
    expect(tooltip.classList.contains('d-none')).toBe(true);
  });

  it('should cancel the hide timer when destroyed while the tooltip hides', async () => {
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

  it('should destroy Popper when the tooltip hides', async () => {
    const resize = (spy: { mock: { calls: unknown[][] } }) =>
      spy.mock.calls.filter((call) => call[0] === 'resize').length;
    const add = vi.spyOn(window, 'addEventListener');
    const remove = vi.spyOn(window, 'removeEventListener');
    visible.set(true);
    fixture.detectChanges();
    await vi.runAllTimersAsync();
    expect(resize(add)).toBe(1);
    expect(resize(remove)).toBe(0);

    const tooltip = document.querySelector('.tooltip') as HTMLElement;
    visible.set(false);
    fixture.detectChanges();
    await vi.advanceTimersByTimeAsync(150);
    expect(resize(remove)).toBe(0);
    expect(tooltip.hasAttribute('data-popper-placement')).toBe(true);

    await vi.runAllTimersAsync();
    expect(resize(remove)).toBe(resize(add));
  });

  it('should keep Popper when the tooltip shows again before the hide finishes', async () => {
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
    expect(document.querySelector('.tooltip.show')).toBeTruthy();
  });

  it.each(['visible', 'content'])(
    'should restart the show delay when the tooltip shows again after hiding inside the show window (%s)',
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
      const tooltip = document.querySelector('.tooltip') as HTMLElement;
      expect(tooltip.classList.contains('d-none')).toBe(true);

      await vi.advanceTimersByTimeAsync(149);
      expect(tooltip.classList.contains('d-none')).toBe(true);

      await vi.advanceTimersByTimeAsync(1);
      fixture.detectChanges();
      expect(document.querySelectorAll('.tooltip').length).toBe(1);
      expect(document.querySelector('.tooltip')).toBe(tooltip);
      expect(tooltip.classList.contains('show')).toBe(true);
      expect(tooltip.classList.contains('d-none')).toBe(false);
    }
  );

  it.each([
    ['before', 50],
    ['after', 1000]
  ])('should not describe the host when the content empties %s the tooltip shows', async (_, elapsed) => {
    fixture.destroy();
    const content = signal('content');
    fixture = TestBed.createDirective(TooltipDirective, {
      tagName: 'button',
      bindings: [inputBinding('cTooltip', content), twoWayBinding('cTooltipVisible', visible)]
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
    expect(document.querySelector('.tooltip')).toBeNull();
  });

  it('should set popover on and off', async () => {
    fixture.autoDetectChanges();
    visible.set(false);
    expect(document.querySelector('.tooltip.show')).toBeNull();
    fixture.nativeElement.dispatchEvent(new Event('mouseenter'));
    await vi.runAllTimersAsync();
    expect(document.querySelector('.tooltip.show')).toBeTruthy();
    fixture.nativeElement.dispatchEvent(new Event('mouseleave'));
    await vi.runAllTimersAsync();
    expect(document.querySelector('.tooltip.show')).toBeNull();
  });

  it('should toggle popover', async () => {
    fixture.autoDetectChanges();
    visible.set(false);
    expect(document.querySelector('.tooltip.show')).toBeNull();
    fixture.nativeElement.dispatchEvent(new Event('click'));
    await vi.runAllTimersAsync();
    expect(document.querySelector('.tooltip.show')).toBeTruthy();
    fixture.nativeElement.dispatchEvent(new Event('click'));
    await vi.runAllTimersAsync();
    expect(document.querySelector('.tooltip.show')).toBeNull();
  });

  it('should close the tooltip when Escape is pressed while visible', async () => {
    visible.set(true);
    fixture.detectChanges();
    await vi.runAllTimersAsync();
    expect(document.querySelector('.tooltip.show')).toBeTruthy();

    const escape = new KeyboardEvent('keydown', { key: 'Escape', cancelable: true });
    document.dispatchEvent(escape);
    fixture.detectChanges();
    await vi.runAllTimersAsync();

    expect(escape.defaultPrevented).toBe(true);
    expect(visible()).toBe(false);
    expect(document.querySelector('.tooltip.show')).toBeNull();
  });

  it('should let Escape through and drop the pending tooltip when there is no content', async () => {
    fixture.destroy();
    fixture = TestBed.createDirective(TooltipDirective, {
      tagName: 'button',
      bindings: [inputBinding('cTooltip', () => ''), twoWayBinding('cTooltipVisible', visible)]
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
    fixture = TestBed.createDirective(TooltipDirective, {
      tagName: 'button',
      bindings: [inputBinding('cTooltip', content), twoWayBinding('cTooltipVisible', visible)]
    });
    fixture.autoDetectChanges();
    visible.set(true);
    fixture.detectChanges();
    await vi.runAllTimersAsync();
    content.set('content');
    fixture.detectChanges();
    await vi.runAllTimersAsync();
    expect(document.querySelector('.tooltip.show')).toBeTruthy();

    const escape = new KeyboardEvent('keydown', { key: 'Escape', bubbles: true, cancelable: true });
    fixture.nativeElement.dispatchEvent(escape);

    expect(escape.defaultPrevented).toBe(true);
    expect(visible()).toBe(false);
  });

  it('should let Escape through once the content empties after the tooltip shows', async () => {
    fixture.destroy();
    const content = signal('content');
    fixture = TestBed.createDirective(TooltipDirective, {
      tagName: 'button',
      bindings: [inputBinding('cTooltip', content), twoWayBinding('cTooltipVisible', visible)]
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
  it('should not show the tooltip when content arrives after Escape', async () => {
    fixture.destroy();
    const content = signal('');
    fixture = TestBed.createDirective(TooltipDirective, {
      tagName: 'button',
      bindings: [inputBinding('cTooltip', content), twoWayBinding('cTooltipVisible', visible)]
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
    expect(document.querySelector('.tooltip.show')).toBeNull();
  });

  it('should hide the tooltip when the content empties while visible', async () => {
    const content = createWithContent();
    const tooltip = await showTooltip();

    content.set('');
    fixture.detectChanges();
    expect(tooltip.isConnected).toBe(true);
    expect(tooltip.classList.contains('show')).toBe(false);
    expect(fixture.nativeElement.hasAttribute('aria-describedby')).toBe(false);

    await vi.advanceTimersByTimeAsync(300);
    expect(document.querySelector('.tooltip')).toBeNull();
  });

  it('should keep the same tooltip element when the content changes while shown', async () => {
    const content = createWithContent();
    const tooltip = await showTooltip();

    content.set('changed');
    fixture.detectChanges();
    expect(document.querySelector('.tooltip')).toBe(tooltip);
    expect(tooltip.classList.contains('show')).toBe(true);
    expect(tooltip.classList.contains('d-none')).toBe(false);
    expect(innerText(tooltip)).toBe('changed');

    await vi.runAllTimersAsync();
    expect(document.querySelectorAll('.tooltip').length).toBe(1);
    expect(tooltip.classList.contains('show')).toBe(true);
  });

  it('should keep Popper and reposition when the content changes while shown', async () => {
    const content = createWithContent();
    const add = vi.spyOn(window, 'addEventListener');
    const remove = vi.spyOn(window, 'removeEventListener');
    const tooltip = await showTooltip();
    const measuredTexts: (string | undefined)[] = [];
    const getBoundingClientRect = tooltip.getBoundingClientRect.bind(tooltip);
    vi.spyOn(tooltip, 'getBoundingClientRect').mockImplementation(() => {
      measuredTexts.push(innerText(tooltip));
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
    const tooltip = document.querySelector('.tooltip') as HTMLElement;
    await vi.advanceTimersByTimeAsync(99);
    expect(tooltip.classList.contains('d-none')).toBe(true);

    await vi.advanceTimersByTimeAsync(1);
    fixture.detectChanges();
    expect(tooltip.classList.contains('d-none')).toBe(false);
    expect(tooltip.classList.contains('show')).toBe(true);
    expect(innerText(tooltip)).toBe('changed');
  });

  it('should fade back in at once when the content returns while the tooltip hides', async () => {
    const content = createWithContent();
    const remove = vi.spyOn(window, 'removeEventListener');
    const tooltip = await showTooltip();

    content.set('');
    fixture.detectChanges();
    await vi.advanceTimersByTimeAsync(100);
    content.set('back');
    fixture.detectChanges();
    expect(document.querySelector('.tooltip')).toBe(tooltip);
    expect(tooltip.classList.contains('show')).toBe(true);

    await vi.runAllTimersAsync();
    expect(tooltip.isConnected).toBe(true);
    expect(document.querySelectorAll('.tooltip').length).toBe(1);
    expect(resizeCalls(remove)).toBe(0);
  });

  it('should reposition after the new content renders when it returns while the tooltip hides', async () => {
    const content = createWithContent();
    const tooltip = await showTooltip();
    content.set('');
    fixture.detectChanges();
    await vi.advanceTimersByTimeAsync(100);
    const measuredTexts: (string | undefined)[] = [];
    const getBoundingClientRect = tooltip.getBoundingClientRect.bind(tooltip);
    vi.spyOn(tooltip, 'getBoundingClientRect').mockImplementation(() => {
      measuredTexts.push(innerText(tooltip));
      return getBoundingClientRect();
    });

    content.set('back');
    fixture.detectChanges();
    await vi.advanceTimersByTimeAsync(0);

    expect(measuredTexts.length).toBeGreaterThan(0);
    expect(measuredTexts.every((text) => text === 'back')).toBe(true);
  });

  it('should let the fade finish when the content changes while the tooltip hides', async () => {
    const content = createWithContent();
    const tooltip = await showTooltip();

    visible.set(false);
    fixture.detectChanges();
    await vi.advanceTimersByTimeAsync(50);
    content.set('changed');
    fixture.detectChanges();
    await vi.advanceTimersByTimeAsync(100);
    expect(tooltip.isConnected).toBe(true);
    expect(tooltip.classList.contains('show')).toBe(false);

    await vi.advanceTimersByTimeAsync(200);
    expect(document.querySelector('.tooltip')).toBeNull();
  });

  it('should show the new content when the tooltip shows again after it changed while hidden', async () => {
    const content = createWithContent();
    const tooltip = await showTooltip();
    await hideTooltip();

    content.set('changed');
    fixture.detectChanges();
    await showTooltip();

    expect(document.querySelector('.tooltip')).toBe(tooltip);
    expect(tooltip.classList.contains('show')).toBe(true);
    expect(innerText(tooltip)).toBe('changed');
  });

  it('should destroy the tooltip only when the directive is destroyed', async () => {
    const content = createWithContent();
    const tooltip = await showTooltip();

    content.set('changed');
    fixture.detectChanges();
    await vi.runAllTimersAsync();
    expect(document.querySelector('.tooltip')).toBe(tooltip);

    content.set('');
    fixture.detectChanges();
    await vi.runAllTimersAsync();
    content.set('back');
    fixture.detectChanges();
    await vi.runAllTimersAsync();
    expect(document.querySelector('.tooltip')).toBe(tooltip);
    expect(document.querySelectorAll('.tooltip').length).toBe(1);

    fixture.destroy();
    expect(document.querySelector('.tooltip')).toBeNull();
  });

  it('should apply a new placement while shown', async () => {
    const placement = signal<'top' | 'bottom'>('top');
    createWithContent(inputBinding('cTooltipPlacement', placement));
    const tooltip = await showTooltip();
    expect(tooltip.getAttribute('data-popper-placement')).toBe('top');

    placement.set('bottom');
    fixture.detectChanges();
    expect(tooltip.classList.contains('d-none')).toBe(false);

    await vi.runAllTimersAsync();
    expect(document.querySelector('.tooltip')).toBe(tooltip);
    expect(tooltip.getAttribute('data-popper-placement')).toBe('bottom');
  });

  it('should move Popper to a new reference element while shown', async () => {
    const first = document.createElement('span');
    const second = document.createElement('span');
    document.body.append(first, second);
    const reference = signal({ elementRef: new ElementRef(first) } as ElementRefDirective);
    createWithContent(inputBinding('cTooltipRef', reference));
    const tooltip = await showTooltip();
    const measured = vi.spyOn(second, 'getBoundingClientRect');

    const removedNodes: Node[] = [];
    const observer = new MutationObserver((records) =>
      records.forEach((record) => removedNodes.push(...record.removedNodes))
    );
    observer.observe(document.body, { childList: true });
    reference.set({ elementRef: new ElementRef(second) } as ElementRefDirective);
    fixture.detectChanges();
    const hiddenAtOnce = tooltip.classList.contains('d-none');
    await vi.runAllTimersAsync();
    observer.disconnect();

    expect(hiddenAtOnce).toBe(false);
    expect(removedNodes).not.toContain(tooltip);
    expect(measured).toHaveBeenCalled();
    expect(document.querySelector('.tooltip')).toBe(tooltip);
    expect(tooltip.classList.contains('show')).toBe(true);
    expect(tooltip.classList.contains('d-none')).toBe(false);
    first.remove();
    second.remove();
  });

  it('should move Popper to a new reference element when the tooltip shows again inside the hide window', async () => {
    const first = document.createElement('span');
    const second = document.createElement('span');
    document.body.append(first, second);
    const reference = signal({ elementRef: new ElementRef(first) } as ElementRefDirective);
    createWithContent(inputBinding('cTooltipRef', reference));
    const tooltip = await showTooltip();
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
    const hiddenAtOnce = tooltip.classList.contains('d-none');
    await vi.runAllTimersAsync();
    observer.disconnect();

    expect(hiddenAtOnce).toBe(false);
    expect(removedNodes).not.toContain(tooltip);
    expect(measured).toHaveBeenCalled();
    expect(document.querySelector('.tooltip')).toBe(tooltip);
    expect(tooltip.classList.contains('show')).toBe(true);
    expect(tooltip.classList.contains('d-none')).toBe(false);
    first.remove();
    second.remove();
  });

  it('should move Popper to a new reference element and reveal at the original time inside the show window', async () => {
    const first = document.createElement('span');
    const second = document.createElement('span');
    document.body.append(first, second);
    const reference = signal({ elementRef: new ElementRef(first) } as ElementRefDirective);
    createWithContent(inputBinding('cTooltipRef', reference));
    visible.set(true);
    fixture.detectChanges();
    await vi.advanceTimersByTimeAsync(50);
    const measured = vi.spyOn(second, 'getBoundingClientRect');

    reference.set({ elementRef: new ElementRef(second) } as ElementRefDirective);
    fixture.detectChanges();
    await vi.advanceTimersByTimeAsync(99);
    const tooltip = document.querySelector('.tooltip') as HTMLElement;
    expect(tooltip.classList.contains('d-none')).toBe(true);

    await vi.advanceTimersByTimeAsync(1);
    fixture.detectChanges();
    expect(measured).toHaveBeenCalled();
    expect(tooltip.classList.contains('d-none')).toBe(false);
    expect(tooltip.classList.contains('show')).toBe(true);
    first.remove();
    second.remove();
  });

  it('should apply popper options changed after the tooltip showed on the next show', async () => {
    const options = signal<Partial<Options>>({});
    createWithContent(inputBinding('cTooltipOptions', options));
    expect((await showTooltip()).style.position).toBe('absolute');
    await hideTooltip();

    options.set({ strategy: 'fixed' });
    fixture.detectChanges();
    expect((await showTooltip()).style.position).toBe('fixed');
  });

  it('should leave Popper alone when the popper options change while shown', async () => {
    const options = signal<Partial<Options>>({});
    createWithContent(inputBinding('cTooltipOptions', options));
    const tooltip = await showTooltip();
    const add = vi.spyOn(window, 'addEventListener');
    const remove = vi.spyOn(window, 'removeEventListener');

    options.set({ strategy: 'fixed' });
    fixture.detectChanges();
    await vi.runAllTimersAsync();

    expect(document.querySelector('.tooltip')).toBe(tooltip);
    expect(tooltip.style.position).toBe('absolute');
    expect(resizeCalls(add)).toBe(0);
    expect(resizeCalls(remove)).toBe(0);
  });

  it('should apply a placement from the popper options while shown', async () => {
    const options = signal<Partial<Options>>({ placement: 'left' });
    createWithContent(inputBinding('cTooltipOptions', options));
    const tooltip = await showTooltip();
    expect(tooltip.getAttribute('data-popper-placement')).toBe('left');

    options.set({ placement: 'right' });
    fixture.detectChanges();
    await vi.runAllTimersAsync();

    expect(document.querySelector('.tooltip')).toBe(tooltip);
    expect(tooltip.getAttribute('data-popper-placement')).toBe('right');
  });

  it('should drop a popper option removed from the options', async () => {
    const options = signal<Partial<Options>>({ strategy: 'fixed' });
    createWithContent(inputBinding('cTooltipOptions', options));
    expect((await showTooltip()).style.position).toBe('fixed');
    await hideTooltip();

    options.set({});
    fixture.detectChanges();
    expect((await showTooltip()).style.position).toBe('absolute');
  });

  it('should let the placement in the options win over the placement input', async () => {
    createWithContent(
      inputBinding('cTooltipPlacement', () => 'bottom'),
      inputBinding('cTooltipOptions', () => ({ placement: 'left' }) as Partial<Options>)
    );
    const tooltip = await showTooltip();

    expect(tooltip.getAttribute('data-popper-placement')).toBe('left');
  });

  it('should not close the tooltip when a non-Escape key is pressed', async () => {
    visible.set(true);
    fixture.detectChanges();
    await vi.runAllTimersAsync();
    expect(document.querySelector('.tooltip.show')).toBeTruthy();

    document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Enter' }));
    document.dispatchEvent(new KeyboardEvent('keydown', { key: 'a' }));
    document.dispatchEvent(new KeyboardEvent('keydown', { key: ' ' }));
    fixture.detectChanges();
    await vi.runAllTimersAsync();

    expect(visible()).toBe(true);
    expect(document.querySelector('.tooltip.show')).toBeTruthy();
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

  it('should hide the tooltip when its host leaves the viewport', async () => {
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
});

@Component({
  template: `<button cTooltip="tip" aria-describedby="hint" [cTooltipVisible]="shown()">Open</button>`,
  imports: [TooltipDirective]
})
class StaticDescribedByTooltipComponent {
  readonly shown = signal(false);
}

@Component({
  template: `<button cTooltip="tip" [attr.aria-describedby]="'hint'" [cTooltipVisible]="shown()">Open</button>`,
  imports: [TooltipDirective]
})
class BoundDescribedByTooltipComponent {
  readonly shown = signal(false);
}

@Component({
  template: `<button
    cTooltip="tip"
    cPopover="pop"
    aria-describedby="hint"
    [cTooltipVisible]="tooltipShown()"
    [cPopoverVisible]="popoverShown()"
  >
    Open
  </button>`,
  imports: [TooltipDirective, PopoverDirective]
})
class TooltipAndPopoverComponent {
  readonly tooltipShown = signal(false);
  readonly popoverShown = signal(false);
}

@Component({
  selector: 'c-hint-field',
  template: '',
  host: { '[attr.aria-describedby]': 'hint()' }
})
class HintFieldTooltipComponent {
  readonly hint = input<string | null>('hint');
}

@Component({
  template: `<c-hint-field cTooltip="tip" [cTooltipVisible]="true" />`,
  imports: [HintFieldTooltipComponent, TooltipDirective]
})
class HostBindingDescribedByTooltipComponent {}

@Component({
  selector: 'c-changing-hint-tooltip',
  template: `<button cTooltip="tip" [attr.aria-describedby]="hint()" [cTooltipVisible]="shown()">Open</button>`,
  imports: [TooltipDirective]
})
class ChangingBoundDescribedByTooltipComponent {
  readonly hint = signal<string | null>('hint');
  readonly shown = signal(false);
}

@Component({
  template: `<c-hint-field cTooltip="tip" [hint]="hint()" [cTooltipVisible]="shown()" />`,
  imports: [HintFieldTooltipComponent, TooltipDirective]
})
class ChangingHostBindingDescribedByTooltipComponent {
  readonly hint = signal<string | null>('hint');
  readonly shown = signal(false);
}

@Component({
  selector: 'c-detect-changes-hint-tooltip',
  template: `<button cTooltip="tip" [attr.aria-describedby]="hint" [cTooltipVisible]="shown()">Open</button>`,
  imports: [TooltipDirective]
})
class DetectChangesDescribedByTooltipComponent {
  readonly changeDetectorRef = inject(ChangeDetectorRef);
  readonly shown = signal(false);
  hint: string | null = 'hint';
}

@Component({
  template: `<button cTooltip="tip" aria-describedby="hint  extra">Open</button>`,
  imports: [TooltipDirective]
})
class SpacedDescribedByTooltipComponent {}

@Component({
  template: `<button cTooltip="tip" cTooltipTrigger="focus">Open</button>`,
  imports: [TooltipDirective]
})
class FocusTooltipComponent {}

@Component({
  template: `<button
    [cTooltip]="tip()"
    [cPopover]="pop()"
    [cTooltipVisible]="tooltipShown()"
    [cPopoverVisible]="popoverShown()"
  >
    Open
  </button>`,
  imports: [TooltipDirective, PopoverDirective]
})
class DynamicTooltipAndPopoverComponent {
  readonly tip = signal('tip');
  readonly pop = signal('pop');
  readonly tooltipShown = signal(false);
  readonly popoverShown = signal(false);
}

@Component({
  template: `
    <button [cTooltip]="useTemplate() ? content : 'text'" [cTooltipVisible]="true">Open</button>
    <ng-template #content><b id="templateContent">Template content</b></ng-template>
  `,
  imports: [TooltipDirective]
})
class TemplateSwapTooltipComponent {
  readonly useTemplate = signal(false);
}

describe('TooltipDirective with template content', () => {
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

  it('should swap between text and template content while shown', async () => {
    const fixture = TestBed.createComponent(TemplateSwapTooltipComponent);
    fixture.autoDetectChanges();
    await vi.runAllTimersAsync();
    const tooltip = document.querySelector('.tooltip') as HTMLElement;
    const inner = tooltip.querySelector('.tooltip-inner') as HTMLElement;
    expect(inner.textContent?.trim()).toBe('text');

    fixture.componentInstance.useTemplate.set(true);
    fixture.detectChanges();
    await vi.runAllTimersAsync();
    expect(document.querySelector('.tooltip')).toBe(tooltip);
    expect(inner.querySelector('#templateContent')).not.toBeNull();
    expect(inner.textContent?.trim()).toBe('Template content');

    fixture.componentInstance.useTemplate.set(false);
    fixture.detectChanges();
    await vi.runAllTimersAsync();
    expect(inner.querySelector('#templateContent')).toBeNull();
    expect(inner.textContent?.trim()).toBe('text');
    fixture.destroy();
  });
});

describe("TooltipDirective with the author's aria-describedby", () => {
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
    ['a static attribute', StaticDescribedByTooltipComponent],
    ['an attribute binding', BoundDescribedByTooltipComponent]
  ] as [string, Type<{ shown: WritableSignal<boolean> }>][])(
    'should keep %s and add only the tooltip id',
    async (_, type) => {
      const fixture = TestBed.createComponent(type);
      fixture.autoDetectChanges();
      await vi.runAllTimersAsync();
      const host = fixture.nativeElement.querySelector('button') as HTMLButtonElement;
      expect(host.getAttribute('aria-describedby')).toBe('hint');

      fixture.componentInstance.shown.set(true);
      fixture.detectChanges();
      await vi.runAllTimersAsync();
      const tooltip = document.querySelector('.tooltip') as HTMLElement;
      expect(host.getAttribute('aria-describedby')).toBe(`hint ${tooltip.id}`);

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
  it.each([
    ['tooltip', 'popover'],
    ['popover', 'tooltip']
  ] as const)('should keep the other id when the %s hides first on a shared trigger', async (first, second) => {
    const fixture = TestBed.createComponent(TooltipAndPopoverComponent);
    fixture.autoDetectChanges();
    await vi.runAllTimersAsync();
    const host = fixture.nativeElement.querySelector('button') as HTMLButtonElement;
    const shown = { tooltip: fixture.componentInstance.tooltipShown, popover: fixture.componentInstance.popoverShown };

    shown.tooltip.set(true);
    fixture.detectChanges();
    await vi.runAllTimersAsync();
    shown.popover.set(true);
    fixture.detectChanges();
    await vi.runAllTimersAsync();
    const ids = {
      tooltip: (document.querySelector('.tooltip') as HTMLElement).id,
      popover: (document.querySelector('.popover') as HTMLElement).id
    };
    expect(host.getAttribute('aria-describedby')).toBe(`hint ${ids.tooltip} ${ids.popover}`);

    shown[first].set(false);
    fixture.detectChanges();
    await vi.runAllTimersAsync();
    expect(host.getAttribute('aria-describedby')).toBe(`hint ${ids[second]}`);

    shown[second].set(false);
    fixture.detectChanges();
    await vi.runAllTimersAsync();
    expect(host.getAttribute('aria-describedby')).toBe('hint');
    fixture.destroy();
  });

  it('should add its id after a host binding on the trigger writes aria-describedby', async () => {
    const fixture = TestBed.createComponent(HostBindingDescribedByTooltipComponent);
    fixture.autoDetectChanges();
    await vi.runAllTimersAsync();
    const host = fixture.nativeElement.querySelector('c-hint-field') as HTMLElement;
    const tooltip = document.querySelector('.tooltip') as HTMLElement;
    expect(host.getAttribute('aria-describedby')).toBe(`hint ${tooltip.id}`);
    fixture.destroy();
  });

  it.each([
    ['an attribute binding', ChangingBoundDescribedByTooltipComponent, 'button'],
    ['a host binding', ChangingHostBindingDescribedByTooltipComponent, 'c-hint-field']
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
      const tooltip = document.querySelector('.tooltip') as HTMLElement;
      expect(host.getAttribute('aria-describedby')).toBe(`hint ${tooltip.id}`);

      fixture.componentInstance.hint.set('error');
      fixture.detectChanges();
      await vi.runAllTimersAsync();
      expect(host.getAttribute('aria-describedby')).toBe(`error ${tooltip.id}`);

      fixture.componentInstance.hint.set(null);
      fixture.detectChanges();
      await vi.runAllTimersAsync();
      expect(host.getAttribute('aria-describedby')).toBe(tooltip.id);

      fixture.componentInstance.shown.set(false);
      fixture.detectChanges();
      await vi.runAllTimersAsync();
      expect(host.getAttribute('aria-describedby')).toBeNull();
      fixture.destroy();
    }
  );

  it('should keep its id when a local detectChanges rewrites aria-describedby while shown', async () => {
    const fixture = TestBed.createComponent(DetectChangesDescribedByTooltipComponent);
    fixture.autoDetectChanges();
    await vi.runAllTimersAsync();
    const host = fixture.nativeElement.querySelector('button') as HTMLButtonElement;

    fixture.componentInstance.shown.set(true);
    fixture.detectChanges();
    await vi.runAllTimersAsync();
    const tooltip = document.querySelector('.tooltip') as HTMLElement;
    expect(host.getAttribute('aria-describedby')).toBe(`hint ${tooltip.id}`);

    fixture.componentInstance.hint = 'error';
    fixture.componentInstance.changeDetectorRef.detectChanges();
    expect(host.getAttribute('aria-describedby')).toBe(`error ${tooltip.id}`);
    fixture.destroy();
  });

  it('should drop its id when local detectChanges show and hide it before a tick', async () => {
    const fixture = TestBed.createComponent(DetectChangesDescribedByTooltipComponent);
    fixture.autoDetectChanges();
    await vi.runAllTimersAsync();
    const host = fixture.nativeElement.querySelector('button') as HTMLButtonElement;
    const { changeDetectorRef, shown } = fixture.componentInstance;

    shown.set(true);
    changeDetectorRef.detectChanges();
    expect(host.getAttribute('aria-describedby')).toMatch(/^hint tooltip-/);
    shown.set(false);
    changeDetectorRef.detectChanges();
    expect(host.getAttribute('aria-describedby')).toBe('hint');
    await vi.runAllTimersAsync();
    expect(host.getAttribute('aria-describedby')).toBe('hint');
    fixture.destroy();
  });

  it("should leave the author's value untouched while hidden", async () => {
    const fixture = TestBed.createComponent(SpacedDescribedByTooltipComponent);
    fixture.autoDetectChanges();
    await vi.runAllTimersAsync();
    fixture.detectChanges();
    const host = fixture.nativeElement.querySelector('button') as HTMLButtonElement;
    expect(host.getAttribute('aria-describedby')).toBe('hint  extra');
    fixture.destroy();
  });

  it('should describe the host as soon as a trigger event shows the tooltip again', async () => {
    const fixture = TestBed.createComponent(FocusTooltipComponent);
    fixture.autoDetectChanges();
    await vi.runAllTimersAsync();
    const host = fixture.nativeElement.querySelector('button') as HTMLButtonElement;

    host.dispatchEvent(new Event('focus'));
    await vi.runAllTimersAsync();
    host.dispatchEvent(new Event('blur'));
    await vi.runAllTimersAsync();
    host.dispatchEvent(new Event('focus'));
    await vi.advanceTimersByTimeAsync(20);
    expect(host.getAttribute('aria-describedby')).toMatch(/^tooltip-/);
    fixture.destroy();
  });

  it.each([
    ['tooltip', 'popover'],
    ['popover', 'tooltip']
  ] as const)(
    'should leave the other one in place when the %s, shown first, hides on a shared trigger',
    async (first, second) => {
      const fixture = TestBed.createComponent(TooltipAndPopoverComponent);
      fixture.autoDetectChanges();
      await vi.runAllTimersAsync();
      const shown = {
        tooltip: fixture.componentInstance.tooltipShown,
        popover: fixture.componentInstance.popoverShown
      };

      shown[first].set(true);
      fixture.detectChanges();
      await vi.runAllTimersAsync();
      shown[second].set(true);
      fixture.detectChanges();
      await vi.runAllTimersAsync();
      const elements = {
        tooltip: document.querySelector('.tooltip') as HTMLElement,
        popover: document.querySelector('.popover') as HTMLElement
      };

      shown[first].set(false);
      fixture.detectChanges();
      await vi.runAllTimersAsync();

      expect(elements[first].isConnected).toBe(false);
      expect(elements[second].isConnected).toBe(true);
      expect(elements[second].hasAttribute('data-popper-placement')).toBe(true);
      fixture.destroy();
    }
  );

  it('should keep an open popover when the tooltip on its trigger is torn down', async () => {
    const fixture = TestBed.createComponent(DynamicTooltipAndPopoverComponent);
    const host = fixture.componentInstance;
    fixture.autoDetectChanges();
    host.popoverShown.set(true);
    fixture.detectChanges();
    await vi.runAllTimersAsync();
    const popover = document.querySelector('.popover') as HTMLElement;

    host.tip.set('');
    host.tooltipShown.set(true);
    fixture.detectChanges();
    await vi.runAllTimersAsync();
    expect(popover.isConnected).toBe(true);

    host.tip.set('changed');
    fixture.detectChanges();
    await vi.runAllTimersAsync();
    expect(popover.isConnected).toBe(true);
    expect(document.querySelector('.tooltip.show')).toBeTruthy();
    fixture.destroy();
  });

  it('should keep an open tooltip when the popover on its trigger is torn down', async () => {
    const fixture = TestBed.createComponent(DynamicTooltipAndPopoverComponent);
    const host = fixture.componentInstance;
    fixture.autoDetectChanges();
    host.tooltipShown.set(true);
    fixture.detectChanges();
    await vi.runAllTimersAsync();
    const tooltip = document.querySelector('.tooltip') as HTMLElement;

    host.pop.set('');
    host.popoverShown.set(true);
    fixture.detectChanges();
    await vi.runAllTimersAsync();
    expect(tooltip.isConnected).toBe(true);

    host.pop.set('changed');
    fixture.detectChanges();
    await vi.runAllTimersAsync();
    expect(tooltip.isConnected).toBe(true);
    expect(document.querySelector('.popover.show')).toBeTruthy();
    fixture.destroy();
  });
});
