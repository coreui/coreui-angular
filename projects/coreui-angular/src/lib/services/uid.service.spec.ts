import { APP_ID, DOCUMENT } from '@angular/core';
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

  it('should not return an id twice before it is rendered', () => {
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

  it.each([
    ['ng', /^scoped-\d+$/],
    ['shop', /^scoped-shop-\d+$/]
  ])('should prefix the id with the app id %s only when it is not the default', (appId, format) => {
    TestBed.resetTestingModule();
    TestBed.configureTestingModule({ providers: [{ provide: APP_ID, useValue: appId }] });
    expect(TestBed.inject(UIDService).getUID('scoped')).toMatch(format);
  });
});
