import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ProgressBarComponent } from './progress-bar.component';
import { ProgressBarDirective } from './progress-bar.directive';

describe('ProgressBarComponent', () => {
  let component: ProgressBarComponent;
  let fixture: ComponentFixture<ProgressBarComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [ProgressBarComponent, ProgressBarDirective]
    }).compileComponents();

    fixture = TestBed.createComponent(ProgressBarComponent);

    component = fixture.componentInstance;
    fixture.debugElement.injector.get(ProgressBarDirective).value = 42;
    fixture.debugElement.injector.get(ProgressBarDirective).color = 'success';
    fixture.debugElement.injector.get(ProgressBarDirective).variant = 'striped';
    fixture.debugElement.injector.get(ProgressBarDirective).animated = true;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeDefined();
  });

  it('should have css classes', () => {
    expect(fixture.nativeElement).toHaveClass('progress-bar');
    expect(fixture.nativeElement).toHaveClass('bg-success');
    expect(fixture.nativeElement).toHaveClass('progress-bar-striped');
    expect(fixture.nativeElement).toHaveClass('progress-bar-animated');
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
    fixture.debugElement.injector.get(ProgressBarDirective).value = undefined;
    fixture.detectChanges();
    expect(fixture.nativeElement.getAttribute('aria-valuenow')).toBeFalsy();
    expect(fixture.nativeElement.getAttribute('aria-valuemin')).toBeFalsy();
    expect(fixture.nativeElement.getAttribute('aria-valuemax')).toBeFalsy();
    expect(fixture.nativeElement.getAttribute('role')).toBeFalsy();
    // expect(fixture.nativeElement.style.width).toBeFalsy();
    expect(fixture.nativeElement.style.width).toBe('0%');
  });

  it('should not have aria-* attributes', () => {
    fixture.debugElement.injector.get(ProgressBarDirective).value = undefined;
    fixture.debugElement.injector.get(ProgressBarDirective).width = 84;
    fixture.detectChanges();
    expect(fixture.nativeElement.getAttribute('aria-valuenow')).toBeFalsy();
    expect(fixture.nativeElement.getAttribute('aria-valuemin')).toBeFalsy();
    expect(fixture.nativeElement.getAttribute('aria-valuemax')).toBeFalsy();
    expect(fixture.nativeElement.getAttribute('role')).toBeFalsy();
    expect(fixture.nativeElement.style.width).toBe('84%');
  });
});
