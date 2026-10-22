/// <reference types="vitest/globals" />
import { CdkTrapFocus } from '@angular/cdk/a11y';
import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, ComponentRef, DOCUMENT, viewChild, ViewContainerRef } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { NEVER, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import type { MockInstance } from 'vitest';

import { BackdropService } from '../../backdrop/backdrop.service';
import { OffcanvasComponent } from './offcanvas.component';
import { OffcanvasService } from '../offcanvas.service';

const holdTransition = (element: Element) => {
  let end!: () => void;
  let running = true;
  const finished = new Promise<void>((resolve) => {
    end = () => {
      running = false;
      resolve();
    };
  });
  Object.defineProperty(element, 'getAnimations', {
    configurable: true,
    value: () => (running ? [{ transitionProperty: 'transform', finished }] : [])
  });
  return end;
};

@Component({
  template: '<ng-container #outlet />'
})
class TestComponent {
  readonly outlet = viewChild.required('outlet', { read: ViewContainerRef });
}

describe('OffcanvasComponent', () => {
  let component: OffcanvasComponent;
  let componentRef: ComponentRef<OffcanvasComponent>;
  let element: HTMLElement;
  let fixture: ComponentFixture<TestComponent>;
  let document: Document;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OffcanvasComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(TestComponent);
    componentRef = fixture.componentInstance.outlet().createComponent(OffcanvasComponent);
    component = componentRef.instance;
    element = componentRef.location.nativeElement;
    element.style.position = 'fixed';
    await fixture.whenStable();
    await new Promise((resolve) => setTimeout(resolve));

    document = TestBed.inject(DOCUMENT);

    vi.useFakeTimers();
  });

  afterEach(async () => {
    if (!componentRef.hostView.destroyed) {
      component.visible.set(false);
    }
    fixture.detectChanges();
    await vi.runAllTimersAsync();
    vi.useRealTimers();
  });

  it('should create', async () => {
    expect(component).toBeTruthy();
  });

  it('should clear the backdrop when the component is destroyed while visible', async () => {
    componentRef.setInput('visible', true);
    fixture.detectChanges();
    await vi.runAllTimersAsync();
    const backdrop: HTMLElement = TestBed.inject(BackdropService).activeBackdrop;
    expect(backdrop.classList).toContain('offcanvas-backdrop');
    expect(backdrop.isConnected).toBe(true);

    fixture.destroy();
    await vi.runAllTimersAsync();

    expect(backdrop.isConnected).toBe(false);
  });

  it('should have css classes', () => {
    expect(element.classList.contains('offcanvas')).toBe(true);
    expect(element.classList.contains('offcanvas-start')).toBe(true);
    expect(element.getAttribute('id')).toContain('offcanvas-start-');
  });

  it('should give the host a tabindex only while its content is active', async () => {
    expect(element.hasAttribute('tabindex')).toBe(false);
    componentRef.setInput('visible', true);
    fixture.detectChanges();
    await vi.runAllTimersAsync();
    expect(element.getAttribute('tabindex')).toBe('-1');

    const end = holdTransition(element);
    onTestFinished(end);
    componentRef.setInput('visible', false);
    fixture.detectChanges();
    expect(element.hasAttribute('tabindex')).toBe(false);
    end();
    await vi.runAllTimersAsync();
    expect(element.hasAttribute('tabindex')).toBe(false);

    element.style.position = 'static';
    componentRef.changeDetectorRef.markForCheck();
    await vi.runAllTimersAsync();
    expect(element.getAttribute('tabindex')).toBe('-1');
  });

  it('should react to visible changes', async () => {
    expect(componentRef.instance.visible()).toBe(false);
    expect(element.inert).toBe(true);
    componentRef.setInput('visible', true);
    fixture.detectChanges();
    await vi.runAllTimersAsync();
    expect(componentRef.instance.visible()).toBe(true);
    expect(element.inert).toBeFalsy();
  });

  it('should close offcanvas to Esc keydown event', async () => {
    componentRef.setInput('visible', true);
    fixture.detectChanges();
    expect(componentRef.instance.visible()).toBe(true);
    expect(element.inert).toBeFalsy();
    document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape' }));
    await vi.runAllTimersAsync();
    fixture.detectChanges();
    expect(componentRef.instance.visible()).toBe(false);
    expect(element.inert).toBe(true);
  });

  it('should not close offcanvas on an Esc keydown another component already handled', async () => {
    componentRef.setInput('visible', true);
    fixture.detectChanges();
    const event = new KeyboardEvent('keydown', { key: 'Escape', cancelable: true });
    event.preventDefault();
    document.dispatchEvent(event);
    await vi.runAllTimersAsync();
    fixture.detectChanges();
    expect(componentRef.instance.visible()).toBe(true);
  });

  it('should close offcanvas on backdrop click', async () => {
    componentRef.setInput('backdrop', true);
    componentRef.setInput('visible', true);
    fixture.detectChanges();
    expect(componentRef.instance.visible()).toBe(true);
    expect(componentRef.location.nativeElement.classList).toContain('show');
    const backdrop: HTMLElement = TestBed.inject(BackdropService).activeBackdrop;
    expect(backdrop.classList).toContain('offcanvas-backdrop');
    await vi.runAllTimersAsync();
    // console.log(backdrop);
    expect(backdrop?.classList.contains('show')).toBe(true);
    backdrop?.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    await vi.runAllTimersAsync();
    fixture.detectChanges();
    await vi.runAllTimersAsync();
    // console.log(backdrop);
    expect(componentRef.location.nativeElement.classList.contains('show')).toBe(false);
  });

  it('should return breakpoint value', async () => {
    componentRef.setInput('responsive', 'false');
    fixture.detectChanges();
    await vi.runAllTimersAsync();
    expect(component.responsiveBreakpoint).toBe(false);
  });

  it('should not carry the hiding class before it was ever shown', async () => {
    await vi.runAllTimersAsync();
    expect(element.classList.contains('hiding')).toBe(false);
    expect(element.classList.contains('showing')).toBe(false);
  });

  it('should add the hiding class only for a real hide transition', async () => {
    componentRef.setInput('visible', true);
    fixture.detectChanges();
    await vi.runAllTimersAsync();
    componentRef.setInput('visible', false);
    fixture.detectChanges();
    expect(element.classList.contains('hiding')).toBe(true);
    await vi.runAllTimersAsync();
    expect(element.classList.contains('hiding')).toBe(false);
  });

  it('should render role and aria-modal only while open', async () => {
    expect(element.getAttribute('role')).toBeNull();
    expect(element.getAttribute('aria-modal')).toBeNull();
    componentRef.setInput('visible', true);
    fixture.detectChanges();
    expect(element.getAttribute('role')).toBe('dialog');
    expect(element.getAttribute('aria-modal')).toBe('true');
    componentRef.setInput('visible', false);
    fixture.detectChanges();
    expect(element.getAttribute('role')).toBeNull();
    expect(element.getAttribute('aria-modal')).toBeNull();
  });

  it('should set inert only when the closed offcanvas is positioned as a panel', async () => {
    const content: HTMLElement = fixture.debugElement.query(By.directive(CdkTrapFocus)).nativeElement;
    expect(element.inert).toBe(true);
    expect(content.inert).toBe(true);
    element.style.position = 'static';
    componentRef.changeDetectorRef.markForCheck();
    await vi.runAllTimersAsync();
    expect(element.inert).toBeFalsy();
    expect(content.inert).toBeFalsy();
  });

  it('should re-evaluate the panel position on window resize', async () => {
    expect(componentRef.instance.ariaHidden()).toBe(true);
    element.style.position = 'static';
    window.dispatchEvent(new Event('resize'));
    expect(componentRef.instance.ariaHidden()).toBeNull();
  });

  it('should close when a window resize lays the open offcanvas out in place', async () => {
    componentRef.setInput('visible', true);
    fixture.detectChanges();
    await vi.runAllTimersAsync();
    const backdrop: HTMLElement = TestBed.inject(BackdropService).activeBackdrop;
    expect(backdrop.isConnected).toBe(true);
    window.dispatchEvent(new Event('resize'));
    fixture.detectChanges();
    expect(componentRef.instance.visible()).toBe(true);
    element.style.position = 'static';
    window.dispatchEvent(new Event('resize'));
    fixture.detectChanges();
    expect(componentRef.instance.visible()).toBe(false);
    expect(element.getAttribute('role')).toBeNull();
    await vi.runAllTimersAsync();
    expect(backdrop.isConnected).toBe(false);
  });

  it('should stay open on resize when it was never positioned as a panel', async () => {
    element.style.position = 'absolute';
    componentRef.setInput('visible', true);
    fixture.detectChanges();
    window.dispatchEvent(new Event('resize'));
    fixture.detectChanges();
    expect(componentRef.instance.visible()).toBe(true);
  });

  it('should not close on resize after reopening in place', async () => {
    componentRef.setInput('visible', true);
    fixture.detectChanges();
    window.dispatchEvent(new Event('resize'));
    fixture.detectChanges();
    componentRef.setInput('visible', false);
    fixture.detectChanges();
    element.style.position = 'static';
    componentRef.setInput('visible', true);
    fixture.detectChanges();
    window.dispatchEvent(new Event('resize'));
    fixture.detectChanges();
    expect(componentRef.instance.visible()).toBe(true);
  });

  it('should re-evaluate the panel position when responsive changes', async () => {
    element.style.position = 'static';
    componentRef.setInput('responsive', 'lg');
    fixture.detectChanges();
    fixture.detectChanges();
    expect(element.classList.contains('offcanvas-lg')).toBe(true);
    expect(element.inert).toBeFalsy();
  });

  it('should enable the focus trap only while open', async () => {
    const trap = fixture.debugElement.query(By.directive(CdkTrapFocus)).injector.get(CdkTrapFocus);
    expect(trap.enabled).toBe(false);
    expect(trap.autoCapture).toBe(false);
    componentRef.setInput('visible', true);
    fixture.detectChanges();
    expect(trap.enabled).toBe(true);
    componentRef.setInput('visible', false);
    fixture.detectChanges();
    expect(trap.enabled).toBe(false);
  });

  describe('end of the transitions and scroll lock', () => {
    let host: HTMLElement;

    const settle = async () => {
      fixture.detectChanges();
      await vi.runAllTimersAsync();
    };
    const locked = () => document.body.style.overflow === 'hidden';

    beforeEach(() => {
      host = element;
      expect(locked()).toBe(false);
    });

    afterEach(() => {
      document.body.removeAttribute('dir');
    });

    it('should take showing off once the show transition ends', async () => {
      const end = holdTransition(host);
      componentRef.setInput('visible', true);
      await settle();
      expect(host.classList.contains('showing')).toBe(true);

      end();
      await vi.runAllTimersAsync();
      expect(host.classList.contains('showing')).toBe(false);
    });

    it('should keep the panel hit-testable and its content inert until the hide ends', async () => {
      const content: HTMLElement = fixture.debugElement.query(By.directive(CdkTrapFocus)).nativeElement;
      componentRef.setInput('visible', true);
      await settle();
      expect(content.inert).toBeFalsy();
      const end = holdTransition(host);
      componentRef.setInput('visible', false);
      await settle();
      expect(content.inert).toBe(true);
      expect(host.inert).toBeFalsy();
      expect(host.getAttribute('role')).toBeNull();
      expect(host.getAttribute('aria-modal')).toBeNull();

      end();
      await settle();
      expect(host.inert).toBe(true);
    });

    it('should release the lock only once the close transition ends', async () => {
      componentRef.setInput('visible', true);
      await settle();
      const end = holdTransition(host);

      componentRef.setInput('visible', false);
      await settle();
      expect(locked()).toBe(true);
      expect(host.classList.contains('hiding')).toBe(true);

      end();
      await vi.runAllTimersAsync();
      expect(locked()).toBe(false);
      expect(host.classList.contains('hiding')).toBe(false);
    });

    it('should remove the rtl padding after closing without a backdrop', async () => {
      document.body.setAttribute('dir', 'rtl');
      componentRef.setInput('backdrop', false);
      componentRef.setInput('visible', true);
      await settle();
      expect(document.body.style.paddingLeft).toContain('px');

      componentRef.setInput('visible', false);
      await settle();
      expect(document.body.style.paddingLeft).toBe('');
      expect(document.body.style.paddingRight).toBe('');
    });

    it('should keep the lock when reopened while hiding', async () => {
      componentRef.setInput('visible', true);
      await settle();
      const end = holdTransition(host);
      componentRef.setInput('visible', false);
      await settle();

      componentRef.setInput('visible', true);
      await settle();
      end();
      await vi.runAllTimersAsync();
      expect(locked()).toBe(true);
      expect(host.classList.contains('hiding')).toBe(false);
    });

    it('should finish the hide when opened and closed again in one tick while hiding', async () => {
      componentRef.setInput('visible', true);
      await settle();
      const end = holdTransition(host);
      componentRef.setInput('visible', false);
      await settle();

      component.visible.set(true);
      component.visible.set(false);
      await settle();
      end();
      await vi.runAllTimersAsync();
      expect(host.classList.contains('hiding')).toBe(false);
      expect(locked()).toBe(false);
    });

    it('should not start a hide again once fully hidden', async () => {
      componentRef.setInput('visible', true);
      await settle();
      componentRef.setInput('visible', false);
      await settle();

      component.visible.set(true);
      component.visible.set(false);
      fixture.detectChanges();
      expect(host.classList.contains('hiding')).toBe(false);
    });

    it('should finish a hide closed again after its wait gave way to a reopen', async () => {
      componentRef.setInput('visible', true);
      await settle();
      const end = holdTransition(host);
      componentRef.setInput('visible', false);
      await settle();

      component.visible.set(true);
      end();
      for (let i = 0; i < 10; i++) {
        await Promise.resolve();
      }
      component.visible.set(false);
      await settle();
      expect(host.classList.contains('hiding')).toBe(false);
      expect(locked()).toBe(false);
    });

    it('should not finish a hide when reopened before the next render', async () => {
      componentRef.setInput('visible', true);
      await settle();
      const end = holdTransition(host);
      componentRef.setInput('visible', false);
      await settle();

      component.visible.set(true);
      end();
      for (let i = 0; i < 10; i++) {
        await Promise.resolve();
      }
      expect(locked()).toBe(true);
      expect(host.classList.contains('hiding')).toBe(true);
    });

    it('should not keep the lock when reopened with scroll on while hiding', async () => {
      componentRef.setInput('visible', true);
      await settle();
      const end = holdTransition(host);
      componentRef.setInput('visible', false);
      fixture.detectChanges();

      componentRef.setInput('scroll', true);
      componentRef.setInput('visible', true);
      await settle();
      expect(locked()).toBe(false);

      end();
      await vi.runAllTimersAsync();
      expect(locked()).toBe(false);
      expect(host.classList.contains('hiding')).toBe(false);
    });

    it('should hold the lock of a hiding offcanvas until its transition ends while another opens with scroll', async () => {
      const other = fixture.componentInstance.outlet().createComponent(OffcanvasComponent);
      onTestFinished(() => other.destroy());
      other.setInput('scroll', true);
      componentRef.setInput('visible', true);
      await settle();
      const backdrop = TestBed.inject(BackdropService).activeBackdrop as HTMLElement;
      const end = holdTransition(host);

      componentRef.setInput('visible', false);
      other.setInput('visible', true);
      await settle();
      expect(locked()).toBe(true);
      expect(TestBed.inject(BackdropService).activeBackdrop).toBe(backdrop);
      expect(backdrop.classList.contains('show')).toBe(true);

      end();
      await vi.runAllTimersAsync();
      expect(locked()).toBe(false);
      other.instance.visible.set(false);
      await settle();
    });

    it('should finish only the latest hide after closing, reopening and closing again', async () => {
      componentRef.setInput('visible', true);
      await settle();
      const firstEnd = holdTransition(host);
      componentRef.setInput('visible', false);
      await settle();
      componentRef.setInput('visible', true);
      await settle();
      const secondEnd = holdTransition(host);
      componentRef.setInput('visible', false);
      await settle();

      firstEnd();
      await vi.runAllTimersAsync();
      expect(host.classList.contains('hiding')).toBe(true);
      expect(locked()).toBe(true);

      secondEnd();
      await vi.runAllTimersAsync();
      expect(host.classList.contains('hiding')).toBe(false);
      expect(locked()).toBe(false);
    });

    it('should keep the lock when closed and reopened in one tick', async () => {
      componentRef.setInput('visible', true);
      await settle();
      const backdrop = TestBed.inject(BackdropService).activeBackdrop as HTMLElement;

      component.visible.set(false);
      component.visible.set(true);
      await settle();
      expect(locked()).toBe(true);
      expect(TestBed.inject(BackdropService).activeBackdrop).toBe(backdrop);
      expect(backdrop.isConnected).toBe(true);
    });

    it('should release the lock at once when destroyed while open', async () => {
      componentRef.setInput('visible', true);
      await settle();

      fixture.destroy();
      expect(locked()).toBe(false);
    });

    it('should not finish a hide that ends after it was destroyed', async () => {
      componentRef.setInput('visible', true);
      await settle();
      const end = holdTransition(host);
      componentRef.setInput('visible', false);
      await settle();

      fixture.destroy();
      end();
      await vi.runAllTimersAsync();
      expect(host.classList.contains('hiding')).toBe(true);
    });
  });

  describe('focus return', () => {
    let input: HTMLInputElement;
    let service: OffcanvasService;
    let trigger: HTMLButtonElement;

    const toggle = async (show: boolean | 'toggle', toggleTrigger?: HTMLElement) => {
      service.toggle({ show, id: component.id(), trigger: toggleTrigger });
      fixture.detectChanges();
      await vi.runAllTimersAsync();
    };

    beforeEach(() => {
      service = TestBed.inject(OffcanvasService);
      input = document.createElement('input');
      trigger = document.createElement('button');
      document.body.append(input, trigger);
    });

    afterEach(() => {
      input.remove();
      trigger.remove();
    });

    it('should return focus to the toggle that opened it', async () => {
      const closeButton = document.createElement('button');
      element.append(closeButton);
      input.focus();
      await toggle('toggle', trigger);
      closeButton.focus();
      await toggle('toggle', closeButton);
      expect(document.activeElement).toBe(trigger);
    });

    it('should return focus to the element focused before opening without a toggle', async () => {
      input.focus();
      componentRef.setInput('visible', true);
      fixture.detectChanges();
      await vi.runAllTimersAsync();
      expect(document.activeElement).toBe(element);
      componentRef.setInput('visible', false);
      fixture.detectChanges();
      expect(document.activeElement).toBe(input);
    });

    it.each([true, false])('should not take its delayed focus once closed (hide transition held: %s)', async (held) => {
      input.focus();
      if (held) {
        onTestFinished(holdTransition(element));
      }
      componentRef.setInput('visible', true);
      fixture.detectChanges();
      componentRef.setInput('visible', false);
      fixture.detectChanges();
      await vi.runAllTimersAsync();
      expect(document.activeElement).toBe(input);
    });

    it('should take focus through setFocus while closed only when laid out in place', async () => {
      input.focus();
      component.setFocus();
      await vi.runAllTimersAsync();
      expect(document.activeElement).toBe(input);

      element.style.position = 'static';
      componentRef.changeDetectorRef.markForCheck();
      await vi.runAllTimersAsync();
      component.setFocus();
      await vi.runAllTimersAsync();
      expect(document.activeElement).toBe(element);
    });

    it('should keep the element focused before opening when an input changes while open', async () => {
      input.focus();
      componentRef.setInput('visible', true);
      fixture.detectChanges();
      await vi.runAllTimersAsync();
      componentRef.setInput('backdrop', 'static');
      fixture.detectChanges();
      await vi.runAllTimersAsync();
      componentRef.setInput('visible', false);
      fixture.detectChanges();
      expect(document.activeElement).toBe(input);
    });

    it('should not reuse the toggle of an earlier opening', async () => {
      await toggle(true, trigger);
      await toggle(false);
      input.focus();
      componentRef.setInput('visible', true);
      fixture.detectChanges();
      await vi.runAllTimersAsync();
      componentRef.setInput('visible', false);
      fixture.detectChanges();
      expect(document.activeElement).toBe(input);
    });

    it('should return focus that fell to the body', async () => {
      await toggle(true, trigger);
      (document.activeElement as HTMLElement).blur();
      expect(document.activeElement).toBe(document.body);
      await toggle(false);
      expect(document.activeElement).toBe(trigger);
    });

    it('should fall back when the toggle cannot take focus', async () => {
      input.focus();
      await toggle(true, trigger);
      trigger.disabled = true;
      await toggle(false);
      expect(document.activeElement).toBe(input);
    });

    it('should return focus when destroyed while open', async () => {
      await toggle(true, trigger);
      expect(document.activeElement).toBe(element);
      fixture.destroy();
      expect(document.activeElement).toBe(trigger);
    });

    it('should return focus when closed and destroyed in the same tick', async () => {
      await toggle(true, trigger);
      service.toggle({ show: false, id: component.id() });
      fixture.destroy();
      expect(document.activeElement).toBe(trigger);
    });

    it('should not move focus that left the panel', async () => {
      await toggle(true, trigger);
      input.focus();
      await toggle(false);
      expect(document.activeElement).toBe(input);
    });

    it('should not focus a detached element', async () => {
      await toggle(true, trigger);
      trigger.remove();
      const focus = vi.spyOn(trigger, 'focus');
      await toggle(false);
      expect(focus).not.toHaveBeenCalled();
    });
  });

  describe('with portal', () => {
    let container: HTMLDivElement;
    let originalParent: HTMLElement;

    beforeEach(() => {
      container = document.createElement('div');
      document.body.appendChild(container);
      originalParent = element.parentElement!;
    });

    afterEach(() => {
      container.remove();
    });

    it('should default the container input to document.body', () => {
      expect(component.container()).toBe(document.body);
    });

    it('should not move the offcanvas element when portal is disabled', async () => {
      componentRef.setInput('container', container);
      componentRef.setInput('visible', true);
      fixture.detectChanges();
      await vi.runAllTimersAsync();

      expect(container.contains(element)).toBe(false);
      expect(element.parentElement).toBe(originalParent);
    });

    it('should move the offcanvas element into the given container when portal is enabled', async () => {
      componentRef.setInput('portal', true);
      componentRef.setInput('container', container);
      componentRef.setInput('visible', true);
      fixture.detectChanges();
      await vi.runAllTimersAsync();

      expect(element.parentElement).toBe(container);
    });

    it('should resolve a container provided as a function', async () => {
      componentRef.setInput('portal', true);
      componentRef.setInput('container', () => container);
      componentRef.setInput('visible', true);
      fixture.detectChanges();
      await vi.runAllTimersAsync();

      expect(element.parentElement).toBe(container);
    });

    it('should not attach the portal when the container resolves to null', async () => {
      componentRef.setInput('portal', true);
      componentRef.setInput('container', null);
      componentRef.setInput('visible', true);
      fixture.detectChanges();
      await vi.runAllTimersAsync();

      expect(element.parentElement).toBe(originalParent);
    });

    it('should restore the offcanvas element to its original position once the close transition ends', async () => {
      componentRef.setInput('portal', true);
      componentRef.setInput('container', container);
      componentRef.setInput('visible', true);
      fixture.detectChanges();
      await vi.runAllTimersAsync();
      expect(element.parentElement).toBe(container);

      const end = holdTransition(element);
      componentRef.setInput('visible', false);
      fixture.detectChanges();
      await vi.runAllTimersAsync();
      expect(element.parentElement).toBe(container);

      end();
      await vi.runAllTimersAsync();
      expect(element.parentElement).toBe(originalParent);
    });

    it('should restore the offcanvas element when the close transition never fires', async () => {
      componentRef.setInput('portal', true);
      componentRef.setInput('container', container);
      componentRef.setInput('visible', true);
      fixture.detectChanges();
      await vi.runAllTimersAsync();
      expect(element.parentElement).toBe(container);

      componentRef.setInput('visible', false);
      fixture.detectChanges();
      await vi.runAllTimersAsync();

      expect(element.parentElement).toBe(originalParent);
      expect(element.classList.contains('hiding')).toBe(false);
    });

    it('should not run the hide completion for an offcanvas that was never shown', async () => {
      document.body.style.overflow = 'hidden';
      const local = fixture.componentInstance.outlet().createComponent(OffcanvasComponent);
      fixture.detectChanges();
      await vi.runAllTimersAsync();

      expect(document.body.style.overflow).toBe('hidden');

      local.destroy();
      document.body.style.removeProperty('overflow');
    });

    it('should commit the hidden starting style after the move, before the show classes are applied', async () => {
      const reflows: { parent: Element | null; classes: string }[] = [];
      Object.defineProperty(element, 'offsetHeight', {
        configurable: true,
        get: () => {
          reflows.push({ parent: element.parentElement, classes: element.getAttribute('class') ?? '' });
          return 0;
        }
      });

      componentRef.setInput('portal', true);
      componentRef.setInput('container', container);
      componentRef.setInput('visible', true);
      fixture.detectChanges();
      await vi.runAllTimersAsync();

      expect(reflows).toHaveLength(1);
      expect(reflows[0].parent).toBe(container);
      expect(reflows[0].classes).not.toContain('show');
    });

    it('should move the offcanvas to a new container when the container input changes while visible', async () => {
      const secondContainer = document.createElement('div');
      document.body.appendChild(secondContainer);

      componentRef.setInput('portal', true);
      componentRef.setInput('container', container);
      componentRef.setInput('visible', true);
      fixture.detectChanges();
      await vi.runAllTimersAsync();
      expect(element.parentElement).toBe(container);

      componentRef.setInput('container', secondContainer);
      fixture.detectChanges();
      await vi.runAllTimersAsync();

      expect(element.parentElement).toBe(secondContainer);
      secondContainer.remove();
    });

    it('should restore the offcanvas to its original position when portal is disabled while visible', async () => {
      componentRef.setInput('portal', true);
      componentRef.setInput('container', container);
      componentRef.setInput('visible', true);
      fixture.detectChanges();
      await vi.runAllTimersAsync();
      expect(element.parentElement).toBe(container);

      componentRef.setInput('portal', false);
      fixture.detectChanges();
      await vi.runAllTimersAsync();

      expect(element.parentElement).toBe(originalParent);
    });

    it('should detach the portal when the component is destroyed', async () => {
      componentRef.setInput('portal', true);
      componentRef.setInput('container', container);
      componentRef.setInput('visible', true);
      fixture.detectChanges();
      await vi.runAllTimersAsync();
      expect(element.parentElement).toBe(container);

      fixture.destroy();

      expect(container.contains(element)).toBe(false);
    });
  });
});

