import { ComponentRef, DOCUMENT } from '@angular/core';
import { ComponentFixture, fakeAsync, flushMicrotasks, TestBed, tick } from '@angular/core/testing';

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
    component = fixture.componentInstance;
    componentRef = fixture.componentRef;
    document = TestBed.inject(DOCUMENT);
    fixture.detectChanges();
  });

  afterEach(() => {
    componentRef.setInput('visible', false);
    fixture.detectChanges();
    const backdrop = document.querySelector('.offcanvas-backdrop');
    if (backdrop) {
      document.body.removeChild(backdrop);
    }
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have css classes', () => {
    expect(fixture.nativeElement).toHaveClass('offcanvas');
    expect(fixture.nativeElement).toHaveClass('offcanvas-start');
    expect(fixture.nativeElement.getAttribute('id')).toContain('offcanvas-start-');
  });

  it('should react to visible changes', fakeAsync(() => {
    expect(componentRef.instance.visible()).toBeFalse();
    expect(fixture.nativeElement.getAttribute('inert')).toBe('true');
    componentRef.setInput('visible', true);
    fixture.detectChanges();
    flushMicrotasks();
    expect(componentRef.instance.visible()).toBeTrue();
    expect(fixture.nativeElement.getAttribute('inert')).toBeNull();
  }));

  it('should close offcanvas to Esc keydown event', fakeAsync(() => {
    componentRef.setInput('visible', true);
    fixture.detectChanges();
    expect(componentRef.instance.visible()).toBeTrue();
    expect(fixture.nativeElement.getAttribute('inert')).toBeNull();
    document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape' }));
    tick();
    fixture.detectChanges();
    expect(componentRef.instance.visible()).toBeFalse();
    expect(fixture.nativeElement.getAttribute('inert')).toBeTruthy();
  }));

  it('should close offcanvas on backdrop click', fakeAsync(() => {
    componentRef.setInput('backdrop', true);
    componentRef.setInput('visible', true);
    fixture.detectChanges();
    expect(componentRef.instance.visible()).toBeTrue();
    expect(componentRef.location.nativeElement.classList).toContain('show');
    const backdrop = document.querySelector('.offcanvas-backdrop');
    expect(backdrop).not.toBeNull();
    tick(300);
    // console.log(backdrop);
    expect(backdrop).toHaveClass('show');
    backdrop?.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    tick(300);
    fixture.detectChanges();
    tick(300);
    // console.log(backdrop);
    expect(componentRef.location.nativeElement).not.toHaveClass('show');
  }));

  it('should return breakpoint value', fakeAsync(() => {
    componentRef.setInput('responsive', 'false');
    fixture.detectChanges();
    expect(fixture.componentInstance.responsiveBreakpoint).toBeFalse();
  }));
});
