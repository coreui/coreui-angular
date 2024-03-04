import { TestBed } from '@angular/core/testing';
import { Renderer2 } from '@angular/core';

import { ScriptInjectorService } from './script-injector.service';

describe('ScriptInjectorService', () => {
  let service: ScriptInjectorService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Renderer2]
    });
    service = TestBed.inject(ScriptInjectorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
