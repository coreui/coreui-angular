import { RouterModule } from '@angular/router';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SidebarNavComponent } from './sidebar-nav.component';
import { SidebarNavHelper } from './sidebar-nav.service';
// import { SidebarNavGroupComponent } from './sidebar-nav-group.component';

describe('SidebarNavComponent', () => {
  let component: SidebarNavComponent;
  let fixture: ComponentFixture<SidebarNavComponent>;
  let navItems: any[];

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [SidebarNavComponent, RouterModule.forRoot([])],
      declarations: [],
      providers: [SidebarNavHelper]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarNavComponent);
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

  it('should have css classes', () => {
    expect(fixture.nativeElement).toHaveClass('sidebar-nav');
  });
});
