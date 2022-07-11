import { TestBed } from '@angular/core/testing';

import { IconSetService } from './icon-set.service';

describe('IconService', () => {
  let service: IconSetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IconSetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
