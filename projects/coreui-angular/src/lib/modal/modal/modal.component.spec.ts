import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { ModalComponent } from './modal.component';
import { DOCUMENT } from '@angular/core';

describe('ModalComponent', () => {
  let component: ModalComponent;
  let fixture: ComponentFixture<ModalComponent>;
  let document: Document;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NoopAnimationsModule, ModalComponent]
    }).compileComponents();
    document = TestBed.inject(DOCUMENT);
    fixture = TestBed.createComponent(ModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have css classes', () => {
    expect(fixture.nativeElement).toHaveClass('modal');
    expect(fixture.nativeElement).toHaveClass('fade');
  });

  // it('should be visible', fakeAsync(() => {
  //   fixture.componentRef.setInput('visible', true);
  //   fixture.detectChanges();
  //   expect(fixture.nativeElement).toHaveClass('show');
  // }));

  // it('should call event handling functions', fakeAsync(() => {
  //
  // }));

  it('should toggle visibility when visible input changes', fakeAsync(() => {
    fixture.componentRef.setInput('visible', true);
    fixture.detectChanges();
    tick(300);
    expect(fixture.nativeElement).toHaveClass('show');

    fixture.componentRef.setInput('visible', false);
    fixture.detectChanges();
    tick(300);
    expect(fixture.nativeElement).not.toHaveClass('show');
  }));

  it('should close modal on Escape key press if keyboard is enabled', fakeAsync(() => {
    fixture.componentRef.setInput('visible', true);
    fixture.detectChanges();
    tick(300);
    const event = new KeyboardEvent('keyup', { key: 'Escape' });
    document.dispatchEvent(event);

    expect(component.visible()).toBe(false);
  }));

  it('should not close modal on Escape key press if keyboard is disabled', fakeAsync(() => {
    fixture.componentRef.setInput('keyboard', false);
    fixture.componentRef.setInput('visible', true);
    fixture.detectChanges();
    tick(300);
    expect(component.visible()).toBe(true);
    const event = new KeyboardEvent('keyup', { key: 'Escape' });
    document.dispatchEvent(event);
    tick(300);
    expect(component.visible()).toBe(true);
  }));

  it('should apply modal-open class to body when backdrop is true', fakeAsync(() => {
    fixture.componentRef.setInput('backdrop', true);
    fixture.componentRef.setInput('visible', true);
    fixture.detectChanges();
    tick(300);
    expect(document.body).toHaveClass('modal-open');

    fixture.componentRef.setInput('visible', false);
    fixture.detectChanges();
    tick(300);
    expect(document.body).not.toHaveClass('modal-open');
  }));

  it('should call setStaticBackdrop when clicking on backdrop with static backdrop', fakeAsync(() => {
    // Test the observable state or public methods affected by `setStaticBackdrop`
    fixture.componentRef.setInput('backdrop', 'static');
    fixture.componentRef.setInput('visible', true);
    fixture.detectChanges();
    tick(300);
    expect(document.body).toHaveClass('modal-open');

    const event = new MouseEvent('click', { bubbles: true });
    document.body.dispatchEvent(event);
    fixture.detectChanges();
    tick(300);
    expect(document.body).toHaveClass('modal-open');
  }));
});
