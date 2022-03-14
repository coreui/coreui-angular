import { Renderer2 } from '@angular/core';
import { TestBed } from '@angular/core/testing';

import { ListenersService } from './listeners.service';

describe('ListenersService', () => {
  let renderer: Renderer2;
  let service: ListenersService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [Renderer2, ListenersService],
      providers: [Renderer2]
    });
    service = new ListenersService(renderer);
    // service = TestBed.inject(ListenersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
