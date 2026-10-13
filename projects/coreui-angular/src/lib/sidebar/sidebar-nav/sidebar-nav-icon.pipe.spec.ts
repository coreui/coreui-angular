import { SidebarNavIconPipe } from './sidebar-nav-icon.pipe';

describe('SidebarNavIconPipe', () => {
  it('create an instance', () => {
    const pipe = new SidebarNavIconPipe();
    expect(pipe).toBeTruthy();
  });

  it('should add the item icon class', () => {
    const pipe = new SidebarNavIconPipe();
    expect(pipe.transform({ icon: 'cil-list' })).toEqual({ 'nav-icon': true, 'cil-list': true });
  });

  it('should return the nav-icon class without an item', () => {
    const pipe = new SidebarNavIconPipe();
    const classes = pipe.transform(undefined);
    expect(Object.keys(classes).filter((key) => classes[key])).toEqual(['nav-icon']);
  });
});
