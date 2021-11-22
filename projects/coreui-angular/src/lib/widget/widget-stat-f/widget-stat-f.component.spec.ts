import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetStatFComponent } from './widget-stat-f.component';

describe('WidgetStatFComponent', () => {
  let component: WidgetStatFComponent;
  let fixture: ComponentFixture<WidgetStatFComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WidgetStatFComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetStatFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
