import { TestBed } from '@angular/core/testing';

import { InMemoryStorageService } from './in-memory-storage.service';

describe('InMemoryStorageService', () => {
  let service: InMemoryStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InMemoryStorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should store, read and remove items', () => {
    expect(service.getItem('a')).toBeUndefined();

    service.setItem('a', { value: 1 });
    service.setItem('b', 'two');

    expect(service.getItem('a')).toEqual({ value: 1 });
    expect(service.length).toBe(2);
    expect(service.key(1)).toBe('b');

    service.removeItem('a');
    expect(service.getItem('a')).toBeUndefined();
    expect(service.length).toBe(1);

    service.clear();
    expect(service.length).toBe(0);
  });
});
