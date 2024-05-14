import { TestBed } from '@angular/core/testing';
import { Renderer2 } from '@angular/core';
import { ListenersService } from './listeners.service';

describe('ListenersService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Renderer2],
    });
  });

  it('should be created', () => {
    TestBed.runInInjectionContext(() => {
      const service = new ListenersService();
      expect(service).toBeTruthy();
    });
  });
});
