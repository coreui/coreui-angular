import { TestBed } from '@angular/core/testing';

import { AppSidebarService } from './app-sidebar.service';

describe('AppSidebarService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AppSidebarService = TestBed.inject(AppSidebarService);
    expect(service).toBeTruthy();
  });
});
