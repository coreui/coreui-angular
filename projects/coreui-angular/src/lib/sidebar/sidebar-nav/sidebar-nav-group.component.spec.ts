import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';
import { SidebarNavGroupComponent } from './sidebar-nav.component';
import { SidebarModule } from '../sidebar.module';

describe('SidebarNavGroupComponent', () => {
  let component: SidebarNavGroupComponent;
  let fixture: ComponentFixture<SidebarNavGroupComponent>;
  let router: Router;
  let item: any;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes([]),
        NoopAnimationsModule,
        SidebarNavGroupComponent
      ],
      declarations: []
    })
      .compileComponents();
  }));

  beforeEach(() => {
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
    component.item = item;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
