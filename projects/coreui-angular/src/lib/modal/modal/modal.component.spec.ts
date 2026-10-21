/// <reference types="vitest/globals" />
import { CdkTrapFocus } from '@angular/cdk/a11y';
import { Component, ComponentRef, DOCUMENT, viewChild, ViewContainerRef } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { ModalComponent } from './modal.component';
import { ModalService } from '../modal.service';

@Component({
  template: '<ng-container #outlet />'
})
class TestComponent {
  readonly outlet = viewChild.required('outlet', { read: ViewContainerRef });
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

  describe('focus return', () => {
    let inside: HTMLButtonElement;
    let input: HTMLInputElement;
    let service: ModalService;
    let trigger: HTMLButtonElement;

    const toggle = async (show: boolean | 'toggle', toggleTrigger?: HTMLElement) => {
      service.toggle({ show, modal: component, trigger: toggleTrigger });
      fixture.detectChanges();
      await vi.runAllTimersAsync();
    };

    beforeEach(() => {
      service = TestBed.inject(ModalService);
      inside = document.createElement('button');
      element.append(inside);
      input = document.createElement('input');
      trigger = document.createElement('button');
      document.body.append(input, trigger);
    });

    afterEach(() => {
      input.remove();
      trigger.remove();
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

    it('should hand its focus candidates to the action that closes it for another modal', async () => {
      await toggle(true, trigger);
      inside.focus();
      const received: { focusFallback?: (HTMLElement | null)[] }[] = [];
      service.modalState$.subscribe((action) => received.push(action));
      service.toggle({ show: true, id: 'other-modal', trigger: inside });
      expect(received[0].focusFallback?.includes(trigger)).toBe(true);
      fixture.detectChanges();
      await vi.runAllTimersAsync();
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

    it('should hand over each focus candidate once', async () => {
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

    it('should restore the modal element to its original position once the close transition ends', async () => {
      componentRef.setInput('portal', true);
      componentRef.setInput('container', container);
      componentRef.setInput('visible', true);
      fixture.detectChanges();
      await vi.runAllTimersAsync();
      expect(element.parentElement).toBe(container);

      componentRef.setInput('visible', false);
      fixture.detectChanges();
      await vi.runAllTimersAsync();
      expect(element.parentElement).toBe(container);

      const dialogElement = element.querySelector('.modal-dialog') as HTMLElement;
      dialogElement.dispatchEvent(new TransitionEvent('transitionend', { propertyName: 'transform' }));

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
