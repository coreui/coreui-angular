import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { provideRouter, Router } from '@angular/router';
import { RouterTestingHarness } from '@angular/router/testing';
import { expect, vi } from 'vitest';
import { CollapseDirective } from '../../collapse';
import { SidebarNavGroupComponent } from './sidebar-nav.component';
import { SidebarNavGroupService } from './sidebar-nav-group.service';
import { INavData } from './sidebar-nav';

function endTransition(element: HTMLElement): void {
  const event = new Event('transitionend');
  Object.defineProperty(event, 'propertyName', { value: 'height' });
  element.dispatchEvent(event);
}

describe('SidebarNavGroupComponent', () => {
  let component: SidebarNavGroupComponent;
  let fixture: ComponentFixture<SidebarNavGroupComponent>;
  let router: Router;
  let item: any;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SidebarNavGroupComponent],
      providers: [provideRouter([]), SidebarNavGroupService]
    }).compileComponents();

    fixture = TestBed.createComponent(SidebarNavGroupComponent);

    router = TestBed.inject(Router);
    component = fixture.componentInstance;

    item = {
      name: 'Tables',
      url: '/tables',
      icon: 'icon-list',
      children: [
        {
          name: 'DataTable',
          url: '/tables/datatable',
          icon: 'icon-list',
          badge: {
            variant: 'danger',
            text: 'PRO'
          }
        },
        {
          name: 'Standard Tables',
          url: '/tables/tables',
          icon: 'icon-list'
        }
      ]
    };
    fixture.componentRef.setInput('item', item);
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have css classes', () => {
    expect(fixture.nativeElement.classList.contains('nav-group')).toBe(true);
  });

  it('should collapse its nav', async () => {
    const nav = fixture.nativeElement.querySelector('c-sidebar-nav');
    nav.style.transitionDuration = '1s';
    expect(nav.classList.contains('collapse')).toBe(true);
    expect(nav.classList.contains('show')).toBe(false);

    fixture.nativeElement.querySelector('.nav-group-toggle').click();
    await fixture.whenStable();

    expect(component.open()).toBe(true);
    expect(nav.classList.contains('collapsing')).toBe(true);
    expect(nav.style.display).toBe('block');
  });

  it('should display its nav before the collapse to closed starts', async () => {
    const nav = fixture.nativeElement.querySelector('c-sidebar-nav');
    const collapse = fixture.debugElement.query(By.directive(CollapseDirective)).injector.get(CollapseDirective);
    const toggler = fixture.nativeElement.querySelector('.nav-group-toggle');

    toggler.click();
    await fixture.whenStable();
    endTransition(nav);
    await fixture.whenStable();

    expect(nav.classList.contains('show')).toBe(true);
    expect(nav.style.display).toBe('');

    let displayOnCollapsing: string | undefined;
    collapse.collapseChange.subscribe((state: string) => {
      if (state === 'collapsing') {
        displayOnCollapsing = nav.style.display;
      }
    });

    toggler.click();
    await fixture.whenStable();

    expect(component.open()).toBe(false);
    expect(fixture.nativeElement.classList.contains('show')).toBe(false);
    expect(displayOnCollapsing).toBe('block');
  });

  it('should hide the font icon of the toggle from assistive technologies', () => {
    const icon = fixture.nativeElement.querySelector('.nav-group-toggle .nav-icon');
    expect(icon.getAttribute('aria-hidden')).toBe('true');
    expect(icon.querySelector('.icon-list')).toBeTruthy();
  });

  it('should render without an item', () => {
    const emptyFixture = TestBed.createComponent(SidebarNavGroupComponent);
    expect(() => emptyFixture.detectChanges()).not.toThrow();
    expect(emptyFixture.nativeElement.querySelector('.nav-group-toggle .nav-icon')).toBeTruthy();
  });

  it('should render the children of an item set after the first render', async () => {
    const lateFixture = TestBed.createComponent(SidebarNavGroupComponent);
    await lateFixture.whenStable();

    lateFixture.componentRef.setInput('item', item);
    await lateFixture.whenStable();

    expect(lateFixture.nativeElement.querySelectorAll('c-sidebar-nav c-sidebar-nav-link').length).toBe(2);
  });
});

