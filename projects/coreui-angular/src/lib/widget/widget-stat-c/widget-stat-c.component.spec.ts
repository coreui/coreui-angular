import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetStatCComponent } from './widget-stat-c.component';
import { CardModule } from '../../card';

describe('WidgetStatCComponent', () => {
  let component: WidgetStatCComponent;
  let fixture: ComponentFixture<WidgetStatCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WidgetStatCComponent ],
      imports: [CardModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetStatCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
