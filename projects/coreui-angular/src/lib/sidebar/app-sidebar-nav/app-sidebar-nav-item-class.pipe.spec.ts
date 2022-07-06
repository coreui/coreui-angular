import { SidebarNavHelper } from '../app-sidebar-nav.service';
import { AppSidebarNavItemClassPipe } from './app-sidebar-nav-item-class.pipe';

describe('SidebarNavItemClassPipe', () => {
  it('create an instance', () => {
    const pipe = new AppSidebarNavItemClassPipe(new SidebarNavHelper());
    expect(pipe).toBeTruthy();
  });
});
