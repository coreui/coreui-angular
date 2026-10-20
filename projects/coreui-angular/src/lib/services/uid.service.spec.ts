import { DOCUMENT } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { vi } from 'vitest';

import { UIDService } from './uid.service';

describe('UIDService', () => {
  let service: UIDService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UIDService);
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return an UID string', () => {
    expect(typeof service.getUID('test')).toBe('string');
    expect(service.getUID('test')).toContain('test-');
    expect(service.getUID()).toContain('random-id-');
  });

  it('should not return an id twice before it is rendered', () => {
    vi.spyOn(Math, 'random').mockReturnValue(0.5);
    expect(service.getUID('twice')).not.toBe(service.getUID('twice'));
  });

  it('should skip an id already in the document', () => {
    const document = TestBed.inject(DOCUMENT);
    const uid = service.getUID('taken');
    const key = uid.slice(0, uid.lastIndexOf('-'));
    const count = Number(uid.slice(uid.lastIndexOf('-') + 1));
    const element = document.createElement('div');
    element.id = `${key}-${count + 1}`;
    document.body.append(element);
    expect(service.getUID('taken')).toBe(`${key}-${count + 2}`);
    element.remove();
  });

  it('should give each application its own infix and count', () => {
    vi.spyOn(Math, 'random').mockReturnValueOnce(0.1).mockReturnValueOnce(0.2);
    TestBed.resetTestingModule();
    const first = TestBed.inject(UIDService).getUID('app');
    TestBed.resetTestingModule();
    const second = TestBed.inject(UIDService).getUID('app');
    expect(first).toMatch(/^app-[0-9a-z]{5}-1$/);
    expect(second).toMatch(/^app-[0-9a-z]{5}-1$/);
    expect(second).not.toBe(first);
  });
});
