import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardImgOverlayComponent } from './card-img-overlay.component';

describe('CardImgOverlayComponent', () => {
  let component: CardImgOverlayComponent;
  let fixture: ComponentFixture<CardImgOverlayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardImgOverlayComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(CardImgOverlayComponent);
    await fixture.whenStable();

    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have css classes', () => {
    expect(fixture.nativeElement.classList.contains('card-img-overlay')).toBe(true);
  });
});
