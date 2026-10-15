import { AnimationCallbackEvent } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { expect, vi } from 'vitest';

import { ToastComponent } from './toast.component';
import { ToastCloseDirective } from '../toast-close.directive';

describe('ToastComponent', () => {
  let component: ToastComponent;
  let fixture: ComponentFixture<ToastComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ToastComponent, ToastCloseDirective]
    }).compileComponents();

    fixture = TestBed.createComponent(ToastComponent);
    await fixture.whenStable();

    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have css classes', () => {
    expect(fixture.nativeElement.classList.contains('toast')).toBe(true);
  });

  it('should toggle show class on visible change', async () => {
    // Call handleEnter directly to simulate the animation completion
    component['handleEnter']({} as AnimationCallbackEvent);
    await new Promise((resolve) => setTimeout(resolve));
    fixture.componentRef.setInput('visible', true);
    await fixture.whenStable();

    expect(fixture.nativeElement.classList.contains('show')).toBe(true);

    fixture.componentRef.setInput('visible', false);
    await fixture.whenStable();
    expect(fixture.nativeElement.classList.contains('show')).toBe(false);
  });

  it('should toggle inert with visibility', async () => {
    expect(fixture.nativeElement.inert).toBe(true);

    fixture.componentRef.setInput('visible', true);
    await fixture.whenStable();
    expect(fixture.nativeElement.inert).toBeFalsy();

    fixture.componentRef.setInput('visible', false);
    await fixture.whenStable();
    expect(fixture.nativeElement.inert).toBe(true);
  });

  it('should emit visibleChange visible change', async () => {
    vi.spyOn(component.visibleChange, 'emit');
    fixture.componentRef.setInput('visible', true);
    await fixture.whenStable();
    expect(component.visibleChange.emit).toHaveBeenCalledWith(true);
    fixture.componentRef.setInput('visible', false);
    await fixture.whenStable();
    expect(component.visibleChange.emit).toHaveBeenCalledWith(false);
  });
});

describe('ToastComponent timer', () => {
  let component: ToastComponent;
  let fixture: ComponentFixture<ToastComponent>;

  beforeEach(async () => {
    fixture = TestBed.createComponent(ToastComponent);
    await fixture.whenStable();
    component = fixture.componentInstance;
    vi.useFakeTimers();
    component.visible = true;
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it('should emit the elapsed seconds while visible and stop at the delay', () => {
    const timer = vi.fn();
    component.timer.subscribe(timer);
    component.setTimer();

    vi.advanceTimersByTime(2000);
    expect(timer).toHaveBeenLastCalledWith(2);

    vi.advanceTimersByTime(10000);
    const calls = timer.mock.calls.length;
    vi.advanceTimersByTime(10000);
    expect(timer.mock.calls.length).toBe(calls);
  });

  it('should not run the timer with autohide off', () => {
    fixture.componentRef.setInput('autohide', false);
    const timer = vi.fn();
    component.timer.subscribe(timer);
    component.setTimer();

    vi.advanceTimersByTime(10000);
    expect(timer).not.toHaveBeenCalled();
  });
});
