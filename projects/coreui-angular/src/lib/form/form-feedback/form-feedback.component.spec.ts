import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { FormFeedbackComponent } from './form-feedback.component';

describe('FormFeedbackComponent', () => {
  let component: FormFeedbackComponent;
  let fixture: ComponentFixture<FormFeedbackComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ FormFeedbackComponent ]
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
});
