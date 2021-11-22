import { TestBed } from '@angular/core/testing';

import { SidebarBackdropService } from './sidebar-backdrop.service';

describe('SidebarBackdropService', () => {
  let service: SidebarBackdropService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SidebarBackdropService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
