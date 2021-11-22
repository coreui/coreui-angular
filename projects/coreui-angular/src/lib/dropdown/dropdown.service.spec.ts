import { TestBed } from '@angular/core/testing';

import { DropdownService } from './dropdown.service';

describe('DropdownService', () => {
  let service: DropdownService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DropdownService]
    });
    service = TestBed.inject(DropdownService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
