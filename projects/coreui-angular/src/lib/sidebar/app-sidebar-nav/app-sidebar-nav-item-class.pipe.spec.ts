import { TestBed } from '@angular/core/testing';

import { SidebarNavHelper } from '../app-sidebar-nav.service';
import { AppSidebarNavItemClassPipe } from './app-sidebar-nav-item-class.pipe';

describe('SidebarNavItemClassPipe', () => {
  it('create an instance', () => {
    TestBed.configureTestingModule({ providers: [SidebarNavHelper] });
    const pipe = TestBed.runInInjectionContext(() => new AppSidebarNavItemClassPipe());
    expect(pipe).toBeTruthy();
  });
});
