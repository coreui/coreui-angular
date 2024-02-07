import { TestBed } from '@angular/core/testing';

import { IntersectionService } from './intersection.service';

describe('IntersectionService', () => {
  let service: IntersectionService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IntersectionService]
    });
    service = TestBed.inject(IntersectionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
