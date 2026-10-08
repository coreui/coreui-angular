import { TestBed } from '@angular/core/testing';

import { ModalService } from './modal.service';

describe('ModalService', () => {
  let service: ModalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ModalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should emit one shared copy of the action per call', () => {
    const received: object[] = [];
    const receivedToo: object[] = [];
    service.modalState$.subscribe((value) => received.push(value));
    service.modalState$.subscribe((value) => receivedToo.push(value));
    const action = { show: true, id: 'm' };
    service.toggle(action);
    service.toggle(action);
    expect(received[0]).toEqual({ ...action, focusFallback: [] });
    expect(received[0]).not.toBe(action);
    expect(received[0]).not.toBe(received[1]);
    expect(receivedToo[0]).toBe(received[0]);
  });

  it('should not extend the focus fallback array of the caller', () => {
    const focusFallback = [document.createElement('button')];
    let received: { focusFallback?: (HTMLElement | null)[] } = {};
    service.modalState$.subscribe((value) => (received = value));
    service.toggle({ show: true, id: 'm', focusFallback });
    received.focusFallback?.push(null);
    expect(focusFallback.length).toBe(1);
  });
});
