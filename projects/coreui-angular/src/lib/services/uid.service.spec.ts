import { TestBed } from '@angular/core/testing';

import { UIDService } from './uid.service';

describe('UIDService', () => {
  let service: UIDService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UIDService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return an UID string', () => {
    expect(typeof service.getUID('test')).toBe('string');
    expect(service.getUID('test')).toContain('test-');
    expect(service.getUID()).toContain('random-id-');
  });
});
