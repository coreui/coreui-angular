import { createEnvironmentInjector, EnvironmentInjector, importProvidersFrom } from '@angular/core';
import { TestBed } from '@angular/core/testing';

import { BackdropService } from '../backdrop/backdrop.service';
import { OffcanvasModule } from './offcanvas.module';
import { OffcanvasService } from './offcanvas.service';

describe('OffcanvasService', () => {
  let service: OffcanvasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OffcanvasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should use the root offcanvas and backdrop services in an injector that imports OffcanvasModule', () => {
    const injector = createEnvironmentInjector([importProvidersFrom(OffcanvasModule)], TestBed.inject(EnvironmentInjector));
    expect(injector.get(OffcanvasService)).toBe(service);
    expect(injector.get(BackdropService)).toBe(TestBed.inject(BackdropService));
    injector.destroy();
  });
});
