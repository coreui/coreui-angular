import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetStatCComponent } from './widget-stat-c.component';

describe('WidgetStatCComponent', () => {
  let component: WidgetStatCComponent;
  let fixture: ComponentFixture<WidgetStatCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WidgetStatCComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(WidgetStatCComponent);
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
