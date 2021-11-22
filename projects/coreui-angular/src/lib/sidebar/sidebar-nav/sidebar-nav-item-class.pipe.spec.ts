import { SidebarNavItemClassPipe } from './sidebar-nav-item-class.pipe';
import {SidebarNavHelper} from './sidebar-nav.service';
import { INavData } from './sidebar-nav';

describe('SidebarNavItemClassPipe', () => {
  it('create an instance', () => {
    const helper = new SidebarNavHelper();
    const pipe = new SidebarNavItemClassPipe(helper);
    expect(pipe).toBeTruthy();
  });
});
