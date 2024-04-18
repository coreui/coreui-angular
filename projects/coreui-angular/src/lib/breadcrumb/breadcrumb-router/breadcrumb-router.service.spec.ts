import { TestBed } from '@angular/core/testing';

import { BreadcrumbRouterService } from './breadcrumb-router.service';
import { provideRouter } from '@angular/router';

describe('AppBreadcrumbService', () => {
  let service: BreadcrumbRouterService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideRouter([])]
    });
    service = TestBed.inject(BreadcrumbRouterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
