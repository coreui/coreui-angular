import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetStatBComponent } from './widget-stat-b.component';
import { CardModule } from '../../card';

describe('WidgetStatBComponent', () => {
  let component: WidgetStatBComponent;
  let fixture: ComponentFixture<WidgetStatBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WidgetStatBComponent ],
      imports: [CardModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetStatBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
