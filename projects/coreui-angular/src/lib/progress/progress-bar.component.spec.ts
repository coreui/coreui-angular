import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentRef } from '@angular/core';
import { ProgressBarComponent } from './progress-bar.component';
import { ProgressBarDirective } from './progress-bar.directive';
import { ProgressService } from './progress.service';

describe('ProgressBarComponent', () => {
  let component: ProgressBarComponent;
  let componentRef: ComponentRef<ProgressBarComponent>;
  let fixture: ComponentFixture<ProgressBarComponent>;
  let directive: ProgressBarDirective;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProgressBarComponent],
      providers: [ProgressService]
    }).compileComponents();

    fixture = TestBed.createComponent(ProgressBarComponent);
    await fixture.whenStable();

    component = fixture.componentInstance;
    componentRef = fixture.componentRef;
    directive = fixture.debugElement.injector.get(ProgressBarDirective);
    componentRef.setInput('value', 42);
    componentRef.setInput('color', 'success');
    componentRef.setInput('variant', 'striped');
    componentRef.setInput('animated', true);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeDefined();
  });

  it('should have css classes', () => {
    expect(fixture.nativeElement.classList.contains('progress-bar')).toBe(true);
    expect(fixture.nativeElement.classList.contains('bg-success')).toBe(true);
    expect(fixture.nativeElement.classList.contains('progress-bar-striped')).toBe(true);
    expect(fixture.nativeElement.classList.contains('progress-bar-animated')).toBe(true);
  });

  it('should have style width %', () => {
    expect(fixture.nativeElement.style.width).toBe('42%');
  });

  it('should have aria-* attributes', () => {
    expect(fixture.nativeElement.getAttribute('aria-valuenow')).toBe('42');
    expect(fixture.nativeElement.getAttribute('aria-valuemin')).toBe('0');
    expect(fixture.nativeElement.getAttribute('aria-valuemax')).toBe('100');
    expect(fixture.nativeElement.getAttribute('role')).toBe('progressbar');
  });

  it('should not have aria-* attributes', () => {
    componentRef.setInput('value', undefined);
    fixture.detectChanges();
    expect(fixture.nativeElement.getAttribute('aria-valuenow')).toBeFalsy();
    expect(fixture.nativeElement.getAttribute('aria-valuemin')).toBeFalsy();
    expect(fixture.nativeElement.getAttribute('aria-valuemax')).toBeFalsy();
    expect(fixture.nativeElement.getAttribute('role')).toBeFalsy();
    // expect(fixture.nativeElement.style.width).toBeFalsy();
    expect(fixture.nativeElement.style.width).toBe('0%');
  });
});
