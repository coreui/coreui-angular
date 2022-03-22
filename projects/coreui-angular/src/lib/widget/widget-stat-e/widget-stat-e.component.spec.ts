import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetStatEComponent } from './widget-stat-e.component';
import { CardModule } from '../../card';

describe('WidgetStatEComponent', () => {
  let component: WidgetStatEComponent;
  let fixture: ComponentFixture<WidgetStatEComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WidgetStatEComponent ],
      imports: [CardModule]
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
