import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ComponentRef } from '@angular/core';

import { ModalDialogComponent } from './modal-dialog.component';

describe('ModalDialogComponent', () => {
  let component: ModalDialogComponent;
  let componentRef: ComponentRef<ModalDialogComponent>;
  let fixture: ComponentFixture<ModalDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalDialogComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(ModalDialogComponent);
    await fixture.whenStable();

    component = fixture.componentInstance;
    componentRef = fixture.componentRef;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have css classes', () => {
    expect(fixture.nativeElement.classList.contains('modal-dialog')).toBe(true);
  });

  it('should have css classes for alignment prop', () => {
    componentRef.setInput('alignment', 'center');
    fixture.detectChanges();
    expect(fixture.nativeElement.classList.contains('modal-dialog-centered')).toBe(true);
    componentRef.setInput('alignment', 'top');
    fixture.detectChanges();
    expect(fixture.nativeElement.classList.contains('modal-dialog-centered')).toBe(false);
    expect(fixture.nativeElement.classList.contains('modal-dialog')).toBe(true);
  });

  it('should have css classes for fullscreen prop', () => {
    componentRef.setInput('fullscreen', true);
    fixture.detectChanges();
    expect(fixture.nativeElement.classList.contains('modal-fullscreen')).toBe(true);
    for (const size of ['sm', 'md', 'lg', 'xl', 'xxl']) {
      componentRef.setInput('fullscreen', size);
      fixture.detectChanges();
      expect(fixture.nativeElement.classList.contains(`modal-fullscreen-${size}-down`)).toBe(true);
    }
    componentRef.setInput('fullscreen', false);
    fixture.detectChanges();
    expect(fixture.nativeElement.classList.contains('modal-fullscreen')).toBe(false);
    expect(fixture.nativeElement.classList.contains('modal-dialog')).toBe(true);
  });

  it('should have css classes for scrollable prop', () => {
    expect(fixture.nativeElement.classList.contains('modal-dialog-scrollable')).toBe(false);
    componentRef.setInput('scrollable', true);
    fixture.detectChanges();
    expect(fixture.nativeElement.classList.contains('modal-dialog-scrollable')).toBe(true);
    componentRef.setInput('scrollable', false);
    fixture.detectChanges();
    expect(fixture.nativeElement.classList.contains('modal-dialog-scrollable')).toBe(false);
    expect(fixture.nativeElement.classList.contains('modal-dialog')).toBe(true);
  });

  it('should have css classes for size prop', () => {
    for (const size of ['sm', 'lg', 'xl']) {
      componentRef.setInput('size', size);
      fixture.detectChanges();
      expect(fixture.nativeElement.classList.contains(`modal-${size}`)).toBe(true);
    }
    componentRef.setInput('size', undefined);
    fixture.detectChanges();
    expect(fixture.nativeElement.classList.contains('modal-sm')).toBe(false);
    expect(fixture.nativeElement.classList.contains('modal-lg')).toBe(false);
    expect(fixture.nativeElement.classList.contains('modal-xl')).toBe(false);
    expect(fixture.nativeElement.classList.contains('modal-dialog')).toBe(true);
  });
});
