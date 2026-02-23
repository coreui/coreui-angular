import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselIndicatorsComponent } from './carousel-indicators.component';
import { CarouselService } from '../carousel.service';
import { CarouselState } from '../carousel-state';

describe('CarouselIndicatorsComponent', () => {
  let component: CarouselIndicatorsComponent;
  let fixture: ComponentFixture<CarouselIndicatorsComponent>;
  let service: CarouselService;
  let state: CarouselState;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarouselIndicatorsComponent],
      providers: [CarouselService, CarouselState]
    }).compileComponents();

    fixture = TestBed.createComponent(CarouselIndicatorsComponent);
    await fixture.whenStable();

    service = TestBed.inject(CarouselService);
    state = TestBed.inject(CarouselState);
    component = fixture.componentInstance;
    state.setItems([
      { index: 0, interval: () => 5000 } as any,
      { index: 1, interval: () => 5000 } as any,
      { index: 2, interval: () => 5000 } as any,
      { index: 3, interval: () => 5000 } as any
    ]);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set active index', () => {
    service.setIndex({ active: 1 });
    expect(component.active).toBe(1);
  });

  it('should call onClick', () => {
    component.onClick(2);
    expect(component.active).toBe(2);
  });
});
