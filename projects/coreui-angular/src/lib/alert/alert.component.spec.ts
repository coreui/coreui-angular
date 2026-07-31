import { ComponentFixture, TestBed } from '@angular/core/testing';
import { expect } from 'vitest';

import { AlertComponent } from './alert.component';
import { ComponentRef } from '@angular/core';

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
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have css classes and styles', () => {
    expect(fixture.nativeElement.classList.contains('alert')).toBe(true);
    expect(fixture.nativeElement.classList.contains('alert-primary')).toBe(true);
    expect(fixture.nativeElement.classList.contains('show')).toBe(true);
    componentRef.setInput('visible', false);
    componentRef.setInput('color', 'danger');
    fixture.detectChanges();
    expect(fixture.nativeElement.classList.contains('alert-danger')).toBe(true);
    expect(fixture.nativeElement.classList.contains('show')).toBe(false);
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
    expect(fixture.nativeElement.classList.contains('show')).toBe(true);
  });

  it('should have attributes', () => {
    fixture.detectChanges();
    expect(fixture.nativeElement.getAttribute('role')).toBe('alert');
  });
});
