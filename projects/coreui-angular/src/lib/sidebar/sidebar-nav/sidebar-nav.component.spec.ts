import { RouterModule } from '@angular/router';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarNavComponent } from './sidebar-nav.component';
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

    fixture.detectChanges();
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

  it('should render the tree variant', () => {
    fixture.componentRef.setInput('variant', 'tree');
    fixture.detectChanges();
    expect(fixture.nativeElement.classList.contains('sidebar-nav-tree')).toBe(true);
  });

  it('should not render the tree variant as a group item list', () => {
    fixture.componentRef.setInput('variant', 'tree');
    fixture.componentRef.setInput('groupItems', true);
    fixture.detectChanges();
    expect(fixture.nativeElement.classList.contains('sidebar-nav-tree')).toBe(false);
    expect(fixture.nativeElement.classList.contains('nav-group-items')).toBe(true);
  });

  it('should compact the whole nav', () => {
    fixture.componentRef.setInput('compact', true);
    fixture.detectChanges();
    expect(fixture.nativeElement.classList.contains('compact')).toBe(true);
  });

  it('should share openOnActive with the nav group level', () => {
    const navGroupService = fixture.debugElement.injector.get(NavGroupService);
    expect(navGroupService.openOnActive()).toBe(true);

    fixture.componentRef.setInput('openOnActive', false);
    fixture.detectChanges();
    expect(navGroupService.openOnActive()).toBe(false);
  });
});
