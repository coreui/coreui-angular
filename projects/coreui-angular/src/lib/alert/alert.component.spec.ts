import { ComponentFixture, TestBed } from '@angular/core/testing';
import { expect } from 'vitest';

import { AlertComponent } from './alert.component';
import { Component, ComponentRef, PLATFORM_ID, signal } from '@angular/core';

describe('AlertComponent', () => {
  let component: AlertComponent;
  let componentRef: ComponentRef<AlertComponent>;
  let fixture: ComponentFixture<AlertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlertComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(AlertComponent);
    await fixture.whenStable();
    component = fixture.componentInstance;
    componentRef = fixture.componentRef;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have css classes and styles', async () => {
    expect(fixture.nativeElement.classList.contains('alert')).toBe(true);
    expect(fixture.nativeElement.classList.contains('alert-primary')).toBe(true);
    expect(fixture.nativeElement.classList.contains('show')).toBe(true);
    componentRef.setInput('visible', false);
    componentRef.setInput('color', 'danger');
    await fixture.whenStable();
    expect(fixture.nativeElement.classList.contains('alert-danger')).toBe(true);
    expect(fixture.nativeElement.classList.contains('show')).toBe(false);
    componentRef.setInput('dismissible', true);
    componentRef.setInput('fade', true);
    componentRef.setInput('variant', 'solid');
    componentRef.setInput('visible', true);
    await fixture.whenStable();
    expect(fixture.nativeElement.classList.contains('alert-dismissible')).toBe(true);
    expect(fixture.nativeElement.classList.contains('fade')).toBe(true);
    expect(fixture.nativeElement.classList.contains('alert-danger')).toBe(false);
    expect(fixture.nativeElement.classList.contains('bg-danger')).toBe(true);
    expect(fixture.nativeElement.classList.contains('text-white')).toBe(true);
    expect(fixture.nativeElement.classList.contains('show')).toBe(true);
  });

  it('should toggle inert with visibility', async () => {
    expect(fixture.nativeElement.inert).toBeFalsy();

    componentRef.setInput('visible', false);
    await fixture.whenStable();
    fixture.nativeElement.dispatchEvent(new TransitionEvent('transitionend', { propertyName: 'opacity' }));
    await fixture.whenStable();
    expect(fixture.nativeElement.inert).toBe(true);

    componentRef.setInput('visible', true);
    await fixture.whenStable();
    expect(fixture.nativeElement.inert).toBeFalsy();
  });

  it('should have attributes', async () => {
    await fixture.whenStable();
    expect(fixture.nativeElement.getAttribute('role')).toBe('alert');
  });

  it('should not apply the fade class when transition is disabled', async () => {
    componentRef.setInput('fade', false);
    await fixture.whenStable();
    expect(fixture.nativeElement.classList.contains('fade')).toBe(false);
  });
});

@Component({
  template: `<c-alert class="custom-class" color="success">Text</c-alert>`,
  imports: [AlertComponent]
})
class CustomClassAlertComponent {}

describe('AlertComponent with a custom class', () => {
  it('should apply a custom class name', async () => {
    const fixture = TestBed.createComponent(CustomClassAlertComponent);
    await fixture.whenStable();
    const alert: HTMLElement = fixture.nativeElement.querySelector('c-alert');
    expect(alert.classList.contains('custom-class')).toBe(true);
    expect(alert.classList.contains('alert')).toBe(true);
    expect(alert.classList.contains('alert-success')).toBe(true);
  });
});

@Component({
  template: `<c-alert [(visible)]="visible" dismissible fade style="transition-duration: 10s">Text</c-alert>`,
  imports: [AlertComponent]
})
class FadeAlertComponent {
  readonly visible = signal(true);
}

