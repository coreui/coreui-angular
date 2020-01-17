import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { AppBreadcrumbService } from './app-breadcrumb.service';

describe('AppBreadcrumbService', () => {
  let service: AppBreadcrumbService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes([])],
    });
    service = TestBed.inject(AppBreadcrumbService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
