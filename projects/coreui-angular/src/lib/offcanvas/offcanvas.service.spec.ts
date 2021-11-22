import { TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { OffcanvasService } from './offcanvas.service';

describe('OffcanvasService', () => {
  let service: OffcanvasService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NoopAnimationsModule],
      providers: [OffcanvasService]
    });
    service = TestBed.inject(OffcanvasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