describe('SidebarNavGroupComponent dropdownMode', () => {
  let fixture: ComponentFixture<SidebarNavGroupComponent>;
  let router: Router;

  const item = {
    name: 'Tables',
    url: '/tables',
    children: [{ name: 'Standard Tables', url: '/tables/tables' }]
  };

  async function createGroup(dropdownMode?: string): Promise<SidebarNavGroupComponent> {
    fixture = TestBed.createComponent(SidebarNavGroupComponent);
    fixture.componentRef.setInput('item', item);
    if (dropdownMode) {
      fixture.componentRef.setInput('dropdownMode', dropdownMode);
    }
    await fixture.whenStable();
    return fixture.componentInstance;
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SidebarNavGroupComponent],
      providers: [
        provideRouter([
          { path: 'tables', children: [] },
          { path: 'charts', children: [] }
        ]),
        SidebarNavGroupService
      ]
    }).compileComponents();

    router = TestBed.inject(Router);
    await router.navigate(['/tables']);
  });

  it('should open under the active route by default', async () => {
    const component = await createGroup();
    expect(component.open()).toBe(true);
  });

  it('should stay closed under the active route for none', async () => {
    const component = await createGroup('none');
    expect(component.open()).toBeFalsy();
  });

  it('should ignore a later navigation for none', async () => {
    const component = await createGroup('none');

    fixture.nativeElement.querySelector('.nav-group-toggle').click();
    await fixture.whenStable();
    expect(component.open()).toBe(true);

    await router.navigate(['/charts']);
    await fixture.whenStable();
    expect(component.open()).toBe(true);
  });

  it('should close on a non-matching route for path', async () => {
    const component = await createGroup('path');
    expect(component.open()).toBe(true);

    await router.navigate(['/charts']);
    await fixture.whenStable();
    expect(component.open()).toBe(false);
  });
});

