import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CarouselIndicatorsComponent } from './carousel-indicators.component';
import { CarouselService } from '../carousel.service';
import { CarouselState } from '../carousel-state';

describe('CarouselIndicatorsComponent', () => {
  let component: CarouselIndicatorsComponent;
  let fixture: ComponentFixture<CarouselIndicatorsComponent>;
  let service: CarouselService;
  let state: CarouselState;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [CarouselIndicatorsComponent],
      providers: [CarouselService, CarouselState]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarouselIndicatorsComponent);
    service = TestBed.inject(CarouselService);
    state = TestBed.inject(CarouselState);
    state.setItems([]);
    component = fixture.componentInstance;
    component.items = [0, 1, 2, 3];
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
