import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Router, Routes } from '@angular/router';

import { SidebarNavHelper } from './sidebar-nav.service';

describe('SidebarNavHelper', () => {
  let service: SidebarNavHelper;
  let router: RouterTestingModule;
  const routes: Routes = [
    { path: 'dashboard', redirectTo: 'home', pathMatch: 'full' },
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
  ];

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes(routes)],
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
    expect(service.itemType({
      children: [{
        name: 'Dropdown',
        url: '/dashboard'
      }]
    })).toEqual('group');
    expect(service.itemType({ label: { variant: 'info' } })).toEqual('label');
    expect(service.itemType({})).toEqual('empty');
    expect(service.itemType({
        name: 'Disabled',
        url: '/dashboard',
        icon: 'icon-ban',
        attributes: { disabled: true }
      }
    )).toEqual('link');
  });

  it('should be active', () => {
    expect(service.isActive(router, { url: '' })).toBeTruthy();
    expect(service.isActive(router, { url: 'dashboard' })).toBeFalsy();
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
    expect(service.getIconClass({ icon: 'icon-ban' })).toEqual(jasmine.objectContaining({
      'nav-icon': true,
      'icon-ban': true
    }));
    expect(service.getIconClass({ icon: 'icon-ban' })).toEqual(jasmine.objectContaining({ 'nav-icon': true }));
    expect(service.getIconClass({ icon: '' })).toEqual(jasmine.objectContaining({ 'nav-icon': true }));
  });
});