describe('SidebarNavGroupComponent route matching', () => {
  let router: Router;

  const children = [{ name: 'Standard Tables', url: '/tables/tables' }];

  async function createGroup(item?: INavData): Promise<ComponentFixture<SidebarNavGroupComponent>> {
    const fixture = TestBed.createComponent(SidebarNavGroupComponent);
    if (item) {
      fixture.componentRef.setInput('item', item);
    }
    await fixture.whenStable();
    return fixture;
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SidebarNavGroupComponent],
      providers: [
        provideRouter([
          { path: 'old-tables', redirectTo: 'tables' },
          { path: 'tables', children: [{ path: '**', children: [] }] },
          { path: 'charts', children: [] },
          { path: 'reports', children: [{ path: '**', children: [] }] },
          { path: 'http', children: [{ path: '**', children: [] }] },
          { path: '', children: [] }
        ]),
        SidebarNavGroupService
      ]
    }).compileComponents();

    router = TestBed.inject(Router);
  });

  it('should open for a url given as commands', async () => {
    await router.navigateByUrl('/tables/tables');
    const fixture = await createGroup({ name: 'Tables', url: ['/tables'], children });
    expect(fixture.componentInstance.open()).toBe(true);
  });

  it('should open for a route with matrix or query params', async () => {
    await router.navigateByUrl('/tables;id=1/tables');
    const matrix = await createGroup({ name: 'Tables', url: '/tables', children });
    expect(matrix.componentInstance.open()).toBe(true);

    await router.navigateByUrl('/tables?page=2');
    const query = await createGroup({ name: 'Tables', url: '/tables', children });
    expect(query.componentInstance.open()).toBe(true);
  });

  it('should open after a navigation that redirects into the group', async () => {
    await router.navigateByUrl('/charts');
    const fixture = await createGroup({ name: 'Tables', url: '/tables', children });
    expect(fixture.componentInstance.open()).toBeFalsy();

    await router.navigateByUrl('/old-tables');
    await fixture.whenStable();
    expect(fixture.componentInstance.open()).toBe(true);
  });

  it('should not match a route by a segment prefix', async () => {
    await router.navigateByUrl('/charts');
    const fixture = await createGroup({ name: 'Charts', url: '/chart', children });
    expect(fixture.componentInstance.open()).toBeFalsy();
  });

  it('should match a group by the urls of the items inside it', async () => {
    await router.navigateByUrl('/tables');
    const fixture = await createGroup({ name: 'Tables', children });
    expect(fixture.componentInstance.open()).toBeFalsy();

    await router.navigateByUrl('/tables/tables');
    await fixture.whenStable();
    expect(fixture.componentInstance.open()).toBe(true);

    await router.navigateByUrl('/charts');
    await fixture.whenStable();
    expect(fixture.componentInstance.open()).toBe(false);

    const nested = await createGroup({
      name: 'Pages',
      url: '#',
      children: [{ name: 'Tables', children: [{ name: 'Charts', url: ['/charts'] }] }]
    });
    expect(nested.componentInstance.open()).toBe(true);
  });

  it('should match a link inside by its own active options', async () => {
    await router.navigateByUrl('/tables/tables');
    const item = {
      name: 'Tables',
      children: [{ name: 'Overview', url: '/tables', linkProps: { routerLinkActiveOptions: { exact: true } } }]
    };
    const fixture = await createGroup(item);
    expect(fixture.componentInstance.open()).toBeFalsy();

    await router.navigateByUrl('/tables');
    await fixture.whenStable();
    expect(fixture.componentInstance.open()).toBe(true);
  });

  it('should open a matching group created after another one was clicked in close mode', async () => {
    await router.navigateByUrl('/tables/tables');
    const other = TestBed.createComponent(SidebarNavGroupComponent);
    other.componentRef.setInput('dropdownMode', 'close');
    other.componentRef.setInput('item', {
      name: 'Charts',
      url: '/charts',
      children: [{ name: 'Charts', url: '/charts' }]
    });
    await other.whenStable();
    other.nativeElement.querySelector('.nav-group-toggle').click();
    await other.whenStable();

    const fixture = TestBed.createComponent(SidebarNavGroupComponent);
    fixture.componentRef.setInput('dropdownMode', 'close');
    fixture.componentRef.setInput('item', { name: 'Tables', url: '/tables', children });
    await fixture.whenStable();
    expect(fixture.componentInstance.open()).toBe(true);
    expect(fixture.componentInstance.display()).toBeNull();
  });

  it('should keep the matching group open and close the others when a group is clicked in close mode', async () => {
    await router.navigateByUrl('/tables/tables');
    const createCloseGroup = async (item: INavData) => {
      const group = TestBed.createComponent(SidebarNavGroupComponent);
      group.componentRef.setInput('dropdownMode', 'close');
      group.componentRef.setInput('item', item);
      await group.whenStable();
      return group;
    };
    const matching = await createCloseGroup({ name: 'Tables', url: '/tables', children });
    const charts = await createCloseGroup({
      name: 'Charts',
      url: '/charts',
      children: [{ name: 'Charts', url: '/charts' }]
    });
    const reports = await createCloseGroup({
      name: 'Reports',
      url: '/reports',
      children: [{ name: 'Full', url: '/reports/full' }]
    });
    expect(matching.componentInstance.open()).toBe(true);

    charts.nativeElement.querySelector('.nav-group-toggle').click();
    await charts.whenStable();
    reports.nativeElement.querySelector('.nav-group-toggle').click();
    await reports.whenStable();

    expect(matching.componentInstance.open()).toBe(true);
    expect(charts.componentInstance.open()).toBe(false);
    expect(reports.componentInstance.open()).toBe(true);
  });

  it('should stop reacting to other groups once destroyed', async () => {
    await router.navigateByUrl('/');
    const destroyed = TestBed.createComponent(SidebarNavGroupComponent);
    destroyed.componentRef.setInput('dropdownMode', 'close');
    destroyed.componentRef.setInput('item', { name: 'Tables', url: '/tables', children });
    await destroyed.whenStable();
    const openGroup = vi.spyOn(destroyed.componentInstance, 'openGroup');
    destroyed.destroy();
    expect((TestBed.inject(SidebarNavGroupService) as any).sidebarNavGroupState.observed).toBe(false);

    const other = TestBed.createComponent(SidebarNavGroupComponent);
    other.componentRef.setInput('dropdownMode', 'close');
    other.componentRef.setInput('item', {
      name: 'Charts',
      url: '/charts',
      children: [{ name: 'Charts', url: '/charts' }]
    });
    await other.whenStable();
    other.nativeElement.querySelector('.nav-group-toggle').click();
    await other.whenStable();
    expect(other.componentInstance.open()).toBe(true);
    expect(openGroup).not.toHaveBeenCalled();
  });

  it('should not hand an earlier click to a group created later', async () => {
    await router.navigateByUrl('/');
    const clicked = TestBed.createComponent(SidebarNavGroupComponent);
    clicked.componentRef.setInput('dropdownMode', 'close');
    clicked.componentRef.setInput('item', { name: 'Tables', url: '/tables', children });
    await clicked.whenStable();
    clicked.nativeElement.querySelector('.nav-group-toggle').click();
    await clicked.whenStable();
    expect(clicked.componentInstance.open()).toBe(true);
    clicked.destroy();
    expect((TestBed.inject(SidebarNavGroupService) as any).sidebarNavGroupState.value).toBeUndefined();

    const later = TestBed.createComponent(SidebarNavGroupComponent);
    const openGroup = vi.spyOn(later.componentInstance, 'openGroup');
    later.componentRef.setInput('dropdownMode', 'close');
    later.componentRef.setInput('item', {
      name: 'Charts',
      url: '/charts',
      children: [{ name: 'Charts', url: '/charts' }]
    });
    await later.whenStable();
    expect(openGroup).not.toHaveBeenCalled();
  });

  it('should match a link with an empty url like its router link', async () => {
    await router.navigateByUrl('/charts');
    const fixture = await createGroup({ name: 'Home', children: [{ name: 'Home', url: '' }] });
    expect(fixture.componentInstance.open()).toBe(true);

    const exact = await createGroup({
      name: 'Home',
      children: [{ name: 'Home', url: '', linkProps: { routerLinkActiveOptions: { exact: true } } }]
    });
    expect(exact.componentInstance.open()).toBeFalsy();
  });

  it('should resolve the link props of a link like its router link', async () => {
    await router.navigateByUrl('/tables?x=1');
    const fixture = await createGroup({
      name: 'Tables',
      children: [{ name: 'Filtered', url: '/tables', linkProps: { queryParams: { x: 2 } } }]
    });
    expect(fixture.componentInstance.open()).toBeFalsy();
  });

  it('should treat an empty group url as no url', async () => {
    await router.navigateByUrl('/');
    const fixture = await createGroup({ name: 'Pages', url: '', children: [{ name: 'Tables', url: '/tables' }] });
    expect(fixture.componentInstance.open()).toBeFalsy();
  });

  it('should finish closing a nested group while its parent is closed', async () => {
    await router.navigateByUrl('/charts');
    const fixture = await createGroup({
      name: 'Pages',
      children: [{ name: 'Tables', children: [{ name: 'Standard Tables', url: '/tables/tables' }] }]
    });
    const [outer, inner] = fixture.nativeElement.querySelectorAll('.nav-group-toggle');
    outer.click();
    await fixture.whenStable();
    inner.click();
    await fixture.whenStable();
    outer.click();
    await fixture.whenStable();
    await new Promise((resolve) => setTimeout(resolve, 20));

    await router.navigateByUrl('/tables');
    await fixture.whenStable();
    await new Promise((resolve) => setTimeout(resolve, 20));
    const nested = fixture.debugElement.query(By.directive(SidebarNavGroupComponent));
    expect(nested.componentInstance.open()).toBe(false);
    expect(nested.nativeElement.querySelector('c-sidebar-nav').classList.contains('collapsing')).toBe(false);
  });

  it('should read the active options of a link like its router link', async () => {
    await router.navigateByUrl('/tables?x=1&y=2');
    const partial = await createGroup({
      name: 'Tables',
      children: [
        {
          name: 'Filtered',
          url: '/tables',
          linkProps: { queryParams: { x: 1 }, routerLinkActiveOptions: { queryParams: 'exact' } as any }
        }
      ]
    });
    expect(partial.componentInstance.open()).toBeFalsy();

    const loose = await createGroup({
      name: 'Tables',
      children: [{ name: 'Tables', url: '/tables', linkProps: { routerLinkActiveOptions: true as any } }]
    });
    expect(loose.componentInstance.open()).toBe(true);
  });

  it('should not match disabled or external links inside', async () => {
    await router.navigateByUrl('/tables');
    const fixture = await createGroup({
      name: 'Tables',
      children: [
        { name: 'Disabled', url: '/tables', attributes: { disabled: true } },
        { name: 'External', url: '/tables', href: 'https://coreui.io' }
      ]
    });
    expect(fixture.componentInstance.open()).toBeFalsy();

    await router.navigateByUrl('/http/tables');
    const external = await createGroup({ name: 'Docs', children: [{ name: 'Docs', url: 'http/tables' }] });
    expect(external.componentInstance.open()).toBeFalsy();
  });

  it('should match a root url on the root route only', async () => {
    await router.navigateByUrl('/charts');
    const fixture = await createGroup({ name: 'Home', url: '/', children });
    expect(fixture.componentInstance.open()).toBeFalsy();

    await router.navigateByUrl('/');
    await fixture.whenStable();
    expect(fixture.componentInstance.open()).toBe(true);
  });

  it('should match a url the way its link encodes it, without a warning', async () => {
    const warn = vi.spyOn(console, 'warn');
    await router.navigateByUrl('/charts');
    const fixture = await createGroup({ name: 'Reports', children: [{ name: 'Full', url: '/reports/100%' }] });
    expect(fixture.componentInstance.open()).toBeFalsy();

    await router.navigateByUrl('/reports/100%25');
    await fixture.whenStable();
    expect(fixture.componentInstance.open()).toBe(true);
    expect(warn).not.toHaveBeenCalled();
    warn.mockRestore();
  });

  it('should not match a # placeholder', async () => {
    await router.navigateByUrl('/');
    const fixture = await createGroup({ name: 'Pages', url: '#', children: [{ name: 'Tables', url: '/tables' }] });
    expect(fixture.componentInstance.open()).toBeFalsy();
  });

  it('should match the current route after the routes are reset', async () => {
    await router.navigateByUrl('/tables/tables');
    router.resetConfig(router.config);
    const fixture = await createGroup({ name: 'Tables', url: '/tables', children });
    expect(fixture.componentInstance.open()).toBe(true);
  });

  it('should keep a group the user closed when the item object is rebuilt', async () => {
    await router.navigateByUrl('/tables/tables');
    const item = { name: 'Tables', url: '/tables', children };
    const fixture = await createGroup(item);
    expect(fixture.componentInstance.open()).toBe(true);

    fixture.nativeElement.querySelector('.nav-group-toggle').click();
    await fixture.whenStable();
    fixture.componentRef.setInput('item', { ...item });
    await fixture.whenStable();
    expect(fixture.componentInstance.open()).toBe(false);
  });

  it('should wait for the first navigation before matching', async () => {
    const fixture = await createGroup({ name: 'Home', url: '/', children });
    expect(fixture.componentInstance.open()).toBeFalsy();

    await router.navigateByUrl('/');
    await fixture.whenStable();
    expect(fixture.componentInstance.open()).toBe(true);
  });

  it('should match an item set after the first render against the current route', async () => {
    await router.navigateByUrl('/charts');
    const other = await createGroup();
    other.componentRef.setInput('item', { name: 'Tables', url: '/tables', children });
    await other.whenStable();
    expect(other.componentInstance.open()).toBeFalsy();

    await router.navigateByUrl('/tables/tables');
    const matching = await createGroup();
    matching.componentRef.setInput('item', { name: 'Tables', url: '/tables', children });
    await matching.whenStable();
    expect(matching.componentInstance.open()).toBe(true);
  });
});