describe('AlertComponent with fade', () => {
  let fixture: ComponentFixture<FadeAlertComponent>;
  let alert: HTMLElement;

  const transitionEnd = async (propertyName: string) => {
    alert.dispatchEvent(new TransitionEvent('transitionend', { propertyName }));
    await fixture.whenStable();
  };

  beforeEach(async () => {
    fixture = TestBed.createComponent(FadeAlertComponent);
    await fixture.whenStable();
    alert = fixture.nativeElement.querySelector('c-alert');
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it('should close an alert', async () => {
    alert.querySelector<HTMLButtonElement>('button[cButtonClose]')?.click();
    await fixture.whenStable();
    expect(alert.classList.contains('show')).toBe(false);

    await transitionEnd('opacity');
    expect(alert.hidden).toBe(true);
    expect(alert.inert).toBe(true);
    expect(alert.textContent?.trim()).toBe('');
  });

  it('should emit closed after the transition', async () => {
    alert.querySelector<HTMLButtonElement>('button[cButtonClose]')?.click();
    await fixture.whenStable();
    expect(fixture.componentInstance.visible()).toBe(true);

    await transitionEnd('color');
    expect(fixture.componentInstance.visible()).toBe(true);
    expect(alert.hidden).toBe(false);

    await transitionEnd('opacity');
    expect(fixture.componentInstance.visible()).toBe(false);
  });

  it('should show a hidden alert again', async () => {
    fixture.componentInstance.visible.set(false);
    await fixture.whenStable();
    await transitionEnd('opacity');
    expect(alert.hidden).toBe(true);

    fixture.componentInstance.visible.set(true);
    await fixture.whenStable();
    expect(alert.hidden).toBe(false);
    expect(alert.classList.contains('show')).toBe(true);
    expect(alert.textContent?.trim()).toBe('Text');

    await transitionEnd('opacity');
    expect(alert.hidden).toBe(false);
  });

  it('should start hidden without waiting for the transition', async () => {
    const hiddenFixture = TestBed.createComponent(FadeAlertComponent);
    hiddenFixture.componentInstance.visible.set(false);
    await hiddenFixture.whenStable();
    const hiddenAlert: HTMLElement = hiddenFixture.nativeElement.querySelector('c-alert');
    expect(hiddenAlert.hidden).toBe(true);
    expect(hiddenAlert.inert).toBe(true);
    expect(hiddenFixture.componentInstance.visible()).toBe(false);
  });

  it('should ignore a transitionend bubbling from the content', async () => {
    const button = alert.querySelector<HTMLButtonElement>('button[cButtonClose]');
    button?.click();
    await fixture.whenStable();

    button?.dispatchEvent(new TransitionEvent('transitionend', { propertyName: 'opacity', bubbles: true }));
    await fixture.whenStable();
    expect(alert.hidden).toBe(false);
    expect(fixture.componentInstance.visible()).toBe(true);
  });

  it('should finish the close when no transitionend arrives', async () => {
    vi.useFakeTimers();
    alert.querySelector<HTMLButtonElement>('button[cButtonClose]')?.click();
    fixture.detectChanges();
    await vi.advanceTimersByTimeAsync(10000);
    fixture.detectChanges();
    expect(alert.hidden).toBe(false);

    await vi.advanceTimersByTimeAsync(5);
    fixture.detectChanges();
    expect(alert.hidden).toBe(true);
    expect(fixture.componentInstance.visible()).toBe(false);
  });

  it('should read the transition once the show class is gone', async () => {
    const style = document.createElement('style');
    style.textContent = 'c-alert.fade:not(.show) { transition-duration: 10s; }';
    document.head.append(style);
    try {
      const hidingFixture = TestBed.createComponent(DismissibleAlertComponent);
      hidingFixture.componentInstance.fade.set(true);
      await hidingFixture.whenStable();
      const hidingAlert: HTMLElement = hidingFixture.nativeElement.querySelector('c-alert');

      hidingAlert.querySelector<HTMLButtonElement>('button[cButtonClose]')?.click();
      await hidingFixture.whenStable();
      expect(hidingAlert.hidden).toBe(false);
      expect(hidingFixture.componentInstance.visible()).toBe(true);
    } finally {
      style.remove();
    }
  });

  it('should stay open when shown again before the close finishes', async () => {
    vi.useFakeTimers();
    fixture.componentInstance.visible.set(false);
    fixture.detectChanges();
    await vi.advanceTimersByTimeAsync(100);

    fixture.componentInstance.visible.set(true);
    fixture.detectChanges();
    await vi.advanceTimersByTimeAsync(100);
    fixture.detectChanges();
    expect(alert.hidden).toBe(false);
    expect(alert.classList.contains('show')).toBe(true);
    expect(fixture.componentInstance.visible()).toBe(true);
  });

  it('should not finish a later close with the timer of an earlier one', async () => {
    vi.useFakeTimers();
    fixture.componentInstance.visible.set(false);
    fixture.detectChanges();
    await vi.advanceTimersByTimeAsync(100);

    fixture.componentInstance.visible.set(true);
    fixture.detectChanges();
    fixture.componentInstance.visible.set(false);
    fixture.detectChanges();
    await vi.advanceTimersByTimeAsync(9910);
    fixture.detectChanges();
    expect(alert.hidden).toBe(false);
  });
});

@Component({
  template: `<c-alert [(visible)]="visible" [fade]="fade()" dismissible>Text</c-alert>`,
  imports: [AlertComponent]
})
class DismissibleAlertComponent {
  readonly fade = signal(false);
  readonly visible = signal(true);
}

describe('AlertComponent without a transition', () => {
  let fixture: ComponentFixture<DismissibleAlertComponent>;
  let alert: HTMLElement;

  const render = async () => {
    await fixture.whenStable();
    alert = fixture.nativeElement.querySelector('c-alert');
  };

  const expectHidden = () => {
    expect(alert.hidden).toBe(true);
    expect(alert.inert).toBe(true);
    expect(alert.textContent?.trim()).toBe('');
    expect(fixture.componentInstance.visible()).toBe(false);
  };

  beforeEach(() => {
    fixture = TestBed.createComponent(DismissibleAlertComponent);
  });

  it('should hide and emit on close', async () => {
    await render();
    alert.style.transitionDuration = '10s';
    alert.querySelector<HTMLButtonElement>('button[cButtonClose]')?.click();
    fixture.changeDetectorRef.detectChanges();
    expectHidden();
  });

  it('should hide a fade alert on close when no transition is computed', async () => {
    fixture.componentInstance.fade.set(true);
    await render();
    expect(alert.classList.contains('fade')).toBe(true);

    alert.querySelector<HTMLButtonElement>('button[cButtonClose]')?.click();
    await fixture.whenStable();
    expectHidden();
  });

  it('should hide and show with the visible input', async () => {
    await render();
    fixture.componentInstance.visible.set(false);
    await fixture.whenStable();
    expectHidden();

    fixture.componentInstance.visible.set(true);
    await fixture.whenStable();
    expect(alert.hidden).toBe(false);
    expect(alert.inert).toBe(false);
    expect(alert.textContent?.trim()).toBe('Text');
  });

  it('should start hidden', async () => {
    fixture.componentInstance.visible.set(false);
    await render();
    expectHidden();
    expect(alert.classList.contains('show')).toBe(false);
  });

  it('should hide at once when fade is switched off during the close', async () => {
    fixture.componentInstance.fade.set(true);
    await render();
    alert.style.transitionDuration = '10s';
    alert.querySelector<HTMLButtonElement>('button[cButtonClose]')?.click();
    await fixture.whenStable();
    expect(alert.hidden).toBe(false);

    fixture.componentInstance.fade.set(false);
    await fixture.whenStable();
    expectHidden();
  });
});

describe('AlertComponent on the server', () => {
  const scope = globalThis as { ngServerMode?: boolean };

  beforeEach(() => {
    scope.ngServerMode = true;
    TestBed.configureTestingModule({ providers: [{ provide: PLATFORM_ID, useValue: 'server' }] });
  });

  afterEach(() => {
    delete scope.ngServerMode;
  });

  it('should hide a fade alert closed during the render', async () => {
    const fixture = TestBed.createComponent(DismissibleAlertComponent);
    fixture.componentInstance.fade.set(true);
    await fixture.whenStable();
    fixture.componentInstance.visible.set(false);
    await fixture.whenStable();
    const alert: HTMLElement = fixture.nativeElement.querySelector('c-alert');
    expect(alert.hidden).toBe(true);
    expect(alert.textContent?.trim()).toBe('');
  });
});
