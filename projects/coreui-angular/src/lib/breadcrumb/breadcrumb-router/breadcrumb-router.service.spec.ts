import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { BreadcrumbRouterService } from './breadcrumb-router.service';

describe('AppBreadcrumbService', () => {
  let service: BreadcrumbRouterService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes([])]
    });
    service = TestBed.inject(BreadcrumbRouterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
