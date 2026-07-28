import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselItemComponent } from './carousel-item.component';
import { CarouselService } from '../carousel.service';

describe('CarouselItemComponent', () => {
  let component: CarouselItemComponent;
  let fixture: ComponentFixture<CarouselItemComponent>;
  let service: CarouselService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarouselItemComponent],
      providers: [CarouselService]
    }).compileComponents();

    fixture = TestBed.createComponent(CarouselItemComponent);
    await fixture.whenStable();

    component = fixture.componentInstance;
    service = TestBed.inject(CarouselService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have css classes', () => {
    expect(fixture.nativeElement.classList.contains('carousel-item')).toBe(true);
  });
});
