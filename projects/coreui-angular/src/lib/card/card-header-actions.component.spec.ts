import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CardHeaderActionsComponent } from './card-header-actions.component';

describe('CardHeaderActionsComponent', () => {
  let component: CardHeaderActionsComponent;
  let fixture: ComponentFixture<CardHeaderActionsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [CardHeaderActionsComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardHeaderActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
