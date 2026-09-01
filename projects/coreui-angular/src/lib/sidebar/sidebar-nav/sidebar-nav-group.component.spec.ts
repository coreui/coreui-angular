import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter, Router } from '@angular/router';
import { expect } from 'vitest';
import { SidebarNavGroupComponent } from './sidebar-nav.component';
import { SidebarNavGroupService } from './sidebar-nav-group.service';

describe('SidebarNavGroupComponent', () => {
  let component: SidebarNavGroupComponent;
  let fixture: ComponentFixture<SidebarNavGroupComponent>;
  let router: Router;
  let item: any;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SidebarNavGroupComponent],
      providers: [provideRouter([]), SidebarNavGroupService]
    }).compileComponents();

    fixture = TestBed.createComponent(SidebarNavGroupComponent);
    await fixture.whenStable();

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
    fixture.componentRef.setInput('item', item);

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have css classes', () => {
    expect(fixture.nativeElement.classList.contains('nav-group')).toBe(true);
  });

  it('should collapse its nav', () => {
    const nav = fixture.nativeElement.querySelector('c-sidebar-nav');
    expect(nav.classList.contains('collapse')).toBe(true);
    expect(nav.classList.contains('show')).toBe(false);

    fixture.nativeElement.querySelector('.nav-group-toggle').click();
    fixture.detectChanges();

    expect(component.open()).toBe(true);
    expect(nav.classList.contains('collapsing')).toBe(true);
    expect(nav.style.display).toBe('block');
  });
});
