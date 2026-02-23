import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetStatBComponent } from './widget-stat-b.component';

describe('WidgetStatBComponent', () => {
  let component: WidgetStatBComponent;
  let fixture: ComponentFixture<WidgetStatBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WidgetStatBComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(WidgetStatBComponent);
    await fixture.whenStable();

    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have css class"', () => {
    expect(fixture.nativeElement.classList.contains('card')).toBe(true);
  });
});
