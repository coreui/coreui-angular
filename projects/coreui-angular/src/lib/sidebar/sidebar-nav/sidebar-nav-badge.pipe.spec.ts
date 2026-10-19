import { SidebarNavBadgePipe } from './sidebar-nav-badge.pipe';

describe('SidebarNavBadgePipe', () => {
  it('create an instance', () => {
    const pipe = new SidebarNavBadgePipe();
    expect(pipe).toBeTruthy();
  });

  it('should add each class of the badge', () => {
    const pipe = new SidebarNavBadgePipe();
    const classes = pipe.transform({ badge: { color: 'info', class: 'first  second' } });
    expect(Object.keys(classes).filter((key) => classes[key])).toEqual([
      'badge',
      'ms-auto',
      'badge-sm',
      'bg-info',
      'first',
      'second'
    ]);
  });
});
