import { ComponentFixture, TestBed } from '@angular/core/testing';
import { expect } from 'vitest';

import { AlertComponent } from './alert.component';
import { Component, ComponentRef, signal } from '@angular/core';

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
});

@Component({
  template: `<c-alert [(visible)]="visible" dismissible fade>Text</c-alert>`,
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

  it('should hide a dismissed alert after its opacity transition', async () => {
    alert.querySelector<HTMLButtonElement>('button[cButtonClose]')?.click();
    await fixture.whenStable();
    expect(alert.classList.contains('show')).toBe(false);
    expect(alert.hidden).toBe(false);

    await transitionEnd('color');
    expect(alert.hidden).toBe(false);

    await transitionEnd('opacity');
    expect(alert.hidden).toBe(true);
    expect(alert.inert).toBe(true);
    expect(alert.textContent?.trim()).toBe('');
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
});
