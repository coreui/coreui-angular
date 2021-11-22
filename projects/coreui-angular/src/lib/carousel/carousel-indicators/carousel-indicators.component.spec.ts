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
      declarations: [ CarouselIndicatorsComponent ],
      providers: [ CarouselService, CarouselState ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarouselIndicatorsComponent);
    service = TestBed.inject(CarouselService);
    state = TestBed.inject(CarouselState);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
