import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { FormFeedbackComponent } from './form-feedback.component';

describe('FormFeedbackComponent', () => {
  let component: FormFeedbackComponent;
  let fixture: ComponentFixture<FormFeedbackComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [FormFeedbackComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormFeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have css classes', () => {
    component.valid = true;
    fixture.detectChanges();
    expect(fixture.nativeElement).toHaveClass('valid-feedback');
    component.valid = false;
    fixture.detectChanges();
    expect(fixture.nativeElement).toHaveClass('invalid-feedback');
  });
});
