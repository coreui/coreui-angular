import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { ToastComponent } from './toast.component';
import { ToastCloseDirective } from '../toast-close.directive';

describe('ToastComponent', () => {
  let component: ToastComponent;
  let fixture: ComponentFixture<ToastComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NoopAnimationsModule, ToastComponent, ToastCloseDirective]
    }).compileComponents();

    fixture = TestBed.createComponent(ToastComponent);
    await fixture.whenStable();

    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have css classes', () => {
    expect(fixture.nativeElement.classList.contains('toast')).toBe(true);
    expect(fixture.nativeElement.classList.contains('show')).toBe(true);
  });
});
