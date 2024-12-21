import { TestBed } from '@angular/core/testing';

import { RtlService } from './rtl.service';

describe('RtlService', () => {
  let service: RtlService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RtlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
