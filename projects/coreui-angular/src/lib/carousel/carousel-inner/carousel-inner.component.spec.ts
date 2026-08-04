import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselInnerComponent } from './carousel-inner.component';
import { CarouselService } from '../carousel.service';

describe('CarouselInnerComponent', () => {
  let component: CarouselInnerComponent;
  let fixture: ComponentFixture<CarouselInnerComponent>;
  let service: CarouselService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [CarouselService],
      imports: [CarouselInnerComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(CarouselInnerComponent);
    await fixture.whenStable();

    service = TestBed.inject(CarouselService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have css classes', () => {
    expect(fixture.nativeElement.classList.contains('carousel-inner')).toBe(true);
  });
});
