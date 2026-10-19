import { provideRouter, RouterModule } from '@angular/router';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarNavComponent } from './sidebar-nav.component';
import { INavData } from './sidebar-nav';
import { SidebarNavHelper } from './sidebar-nav.service';
import { NavGroupService } from '../../nav';
// import { SidebarNavGroupComponent } from './sidebar-nav-group.component';

describe('SidebarNavComponent', () => {
  let component: SidebarNavComponent;
  let fixture: ComponentFixture<SidebarNavComponent>;
  let navItems: any[];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SidebarNavComponent, RouterModule.forRoot([])],
      declarations: [],
      providers: [SidebarNavHelper]
    }).compileComponents();

    fixture = TestBed.createComponent(SidebarNavComponent);
    await fixture.whenStable();

    component = fixture.componentInstance;

    // mock items supplied by the parent component

    navItems = [
      {
        name: 'Dashboard',
        url: '/dashboard',
        icon: 'cil-speedometer',
        badge: {
          variant: 'info',
          text: 'NEW'
        }
      }
    ];
    fixture.componentRef.setInput('navItems', navItems);

    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should provide the nav group accordion level', () => {
    expect(fixture.debugElement.injector.get(NavGroupService)).toBeTruthy();
  });

  it('should have css classes', () => {
    expect(fixture.nativeElement.classList.contains('sidebar-nav')).toBe(true);
  });

  it('should render the tree variant', async () => {
    fixture.componentRef.setInput('variant', 'tree');
    await fixture.whenStable();
    expect(fixture.nativeElement.classList.contains('sidebar-nav-tree')).toBe(true);
  });

  it('should not render the tree variant as a group item list', async () => {
    fixture.componentRef.setInput('variant', 'tree');
    fixture.componentRef.setInput('groupItems', true);
    await fixture.whenStable();
    expect(fixture.nativeElement.classList.contains('sidebar-nav-tree')).toBe(false);
    expect(fixture.nativeElement.classList.contains('nav-group-items')).toBe(true);
  });

  it('should compact the whole nav', async () => {
    fixture.componentRef.setInput('compact', true);
    await fixture.whenStable();
    expect(fixture.nativeElement.classList.contains('compact')).toBe(true);
  });

  it('should stop the nav group level opening on active for dropdownMode none', async () => {
    const navGroupService = fixture.debugElement.injector.get(NavGroupService);
    expect(navGroupService.openOnActive()).toBe(true);

    fixture.componentRef.setInput('dropdownMode', 'none');
    await fixture.whenStable();
    expect(navGroupService.openOnActive()).toBe(false);
  });
});

describe('SidebarNavComponent items', () => {
  let nav: HTMLElement;

  const navItems: INavData[] = [
    { title: true, name: 'Components', class: 'text-primary small' },
    { divider: true },
    { name: 'Label', url: '/label', label: { variant: 'info' }, icon: 'cil-star' },
    {
      name: 'Base',
      url: '/base',
      icon: 'fa  fa-home',
      iconComponent: { content: ['64 64', '<circle cx="32" cy="32" r="16"/>'] },
      children: [{ name: 'Accordion', url: '/base/accordion' }]
    },
    {
      name: 'Dashboard',
      url: '/dashboard',
      icon: 'cil-speedometer',
      badge: { color: 'info', text: 'NEW', class: 'first second' }
    },
    { name: 'CoreUI', url: 'https://coreui.io', attributes: { target: '_blank' } },
    { name: 'Disabled', url: '/disabled', attributes: { disabled: true } },
    {}
  ];

  beforeEach(async () => {
    TestBed.configureTestingModule({ providers: [provideRouter([{ path: '**', children: [] }])] });
    const fixture = TestBed.createComponent(SidebarNavComponent);
    fixture.componentRef.setInput('navItems', navItems);
    await fixture.whenStable();
    nav = fixture.nativeElement;
  });

  it('should render an element for each item type and nothing for an empty item', () => {
    expect([...nav.children].map((child) => child.tagName.toLowerCase())).toEqual([
      'c-sidebar-nav-title',
      'c-sidebar-nav-divider',
      'c-sidebar-nav-label',
      'c-sidebar-nav-group',
      'c-sidebar-nav-link',
      'c-sidebar-nav-link',
      'c-sidebar-nav-link'
    ]);
    expect(nav.querySelector('c-sidebar-nav-title')?.textContent).toBe('Components');
    expect([...(nav.querySelector('c-sidebar-nav-title')?.classList ?? [])].sort()).toEqual([
      'nav-title',
      'small',
      'text-primary'
    ]);
    expect(nav.querySelector('c-sidebar-nav-label a')?.textContent?.trim()).toBe('Label');
    expect(nav.querySelector('c-sidebar-nav-label i')?.classList.contains('text-info')).toBe(true);
  });

  it('should render a group with its icon and children', () => {
    const group = nav.querySelector('c-sidebar-nav-group') as HTMLElement;
    expect(group.querySelector('.nav-group-toggle')?.textContent).toContain('Base');
    const icon = group.querySelector('svg') as SVGElement;
    expect(icon.getAttribute('viewBox')).toBe('0 0 64 64');
    expect(icon.classList.contains('fa')).toBe(true);
    expect(icon.classList.contains('fa-home')).toBe(true);
    expect(group.querySelector('c-sidebar-nav-link a')?.getAttribute('href')).toBe('/base/accordion');
  });

  it('should render internal, external and disabled links', () => {
    const [internal, external, disabled] = [...nav.querySelectorAll(':scope > c-sidebar-nav-link a')] as HTMLElement[];

    expect(internal.getAttribute('href')).toBe('/dashboard');
    expect(internal.querySelector('.nav-icon .cil-speedometer')).not.toBeNull();
    const badge = internal.querySelector('.badge') as HTMLElement;
    expect(badge.textContent).toBe('NEW');
    expect(badge.classList.contains('bg-info')).toBe(true);
    expect(badge.classList.contains('first')).toBe(true);
    expect(badge.classList.contains('second')).toBe(true);

    expect(external.getAttribute('href')).toBe('https://coreui.io');
    expect(external.getAttribute('target')).toBe('_blank');

    expect(disabled.hasAttribute('href')).toBe(false);
    expect([...disabled.classList].sort()).toEqual(['btn-link', 'disabled', 'nav-link']);
  });
});

describe('SidebarNavComponent title', () => {
  it('should take the title name and class from the same item when it is mutated in place', async () => {
    TestBed.configureTestingModule({ providers: [provideRouter([])] });
    const navItems: INavData[] = [{ title: true, name: 'Theme', class: 'first' }];
    const fixture = TestBed.createComponent(SidebarNavComponent);
    fixture.componentRef.setInput('navItems', navItems);
    await fixture.whenStable();
    navItems[0].class = 'second';
    navItems[0].name = 'Renamed';
    fixture.componentRef.setInput('navItems', [...navItems]);
    await fixture.whenStable();
    const title = fixture.nativeElement.querySelector('c-sidebar-nav-title') as HTMLElement;
    expect(title.textContent).toBe('Theme');
    expect([...title.classList].sort()).toEqual(['first', 'nav-title']);
  });
});
