import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AlertComponent } from './alert.component';
import { ComponentRef } from '@angular/core';

describe('AlertComponent', () => {
  let component: AlertComponent;
  let componentRef: ComponentRef<AlertComponent>;
  let fixture: ComponentFixture<AlertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BrowserAnimationsModule, AlertComponent, BrowserAnimationsModule]
    }).compileComponents();

    fixture = TestBed.createComponent(AlertComponent);
    await fixture.whenStable();
    component = fixture.componentInstance;
    componentRef = fixture.componentRef;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have css classes and styles', () => {
    expect(fixture.nativeElement.classList.contains('alert')).toBe(true);
    expect(fixture.nativeElement.classList.contains('alert-primary')).toBe(true);
    expect(fixture.nativeElement.classList.contains('show')).toBe(true);
    expect(fixture.nativeElement.style.opacity).toBe('1');
    componentRef.setInput('visible', false);
    componentRef.setInput('color', 'danger');
    fixture.detectChanges();
    expect(fixture.nativeElement.classList.contains('alert-danger')).toBe(true);
    expect(fixture.nativeElement.style.opacity).toBe('0');
    expect(fixture.nativeElement.style.height).toBe('0px');
    componentRef.setInput('dismissible', true);
    componentRef.setInput('fade', true);
    componentRef.setInput('variant', 'solid');
    componentRef.setInput('visible', true);
    fixture.detectChanges();
    expect(fixture.nativeElement.classList.contains('alert-dismissible')).toBe(true);
    expect(fixture.nativeElement.classList.contains('fade')).toBe(true);
    expect(fixture.nativeElement.classList.contains('alert-danger')).toBe(false);
    expect(fixture.nativeElement.classList.contains('bg-danger')).toBe(true);
    expect(fixture.nativeElement.classList.contains('text-white')).toBe(true);
    expect(fixture.nativeElement.style.length).toBe(0);
  });

  it('should have attributes', () => {
    expect(fixture.nativeElement.getAttribute('role')).toBe('alert');
  });
});
