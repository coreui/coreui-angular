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
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have css classes', () => {
    expect(fixture.nativeElement.classList.contains('modal-dialog')).toBe(true);
  });

  it('should have css classes for alignment prop', async () => {
    componentRef.setInput('alignment', 'center');
    await fixture.whenStable();
    expect(fixture.nativeElement.classList.contains('modal-dialog-centered')).toBe(true);
    componentRef.setInput('alignment', 'top');
    await fixture.whenStable();
    expect(fixture.nativeElement.classList.contains('modal-dialog-centered')).toBe(false);
    expect(fixture.nativeElement.classList.contains('modal-dialog')).toBe(true);
  });

  it('should have css classes for fullscreen prop', async () => {
    componentRef.setInput('fullscreen', true);
    await fixture.whenStable();
    expect(fixture.nativeElement.classList.contains('modal-fullscreen')).toBe(true);
    for (const size of ['sm', 'md', 'lg', 'xl', 'xxl']) {
      componentRef.setInput('fullscreen', size);
      await fixture.whenStable();
      expect(fixture.nativeElement.classList.contains(`modal-fullscreen-${size}-down`)).toBe(true);
    }
    componentRef.setInput('fullscreen', false);
    await fixture.whenStable();
    expect(fixture.nativeElement.classList.contains('modal-fullscreen')).toBe(false);
    expect(fixture.nativeElement.classList.contains('modal-dialog')).toBe(true);
  });

  it('should have css classes for scrollable prop', async () => {
    expect(fixture.nativeElement.classList.contains('modal-dialog-scrollable')).toBe(false);
    componentRef.setInput('scrollable', true);
    await fixture.whenStable();
    expect(fixture.nativeElement.classList.contains('modal-dialog-scrollable')).toBe(true);
    componentRef.setInput('scrollable', false);
    await fixture.whenStable();
    expect(fixture.nativeElement.classList.contains('modal-dialog-scrollable')).toBe(false);
    expect(fixture.nativeElement.classList.contains('modal-dialog')).toBe(true);
  });

  it('should have css classes for size prop', async () => {
    for (const size of ['sm', 'lg', 'xl']) {
      componentRef.setInput('size', size);
      await fixture.whenStable();
      expect(fixture.nativeElement.classList.contains(`modal-${size}`)).toBe(true);
    }
    componentRef.setInput('size', undefined);
    await fixture.whenStable();
    expect(fixture.nativeElement.classList.contains('modal-sm')).toBe(false);
    expect(fixture.nativeElement.classList.contains('modal-lg')).toBe(false);
    expect(fixture.nativeElement.classList.contains('modal-xl')).toBe(false);
    expect(fixture.nativeElement.classList.contains('modal-dialog')).toBe(true);
  });
});