@Component({
  template: '<c-sidebar-nav-group [item]="item" />',
  imports: [SidebarNavGroupComponent]
})
class RoutedGroupHostComponent {
  readonly item: INavData = { name: 'Tables', children: [{ name: 'Standard Tables', url: 'tables' }] };
}

describe('SidebarNavGroupComponent relative urls', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideRouter([
          { path: 'app', component: RoutedGroupHostComponent, children: [{ path: '**', children: [] }] },
          { path: 'org/:id', component: RoutedGroupHostComponent, children: [{ path: '**', children: [] }] }
        ]),
        SidebarNavGroupService
      ]
    });
  });

  it('should resolve a relative url of an item like its link', async () => {
    const harness = await RouterTestingHarness.create();
    await harness.navigateByUrl('/app/tables');
    const group = harness.routeDebugElement?.query(By.directive(SidebarNavGroupComponent));
    expect(group?.query(By.css('c-sidebar-nav-link a')).nativeElement.getAttribute('href')).toBe('/app/tables');
    expect(group?.componentInstance.open()).toBe(true);

    await harness.navigateByUrl('/app/charts');
    expect(group?.componentInstance.open()).toBe(false);
  });

  it('should resolve a relative url against the current params of the route', async () => {
    const harness = await RouterTestingHarness.create();
    await harness.navigateByUrl('/org/1/tables');
    const group = harness.routeDebugElement?.query(By.directive(SidebarNavGroupComponent));
    expect(group?.componentInstance.open()).toBe(true);

    await harness.navigateByUrl('/org/2/tables');
    expect(harness.routeDebugElement?.query(By.directive(SidebarNavGroupComponent))).toBe(group);
    expect(group?.componentInstance.open()).toBe(true);
  });
});

describe('SidebarNavGroupComponent without router providers', () => {
  it('should render a group without links', async () => {
    TestBed.configureTestingModule({ providers: [SidebarNavGroupService] });
    const fixture = TestBed.createComponent(SidebarNavGroupComponent);
    fixture.componentRef.setInput('item', { name: 'Info', children: [{ title: true, name: 'Title' }] });
    await fixture.whenStable();
    expect(fixture.nativeElement.querySelector('c-sidebar-nav-title')?.textContent).toBe('Title');
  });
});
