/// <reference types="vitest/globals" />
import { ComponentRef, DOCUMENT } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OffcanvasComponent } from './offcanvas.component';

describe('OffcanvasComponent', () => {
  let component: OffcanvasComponent;
  let componentRef: ComponentRef<OffcanvasComponent>;
  let fixture: ComponentFixture<OffcanvasComponent>;
  let document: Document;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OffcanvasComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(OffcanvasComponent);
    await fixture.whenStable();

    component = fixture.componentInstance;
    componentRef = fixture.componentRef;
    document = TestBed.inject(DOCUMENT);
    fixture.detectChanges();

    vi.useFakeTimers();
  });

  afterEach(async () => {
    vi.useRealTimers();

    if (componentRef) {
      componentRef.setInput('visible', false);
      fixture.detectChanges();
    }
    const backdrop = document.querySelector('.offcanvas-backdrop');
    if (backdrop) {
      document.body.removeChild(backdrop);
    }
  });

  it('should create', async () => {
    expect(component).toBeTruthy();
  });

  it('should have css classes', () => {
    expect(fixture.nativeElement.classList.contains('offcanvas')).toBe(true);
    expect(fixture.nativeElement.classList.contains('offcanvas-start')).toBe(true);
    expect(fixture.nativeElement.getAttribute('id')).toContain('offcanvas-start-');
  });

  it('should react to visible changes', async () => {
    expect(componentRef.instance.visible()).toBe(false);
    expect(fixture.nativeElement.getAttribute('inert')).toBe('true');
    componentRef.setInput('visible', true);
    fixture.detectChanges();
    await fixture.whenStable();
    expect(componentRef.instance.visible()).toBe(true);
    expect(fixture.nativeElement.getAttribute('inert')).toBeNull();
  });

  it('should close offcanvas to Esc keydown event', async () => {
    componentRef.setInput('visible', true);
    fixture.detectChanges();
    expect(componentRef.instance.visible()).toBe(true);
    expect(fixture.nativeElement.getAttribute('inert')).toBeNull();
    document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape' }));
    await vi.runAllTimersAsync();
    fixture.detectChanges();
    expect(componentRef.instance.visible()).toBe(false);
    expect(fixture.nativeElement.getAttribute('inert')).toBeTruthy();
  });

  it('should close offcanvas on backdrop click', async () => {
    componentRef.setInput('backdrop', true);
    componentRef.setInput('visible', true);
    fixture.detectChanges();
    expect(componentRef.instance.visible()).toBe(true);
    expect(componentRef.location.nativeElement.classList).toContain('show');
    const backdrop = document.querySelector('.offcanvas-backdrop');
    expect(backdrop).not.toBeNull();
    await vi.runAllTimersAsync();
    // console.log(backdrop);
    expect(backdrop?.classList.contains('show')).toBe(true);
    backdrop?.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    await vi.runAllTimersAsync();
    fixture.detectChanges();
    await vi.runAllTimersAsync();
    // console.log(backdrop);
    expect(componentRef.location.nativeElement.classList.contains('show')).toBe(false);
  });

  it('should return breakpoint value', async () => {
    componentRef.setInput('responsive', 'false');
    fixture.detectChanges();
    await vi.runAllTimersAsync();
    expect(fixture.componentInstance.responsiveBreakpoint).toBe(false);
  });
});
