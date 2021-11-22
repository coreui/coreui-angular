import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ToastHeaderComponent } from './toast-header.component';

describe('ToastHeaderComponent', () => {
  let component: ToastHeaderComponent;
  let fixture: ComponentFixture<ToastHeaderComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ToastHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToastHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
