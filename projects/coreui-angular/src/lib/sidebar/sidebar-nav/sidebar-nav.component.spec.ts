import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';

import { SidebarNavComponent, SidebarNavGroupComponent } from './sidebar-nav.component';
import { SidebarNavHelper } from './sidebar-nav.service';
// import { SidebarNavGroupComponent } from './sidebar-nav-group.component';
import { SidebarNavDividerComponent } from './sidebar-nav-divider.component';
import { SidebarNavLabelComponent } from './sidebar-nav-label.component';
import { SidebarNavLinkComponent } from './sidebar-nav-link.component';
import { SidebarNavTitleComponent } from './sidebar-nav-title.component';
import { HtmlAttributesDirective, SharedModule } from '../../shared';

describe('SidebarNavComponent', () => {
  let component: SidebarNavComponent;
  let fixture: ComponentFixture<SidebarNavComponent>;
  let router: Router;
  let navItems: Array<any>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [ RouterTestingModule.withRoutes([]), SharedModule ],
      declarations: [
        SidebarNavComponent,
        SidebarNavGroupComponent,
        SidebarNavDividerComponent,
        SidebarNavLabelComponent,
        SidebarNavLinkComponent,
        SidebarNavTitleComponent,
        HtmlAttributesDirective
      ],
      providers: [ SidebarNavHelper ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarNavComponent);
    router = TestBed.inject(Router);
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
    component.navItems = navItems;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
