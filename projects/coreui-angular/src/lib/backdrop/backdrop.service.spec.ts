import { TestBed } from '@angular/core/testing';

import { BackdropService } from './backdrop.service';

describe('BackdropService', () => {
  let service: BackdropService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BackdropService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
