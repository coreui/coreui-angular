import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ToastBodyComponent } from './toast-body.component';

describe('ToastBodyComponent', () => {
  let component: ToastBodyComponent;
  let fixture: ComponentFixture<ToastBodyComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ToastBodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToastBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
