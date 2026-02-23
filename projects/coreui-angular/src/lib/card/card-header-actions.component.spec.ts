import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardHeaderActionsComponent } from './card-header-actions.component';

describe('CardHeaderActionsComponent', () => {
  let component: CardHeaderActionsComponent;
  let fixture: ComponentFixture<CardHeaderActionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardHeaderActionsComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(CardHeaderActionsComponent);
    await fixture.whenStable();

    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have css classes', () => {
    expect(fixture.nativeElement.classList.contains('card-header-actions')).toBe(true);
  });
});
