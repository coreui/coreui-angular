/// <reference types="vitest/globals" />
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalComponent } from './modal.component';
import { DOCUMENT } from '@angular/core';

describe('ModalComponent', () => {
  let component: ModalComponent;
  let fixture: ComponentFixture<ModalComponent>;
  let document: Document;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalComponent]
    }).compileComponents();

    document = TestBed.inject(DOCUMENT);
    fixture = TestBed.createComponent(ModalComponent);
    await fixture.whenStable();

    component = fixture.componentInstance;
    fixture.detectChanges();

    vi.useFakeTimers();
  });

  afterEach(() => {
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
    expect(fixture.nativeElement.classList.contains('show')).toBe(true);

    fixture.componentRef.setInput('visible', false);
    fixture.detectChanges();
    await vi.runAllTimersAsync();
    expect(fixture.nativeElement.classList.contains('show')).toBe(false);
  });

  it('should close modal on Escape key press if keyboard is enabled', async () => {
    fixture.componentRef.setInput('visible', true);
    fixture.detectChanges();
    await vi.runAllTimersAsync();
    const event = new KeyboardEvent('keyup', { key: 'Escape' });
    document.dispatchEvent(event);

    expect(component.visible()).toBe(false);
  });

  it('should not close modal on Escape key press if keyboard is disabled', async () => {
    fixture.componentRef.setInput('keyboard', false);
    fixture.componentRef.setInput('visible', true);
    fixture.detectChanges();
    await vi.runAllTimersAsync();
    expect(component.visible()).toBe(true);
    const event = new KeyboardEvent('keyup', { key: 'Escape' });
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
});
