import { TestBed } from '@angular/core/testing';
import { ColorModeService } from './color-mode.service';

describe('ColorModeService', () => {

  let service: ColorModeService;

  beforeEach(() => {
    service = TestBed.inject(ColorModeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should switch themes', () => {
    expect(service.colorMode()).toBeUndefined();
    service.colorMode.set('light');
    expect(service.colorMode()).toBe('light');
    service.colorMode.set('dark');
    expect(service.colorMode()).toBe('dark');
    service.colorMode.set('auto');
    expect(service.colorMode()).toBe('auto');
  });
});
