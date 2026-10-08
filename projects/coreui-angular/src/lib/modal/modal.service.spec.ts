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

  it('should hand each subscriber a copy of the action', () => {
    const received: object[] = [];
    service.modalState$.subscribe((value) => received.push(value));
    const action = { show: true, id: 'm' };
    service.toggle(action);
    service.toggle(action);
    expect(received[0]).toEqual(action);
    expect(received[0]).not.toBe(action);
    expect(received[0]).not.toBe(received[1]);
  });
});
