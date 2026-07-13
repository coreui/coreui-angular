import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToastContentComponent } from './toast-content.component';

describe('ToastContentComponent', () => {
  let component: ToastContentComponent;
  let fixture: ComponentFixture<ToastContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ToastContentComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(ToastContentComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have class toast-content', () => {
    const element = fixture.nativeElement;
    expect(element).toHaveClass('toast-content');
    expect(getComputedStyle(element).minHeight).toBe('0px');
  });
});
