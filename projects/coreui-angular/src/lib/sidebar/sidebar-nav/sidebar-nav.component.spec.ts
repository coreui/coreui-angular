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
