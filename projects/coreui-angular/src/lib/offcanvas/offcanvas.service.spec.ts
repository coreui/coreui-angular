import { TestBed } from '@angular/core/testing';

import { OffcanvasService } from './offcanvas.service';

describe('OffcanvasService', () => {
  let service: OffcanvasService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OffcanvasService]
    });
    service = TestBed.inject(OffcanvasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
