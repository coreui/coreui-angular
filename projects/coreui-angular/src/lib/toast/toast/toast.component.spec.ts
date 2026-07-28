import { AnimationCallbackEvent } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { expect, vi } from 'vitest';

import { ToastComponent } from './toast.component';
import { ToastCloseDirective } from '../toast-close.directive';

describe('ToastComponent', () => {
  let component: ToastComponent;
  let fixture: ComponentFixture<ToastComponent>;

  beforeEach(async () => {
    vi.useFakeTimers();
    
    await TestBed.configureTestingModule({
      imports: [NoopAnimationsModule, ToastComponent, ToastCloseDirective]
    }).compileComponents();

    fixture = TestBed.createComponent(ToastComponent);
    await fixture.whenStable();

    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  afterEach(() => {
    vi.useRealTimers();
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
    // Flush the setTimeout in handleEnter to set #rendered to true
    await vi.runAllTimersAsync();
    // The show class requires both #visible and #rendered to be true
    // #rendered is set asynchronously in handleEnter after a setTimeout
    fixture.componentRef.setInput('visible', true);
    fixture.detectChanges();

    expect(fixture.nativeElement.classList.contains('show')).toBe(true);

    fixture.componentRef.setInput('visible', false);
    fixture.detectChanges();
    expect(fixture.nativeElement.classList.contains('show')).toBe(false);
  });

  it('should emit visibleChange visible change', () => {
    vi.spyOn(component.visibleChange, 'emit');
    fixture.componentRef.setInput('visible', true);
    fixture.detectChanges();
    expect(component.visibleChange.emit).toHaveBeenCalledWith(true);
    fixture.componentRef.setInput('visible', false);
    fixture.detectChanges();
    expect(component.visibleChange.emit).toHaveBeenCalledWith(false);
  });
});
