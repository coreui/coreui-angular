import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import {Router, Routes} from '@angular/router';

import { SidebarNavHelper } from './app-sidebar-nav.service';

describe('SidebarNavHelper', () => {
  let service: SidebarNavHelper;
  let router: RouterTestingModule;
  const routes: Routes = [
    {path: 'dashboard', redirectTo: 'home', pathMatch: 'full'},
    {path: '', redirectTo: 'dashboard', pathMatch: 'full'}
  ];

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes(routes)],
      providers: [SidebarNavHelper],
    });

    router = TestBed.inject(Router);
    service = TestBed.inject(SidebarNavHelper);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('should return itemType', () => {
    expect(service.itemType({divider: true})).toEqual('divider');
    expect(service.itemType({title: true})).toEqual('title');
    expect(service.itemType({children: []})).toEqual('dropdown');
    expect(service.itemType({label: true})).toEqual('label');
    expect(service.itemType({})).toEqual('empty');
    expect(service.itemType({
      name: 'Disabled',
      url: '/dashboard',
      icon: 'icon-ban',
      attributes: { disabled: true },
    }
    )).toEqual('link');
  });

  it('should be active', () => {
    expect(service.isActive(router, {url: ''})).toBeTrue();
    expect(service.isActive(router, {url: 'dashboard'})).toBeFalse();
  });

  it('item hasBadge', () => {
    expect(service.hasBadge({badge: {}})).toBeTruthy();
    expect(service.hasBadge({})).toBeFalsy();
  });
  it('item hasIcon', () => {
    expect(service.hasIcon({icon: 'icon-ban'})).toBeTruthy();
    expect(service.hasIcon({})).toBeFalsy();
  });

  it('should return icon class object', () => {
    expect(service.getIconClass({icon: 'icon-ban'})).toEqual(jasmine.objectContaining({ 'nav-icon': true, 'icon-ban': true}));
    expect(service.getIconClass({icon: 'icon-ban'})).toEqual(jasmine.objectContaining({ 'nav-icon': true }));
    expect(service.getIconClass({icon: ''})).toEqual(jasmine.objectContaining({ 'nav-icon': true }));
  });
});
