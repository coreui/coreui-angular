import { TestBed } from '@angular/core/testing';

import { ProgressService } from './progress.service';

describe('ProgressService', () => {
  let service: ProgressService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProgressService]
    });
    service = TestBed.inject(ProgressService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should expose values', () => {
    service.value.set(42);
    expect(service.percent()).toBe(42);
    expect(service.min()).toBe(0);
    expect(service.max()).toBe(100);
    expect(service.value()).toBe(42);
    service.max.set(200);
    expect(service.max()).toBe(200);
    service.value.set(84);
    expect(service.percent()).toBe(42);
    service.value.set(undefined);
    expect(service.percent()).toBe(0);
  });
});
