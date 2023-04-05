import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';

import { SidebarNavLinkComponent } from './sidebar-nav-link.component';
import { HtmlAttributesDirective } from '../../shared';

describe('SidebarNavLinkComponent', () => {
  let component: SidebarNavLinkComponent;
  let fixture: ComponentFixture<SidebarNavLinkComponent>;
  let router: Router;
  let item: any;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes([]),
        HtmlAttributesDirective,
        SidebarNavLinkComponent
      ]
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
