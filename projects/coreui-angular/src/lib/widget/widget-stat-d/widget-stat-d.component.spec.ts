import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetStatDComponent } from './widget-stat-d.component';

describe('WidgetStatDComponent', () => {
  let component: WidgetStatDComponent;
  let fixture: ComponentFixture<WidgetStatDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WidgetStatDComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetStatDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
