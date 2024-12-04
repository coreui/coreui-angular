import { SidebarNavItemClassPipe } from './sidebar-nav-item-class.pipe';
import { TestBed } from '@angular/core/testing';
import { SidebarNavHelper } from './sidebar-nav.service';

describe('SidebarNavItemClassPipe', () => {
  it('create an instance', () => {
    TestBed.configureTestingModule({
      providers: [SidebarNavHelper]
    });
    TestBed.runInInjectionContext(() => {
      const pipe = new SidebarNavItemClassPipe();
      expect(pipe).toBeTruthy();
    });
  });
});
