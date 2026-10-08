/// <reference types="vitest/globals" />
import { CdkTrapFocus } from '@angular/cdk/a11y';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { ModalComponent } from './modal.component';
import { ModalService } from '../modal.service';
import { DOCUMENT } from '@angular/core';

describe('ModalComponent', () => {
  let component: ModalComponent;
  let fixture: ComponentFixture<ModalComponent>;
  let document: Document;

  beforeEach(async () => {
    vi.useFakeTimers();
    
    await TestBed.configureTestingModule({
      imports: [ModalComponent]
    }).compileComponents();

    document = TestBed.inject(DOCUMENT);
    fixture = TestBed.createComponent(ModalComponent);
    await fixture.whenStable();

    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  afterEach(async () => {
    fixture.componentRef.setInput('visible', false);
    fixture.detectChanges();
    await vi.runAllTimersAsync();
    vi.useRealTimers();

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have css classes', () => {
    expect(fixture.nativeElement.classList.contains('modal')).toBe(true);
    expect(fixture.nativeElement.classList.contains('fade')).toBe(true);
  });

  // it('should be visible', async () => {
  //   fixture.componentRef.setInput('visible', true);
  //   fixture.detectChanges();
  //   expect(fixture.nativeElement).toHaveClass('show');
  // });

  // it('should call event handling functions', async() => {
  //
  // });

  it('should toggle visibility when visible input changes', async () => {
    fixture.componentRef.setInput('visible', true);
    fixture.detectChanges();
    await vi.runAllTimersAsync();
    fixture.detectChanges();
    expect(fixture.nativeElement.classList.contains('show')).toBe(true);

    fixture.componentRef.setInput('visible', false);
    fixture.detectChanges();
    await vi.runAllTimersAsync();
    fixture.detectChanges();
    expect(fixture.nativeElement.classList.contains('show')).toBe(false);
  });

  it('should toggle inert with visibility and never set aria-hidden', async () => {
    expect(fixture.nativeElement.inert).toBe(true);
    expect(fixture.nativeElement.getAttribute('aria-hidden')).toBeNull();

    fixture.componentRef.setInput('visible', true);
    fixture.detectChanges();
    await vi.runAllTimersAsync();
    fixture.detectChanges();
    expect(fixture.nativeElement.inert).toBeFalsy();
    expect(fixture.nativeElement.getAttribute('aria-hidden')).toBeNull();

    fixture.componentRef.setInput('visible', false);
    fixture.detectChanges();
    await vi.runAllTimersAsync();
    fixture.detectChanges();
    expect(fixture.nativeElement.inert).toBe(true);
    expect(fixture.nativeElement.getAttribute('aria-hidden')).toBeNull();
  });

  it('should close modal on Escape key press if keyboard is enabled', async () => {
    fixture.componentRef.setInput('visible', true);
    fixture.detectChanges();
    await vi.runAllTimersAsync();
    const event = new KeyboardEvent('keydown', { key: 'Escape' });
    document.dispatchEvent(event);
    fixture.detectChanges();
    await vi.runAllTimersAsync();

    expect(component.visible()).toBe(false);
  });

  it('should not close modal on Escape key press if keyboard is disabled', async () => {
    fixture.componentRef.setInput('keyboard', false);
    fixture.componentRef.setInput('visible', true);
    fixture.detectChanges();
    await vi.runAllTimersAsync();
    expect(component.visible()).toBe(true);
    const event = new KeyboardEvent('keydown', { key: 'Escape' });
    document.dispatchEvent(event);
    await vi.runAllTimersAsync();
    expect(component.visible()).toBe(true);
  });

  it('should apply modal-open class to body when backdrop is true', async () => {
    fixture.componentRef.setInput('backdrop', true);
    fixture.componentRef.setInput('visible', true);
    fixture.detectChanges();
    await vi.runAllTimersAsync();
    expect(document.body.classList.contains('modal-open')).toBe(true);

    fixture.componentRef.setInput('visible', false);
    fixture.detectChanges();
    await vi.runAllTimersAsync();
    expect(document.body.classList.contains('modal-open')).toBe(false);
  });

  it('should call setStaticBackdrop when clicking on backdrop with static backdrop', async () => {
    // Test the observable state or public methods affected by `setStaticBackdrop`
    fixture.componentRef.setInput('backdrop', 'static');
    fixture.componentRef.setInput('visible', true);
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
    fixture.componentRef.setInput('backdrop', 'static');
    fixture.componentRef.setInput('visible', true);
    fixture.detectChanges();
    await vi.runAllTimersAsync();
    expect(component.visible()).toBe(true);

    fixture.nativeElement.dispatchEvent(new MouseEvent('mousedown', { bubbles: true }));
    fixture.nativeElement.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    expect(component.visible()).toBe(true);
  });

  it('should close modal when clicking on modal backdrop', async () => {
    fixture.componentRef.setInput('backdrop', true);
    fixture.componentRef.setInput('visible', true);
    fixture.detectChanges();
    await vi.runAllTimersAsync();
    expect(component.visible()).toBe(true);

    fixture.nativeElement.dispatchEvent(new MouseEvent('mousedown', { bubbles: true }));
    fixture.nativeElement.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    expect(component.visible()).toBe(false);
  });

  it('should not close modal when clicking inside modal dialog', async () => {
    fixture.componentRef.setInput('visible', true);
    fixture.detectChanges();
    await vi.runAllTimersAsync();
    expect(component.visible()).toBe(true);

    const dialogElement = fixture.nativeElement.querySelector('.modal-dialog');
    component.onMouseDownHandler(new MouseEvent('mousedown', { bubbles: true }));
    const clickEvent = new MouseEvent('click', { bubbles: true });
    Object.defineProperty(clickEvent, 'target', { value: dialogElement, enumerable: true });
    component.onClickHandler(clickEvent);
    fixture.detectChanges();
    await vi.runAllTimersAsync();
    expect(component.visible()).toBe(true);
  });

  it('should not close modal when mousedown and click targets differ', async () => {
    fixture.componentRef.setInput('visible', true);
    fixture.detectChanges();
    await vi.runAllTimersAsync();
    expect(component.visible()).toBe(true);

    const mouseDownEvent = new MouseEvent('mousedown', { bubbles: true });
    Object.defineProperty(mouseDownEvent, 'target', { value: document.body, enumerable: true });
    component.onMouseDownHandler(mouseDownEvent);

    const clickEvent = new MouseEvent('click', { bubbles: true });
    Object.defineProperty(clickEvent, 'target', { value: fixture.nativeElement, enumerable: true });
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
      fixture.nativeElement.append(inside);
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
      fixture.componentRef.setInput('visible', true);
      fixture.detectChanges();
      await vi.runAllTimersAsync();
      inside.focus();
      fixture.componentRef.setInput('visible', false);
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
      fixture.componentRef.setInput('visible', true);
      fixture.detectChanges();
      await vi.runAllTimersAsync();
      inside.focus();
      fixture.componentRef.setInput('visible', false);
      fixture.detectChanges();
      expect(document.activeElement).toBe(input);
    });

    it('should hand initial focus to the focus trap on open', async () => {
      const trap = fixture.debugElement.query(By.directive(CdkTrapFocus)).injector.get(CdkTrapFocus);
      const initial = vi.spyOn(trap.focusTrap, 'focusInitialElement').mockReturnValue(true);
      await toggle(true, trigger);
      expect(initial).toHaveBeenCalledTimes(1);
      expect(document.activeElement).not.toBe(fixture.nativeElement);
    });

    it('should focus the modal itself when nothing in it can take focus', async () => {
      const trap = fixture.debugElement.query(By.directive(CdkTrapFocus)).injector.get(CdkTrapFocus);
      vi.spyOn(trap.focusTrap, 'focusInitialElement').mockReturnValue(false);
      trigger.focus();
      await toggle(true, trigger);
      expect(document.activeElement).toBe(fixture.nativeElement);
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
      expect(fixture.nativeElement.getAttribute('role')).toBeNull();
      await toggle(true);
      expect(fixture.nativeElement.getAttribute('role')).toBe('dialog');
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
    let originalParent: HTMLElement;

    beforeEach(() => {
      container = document.createElement('div');
      document.body.appendChild(container);
      document.body.appendChild(fixture.nativeElement);
      originalParent = fixture.nativeElement.parentElement;
    });

    afterEach(() => {
      container.remove();
    });

    it('should default the container input to document.body', () => {
      expect(component.container()).toBe(document.body);
    });

    it('should not move the modal element when portal is disabled', async () => {
      fixture.componentRef.setInput('container', container);
      fixture.componentRef.setInput('visible', true);
      fixture.detectChanges();
      await vi.runAllTimersAsync();

      expect(container.contains(fixture.nativeElement)).toBe(false);
      expect(fixture.nativeElement.parentElement).toBe(originalParent);
    });

    it('should move the modal element into the given container when portal is enabled', async () => {
      fixture.componentRef.setInput('portal', true);
      fixture.componentRef.setInput('container', container);
      fixture.componentRef.setInput('visible', true);
      fixture.detectChanges();
      await vi.runAllTimersAsync();

      expect(fixture.nativeElement.parentElement).toBe(container);
    });

    it('should resolve a container provided as a function', async () => {
      fixture.componentRef.setInput('portal', true);
      fixture.componentRef.setInput('container', () => container);
      fixture.componentRef.setInput('visible', true);
      fixture.detectChanges();
      await vi.runAllTimersAsync();

      expect(fixture.nativeElement.parentElement).toBe(container);
    });

    it('should not attach the portal when the container resolves to null', async () => {
      fixture.componentRef.setInput('portal', true);
      fixture.componentRef.setInput('container', null);
      fixture.componentRef.setInput('visible', true);
      fixture.detectChanges();
      await vi.runAllTimersAsync();

      expect(fixture.nativeElement.parentElement).toBe(originalParent);
    });

    it('should restore the modal element to its original position once the close transition ends', async () => {
      fixture.componentRef.setInput('portal', true);
      fixture.componentRef.setInput('container', container);
      fixture.componentRef.setInput('visible', true);
      fixture.detectChanges();
      await vi.runAllTimersAsync();
      expect(fixture.nativeElement.parentElement).toBe(container);

      fixture.componentRef.setInput('visible', false);
      fixture.detectChanges();
      await vi.runAllTimersAsync();
      expect(fixture.nativeElement.parentElement).toBe(container);

      const dialogElement = fixture.nativeElement.querySelector('.modal-dialog');
      dialogElement.dispatchEvent(new TransitionEvent('transitionend', { propertyName: 'transform' }));

      expect(fixture.nativeElement.parentElement).toBe(originalParent);
    });

    it('should restore the modal element immediately when transition is disabled', async () => {
      fixture.componentRef.setInput('transition', false);
      fixture.componentRef.setInput('portal', true);
      fixture.componentRef.setInput('container', container);
      fixture.componentRef.setInput('visible', true);
      fixture.detectChanges();
      await vi.runAllTimersAsync();
      expect(fixture.nativeElement.parentElement).toBe(container);

      fixture.componentRef.setInput('visible', false);
      fixture.detectChanges();
      await vi.runAllTimersAsync();

      expect(fixture.nativeElement.parentElement).toBe(originalParent);
    });

    it('should move the modal to a new container when the container input changes while visible', async () => {
      const secondContainer = document.createElement('div');
      document.body.appendChild(secondContainer);

      fixture.componentRef.setInput('portal', true);
      fixture.componentRef.setInput('container', container);
      fixture.componentRef.setInput('visible', true);
      fixture.detectChanges();
      await vi.runAllTimersAsync();
      expect(fixture.nativeElement.parentElement).toBe(container);

      fixture.componentRef.setInput('container', secondContainer);
      fixture.detectChanges();
      await vi.runAllTimersAsync();

      expect(fixture.nativeElement.parentElement).toBe(secondContainer);
      secondContainer.remove();
    });

    it('should restore the modal to its original position when portal is disabled while visible', async () => {
      fixture.componentRef.setInput('portal', true);
      fixture.componentRef.setInput('container', container);
      fixture.componentRef.setInput('visible', true);
      fixture.detectChanges();
      await vi.runAllTimersAsync();
      expect(fixture.nativeElement.parentElement).toBe(container);

      fixture.componentRef.setInput('portal', false);
      fixture.detectChanges();
      await vi.runAllTimersAsync();

      expect(fixture.nativeElement.parentElement).toBe(originalParent);
    });

    it('should detach the portal when the component is destroyed', async () => {
      fixture.componentRef.setInput('portal', true);
      fixture.componentRef.setInput('container', container);
      fixture.componentRef.setInput('visible', true);
      fixture.detectChanges();
      await vi.runAllTimersAsync();
      expect(fixture.nativeElement.parentElement).toBe(container);

      fixture.destroy();

      expect(container.contains(fixture.nativeElement)).toBe(false);
    });
  });
});
