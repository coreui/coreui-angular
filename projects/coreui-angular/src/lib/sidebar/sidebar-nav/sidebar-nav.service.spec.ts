import { TestBed } from '@angular/core/testing';
import { ActivationEnd, Router, RouterModule, Routes } from '@angular/router';
import { expect } from 'vitest';

import { SidebarNavHelper } from './sidebar-nav.service';

describe('SidebarNavHelper', () => {
  let service: SidebarNavHelper;
  let router: Router;
  const routes: Routes = [
    { path: 'dashboard', redirectTo: 'home', pathMatch: 'full' },
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    { path: 'home', children: [{ path: 'stats', children: [] }] },
    { path: 'reports', children: [] }
  ];

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterModule.forRoot(routes)],
      providers: [SidebarNavHelper]
    });

    router = TestBed.inject(Router);
    service = TestBed.inject(SidebarNavHelper);
  });

  it('SidebarNavHelper should be created', () => {
    expect(service).toBeTruthy();
  });
  it('should return itemType', () => {
    expect(service.itemType({ divider: true })).toEqual('divider');
    expect(service.itemType({ title: true })).toEqual('title');
    expect(
      service.itemType({
        children: [
          {
            name: 'Dropdown',
            url: '/dashboard'
          }
        ]
      })
    ).toEqual('group');
    expect(service.itemType({ label: { variant: 'info' } })).toEqual('label');
    expect(service.itemType({})).toEqual('empty');
    expect(
      service.itemType({
        name: 'Disabled',
        url: '/dashboard',
        icon: 'icon-ban',
        attributes: { disabled: true }
      })
    ).toEqual('link');
  });

  it('should be active', () => {
    expect(service.isActive(router, { url: '' })).toBeTruthy();
    expect(service.isActive(router, { url: 'dashboard' })).toBeFalsy();
    expect(service.isActive(router, {})).toBeFalsy();
    expect(service.isActive(router, { url: null as unknown as string })).toBeFalsy();
  });

  it('should match an array url against the current route', async () => {
    await router.navigateByUrl('/home/stats');
    expect(service.isActive(router, { url: ['/home'] })).toBeTruthy();
    expect(service.isActive(router, { url: ['/home', 'stats'] })).toBeTruthy();
    expect(service.isActive(router, { url: ['/reports'] })).toBeFalsy();
  });

  it('should report the target url as active while the route activates', async () => {
    await router.navigateByUrl('/home');
    const seen: { target: boolean; previous: boolean }[] = [];
    const subscription = router.events.subscribe((event) => {
      if (event instanceof ActivationEnd) {
        seen.push({
          target: service.isActive(router, { url: '/reports' }),
          previous: service.isActive(router, { url: ['/home'] })
        });
      }
    });
    await router.navigateByUrl('/reports');
    subscription.unsubscribe();
    expect(seen).not.toHaveLength(0);
    expect(seen).toEqual(seen.map(() => ({ target: true, previous: false })));
  });

  it('item hasBadge', () => {
    expect(service.hasBadge({ badge: { text: 'badge', color: 'info' } })).toBeTruthy();
    expect(service.hasBadge({})).toBeFalsy();
  });
  it('item hasIcon', () => {
    expect(service.hasIcon({ icon: 'icon-ban' })).toBeTruthy();
    expect(service.hasIcon({})).toBeFalsy();
  });

  it('should return icon class object', () => {
    expect(service.getIconClass({ icon: 'icon-ban' })).toEqual(
      expect.objectContaining({
        'nav-icon': true,
        'icon-ban': true
      })
    );
    expect(service.getIconClass({ icon: 'icon-ban' })).toEqual(expect.objectContaining({ 'nav-icon': true }));
    expect(service.getIconClass({ icon: '' })).toEqual(expect.objectContaining({ 'nav-icon': true }));
  });
});
