import {
  ChangeDetectorRef,
  Component,
  DOCUMENT,
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
import { PopoverDirective } from './popover.directive';
import { Triggers } from '../coreui.types';

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
    visible.set(true);
    fixture.detectChanges();

    const remove = vi.spyOn(window, 'removeEventListener');
    await vi.runAllTimersAsync();

    expect(remove.mock.calls.some((call) => call[0] === 'resize')).toBe(false);
    expect(document.querySelector('.popover.show')).toBeTruthy();
  });

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

  it('should remove the popover at once when the content empties while visible', async () => {
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
    expect(document.querySelector('.popover')).toBeTruthy();

    content.set('');
    fixture.detectChanges();

    expect(document.querySelector('.popover')).toBeNull();
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
