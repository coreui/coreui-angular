import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetStatFComponent } from './widget-stat-f.component';

describe('WidgetStatFComponent', () => {
  let component: WidgetStatFComponent;
  let fixture: ComponentFixture<WidgetStatFComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WidgetStatFComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(WidgetStatFComponent);
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
