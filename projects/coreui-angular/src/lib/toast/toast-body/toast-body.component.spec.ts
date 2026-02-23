import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToastBodyComponent } from './toast-body.component';

describe('ToastBodyComponent', () => {
  let component: ToastBodyComponent;
  let fixture: ComponentFixture<ToastBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ToastBodyComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(ToastBodyComponent);
    await fixture.whenStable();

    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have css classes', () => {
    expect(fixture.nativeElement.classList.contains('toast-body')).toBe(true);
  });
});