describe('OffcanvasComponent responsive', () => {
  let component: OffcanvasComponent;
  let componentRef: ComponentRef<OffcanvasComponent>;
  let fixture: ComponentFixture<TestComponent>;
  let layout: Subject<boolean>;
  let queries: string[];

  beforeEach(async () => {
    layout = new Subject<boolean>();
    queries = [];
    document.documentElement.style.setProperty('--cui-breakpoint-lg', '992px');
    TestBed.configureTestingModule({
      providers: [
        {
          provide: BreakpointObserver,
          useValue: {
            observe: (observed: string | string[]) => {
              const maxWidth = [observed].flat().filter((query) => query.startsWith('(max-width'));
              queries.push(...maxWidth);
              return maxWidth.length ? layout.pipe(map((matches) => ({ matches, breakpoints: {} }))) : NEVER;
            }
          }
        }
      ]
    });
    fixture = TestBed.createComponent(TestComponent);
    componentRef = fixture.componentInstance.outlet().createComponent(OffcanvasComponent);
    component = componentRef.instance;
    componentRef.setInput('responsive', 'lg');
    await fixture.whenStable();
  });

  afterEach(async () => {
    component.visible.set(false);
    await fixture.whenStable();
    await new Promise((resolve) => setTimeout(resolve));
    document.documentElement.style.removeProperty('--cui-breakpoint-lg');
  });

  it('should close when the viewport grows past its breakpoint', async () => {
    componentRef.setInput('visible', true);
    await fixture.whenStable();
    expect(queries).toEqual(['(max-width: 991.98px)']);

    layout.next(true);
    await fixture.whenStable();
    expect(component.visible()).toBe(true);

    layout.next(false);
    await fixture.whenStable();
    expect(component.visible()).toBe(false);
  });

  it('should watch the new breakpoint when responsive changes while open', async () => {
    componentRef.setInput('responsive', true);
    componentRef.setInput('visible', true);
    await fixture.whenStable();
    expect(queries).toEqual([]);

    componentRef.setInput('responsive', 'lg');
    await fixture.whenStable();
    expect(queries).toEqual(['(max-width: 991.98px)']);

    layout.next(false);
    await fixture.whenStable();
    expect(component.visible()).toBe(false);
  });

  it('should drop the previous breakpoint subscription when it watches again', async () => {
    componentRef.setInput('visible', true);
    await fixture.whenStable();
    component.visible.set(false);
    component.visible.set(true);
    await fixture.whenStable();
    expect(queries).toHaveLength(2);

    componentRef.setInput('visible', false);
    await fixture.whenStable();
    expect(layout.observed).toBe(false);
  });

  it('should stop watching the breakpoint when responsive turns off while open', async () => {
    componentRef.setInput('visible', true);
    await fixture.whenStable();
    componentRef.setInput('responsive', true);
    await fixture.whenStable();

    layout.next(false);
    await fixture.whenStable();
    expect(component.visible()).toBe(true);
  });

  it('should open and close through the show alias', async () => {
    component.show = true;
    await fixture.whenStable();
    expect(component.show).toBe(true);
    expect(component.visible()).toBe(true);

    component.show = false;
    await fixture.whenStable();
    expect(component.visible()).toBe(false);
  });
});

