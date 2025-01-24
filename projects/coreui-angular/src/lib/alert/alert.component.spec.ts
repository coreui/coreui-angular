import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AlertComponent } from './alert.component';
import { ComponentRef } from '@angular/core';

describe('AlertComponent', () => {
  let component: AlertComponent;
  let componentRef: ComponentRef<AlertComponent>;
  let fixture: ComponentFixture<AlertComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [BrowserAnimationsModule, AlertComponent, BrowserAnimationsModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlertComponent);
    component = fixture.componentInstance;
    componentRef = fixture.componentRef;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have css classes and styles', () => {
    expect(fixture.nativeElement).toHaveClass('alert');
    expect(fixture.nativeElement).toHaveClass('alert-primary');
    expect(fixture.nativeElement).toHaveClass('show');
    expect(fixture.nativeElement.style.opacity).toBe('1');
    componentRef.setInput('visible', false);
    componentRef.setInput('color', 'danger');
    fixture.detectChanges();
    expect(fixture.nativeElement).toHaveClass('alert-danger');
    expect(fixture.nativeElement.style.opacity).toBe('0');
    expect(fixture.nativeElement.style.height).toBe('0px');
    componentRef.setInput('dismissible', true);
    componentRef.setInput('fade', true);
    componentRef.setInput('variant', 'solid');
    componentRef.setInput('visible', true);
    fixture.detectChanges();
    expect(fixture.nativeElement).toHaveClass('alert-dismissible');
    expect(fixture.nativeElement).toHaveClass('fade');
    expect(fixture.nativeElement).not.toHaveClass('alert-danger');
    expect(fixture.nativeElement).toHaveClass('bg-danger');
    expect(fixture.nativeElement).toHaveClass('text-white');
    expect(fixture.nativeElement.style).toHaveSize(0);
  });

  it('should have attributes', () => {
    expect(fixture.nativeElement.getAttribute('role')).toBe('alert');
  });
});
