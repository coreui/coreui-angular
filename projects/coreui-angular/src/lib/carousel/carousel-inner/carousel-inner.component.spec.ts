import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { CarouselInnerComponent } from './carousel-inner.component';
import { CarouselService } from '../carousel.service';
import { CarouselState } from '../carousel-state';

describe('CarouselInnerComponent', () => {
  let component: CarouselInnerComponent;
  let fixture: ComponentFixture<CarouselInnerComponent>;
  let service: CarouselService;
  let state: CarouselState;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [CarouselService, CarouselState],
      imports: [NoopAnimationsModule, CarouselInnerComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(CarouselInnerComponent);
    await fixture.whenStable();

    service = TestBed.inject(CarouselService);
    state = TestBed.inject(CarouselState);
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
