import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ToastHeaderComponent } from './toast-header.component';
import { ToastModule } from '../toast.module';

describe('ToastHeaderComponent', () => {
  let component: ToastHeaderComponent;
  let fixture: ComponentFixture<ToastHeaderComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [ToastModule]
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
