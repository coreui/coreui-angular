import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetStatAComponent } from './widget-stat-a.component';

describe('WidgetStatAComponent', () => {
  let component: WidgetStatAComponent;
  let fixture: ComponentFixture<WidgetStatAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WidgetStatAComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetStatAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
