import { DOCUMENT, PLATFORM_ID } from '@angular/core';
import { TestBed } from '@angular/core/testing';

import { LocalStorageService } from './local-storage.service';

describe('LocalStorageService', () => {
  let service: LocalStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LocalStorageService);
  });

  afterEach(() => {
    TestBed.inject(DOCUMENT).defaultView?.localStorage.clear();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should store, read and remove an item as JSON and emit each change', () => {
    const data = vi.fn();
    service.data$.subscribe(data);

    service.setItem('key', { a: 1 });
    expect(TestBed.inject(DOCUMENT).defaultView?.localStorage.getItem('key')).toBe('{"a":1}');
    expect(data).toHaveBeenLastCalledWith({ key: 'key', data: { a: 1 } });

    expect(service.getItem('key')).toEqual({ a: 1 });

    service.removeItem('key');
    expect(data).toHaveBeenLastCalledWith({ key: 'key', data: null });
    expect(service.getItem('key')).toBeNull();
  });

  it('should clear all items', () => {
    const data = vi.fn();
    service.setItem('a', 1);
    service.setItem('b', 2);
    service.data$.subscribe(data);

    service.clear();

    expect(data).toHaveBeenLastCalledWith(null);
    expect(service.getItem('a')).toBeNull();
    expect(service.getItem('b')).toBeNull();
  });
});

describe('LocalStorageService on the server', () => {
  it('should keep items in memory and leave the browser storage untouched', () => {
    TestBed.configureTestingModule({ providers: [{ provide: PLATFORM_ID, useValue: 'server' }] });
    const service = TestBed.inject(LocalStorageService);

    service.setItem('key', 'value');

    expect(service.getItem('key')).toBe('value');
    expect(TestBed.inject(DOCUMENT).defaultView?.localStorage.getItem('key')).toBeNull();
  });
});
