import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardFooterComponent } from './card-footer.component';

describe('CardFooterComponent', () => {
  let component: CardFooterComponent;
  let fixture: ComponentFixture<CardFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardFooterComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(CardFooterComponent);
    await fixture.whenStable();

    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have css classes', () => {
    expect(fixture.nativeElement.classList.contains('card-footer')).toBe(true);
  });
});
