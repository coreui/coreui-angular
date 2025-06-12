import { ComponentRef, DOCUMENT } from '@angular/core';
import { ComponentFixture, fakeAsync, flushMicrotasks, TestBed, tick } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { OffcanvasComponent } from './offcanvas.component';

describe('OffcanvasComponent', () => {
  let component: OffcanvasComponent;
  let componentRef: ComponentRef<OffcanvasComponent>;
  let fixture: ComponentFixture<OffcanvasComponent>;
  let document: Document;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NoopAnimationsModule, OffcanvasComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(OffcanvasComponent);
    component = fixture.componentInstance;
    componentRef = fixture.componentRef;
    document = TestBed.inject(DOCUMENT);
    fixture.detectChanges();
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
    document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape' }));
    tick();
    fixture.detectChanges();
    expect(componentRef.instance.visible()).toBeFalse();
    expect(fixture.nativeElement.getAttribute('inert')).toBeTruthy();
  }));

  it('should close offcanvas on backdrop click', fakeAsync(() => {
    componentRef.setInput('visible', true);
    fixture.detectChanges();
    expect(componentRef.instance.visible()).toBeTrue();
    const backdrop = document.querySelector('.offcanvas-backdrop');
    expect(backdrop).not.toBeNull();
    if (backdrop) {
      backdrop?.dispatchEvent(new MouseEvent('click'));
      tick();
      fixture.detectChanges();
      // expect(componentRef.instance.visible()).toBeFalse();
      // expect(fixture.nativeElement.getAttribute('inert')).toBeTruthy();
    }
  }));

  it('should return breakpoint value', fakeAsync(() => {
    componentRef.setInput('responsive', 'false');
    fixture.detectChanges();
    expect(fixture.componentInstance.responsiveBreakpoint).toBeFalse();
  }));
});
