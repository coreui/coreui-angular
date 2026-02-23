import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopoverComponent } from './popover.component';

describe('PopoverComponent', () => {
  let component: PopoverComponent;
  let fixture: ComponentFixture<PopoverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PopoverComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(PopoverComponent);
    await fixture.whenStable();

    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have css classes', () => {
    expect(fixture.nativeElement.classList.contains('popover')).toBe(true);
    expect(fixture.nativeElement.classList.contains('fade')).toBe(true);
    expect(fixture.nativeElement.classList.contains('bs-popover-auto')).toBe(true);
  });
});
