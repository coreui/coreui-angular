import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { FormFeedbackComponent } from './form-feedback.component';
import { ComponentRef } from '@angular/core';

describe('FormFeedbackComponent', () => {
  let component: FormFeedbackComponent;
  let fixture: ComponentFixture<FormFeedbackComponent>;
  let componentRef: ComponentRef<FormFeedbackComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [FormFeedbackComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormFeedbackComponent);
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
    expect(fixture.nativeElement).toHaveClass('valid-feedback');
    componentRef.setInput('valid', false);
    fixture.detectChanges();
    expect(fixture.nativeElement).toHaveClass('invalid-feedback');
  });
});
