/// <reference types="vitest/globals" />
import { CdkTrapFocus } from '@angular/cdk/a11y';
import { Component, ComponentRef, DOCUMENT, PLATFORM_ID, viewChild, ViewContainerRef } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { BackdropService } from '../../backdrop/backdrop.service';
import { ModalComponent } from './modal.component';
import { ModalService } from '../modal.service';
import { ModalToggleDirective } from '../modal-dismiss/modal-toggle.directive';

const holdTransitions = (...elements: Element[]) =>
  elements.map((element) => {
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
      value: () => (running ? [{ transitionProperty: 'opacity', finished }] : [])
    });
    return end;
  });

@Component({
  template: '<ng-container #outlet />'
})
class TestComponent {
  readonly outlet = viewChild.required('outlet', { read: ViewContainerRef });
}

@Component({
  template: `
    <button [cModalToggle]="modal.id">Open</button>
    <c-modal #modal [id]="id" />
  `,
  imports: [ModalComponent, ModalToggleDirective]
})
class OptionalIdHostComponent {
  id: string | undefined = undefined;
}

describe('ModalComponent', () => {
  let component: ModalComponent;
  let componentRef: ComponentRef<ModalComponent>;
  let element: HTMLElement;
  let fixture: ComponentFixture<TestComponent>;
  let document: Document;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalComponent]
    }).compileComponents();

    document = TestBed.inject(DOCUMENT);
    fixture = TestBed.createComponent(TestComponent);
    componentRef = fixture.componentInstance.outlet().createComponent(ModalComponent);
    await fixture.whenStable();

    component = componentRef.instance;
    element = componentRef.location.nativeElement;

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

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have css classes', () => {
    expect(element.classList.contains('modal')).toBe(true);
    expect(element.classList.contains('fade')).toBe(true);
  });

  // it('should be visible', async () => {
  //   componentRef.setInput('visible', true);
  //   fixture.detectChanges();
  //   expect(element).toHaveClass('show');
  // });

  // it('should call event handling functions', async() => {
  //
  // });

  it('should toggle visibility when visible input changes', async () => {
    componentRef.setInput('visible', true);
    fixture.detectChanges();
    await vi.runAllTimersAsync();
    fixture.detectChanges();
    expect(element.classList.contains('show')).toBe(true);

    componentRef.setInput('visible', false);
    fixture.detectChanges();
    await vi.runAllTimersAsync();
    fixture.detectChanges();
    expect(element.classList.contains('show')).toBe(false);
  });

  it('should toggle inert with visibility and never set aria-hidden', async () => {
    expect(element.inert).toBe(true);
    expect(element.getAttribute('aria-hidden')).toBeNull();

    componentRef.setInput('visible', true);
    fixture.detectChanges();
    await vi.runAllTimersAsync();
    fixture.detectChanges();
    expect(element.inert).toBeFalsy();
    expect(element.getAttribute('aria-hidden')).toBeNull();

    componentRef.setInput('visible', false);
    fixture.detectChanges();
    await vi.runAllTimersAsync();
    fixture.detectChanges();
    expect(element.inert).toBe(true);
    expect(element.getAttribute('aria-hidden')).toBeNull();
  });

  it('should close modal on Escape key press if keyboard is enabled', async () => {
    componentRef.setInput('visible', true);
    fixture.detectChanges();
    await vi.runAllTimersAsync();
    const event = new KeyboardEvent('keydown', { key: 'Escape' });
    document.dispatchEvent(event);
    fixture.detectChanges();
    await vi.runAllTimersAsync();

    expect(component.visible()).toBe(false);
  });

  it('should not close modal on an Escape key press another component already handled', async () => {
    componentRef.setInput('visible', true);
    fixture.detectChanges();
    await vi.runAllTimersAsync();
    const event = new KeyboardEvent('keydown', { key: 'Escape', cancelable: true });
    event.preventDefault();
    document.dispatchEvent(event);
    fixture.detectChanges();
    await vi.runAllTimersAsync();

    expect(component.visible()).toBe(true);
  });

  it('should not play the static backdrop on an Escape key press another component already handled', async () => {
    componentRef.setInput('backdrop', 'static');
    componentRef.setInput('visible', true);
    fixture.detectChanges();
    await vi.runAllTimersAsync();
    const staticBackdrop = vi.spyOn(component, 'setStaticBackdrop');
    const event = new KeyboardEvent('keydown', { key: 'Escape', cancelable: true });
    event.preventDefault();
    document.dispatchEvent(event);
    await vi.runAllTimersAsync();

    expect(staticBackdrop).not.toHaveBeenCalled();
    expect(component.visible()).toBe(true);
  });

  it('should not close modal on Escape key press if keyboard is disabled', async () => {
    componentRef.setInput('keyboard', false);
    componentRef.setInput('visible', true);
    fixture.detectChanges();
    await vi.runAllTimersAsync();
    expect(component.visible()).toBe(true);
    const event = new KeyboardEvent('keydown', { key: 'Escape' });
    document.dispatchEvent(event);
    await vi.runAllTimersAsync();
    expect(component.visible()).toBe(true);
  });

  it('should apply modal-open class to body when backdrop is true', async () => {
    componentRef.setInput('backdrop', true);
    componentRef.setInput('visible', true);
    fixture.detectChanges();
    await vi.runAllTimersAsync();
    expect(document.body.classList.contains('modal-open')).toBe(true);

    componentRef.setInput('visible', false);
    fixture.detectChanges();
    await vi.runAllTimersAsync();
    expect(document.body.classList.contains('modal-open')).toBe(false);
  });

  it('should call setStaticBackdrop when clicking on backdrop with static backdrop', async () => {
    // Test the observable state or public methods affected by `setStaticBackdrop`
    componentRef.setInput('backdrop', 'static');
    componentRef.setInput('visible', true);
    fixture.detectChanges();
    await vi.runAllTimersAsync();
    expect(document.body.classList.contains('modal-open')).toBe(true);

    const event = new MouseEvent('click', { bubbles: true });
    document.body.dispatchEvent(event);
    fixture.detectChanges();
    await vi.runAllTimersAsync();
    expect(document.body.classList.contains('modal-open')).toBe(true);
  });

  it('should not close modal when clicking on modal backdrop (static)', async () => {
    componentRef.setInput('backdrop', 'static');
    componentRef.setInput('visible', true);
    fixture.detectChanges();
    await vi.runAllTimersAsync();
    expect(component.visible()).toBe(true);

    element.dispatchEvent(new MouseEvent('mousedown', { bubbles: true }));
    element.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    expect(component.visible()).toBe(true);
  });

  it('should close modal when clicking on modal backdrop', async () => {
    componentRef.setInput('backdrop', true);
    componentRef.setInput('visible', true);
    fixture.detectChanges();
    await vi.runAllTimersAsync();
    expect(component.visible()).toBe(true);

    element.dispatchEvent(new MouseEvent('mousedown', { bubbles: true }));
    element.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    expect(component.visible()).toBe(false);
  });

  it('should not close modal when clicking inside modal dialog', async () => {
    componentRef.setInput('visible', true);
    fixture.detectChanges();
    await vi.runAllTimersAsync();
    expect(component.visible()).toBe(true);

    const dialogElement = element.querySelector('.modal-dialog');
    component.onMouseDownHandler(new MouseEvent('mousedown', { bubbles: true }));
    const clickEvent = new MouseEvent('click', { bubbles: true });
    Object.defineProperty(clickEvent, 'target', { value: dialogElement, enumerable: true });
    component.onClickHandler(clickEvent);
    fixture.detectChanges();
    await vi.runAllTimersAsync();
    expect(component.visible()).toBe(true);
  });

  it('should not close modal when mousedown and click targets differ', async () => {
    componentRef.setInput('visible', true);
    fixture.detectChanges();
    await vi.runAllTimersAsync();
    expect(component.visible()).toBe(true);

    const mouseDownEvent = new MouseEvent('mousedown', { bubbles: true });
    Object.defineProperty(mouseDownEvent, 'target', { value: document.body, enumerable: true });
    component.onMouseDownHandler(mouseDownEvent);

    const clickEvent = new MouseEvent('click', { bubbles: true });
    Object.defineProperty(clickEvent, 'target', { value: element, enumerable: true });
    component.onClickHandler(clickEvent);
    fixture.detectChanges();
    await vi.runAllTimersAsync();

    expect(component.visible()).toBe(true);
  });

  describe('scroll lock and modal-open', () => {
    let backdropService: BackdropService;

    const settle = async () => {
      fixture.detectChanges();
      await vi.runAllTimersAsync();
    };
    const locked = () => document.body.style.overflow === 'hidden';
    const hasOpenClass = () => document.body.classList.contains('modal-open');
    const dialog = () => element.querySelector('.modal-dialog')!;

    const microtasks = async () => {
      for (let i = 0; i < 10; i++) {
        await Promise.resolve();
      }
    };

    beforeEach(() => {
      backdropService = TestBed.inject(BackdropService);
      expect(locked()).toBe(false);
      expect(hasOpenClass()).toBe(false);
    });

    it('should leave the body alone when a closed modal is created and destroyed', async () => {
      const holder = {} as ModalComponent;
      TestBed.inject(ModalService).addOpenClass(holder);
      document.body.style.overflow = 'hidden';
      const closed = fixture.componentInstance.outlet().createComponent(ModalComponent);
      await settle();
      closed.destroy();
      await settle();

      expect(document.body.style.overflow).toBe('hidden');
      expect(hasOpenClass()).toBe(true);
      document.body.style.removeProperty('overflow');
      TestBed.inject(ModalService).removeOpenClass(holder);
    });

    it('should leave the inline display of a modal that never opened alone', () => {
      expect(element.style.display).toBe('');
    });

    it('should lock scrolling and add modal-open when it opens', async () => {
      component.visible.set(true);
      await settle();
      expect(locked()).toBe(true);
      expect(hasOpenClass()).toBe(true);
    });

    it('should add modal-open whenever it shows a backdrop', async () => {
      componentRef.setInput('backdrop', '');
      component.visible.set(true);
      await settle();
      expect(backdropService.activeBackdrop?.isConnected).toBe(true);
      expect(hasOpenClass()).toBe(true);
    });

    it('should lock scrolling without modal-open when the backdrop is off', async () => {
      componentRef.setInput('backdrop', false);
      component.visible.set(true);
      await settle();
      expect(locked()).toBe(true);
      expect(hasOpenClass()).toBe(false);

      component.visible.set(false);
      await settle();
      expect(locked()).toBe(false);
    });

    it.each(['dialog', 'host'])(
      'should release the lock and modal-open only once the host and dialog transitions end (%s first)',
      async (first) => {
        component.visible.set(true);
        await settle();
        const [hostEnd, dialogEnd] = holdTransitions(element, dialog());
        const [firstEnd, lastEnd] = first === 'host' ? [hostEnd, dialogEnd] : [dialogEnd, hostEnd];

        component.visible.set(false);
        await settle();
        expect(locked()).toBe(true);
        expect(hasOpenClass()).toBe(true);
        expect(element.style.display).toBe('block');

        firstEnd();
        await vi.runAllTimersAsync();
        expect(locked()).toBe(true);
        expect(element.style.display).toBe('block');

        lastEnd();
        await vi.runAllTimersAsync();
        expect(locked()).toBe(false);
        expect(hasOpenClass()).toBe(false);
        expect(element.style.display).toBe('none');
      }
    );

    it.each([true, false])(
      'should hide and release at once when nothing transitions (transition %s)',
      async (transition) => {
        componentRef.setInput('transition', transition);
        component.visible.set(true);
        await settle();

        component.visible.set(false);
        fixture.detectChanges();
        await microtasks();
        expect(element.style.display).toBe('none');
        expect(locked()).toBe(false);
        expect(hasOpenClass()).toBe(false);
      }
    );

    it('should release the lock and modal-open when destroyed while open', async () => {
      component.visible.set(true);
      await settle();

      componentRef.destroy();
      await settle();
      expect(locked()).toBe(false);
      expect(hasOpenClass()).toBe(false);
    });

    it('should release the lock and modal-open when closed and destroyed in the same tick', async () => {
      component.visible.set(true);
      await settle();

      component.visible.set(false);
      componentRef.destroy();
      expect(locked()).toBe(false);
      expect(hasOpenClass()).toBe(false);
    });

    it('should not finish a hide that ends after it was destroyed', async () => {
      component.visible.set(true);
      await settle();
      const ends = holdTransitions(element, dialog());
      component.visible.set(false);
      await settle();

      componentRef.destroy();
      ends.forEach((end) => end());
      await vi.runAllTimersAsync();
      expect(element.style.display).toBe('block');
    });

    it('should be inert from close while its hide transitions run', async () => {
      component.visible.set(true);
      await settle();
      const ends = holdTransitions(element, dialog());
      component.visible.set(false);
      await settle();
      expect(element.inert).toBe(true);
      expect(element.getAttribute('role')).toBeNull();
      expect(element.getAttribute('aria-modal')).toBeNull();
      expect(element.style.display).toBe('block');
      ends.forEach((end) => end());
    });

    it('should keep the lock and modal-open when reopened while hiding', async () => {
      component.visible.set(true);
      await settle();
      const ends = holdTransitions(element, dialog());
      component.visible.set(false);
      await settle();

      component.visible.set(true);
      await settle();
      ends.forEach((end) => end());
      await vi.runAllTimersAsync();
      expect(locked()).toBe(true);
      expect(hasOpenClass()).toBe(true);
      expect(element.style.display).toBe('block');
    });

    it('should drop modal-open when reopened without a backdrop while hiding', async () => {
      component.visible.set(true);
      await settle();
      const ends = holdTransitions(element, dialog());
      component.visible.set(false);
      await settle();

      componentRef.setInput('backdrop', false);
      component.visible.set(true);
      await settle();
      expect(hasOpenClass()).toBe(false);
      expect(locked()).toBe(true);
      ends.forEach((end) => end());
    });

    it('should not finish a hide when reopened before the next render', async () => {
      component.visible.set(true);
      await settle();
      const ends = holdTransitions(element, dialog());
      component.visible.set(false);
      await settle();

      component.visible.set(true);
      ends.forEach((end) => end());
      for (let i = 0; i < 10; i++) {
        await Promise.resolve();
      }
      expect(locked()).toBe(true);
      expect(element.style.display).toBe('block');
    });

    it('should finish only the latest hide after closing, reopening and closing again', async () => {
      component.visible.set(true);
      await settle();
      const [firstHost, firstDialog] = holdTransitions(element, dialog());
      component.visible.set(false);
      await settle();
      component.visible.set(true);
      await settle();
      const [secondHost, secondDialog] = holdTransitions(element, dialog());
      component.visible.set(false);
      await settle();

      firstHost();
      firstDialog();
      await vi.runAllTimersAsync();
      expect(element.style.display).toBe('block');
      expect(locked()).toBe(true);

      secondDialog();
      secondHost();
      await vi.runAllTimersAsync();
      expect(element.style.display).toBe('none');
      expect(locked()).toBe(false);
    });

    it('should keep one backdrop when closed and reopened in one tick', async () => {
      component.visible.set(true);
      await settle();
      const backdrop = backdropService.activeBackdrop as HTMLElement;
      const setBackdrop = vi.spyOn(backdropService, 'setBackdrop');

      component.visible.set(false);
      component.visible.set(true);
      await settle();
      expect(setBackdrop).not.toHaveBeenCalled();
      expect(backdrop.isConnected).toBe(true);
      expect(locked()).toBe(true);
    });

    it('should show and remove the backdrop without a fade when transition is off', async () => {
      componentRef.setInput('transition', false);
      component.visible.set(true);
      fixture.detectChanges();
      const backdrop = backdropService.activeBackdrop as HTMLElement;
      expect(backdrop.classList.contains('fade')).toBe(false);
      expect(backdrop.classList.contains('show')).toBe(true);

      component.visible.set(false);
      await settle();
      expect(backdrop.isConnected).toBe(false);
    });

    it('should keep scrolling locked by another owner after it closes', async () => {
      const offcanvas = {};
      backdropService.lockScroll(offcanvas);
      component.visible.set(true);
      await settle();

      component.visible.set(false);
      await settle();
      expect(locked()).toBe(true);
      expect(hasOpenClass()).toBe(false);

      backdropService.unlockScroll(offcanvas);
      expect(locked()).toBe(false);
    });
  });

  describe('focus return', () => {
    let inside: HTMLButtonElement;
    let input: HTMLInputElement;
    let other: ComponentRef<ModalComponent> | undefined;
    let service: ModalService;
    let trigger: HTMLButtonElement;

    const toggle = async (show: boolean | 'toggle', toggleTrigger?: HTMLElement) => {
      service.toggle({ show, modal: component, trigger: toggleTrigger });
      fixture.detectChanges();
      await vi.runAllTimersAsync();
    };

    const createOther = async () => {
      other = fixture.componentInstance.outlet().createComponent(ModalComponent);
      other.setInput('id', 'other-modal');
      fixture.detectChanges();
      await vi.runAllTimersAsync();
      return other;
    };

    beforeEach(() => {
      service = TestBed.inject(ModalService);
      inside = document.createElement('button');
      element.append(inside);
      input = document.createElement('input');
      trigger = document.createElement('button');
      document.body.append(input, trigger);
    });

    afterEach(async () => {
      input.remove();
      trigger.remove();
      if (other && !other.hostView.destroyed) {
        other.instance.visible.set(false);
        fixture.detectChanges();
        await vi.runAllTimersAsync();
        other.destroy();
      }
      other = undefined;
    });

    it('should return focus to the toggle that opened it', async () => {
      input.focus();
      await toggle('toggle', trigger);
      inside.focus();
      await toggle('toggle', inside);
      expect(document.activeElement).toBe(trigger);
    });

    it('should return focus to the element focused before opening without a toggle', async () => {
      input.focus();
      componentRef.setInput('visible', true);
      fixture.detectChanges();
      await vi.runAllTimersAsync();
      inside.focus();
      componentRef.setInput('visible', false);
      fixture.detectChanges();
      expect(document.activeElement).toBe(input);
    });

    it('should fall back when the toggle cannot take focus', async () => {
      input.focus();
      await toggle(true, trigger);
      inside.focus();
      trigger.disabled = true;
      await toggle(false);
      expect(document.activeElement).toBe(input);
    });

    it('should return focus when destroyed while open', async () => {
      await toggle(true, trigger);
      inside.focus();
      fixture.destroy();
      expect(document.activeElement).toBe(trigger);
    });

    it('should not move focus that left the modal', async () => {
      await toggle(true, trigger);
      input.focus();
      await toggle(false);
      expect(document.activeElement).toBe(input);
    });

    it('should not reuse the toggle of an earlier opening', async () => {
      await toggle(true, trigger);
      inside.focus();
      await toggle(false);
      input.focus();
      componentRef.setInput('visible', true);
      fixture.detectChanges();
      await vi.runAllTimersAsync();
      inside.focus();
      componentRef.setInput('visible', false);
      fixture.detectChanges();
      expect(document.activeElement).toBe(input);
    });

    it('should hand initial focus to the focus trap on open', async () => {
      const trap = fixture.debugElement.query(By.directive(CdkTrapFocus)).injector.get(CdkTrapFocus);
      const initial = vi.spyOn(trap.focusTrap, 'focusInitialElement').mockReturnValue(true);
      await toggle(true, trigger);
      expect(initial).toHaveBeenCalledTimes(1);
      expect(document.activeElement).not.toBe(element);
    });

    it('should focus the modal itself when nothing in it can take focus', async () => {
      const trap = fixture.debugElement.query(By.directive(CdkTrapFocus)).injector.get(CdkTrapFocus);
      vi.spyOn(trap.focusTrap, 'focusInitialElement').mockReturnValue(false);
      trigger.focus();
      await toggle(true, trigger);
      expect(document.activeElement).toBe(element);
    });

    it('should move initial focus only after the modal has rendered', async () => {
      const trap = fixture.debugElement.query(By.directive(CdkTrapFocus)).injector.get(CdkTrapFocus);
      const initial = vi.spyOn(trap.focusTrap, 'focusInitialElement');
      service.toggle({ show: true, modal: component, trigger });
      fixture.detectChanges();
      expect(initial).not.toHaveBeenCalled();
      await vi.runAllTimersAsync();
      expect(initial).toHaveBeenCalledTimes(1);
    });

    it('should return focus when closed and destroyed in the same tick', async () => {
      await toggle(true, trigger);
      inside.focus();
      service.toggle({ show: false, modal: component });
      fixture.destroy();
      expect(document.activeElement).toBe(trigger);
    });

    it('should render the dialog role only while open', async () => {
      expect(element.getAttribute('role')).toBeNull();
      await toggle(true);
      expect(element.getAttribute('role')).toBe('dialog');
    });

    it('should hand its focus candidates to the modal that opens instead', async () => {
      const opened = await createOther();
      await toggle(true, trigger);
      input.focus();

      service.toggle({ show: true, id: 'other-modal' });
      fixture.detectChanges();
      await vi.runAllTimersAsync();
      expect(component.visible()).toBe(false);

      input.remove();
      opened.instance.visible.set(false);
      fixture.detectChanges();
      await vi.runAllTimersAsync();
      expect(document.activeElement).toBe(trigger);
    });

    it('should return focus to a fallback handed over by the action that opened it', async () => {
      (document.activeElement as HTMLElement | null)?.blur();
      trigger.disabled = true;
      service.toggle({ show: true, modal: component, trigger, focusFallback: [input] });
      fixture.detectChanges();
      await vi.runAllTimersAsync();
      inside.focus();
      await toggle(false);
      expect(document.activeElement).toBe(input);
    });

    it('should not reuse the fallback of an earlier opening', async () => {
      const stale = document.createElement('button');
      document.body.append(stale);
      (document.activeElement as HTMLElement | null)?.blur();
      service.toggle({ show: true, modal: component, focusFallback: [stale] });
      fixture.detectChanges();
      await vi.runAllTimersAsync();
      inside.focus();
      await toggle(false);
      expect(document.activeElement).toBe(stale);
      input.focus();
      componentRef.setInput('visible', true);
      fixture.detectChanges();
      await vi.runAllTimersAsync();
      inside.focus();
      input.disabled = true;
      componentRef.setInput('visible', false);
      fixture.detectChanges();
      expect(document.activeElement).not.toBe(stale);
      stale.remove();
    });

    it('should pass on the fallback it was opened with', async () => {
      await createOther();
      service.toggle({ show: true, modal: component, focusFallback: [input] });
      fixture.detectChanges();
      await vi.runAllTimersAsync();
      let received: { focusFallback?: (HTMLElement | null)[] } = {};
      service.modalState$.subscribe((action) => (received = action));

      service.toggle({ show: true, id: 'other-modal' });
      expect(received.focusFallback).toContain(input);
      fixture.detectChanges();
      await vi.runAllTimersAsync();
    });

    it('should hand over each focus candidate once', async () => {
      await createOther();
      await toggle(true, trigger);
      inside.focus();
      let received: { focusFallback?: (HTMLElement | null)[] } = {};
      service.modalState$.subscribe((action) => (received = action));
      service.toggle({ show: true, id: 'other-modal', focusFallback: [trigger] });
      expect(received.focusFallback?.filter((target) => target === trigger).length).toBe(1);
      expect(new Set(received.focusFallback).size).toBe(received.focusFallback?.length);
      fixture.detectChanges();
      await vi.runAllTimersAsync();
    });

    it('should not let the focus trap capture focus while open', async () => {
      await toggle(true);
      const trap = fixture.debugElement.query(By.directive(CdkTrapFocus)).injector.get(CdkTrapFocus);
      expect(trap.enabled).toBe(true);
      expect(trap.autoCapture).toBe(false);
    });
  });

  describe('with another modal', () => {
    let other: ComponentRef<ModalComponent>;
    let service: ModalService;

    const settle = async () => {
      fixture.detectChanges();
      await vi.runAllTimersAsync();
    };

    beforeEach(async () => {
      service = TestBed.inject(ModalService);
      other = fixture.componentInstance.outlet().createComponent(ModalComponent);
      await settle();
    });

    afterEach(async () => {
      if (!other.hostView.destroyed) {
        other.instance.visible.set(false);
        await settle();
        other.destroy();
      }
    });

    it.each([
      ['set ids', 'first', 'second'],
      ['generated ids', null, null],
      ['ids bound to undefined', undefined, undefined]
    ])('should stay open when another, closed modal is destroyed (%s)', async (_, id, otherId) => {
      if (id !== null && otherId !== null) {
        componentRef.setInput('id', id);
        other.setInput('id', otherId);
      }
      component.visible.set(true);
      await settle();

      other.destroy();
      await settle();
      expect(component.visible()).toBe(true);
    });

    it('should keep scrolling locked and modal-open when another modal opens in its place', async () => {
      componentRef.setInput('id', 'first');
      other.setInput('id', 'second');
      service.toggle({ show: true, id: 'first' });
      await settle();
      const backdropService = TestBed.inject(BackdropService);
      const backdrop = backdropService.activeBackdrop as HTMLElement;

      service.toggle({ show: true, id: 'second' });
      await settle();
      expect(component.visible()).toBe(false);
      expect(document.body.style.overflow).toBe('hidden');
      expect(document.body.classList.contains('modal-open')).toBe(true);
      expect(backdropService.activeBackdrop).toBe(backdrop);
      expect(backdrop.isConnected).toBe(true);

      other.instance.visible.set(false);
      await settle();
      expect(document.body.style.overflow).toBe('');
      expect(document.body.classList.contains('modal-open')).toBe(false);
    });

    it.each([
      ['the first', () => componentRef, () => other],
      ['the second', () => other, () => componentRef]
    ])('should keep modal-open when a modal without a backdrop closes after %s opened', async (_, open, closing) => {
      closing().setInput('backdrop', false);
      open().instance.visible.set(true);
      closing().instance.visible.set(true);
      await settle();

      closing().instance.visible.set(false);
      await settle();
      expect(document.body.classList.contains('modal-open')).toBe(true);
      expect(document.body.style.overflow).toBe('hidden');
    });

    it('should keep modal-open and the lock when a closed modal is created next to an open one', async () => {
      component.visible.set(true);
      await settle();

      const created = fixture.componentInstance.outlet().createComponent(ModalComponent);
      await settle();
      created.destroy();
      await settle();
      expect(document.body.classList.contains('modal-open')).toBe(true);
      expect(document.body.style.overflow).toBe('hidden');
    });

    it('should stay open when an action closes another modal', async () => {
      component.visible.set(true);
      await settle();

      service.toggle({ show: false, modal: other.instance });
      await settle();
      expect(component.visible()).toBe(true);
    });

    it('should close when another modal opens', async () => {
      component.visible.set(true);
      await settle();

      service.toggle({ show: true, modal: other.instance });
      await settle();
      expect(component.visible()).toBe(false);
      expect(other.instance.visible()).toBe(true);
    });

    it('should close on a toggle without an id', async () => {
      component.visible.set(true);
      await settle();

      service.toggle({ show: 'toggle', id: '' });
      await settle();
      expect(component.visible()).toBe(false);
    });

    it('should close on a close action without a target', async () => {
      component.visible.set(true);
      await settle();

      service.toggle({ show: false });
      await settle();
      expect(component.visible()).toBe(false);
    });

    it('should stay open when a toggle closes another visible modal', async () => {
      component.visible.set(true);
      other.instance.visible.set(true);
      await settle();

      service.toggle({ show: 'toggle', modal: other.instance });
      await settle();
      expect(other.instance.visible()).toBe(false);
      expect(component.visible()).toBe(true);
    });

    it('should stay open when an action aims at a modal that does not exist', async () => {
      component.visible.set(true);
      await settle();

      service.toggle({ show: true, id: 'missing-modal' });
      await settle();
      expect(component.visible()).toBe(true);
    });

    it('should open a modal without an id through its generated id only', async () => {
      service.toggle({ show: 'toggle', id: other.instance.id });
      await settle();
      expect(other.instance.id).toBeTruthy();
      expect(other.instance.visible()).toBe(true);
      expect(component.visible()).toBe(false);
    });

    it('should render an id the author set', async () => {
      other.setInput('id', 'set-id');
      await settle();
      expect(other.location.nativeElement.id).toBe('set-id');
    });

    it('should give every modal its own generated id', async () => {
      expect(component.id).not.toBe(other.instance.id);

      service.toggle({ show: 'toggle', id: component.id });
      await settle();
      expect(component.visible()).toBe(true);
      expect(other.instance.visible()).toBe(false);
    });

    it('should close when another modal opens through a toggle', async () => {
      component.visible.set(true);
      await settle();

      service.toggle({ show: 'toggle', id: other.instance.id });
      await settle();
      expect(component.visible()).toBe(false);
      expect(other.instance.visible()).toBe(true);
    });

    it('should close every visible modal on an open action without a target', async () => {
      component.visible.set(true);
      await settle();

      service.toggle({ show: true });
      await settle();
      expect(component.visible()).toBe(false);
      expect(other.instance.visible()).toBe(false);
    });

    it('should announce an opening once the modal is visible', async () => {
      const seen: boolean[] = [];
      service.opened$.subscribe(({ modal }) => seen.push(modal.visible()));

      service.toggle({ show: true, modal: other.instance });
      await settle();
      expect(seen).toEqual([true]);
    });

    it('should not render a generated id', () => {
      expect(other.instance.id).toBeTruthy();
      expect(other.location.nativeElement.hasAttribute('id')).toBe(false);
    });
  });

  describe('with an optional id binding', () => {
    it('should open through cModalToggle bound to its id property', async () => {
      const fixture = TestBed.createComponent(OptionalIdHostComponent);
      fixture.detectChanges();
      await vi.runAllTimersAsync();
      const modal = fixture.debugElement.query(By.directive(ModalComponent)).componentInstance as ModalComponent;

      (fixture.nativeElement.querySelector('button') as HTMLButtonElement).click();
      fixture.detectChanges();
      await vi.runAllTimersAsync();
      expect(modal.visible()).toBe(true);

      modal.visible.set(false);
      fixture.detectChanges();
      await vi.runAllTimersAsync();
    });
  });

  describe('with portal', () => {
    let container: HTMLDivElement;
    let originalParent: HTMLElement | null;

    beforeEach(() => {
      container = document.createElement('div');
      document.body.appendChild(container);
      originalParent = element.parentElement;
    });

    afterEach(() => {
      container.remove();
    });

    it('should default the container input to document.body', () => {
      expect(component.container()).toBe(document.body);
    });

    it('should not move the modal element when portal is disabled', async () => {
      componentRef.setInput('container', container);
      componentRef.setInput('visible', true);
      fixture.detectChanges();
      await vi.runAllTimersAsync();

      expect(container.contains(element)).toBe(false);
      expect(element.parentElement).toBe(originalParent);
    });

    it('should move the modal element into the given container when portal is enabled', async () => {
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

    it('should restore the modal element to its original position once the close transitions end', async () => {
      componentRef.setInput('portal', true);
      componentRef.setInput('container', container);
      componentRef.setInput('visible', true);
      fixture.detectChanges();
      await vi.runAllTimersAsync();
      expect(element.parentElement).toBe(container);

      const [hostEnd, dialogEnd] = holdTransitions(element, element.querySelector('.modal-dialog')!);
      componentRef.setInput('visible', false);
      fixture.detectChanges();
      await vi.runAllTimersAsync();
      expect(element.parentElement).toBe(container);

      hostEnd();
      dialogEnd();
      await vi.runAllTimersAsync();
      expect(element.parentElement).toBe(originalParent);
    });

    it('should restore the modal element immediately when transition is disabled', async () => {
      componentRef.setInput('transition', false);
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
    });

    it('should move the modal to a new container when the container input changes while visible', async () => {
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

    it('should restore the modal to its original position when portal is disabled while visible', async () => {
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

describe('ModalComponent on the server', () => {
  let component: ModalComponent;
  let fixture: ComponentFixture<TestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalComponent],
      providers: [{ provide: PLATFORM_ID, useValue: 'server' }]
    }).compileComponents();
    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance.outlet().createComponent(ModalComponent).instance;
    await fixture.whenStable();
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.clearAllTimers();
    vi.useRealTimers();
  });

  it('should release the lock and modal-open as it closes, with no render to wait for', () => {
    component.visible.set(true);
    fixture.detectChanges();
    expect(document.body.style.overflow).toBe('hidden');

    component.visible.set(false);
    fixture.detectChanges();
    expect(document.body.style.overflow).toBe('');
    expect(document.body.classList.contains('modal-open')).toBe(false);
  });
});
