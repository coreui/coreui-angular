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
    fixture.detectChanges();
    const element = fixture.nativeElement;
    expect(element.classList.contains('toast-content')).toBe(true);
    const minHeight = getComputedStyle(element).minHeight;
    // In test environment, minHeight could be '0px' or 'auto' depending on how styles are applied
    expect(['0px', 'auto', '0']).toContain(minHeight);
  });
});
