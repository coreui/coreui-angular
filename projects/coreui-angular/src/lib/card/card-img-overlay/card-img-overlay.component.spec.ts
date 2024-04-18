import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardImgOverlayComponent } from './card-img-overlay.component';

describe('CardImgOverlayComponent', () => {
  let component: CardImgOverlayComponent;
  let fixture: ComponentFixture<CardImgOverlayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardImgOverlayComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardImgOverlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have css classes', () => {
    expect(fixture.nativeElement).toHaveClass('card-img-overlay');
  });
});
