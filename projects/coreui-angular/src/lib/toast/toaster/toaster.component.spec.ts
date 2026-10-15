import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, MAX_ANIMATION_TIMEOUT, signal, viewChild } from '@angular/core';
import { By } from '@angular/platform-browser';

import { ToasterComponent } from './toaster.component';
import { ToasterHostDirective } from './toaster-host.directive';
import { ToasterService } from './toaster.service';
import { ToastComponent } from '../toast/toast.component';
import { ToastCloseDirective } from '../toast-close.directive';

describe('ToasterComponent', () => {
  let component: ToasterComponent;
  let fixture: ComponentFixture<ToasterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ToasterComponent, ToasterHostDirective]
    }).compileComponents();

    fixture = TestBed.createComponent(ToasterComponent);
    await fixture.whenStable();

    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have css classes', () => {
    expect(fixture.nativeElement.classList.contains('toaster')).toBe(true);
    expect(fixture.nativeElement.classList.contains('toast-container')).toBe(true);
  });
});

describe('ToasterComponent dynamic toasts', () => {
  let fixture: ComponentFixture<ToasterComponent>;
  let toaster: ToasterComponent;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      providers: [{ provide: MAX_ANIMATION_TIMEOUT, useValue: 0 }]
    });
    fixture = TestBed.createComponent(ToasterComponent);
    fixture.componentRef.setInput('placement', 'bottom-start');
    await fixture.whenStable();
    toaster = fixture.componentInstance;
  });

  it('should add a visible toast with its props, placement and index', async () => {
    const first = toaster.addToast(ToastComponent, { color: 'success', delay: 0 });
    const second = toaster.addToast(ToastComponent, { color: 'danger', delay: 0 });
    await fixture.whenStable();

    expect(first.instance.color()).toBe('success');
    expect(first.instance.placement).toBe('bottom-start');
    expect(first.instance.dynamic()).toBe(true);
    expect(first.instance.visible).toBe(true);
    expect(first.instance.index()).toBe(0);
    expect(second.instance.index()).toBe(1);
    expect(fixture.nativeElement.querySelectorAll('c-toast').length).toBe(2);
  });

  it('should hide a dynamic toast on close and destroy it after the animation timeout', async () => {
    const toastRef = toaster.addToast(ToastComponent, { delay: 0 });
    await fixture.whenStable();
    const visibleChange = vi.fn();
    toastRef.instance.visibleChange.subscribe(visibleChange);

    toastRef.instance.onClose();
    await fixture.whenStable();
    expect(toastRef.instance.visible).toBe(false);
    expect(visibleChange).toHaveBeenCalledWith(false);

    await new Promise((resolve) => setTimeout(resolve));
    expect(toastRef.hostView.destroyed).toBe(true);
  });

  it('should leave other dynamic toasts on close', async () => {
    const closed = toaster.addToast(ToastComponent, { delay: 0 });
    const kept = toaster.addToast(ToastComponent, { delay: 0 });
    await fixture.whenStable();

    fixture.debugElement.injector.get(ToasterService).setState({ show: false, toast: closed.instance });
    await new Promise((resolve) => setTimeout(resolve));

    expect(closed.hostView.destroyed).toBe(true);
    expect(kept.hostView.destroyed).toBe(false);
    expect(kept.instance.visible).toBe(true);
  });
});

@Component({
  template: `
    <c-toaster>
      <c-toast #toast [visible]="visible()" [delay]="delay()">
        <button [cToastClose]="toast" id="close">Close</button>
      </c-toast>
    </c-toaster>
  `,
  imports: [ToasterComponent, ToastComponent, ToastCloseDirective]
})
class DeclaredToastComponent {
  readonly delay = signal(0);
  readonly visible = signal(true);
  readonly toast = viewChild.required(ToastComponent);
}

describe('ToasterComponent declared toasts', () => {
  let fixture: ComponentFixture<DeclaredToastComponent>;

  beforeEach(async () => {
    fixture = TestBed.createComponent(DeclaredToastComponent);
    await fixture.whenStable();
  });

  it('should hide a toast declared in the template on close', async () => {
    const toast = fixture.componentInstance.toast();
    expect(toast.visible).toBe(true);

    fixture.nativeElement.querySelector('#close').click();
    await fixture.whenStable();

    expect(toast.visible).toBe(false);
    expect(fixture.debugElement.query(By.directive(ToastComponent)).nativeElement.inert).toBe(true);
  });

  it('should hide a toast after its delay and not while hovered', async () => {
    fixture.componentInstance.visible.set(false);
    fixture.componentInstance.delay.set(5);
    await fixture.whenStable();
    fixture.componentInstance.visible.set(true);
    await fixture.whenStable();
    const toast = fixture.componentInstance.toast();
    const host: HTMLElement = fixture.debugElement.query(By.directive(ToastComponent)).nativeElement;

    host.dispatchEvent(new MouseEvent('mouseover'));
    await new Promise((resolve) => setTimeout(resolve, 20));
    expect(toast.visible).toBe(true);

    host.dispatchEvent(new MouseEvent('mouseout'));
    await new Promise((resolve) => setTimeout(resolve, 20));
    await fixture.whenStable();
    expect(toast.visible).toBe(false);
  });
});
