import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToastHeaderComponent } from './toast-header.component';
import { ToastModule } from '../toast.module';

describe('ToastHeaderComponent', () => {
  let component: ToastHeaderComponent;
  let fixture: ComponentFixture<ToastHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ToastModule]
    }).compileComponents();

    fixture = TestBed.createComponent(ToastHeaderComponent);
    await fixture.whenStable();

    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have css classes', () => {
    expect(fixture.nativeElement.classList.contains('toast-header')).toBe(true);
  });
});
