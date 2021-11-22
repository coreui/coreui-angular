import { TestBed } from '@angular/core/testing';

import { CarouselService } from './carousel.service';

describe('CarouselService', () => {
  let service: CarouselService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CarouselService]
    });
    service = TestBed.inject(CarouselService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
