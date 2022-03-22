import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';

import { SidebarNavLinkComponent } from './sidebar-nav-link.component';
import { SidebarNavLinkPipe } from './sidebar-nav-link.pipe';
import { SidebarNavBadgePipe } from './sidebar-nav-badge.pipe';
import { SidebarNavIconPipe } from './sidebar-nav-icon.pipe';
import { HtmlAttributesDirective } from '../../shared';
import { SidebarModule } from '../sidebar.module';

describe('SidebarNavLinkComponent', () => {
  let component: SidebarNavLinkComponent;
  let fixture: ComponentFixture<SidebarNavLinkComponent>;
  let router: Router;
  let item: any;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes([]), SidebarModule],
      declarations: [SidebarNavLinkComponent, HtmlAttributesDirective, SidebarNavLinkPipe, SidebarNavBadgePipe, SidebarNavIconPipe]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarNavLinkComponent);
    router = TestBed.inject(Router);
    component = fixture.componentInstance;

    item = {
      name: 'Dashboard',
      url: '/dashboard',
      icon: 'cil-speedometer',
      badge: {
        variant: 'info',
        text: 'NEW'
      }
    };
    component.item = item;

    // router.initialNavigation();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
