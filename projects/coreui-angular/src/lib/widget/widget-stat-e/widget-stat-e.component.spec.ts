import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetStatEComponent } from './widget-stat-e.component';

describe('WidgetStatEComponent', () => {
  let component: WidgetStatEComponent;
  let fixture: ComponentFixture<WidgetStatEComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WidgetStatEComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(WidgetStatEComponent);
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
