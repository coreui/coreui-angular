import { ComponentFixture, fakeAsync, flush, TestBed, waitForAsync } from '@angular/core/testing';
import { AnimationCallbackEvent } from '@angular/core';

import { ToastComponent } from './toast.component';
import { ToastCloseDirective } from '../toast-close.directive';

describe('ToastComponent', () => {
  let component: ToastComponent;
  let fixture: ComponentFixture<ToastComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      animationsEnabled: true,
      imports: [ToastComponent, ToastCloseDirective]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have css classes', () => {
    expect(fixture.nativeElement).toHaveClass('toast');
  });

  it('should toggle show class on visible change', fakeAsync(() => {
    // Call handleEnter directly to simulate the animation completion
    component['handleEnter']({} as AnimationCallbackEvent);
    // Flush the setTimeout in handleEnter to set #rendered to true
    flush();
    // The show class requires both #visible and #rendered to be true
    // #rendered is set asynchronously in handleEnter after a setTimeout
    fixture.componentRef.setInput('visible', true);
    fixture.detectChanges();

    expect(fixture.nativeElement).toHaveClass('show');

    fixture.componentRef.setInput('visible', false);
    fixture.detectChanges();
    expect(fixture.nativeElement).not.toHaveClass('show');
  }));

  it('should emit visibleChange visible change', () => {
    spyOn(component.visibleChange, 'emit');
    fixture.componentRef.setInput('visible', true);
    fixture.detectChanges();
    expect(component.visibleChange.emit).toHaveBeenCalledWith(true);
    fixture.componentRef.setInput('visible', false);
    fixture.detectChanges();
    expect(component.visibleChange.emit).toHaveBeenCalledWith(false);
  });
});
