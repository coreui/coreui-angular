import { TestBed } from '@angular/core/testing';

import { ClassToggleService } from './class-toggle.service';

describe('ClassToggleService', () => {
  let service: ClassToggleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClassToggleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
