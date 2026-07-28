import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormFeedbackComponent } from './form-feedback.component';
import { ComponentRef } from '@angular/core';

describe('FormFeedbackComponent', () => {
  let component: FormFeedbackComponent;
  let fixture: ComponentFixture<FormFeedbackComponent>;
  let componentRef: ComponentRef<FormFeedbackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormFeedbackComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(FormFeedbackComponent);
    await fixture.whenStable();

    component = fixture.componentInstance;
    componentRef = fixture.componentRef;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have css classes', () => {
    componentRef.setInput('valid', true);
    fixture.detectChanges();
    expect(fixture.nativeElement.classList.contains('valid-feedback')).toBe(true);
    componentRef.setInput('valid', false);
    fixture.detectChanges();
    expect(fixture.nativeElement.classList.contains('invalid-feedback')).toBe(true);
  });
});
