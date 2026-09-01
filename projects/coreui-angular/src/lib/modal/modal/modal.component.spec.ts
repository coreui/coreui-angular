/// <reference types="vitest/globals" />
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalComponent } from './modal.component';
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
