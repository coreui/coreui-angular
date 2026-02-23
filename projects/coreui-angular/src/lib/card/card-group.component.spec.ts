import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardGroupComponent } from './card-group.component';

describe('CardGroupComponent', () => {
  let component: CardGroupComponent;
  let fixture: ComponentFixture<CardGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardGroupComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(CardGroupComponent);
    await fixture.whenStable();

    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have css classes', () => {
    expect(fixture.nativeElement.classList.contains('card-group')).toBe(true);
  });
});
