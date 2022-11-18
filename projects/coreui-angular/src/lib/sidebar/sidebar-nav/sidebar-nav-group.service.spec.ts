import { TestBed } from '@angular/core/testing';

import { SidebarNavGroupService } from './sidebar-nav-group.service';

describe('SidebarNavGroupService', () => {
  let service: SidebarNavGroupService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SidebarNavGroupService]
    });
    service = TestBed.inject(SidebarNavGroupService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
