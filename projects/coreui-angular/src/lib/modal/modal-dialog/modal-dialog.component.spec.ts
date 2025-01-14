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
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalDialogComponent);
    component = fixture.componentInstance;
    componentRef = fixture.componentRef;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have css classes', () => {
    expect(fixture.nativeElement).toHaveClass('modal-dialog');
  });

  it('should have css classes for alignment prop', () => {
    componentRef.setInput('alignment', 'center');
    fixture.detectChanges();
    expect(fixture.nativeElement).toHaveClass('modal-dialog-centered');
    componentRef.setInput('alignment', 'top');
    fixture.detectChanges();
    expect(fixture.nativeElement).not.toHaveClass('modal-dialog-centered');
    expect(fixture.nativeElement).toHaveClass('modal-dialog');
  });

  it('should have css classes for fullscreen prop', () => {
    componentRef.setInput('fullscreen', true);
    fixture.detectChanges();
    expect(fixture.nativeElement).toHaveClass('modal-fullscreen');
    for (const size of ['sm', 'md', 'lg', 'xl', 'xxl']) {
      componentRef.setInput('fullscreen', size);
      fixture.detectChanges();
      expect(fixture.nativeElement).toHaveClass(`modal-fullscreen-${size}-down`);
    }
    componentRef.setInput('fullscreen', false);
    fixture.detectChanges();
    expect(fixture.nativeElement).not.toHaveClass('modal-fullscreen');
    expect(fixture.nativeElement).toHaveClass('modal-dialog');
  });

  it('should have css classes for scrollable prop', () => {
    expect(fixture.nativeElement).not.toHaveClass('modal-dialog-scrollable');
    componentRef.setInput('scrollable', true);
    fixture.detectChanges();
    expect(fixture.nativeElement).toHaveClass('modal-dialog-scrollable');
    componentRef.setInput('scrollable', false);
    fixture.detectChanges();
    expect(fixture.nativeElement).not.toHaveClass('modal-dialog-scrollable');
    expect(fixture.nativeElement).toHaveClass('modal-dialog');
  });

  it('should have css classes for size prop', () => {
    for (const size of ['sm', 'lg', 'xl']) {
      componentRef.setInput('size', size);
      fixture.detectChanges();
      expect(fixture.nativeElement).toHaveClass(`modal-${size}`);
    }
    componentRef.setInput('size', undefined);
    fixture.detectChanges();
    expect(fixture.nativeElement).not.toHaveClass('modal-sm');
    expect(fixture.nativeElement).not.toHaveClass('modal-lg');
    expect(fixture.nativeElement).not.toHaveClass('modal-xl');
    expect(fixture.nativeElement).toHaveClass('modal-dialog');
  });
});