describe('OffcanvasComponent with inputs changed while open', () => {
  let component: OffcanvasComponent;
  let componentRef: ComponentRef<OffcanvasComponent>;
  let element: HTMLElement;
  let fixture: ComponentFixture<TestComponent>;
  let setBackdrop: MockInstance<BackdropService['setBackdrop']>;

  const update = async (name: string, value: unknown) => {
    componentRef.setInput(name, value);
    fixture.detectChanges();
    await vi.runAllTimersAsync();
  };

  beforeEach(async () => {
    TestBed.configureTestingModule({
      providers: [{ provide: BreakpointObserver, useValue: { observe: () => NEVER } }]
    });
    fixture = TestBed.createComponent(TestComponent);
    componentRef = fixture.componentInstance.outlet().createComponent(OffcanvasComponent);
    component = componentRef.instance;
    element = componentRef.location.nativeElement;
    element.style.position = 'fixed';
    await fixture.whenStable();
    await new Promise((resolve) => setTimeout(resolve));
    setBackdrop = vi.spyOn(TestBed.inject(BackdropService), 'setBackdrop');
    expect(document.body.style.overflow).toBe('');
    vi.useFakeTimers();
  });

  afterEach(async () => {
    await update('visible', false);
    vi.useRealTimers();
    vi.restoreAllMocks();
  });

  it.each([
    ['scroll', true],
    ['responsive', 'lg'],
    ['backdrop', 'static']
  ])('should keep one backdrop and remove it on close when %s changes while open', async (name, value) => {
    await update('visible', true);
    await update(name, value);
    expect(setBackdrop).toHaveBeenCalledTimes(1);

    await update('visible', false);
    expect(setBackdrop.mock.results.every(({ value }) => !value.isConnected)).toBe(true);
  });

  it('should not close on a backdrop click once the backdrop turns static after another input changed while open', async () => {
    await update('visible', true);
    await update('scroll', true);
    await update('backdrop', 'static');

    expect(setBackdrop).toHaveBeenCalledTimes(1);
    expect(setBackdrop.mock.results[0].value.isConnected).toBe(true);
    setBackdrop.mock.results[0].value.dispatchEvent(new MouseEvent('click'));
    fixture.detectChanges();
    await vi.runAllTimersAsync();
    expect(component.visible()).toBe(true);
  });

  it('should not close on a backdrop click once the backdrop turns static after opening with it switched on', async () => {
    await update('backdrop', false);
    componentRef.setInput('visible', true);
    componentRef.setInput('backdrop', true);
    fixture.detectChanges();
    await vi.runAllTimersAsync();
    await update('backdrop', 'static');

    expect(setBackdrop).toHaveBeenCalledTimes(1);
    expect(setBackdrop.mock.results[0].value.isConnected).toBe(true);
    setBackdrop.mock.results[0].value.dispatchEvent(new MouseEvent('click'));
    fixture.detectChanges();
    await vi.runAllTimersAsync();
    expect(component.visible()).toBe(true);
  });

  it('should not close on a backdrop click once the backdrop turns static after closing and reopening in one tick', async () => {
    await update('visible', true);
    component.visible.set(false);
    component.visible.set(true);
    fixture.detectChanges();
    await vi.runAllTimersAsync();
    await update('backdrop', 'static');

    expect(setBackdrop).toHaveBeenCalledTimes(1);
    expect(setBackdrop.mock.results[0].value.isConnected).toBe(true);
    setBackdrop.mock.results[0].value.dispatchEvent(new MouseEvent('click'));
    fixture.detectChanges();
    await vi.runAllTimersAsync();
    expect(component.visible()).toBe(true);
  });

  it('should close on a backdrop click once a static backdrop turns dismissible while open', async () => {
    await update('backdrop', 'static');
    await update('visible', true);
    await update('backdrop', true);

    expect(setBackdrop).toHaveBeenCalledTimes(1);
    setBackdrop.mock.results[0].value.dispatchEvent(new MouseEvent('click'));
    fixture.detectChanges();
    await vi.runAllTimersAsync();
    expect(component.visible()).toBe(false);
  });

  it('should lock scrolling when scroll turns off while open', async () => {
    await update('scroll', true);
    await update('visible', true);
    expect(document.body.style.overflow).toBe('');

    await update('scroll', false);
    expect(document.body.style.overflow).toBe('hidden');
  });

  it('should unlock scrolling when scroll turns on while open', async () => {
    await update('visible', true);
    expect(document.body.style.overflow).toBe('hidden');

    await update('scroll', true);
    expect(document.body.style.overflow).toBe('');
  });

  it('should keep scrolling locked when the backdrop goes off and on while open', async () => {
    await update('visible', true);
    await update('backdrop', false);
    expect(document.body.style.overflow).toBe('hidden');

    await update('backdrop', true);
    expect(document.body.style.overflow).toBe('hidden');
  });

  it('should take the backdrop off and put it back while open', async () => {
    await update('visible', true);
    const first = setBackdrop.mock.results[0].value;

    await update('backdrop', false);
    expect(first.isConnected).toBe(false);

    await update('backdrop', true);
    expect(setBackdrop).toHaveBeenCalledTimes(2);
    const second = setBackdrop.mock.results[1].value;
    expect(second.isConnected).toBe(true);

    second.dispatchEvent(new MouseEvent('click'));
    fixture.detectChanges();
    await vi.runAllTimersAsync();
    expect(component.visible()).toBe(false);
  });

  it.each([
    ['scroll', true],
    ['responsive', 'lg'],
    ['backdrop', 'static']
  ])('should keep focus inside the panel when %s changes while open', async (name, value) => {
    const button = document.createElement('button');
    element.append(button);
    await update('visible', true);
    button.focus();

    await update(name, value);
    expect(document.activeElement).toBe(button);
    button.remove();
  });

  it.each([
    ['scroll', true],
    ['responsive', 'lg'],
    ['backdrop', 'static']
  ])('should emit visibleChange once per opening when %s changes while open', async (name, value) => {
    const emitted: boolean[] = [];
    component.visibleChange.subscribe((visible) => emitted.push(visible));

    await update('visible', true);
    await update(name, value);
    await update('visible', false);
    expect(emitted).toEqual([true, false]);
  });
});
