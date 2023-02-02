import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetStatEComponent } from './widget-stat-e.component';

describe('WidgetStatEComponent', () => {
  let component: WidgetStatEComponent;
  let fixture: ComponentFixture<WidgetStatEComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WidgetStatEComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetStatEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
